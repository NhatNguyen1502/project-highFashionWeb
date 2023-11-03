const cartApi = 'http://localhost:3000/carts';
const orderApi = 'http://localhost:3000/orders';
const userId = localStorage.getItem('userId')
fetch(userApi)
    .then(res => res.json())
    .then(data => {
        user = data.find(e => e.id == userId);
        document.getElementById('name').value = user.userName;
        document.getElementById('phone').value = user.phone;
        document.getElementById('address').value = user.address;
    });

fetch(cartApi)
    .then(res => res.json())
    .then(data => {
        const cart = data.find(e => e.id == userId);
        let orderTable = document.querySelector('#orderTable');
        let htmls = '';
        let total = 0;
        let qrProductsData = "Name: " + $('#name').val() + "%0APhone: " + $('#phone').val() + "%0AAddress: " + $('#address').val();
        
        fetch(productApi)
            .then(res => res.json())
            .then(productsData => {
                cart.productsCart.forEach(e => {
                    let product = productsData.find(element => element.id == e.productId);
                    htmls += `
                        <tr>
                            <td><img src="${product.img.url}" alt="img" width="50px"> ${product.name}</td>
                            <td>${e.size}</td>
                            <td>${e.quantity}</td>
                            <td>$${product.price}</td>
                        </tr>`;
                    qrProductsData += `%0AName: ${product.name}; Size: ${e.size}; Quantity: ${e.quantity}; Price: $${product.price} `
                    total += parseFloat(product.price);
                    });
                    orderTable.innerHTML = htmls;
                    document.querySelector('#total').innerHTML += `$${total}`
            });
        //handle checkout
        let checkoutButton = document.querySelector('#checkout');
        checkoutButton.addEventListener('click', () => {
            let order = {
                name: document.querySelector('#name').value,
                phone: document.querySelector('#phone').value,
                address: document.querySelector('#address').value,
                userId: userId,
                products: cart.productsCart,
                total: total
            };
            document.querySelector('#checkoutBody').innerHTML = `<p class="text-bg-success fs-3 col-sm-6 text-center ms-auto me-auto">Payment success!</p>
                <div class="text-center m-5">
                <img id='barcode' src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100" alt="" title="HELLO" width="200" height="200" />
                </div>`;
            createOrder(order);
            updateCart({id:userId, productsCart: []});
            generateBarCode(qrProductsData, total);
        });
    });

function createOrder(data){
    let option ={
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data) 
    }
    fetch(orderApi,option)
        .then((response) => response.json())
}

function updateCart(data){
    const options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
    }

    fetch(`${cartApi}/${userId}`, options)
    .then(res => res.json())
}
function generateBarCode(qrProductsDatats, total) 
{
    var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + qrProductsDatats + `%0ATotal price: $${total}` + '&amp;size=50x50';
    $('#barcode').attr('src', url);
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
});

let a = [1,2,3,4];