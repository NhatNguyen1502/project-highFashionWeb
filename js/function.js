const newProducts = document.querySelector('#newProducts');
const productApi = 'http://localhost:3000/products'
const userApi = 'http://localhost:3000/users'


function getProducts(callback) {
    fetch(productApi)
        .then((response) => response.json())
        .then(callback)
}

function getUsers(callback) {
    fetch(userApi)
        .then((response) => response.json())
        .then(callback)
}

function renderProducts(products) {
    const newProducts = document.querySelector('#newProducts');
    let items ='';
    products.forEach((item) => {
        items += `
                <div class="col-sm-3 col-12 text-center">
                    <img class="image" src="${item.img.url}" alt="image">
                    <p class="fw-bold mt-2">${item.name}</p>
                    <img src="../image/Frame 35.png" alt="image">
                    <p class="fw-bold fs-4">$${item.price}</p>
                </div>
            `;
    })
    newProducts.innerHTML = items;
}

//management function
var productOption = document.getElementById("product-option");
var userOption = document.getElementById("user-option");
const tbody = document.querySelector('#tbody');
// Định nghĩa hàm xử lý sự kiện khi click
function handleCheckboxClick(event) {
    if (event.target === productOption) {
        // Xử lý khi click vào sản phẩm (Products)
        getProducts(renderProductManagement) 
    } else if (event.target === userOption) {
        // Xử lý khi click vào người dùng (Users)
        getUsers(renderUserManagement);
    }
}
// Gắn sự kiện click cho các input radio 
productOption.addEventListener("click", handleCheckboxClick);
userOption.addEventListener("click", handleCheckboxClick);

function renderProductManagement(products) {
    document.querySelector('h1').innerHTML = 'Product Management';
    document.querySelector('.modal-content').innerHTML = `
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">New product</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form>
                <div class="mb-3">
                    <label for="pName-inp" class="col-form-label">Product name: <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="pName-inp" required>
                </div>
                <div class="mb-3">
                    <label for="price-inp" class="col-form-label">Price: <span class="text-danger">*</span></label>
                    <input type="number" class="form-control" id="price-inp" required>
                </div>
                <div class="mb-3">
                    <label for="discountAmount-inp" class="col-form-label">Discount amount:</label>
                    <input type="number" class="form-control" id="discountAmount-inp" required>
                </div>
                <div class="mb-3">
                    <label for="stock-inp" class="col-form-label">Stock: <span class="text-danger">*</span></label>
                    <input type="number" class="form-control" id="stock-inp" required>
                </div>
                <div class="mb-3">
                    <label for="description-inp" class="col-form-label">Description: <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="description-inp" required>
                </div>
                <div class="mb-3">
                    <select class="form-select" id="brand-inp" aria-label="Default select example" required>
                        <option selected>Brand: <span class="text-danger">*</span></option>
                        <option value="zira">Zira</option>
                        <option value="gucci">Gucci</option>
                        <option value="prada">Prada</option>
                    </select>
                </div>
                <div class="mb-3">
                    <select class="form-select" id="category-inp" aria-label="Default select example" requird>
                        <option selected>Category: <span class="text-danger">*</span></option>
                        <option value="t-shirts">T-shirts</option>
                        <option value="shorts">Shorts</option>
                        <option value="shirts">Shirts</option>
                        <option value="hoodies">hoodies</option>
                        <option value="jean">Jean</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="img1-inp" class="col-form-label">Image 1: <span class="text-danger">*</span></label>
                    <input type="file" class="form-control" id="img1-inp" required>
                </div>
                <div class="mb-3">
                    <label for="color1-inp" class="col-form-label">Color 1: <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="color1-inp" required>
                </div>
                <div class="mb-3">
                    <label for="img2-inp" class="col-form-label">Image 2:</label>
                    <input type="file" class="form-control" id="img2-inp">
                </div>
                <div class="mb-3">
                    <label for="color2-inp" class="col-form-label">Color 2:</label>
                    <input type="text" class="form-control" id="color2-inp">
                </div>
                <div class="mb-3">
                    <label for="img3-inp" class="col-form-label">Image 3:</label>
                    <input type="file" class="form-control" id="img3-inp">
                </div>
                <div class="mb-3">
                    <label for="color3-inp" class="col-form-label">Color 3:</label>
                    <input type="text" class="form-control" id="color3-inp">
                </div>
                <div class="mb-3">
                    <label for="img4-inp" class="col-form-label">Image 4:</label>
                    <input type="file" class="form-control" id="img4-inp">
                </div>
                <div class="mb-3">
                    <label for="color4-inp" class="col-form-label">Color 4:</label>
                    <input type="text" class="form-control" id="color4-inp">
                </div>
                <div class="mb-3">
                    Size: <br>
                    <div class="btn-group">
                        <input type="checkbox" class="btn-check" id="S" value="S">
                        <label class="btn btn-outline-primary" for="S">S</label>
                    
                        <input type="checkbox" class="btn-check" id="M" value="M">
                        <label class="btn btn-outline-primary" for="M">M</label>
                    
                        <input type="checkbox" class="btn-check" id="L" value="L">
                        <label class="btn btn-outline-primary" for="L">L</label>
            
                        <input type="checkbox" class="btn-check" id="XL" value="XL">
                        <label class="btn btn-outline-primary" for="XL">XL</label>

                        <input type="checkbox" class="btn-check" id="XXL" value="XXL">
                        <label class="btn btn-outline-primary" for="XXL">XXL</label>
                    </div>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="addProduct">Add</button>
        </div>
    `;
    document.querySelector('thead').innerHTML = `
        <tr class="table-dark">
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Stock</th>
            <th>Brand</th>
            <th>Image</th>
            <th>Action</th>
        </tr>`;
    let items ='';
    products.forEach((item) => {
        items += `
                <tr class="item-id-${item.id}">
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>${item.discountAmount}</td>
                    <td>${item.stock}</td>
                    <td>${item.brand}</td>
                    <td><img src="${item.img.url}" alt="img" width="50px"></td>
                    <td>
                        <button type="button" class="btn btn-outline-success" id="update">Update</button>
                        <button type="button" class="btn btn-outline-danger" id="delete">Delete</button>
                    </td>
                </tr>
            `;
    })
    tbody.innerHTML = items;
}

function renderUserManagement(products) {
    document.querySelector('h1').innerHTML = 'User Management';
    document.querySelector('.modal-content').innerHTML = `
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">New user</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form>
                <div class="mb-3">
                    <label for="uName-inp" class="col-form-label">User name: <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="uName-inp" required>
                </div>
                <div class="mb-3">
                    <label for="email-inp" class="col-form-label">Email: <span class="text-danger">*</span></label>
                    <input type="email" class="form-control" id="email-inp" required>
                </div>
                <div class="mb-3">
                    <label for="address-inp" class="col-form-label">Address: <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="address-inp" required>
                </div>
                <div class="mb-3">
                    <label for="phone-inp" class="col-form-label">Phone: <span class="text-danger">*</span></label>
                    <input type="tel" class="form-control" id="phone-inp" required>
                </div>
                <div class="mb-3">
                    Status:
                    <div class="btn-group">
                        <input type="radio" class="btn-check" name="status" id="action" value="action">
                        <label class="btn btn-outline-primary" for="action">Action</label>
                        <input type="radio" class="btn-check" name="status" id="unaction" value="unaction">
                        <label class="btn btn-outline-primary" for="unaction">Unaction</label>
                    </div>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="addUser">Add</button>
        </div>
    `;
    document.querySelector('thead').innerHTML = `
        <tr class="table-dark">
            <th>ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
        </tr>`;
    let items ='';
    products.forEach((item) => {
        items += `
                <tr class="item-id-${item.id}">
                    <td>${item.id}</td>
                    <td>${item.userName}</td>
                    <td>${item.email}</td>
                    <td>${item.address}</td>
                    <td>${item.phone}</td>
                    <td>${item.status}</td>
                    <td>
                        <button type="button" class="btn btn-outline-success">Update</button>
                        <button type="button" class="btn btn-outline-danger">Delete</button>
                    </td>
                </tr>
            `;
    })
    tbody.innerHTML = items;
}

function handleCreatProduct(){
    
}

function createProduct(data,callback){
    var option ={
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }
    fetch(productApi,option)
        .then((response) => response.json())
        .then(callback)
}



function createUser(){

}