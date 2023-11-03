const productApi = 'http://localhost:3000/products';
const userApi = 'http://localhost:3000/users';
let usersData = [];
let productsData = [];
fetch(userApi)
    .then(res => res.json())  
    .then(data => {usersData = data});

const searchInput = document.getElementById('search-inp');
const searchButton = document.getElementById('button-addon2');

// Xử lý sự kiện khi nhấn nút tìm kiếm
searchButton.addEventListener('click', function() {
    localStorage.setItem('searching', searchInput.value);
    window.location.href = 'category.html';
    // Gọi hàm checkSearching để hiển thị sản phẩm tìm kiếm
});
function handleUserButton(){
    let isLogin = window.localStorage.getItem('userId');
    if(isLogin) window.location.href = 'userInformation.html';
}
function checkLogIn(){
    let userEmail = document.querySelector('input[id="userEmail-inp"]').value;
    let password = document.querySelector('input[id="pword-inp"]').value;
    let user = usersData.find(item => item.email === userEmail)
    if(user){
        if (user.status === "Unactive") {
            alert("Your account is locked!")
        } else if(password === user.password) {
                window.localStorage.setItem('userId',user.id)
                if(user.role === "admin") {
                    window.location.href = 'html/admin.html'
                } else $('#modal1').modal('hide');
            } else alert('Wrong password!'); 
        } else alert('User is not exist!')
}
function checkSignUp(){
    let user;
    let name = document.querySelector('input[id="name-reg"]').value;
    let email = document.querySelector('input[id="email-reg"]').value;
    let emailConfirm = document.querySelector('input[id="email-confirm"]').value;
    let password = document.querySelector('input[id="pword-reg"]').value;
    let passwordConfirm = document.querySelector('input[id="pword-confirm"]').value;
    let address = document.querySelector('input[id="address-reg"]').value;
    let phone = document.querySelector('input[id="phone-reg"]').value;
    if(
        name.trim() === "" || 
        email.trim() === "" ||
        emailConfirm.trim() === "" ||
        password.trim() === "" ||
        passwordConfirm.trim() === "" ||
        address.trim() === "" ||
        phone.trim() === ""
    ) {
        alert("Please complete all required information!");
    } else if(usersData.find(item => item.email === email)){
        alert('Email is exist!');
    } else if(email != emailConfirm) {
        alert('Email does not match!');
    } else if(password != passwordConfirm) {
        alert('Password does not match');
    } else {
        user = {
            userName: name,
            email: email,
            address: address,
            phone: phone,
            role: 'user',
            status: "Active",
            password: password
        }
        createUser(user);
        $('#modal1').modal('hide');
        window.localStorage.setItem('userId',usersData.length+1);
    }
}
function logOut(){
    localStorage.removeItem('userId');
    window.location.href = 'homePage.html';
}
function createUser(data){
    let option ={
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }
    fetch(userApi,option)
        .then((response) => response.json())
}
function updateUser(data){
    let option ={
    method: 'PUT',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
    }
    fetch(userApi+`/${data.id}`,option)
    .then((response) => response.json())
}

