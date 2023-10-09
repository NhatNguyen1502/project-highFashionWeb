const productApi = 'http://localhost:3000/products';
const userApi = 'http://localhost:3000/users';
const tbody = document.querySelector('#tbody');
let productOption = document.getElementById("product-option");
let userOption = document.getElementById("user-option");
let usersData = [];
let productsData = [];

start();
function start() {
    // Gắn sự kiện click cho các input radio 
    productOption.addEventListener("click", handleCheckboxManagementClick);
    userOption.addEventListener("click", handleCheckboxManagementClick);
    let option = localStorage.getItem('option');
    if (option === "product") {
        getProducts(renderProductManagement);
        productOption.checked = true;
    } else {
        getUsers(renderUserManagement);
        userOption.checked = true;
    }
}

// Lấy products
function getProducts(callback) {
    fetch(productApi)
        .then((response) => response.json())
        .then(callback)
}

// Lấy Users
function getUsers(callback) {
    fetch(userApi)
        .then((response) => response.json())
        .then(callback)
}


// Định nghĩa hàm xử lý sự kiện khi click
function handleCheckboxManagementClick(event) {
    if (event.target === productOption) {
        // Xử lý khi click vào sản phẩm (Products)
        getProducts(renderProductManagement) 
    } else if (event.target === userOption) {
        // Xử lý khi click vào người dùng (Users)
        getUsers(renderUserManagement);
    }
}

// In ra các mục của quản lí sản phẩm
function renderProductManagement(products) {
    localStorage.setItem('option','product');
    productsData = products;
    document.querySelector('h1').innerHTML = 'Product Management';
    document.querySelector('.modal-content').innerHTML = `
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">New product</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="mb-3">
                <label for="pName-inp" class="col-form-label">Product name: <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="pName-inp" required>
            </div>
            <div class="mb-3">
                <label for="price-inp" class="col-form-label">Price: <span class="text-danger">*</span></label>
                <input type="number" class="form-control" id="price-inp" required>
            </div>
            <div class="mb-3">
                <label for="discountAmount-inp" class="col-form-label">Discount amount: <span class="text-danger">*</span></label>
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
                    <option selected>Brand <span class="text-danger">*</span></option>
                    <option value="zira">Zira</option>
                    <option value="gucci">Gucci</option>
                    <option value="prada">Prada</option>
                </select>
            </div>
            <div class="mb-3">
                <select class="form-select" id="category-inp" aria-label="Default select example" requird>
                    <option selected>Category <span class="text-danger">*</span></option>
                    <option value="t-shirts">T-shirts</option>
                    <option value="shorts">Shorts</option>
                    <option value="shirts">Shirts</option>
                    <option value="hoodies">hoodies</option>
                    <option value="jean">Jean</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="img1-inp" class="col-form-label">Image 1: <span class="text-danger">*</span></label>
                <input type="url" class="form-control" id="img1-inp" required>
            </div>
            <div class="mb-3">
                <label for="color1-inp" class="col-form-label">Color 1: <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="color1-inp" required>
            </div>
            <div class="mb-3">
                <label for="img2-inp" class="col-form-label">Image 2:</label>
                <input type="url" class="form-control" id="img2-inp">
            </div>
            <div class="mb-3">
                <label for="color2-inp" class="col-form-label">Color 2:</label>
                <input type="text" class="form-control" id="color2-inp">
            </div>
            <div class="mb-3">
                <label for="img3-inp" class="col-form-label">Image 3:</label>
                <input type="url" class="form-control" id="img3-inp">
            </div>
            <div class="mb-3">
                <label for="color3-inp" class="col-form-label">Color 3:</label>
                <input type="text" class="form-control" id="color3-inp">
            </div>
            <div class="mb-3">
                <label for="img4-inp" class="col-form-label">Image 4:</label>
                <input type="url" class="form-control" id="img4-inp">
            </div>
            <div class="mb-3">
                <label for="color4-inp" class="col-form-label">Color 4:</label>
                <input type="text" class="form-control" id="color4-inp">
            </div>
            <div class="mb-3">
                Size: <span class="text-danger">*</span><br>
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
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="addProduct">Add</button>
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
            <th>Status</th>
            <th>Action</th>
        </tr>`;
    let items ='';
    products.forEach((item) => {
        let id = item.id;
        items += `
                <tr class="item-id-${item.id}">
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>${item.discountAmount}</td>
                    <td>${item.stock}</td>
                    <td>${item.brand}</td>
                    <td><img src="${item.img.url}" alt="img" width="50px"></td>
                    <td>${item.status}</td>
                    <td>
                        <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#update${id}" onclick="passDataProductsBeforeUpdate(${id})">Update</button>
                        <div class="modal fade" id="update${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Update product</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="mb-3">
                                        <label for="pName-update-${item.id}" class="col-form-label">Product name: <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="pName-update-${item.id}" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="price-update-${item.id}" class="col-form-label">Price: <span class="text-danger">*</span></label>
                                        <input type="number" class="form-control" id="price-update-${item.id}" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="discountAmount-update-${item.id}" class="col-form-label">Discount amount: <span class="text-danger">*</span></label>
                                        <input type="number" class="form-control" id="discountAmount-update-${item.id}" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="stock-update-${item.id}" class="col-form-label">Stock: <span class="text-danger">*</span></label>
                                        <input type="number" class="form-control" id="stock-update-${item.id}" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="description-update-${item.id}" class="col-form-label">Description: <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="description-update-${item.id}" required>
                                    </div>
                                    <div class="mb-3">
                                        <select class="form-select" id="brand-update-${item.id}" aria-label="Default select example" required>
                                            <option selected>Brand <span class="text-danger">*</span></option>
                                            <option value="zira">Zira</option>
                                            <option value="gucci">Gucci</option>
                                            <option value="prada">Prada</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <select class="form-select" id="category-update-${item.id}" aria-label="Default select example" requird>
                                            <option selected>Category <span class="text-danger">*</span></option>
                                            <option value="t-shirts">T-shirts</option>
                                            <option value="shorts">Shorts</option>
                                            <option value="shirts">Shirts</option>
                                            <option value="hoodies">hoodies</option>
                                            <option value="jean">Jean</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="img1-update-${item.id}" class="col-form-label">Image 1: <span class="text-danger">*</span></label>
                                        <input type="url" class="form-control" id="img1-update-${item.id}" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="color1-update-${item.id}" class="col-form-label">Color 1: <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="color1-update-${item.id}" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="img2-update-${item.id}" class="col-form-label">Image 2:</label>
                                        <input type="url" class="form-control" id="img2-update-${item.id}">
                                    </div>
                                    <div class="mb-3">
                                        <label for="color2-update-${item.id}" class="col-form-label">Color 2:</label>
                                        <input type="text" class="form-control" id="color2-update-${item.id}">
                                    </div>
                                    <div class="mb-3">
                                        <label for="img3-update-${item.id}" class="col-form-label">Image 3:</label>
                                        <input type="url" class="form-control" id="img3-update-${item.id}">
                                    </div>
                                    <div class="mb-3">
                                        <label for="color3-update-${item.id}" class="col-form-label">Color 3:</label>
                                        <input type="text" class="form-control" id="color3-update-${item.id}">
                                    </div>
                                    <div class="mb-3">
                                        <label for="img4-update-${item.id}" class="col-form-label">Image 4:</label>
                                        <input type="url" class="form-control" id="img4-update-${item.id}">
                                    </div>
                                    <div class="mb-3">
                                        <label for="color4-update-${item.id}" class="col-form-label">Color 4:</label>
                                        <input type="text" class="form-control" id="color4-update-${item.id}">
                                    </div>
                                    <div class="mb-3">
                                        Size: <span class="text-danger">*</span><br>
                                        <div class="btn-group">
                                            <input type="checkbox" class="btn-check" name="size-update-${item.id}" id="S-update-${item.id}" value="S">
                                            <label class="btn btn-outline-primary" for="S-update-${item.id}">S</label>
                                        
                                            <input type="checkbox" class="btn-check" name="size-update-${item.id}" id="M-update-${item.id}" value="M">
                                            <label class="btn btn-outline-primary" for="M-update-${item.id}">M</label>
                                        
                                            <input type="checkbox" class="btn-check" name="size-update-${item.id}" id="L-update-${item.id}" value="L">
                                            <label class="btn btn-outline-primary" for="L-update-${item.id}">L</label>
                                
                                            <input type="checkbox" class="btn-check" name="size-update-${item.id}" id="XL-update-${item.id}" value="XL">
                                            <label class="btn btn-outline-primary" for="XL-update-${item.id}">XL</label>
                        
                                            <input type="checkbox" class="btn-check" name="size-update-${item.id}" id="XXL-update-${item.id}" value="XXL">
                                            <label class="btn btn-outline-primary" for="XXL-update-${item.id}">XXL</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" id="updateProduct" data-bs-dismiss="modal" onclick="checkAndHandleProductData(${id})">Accept</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            `;
    })
    tbody.innerHTML = items;
    handleCreatProduct();
}

// In ra các mục của quản lí user
function renderUserManagement(users) {
    localStorage.setItem('option','user');

    usersData = users;
    document.querySelector('h1').innerHTML = 'User Management';
    document.querySelector('.modal-content').innerHTML = `
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">New user</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
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
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="addUser" data-bs-dismiss="modal">Add</button>
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
    users.forEach((item) => {
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
    let createbtn = document.getElementById("addProduct");
    let item;
    createbtn.onclick = () => {
        let name = document.querySelector('input[id="pName-inp"]').value;
        let price = document.querySelector('input[id="price-inp"]').value;
        let discountAmount = document.querySelector('input[id="discountAmount-inp"]').value;
        let stock = document.querySelector('input[id="stock-inp"]').value;
        let description = document.querySelector('input[id="description-inp"]').value;
        let brand = document.querySelector('#brand-inp').value;
        let category = document.querySelector('#category-inp').value;
        let url = document.querySelector('#img1-inp').value;
        let color = document.querySelector('#color1-inp').value;
        let sizeItem = [];
            let checkboxes = document.querySelectorAll('input[type="checkbox"]');
            for (let i=0 ; i<checkboxes.length; i++){
                if (checkboxes[i].checked) sizeItem.push(checkboxes[i].value);
            }
        if(
            name.trim() === "" || 
            price.trim() === "" ||
            discountAmount.trim() === "" ||
            stock.trim() === "" ||
            description.trim() === "" ||
            brand.trim() === "Brand" ||
            category.trim() === "Category" ||
            url.trim() === "" ||
            color.trim() === "" ||
            sizeItem.length == 0
        ) {
            alert("Please complete all required information!");
        } else {
            item = {
                name: name,
                price: price,
                discountAmount: discountAmount,
                stock: stock,
                description: description,
                brand: brand,
                category: category,
                img: {
                    url: url,
                    color: color,
                    url2: document.querySelector('#img2-inp').value,
                    color2: document.querySelector('#color2-inp').value,
                    url3: document.querySelector('#img3-inp').value,
                    color3: document.querySelector('#color3-inp').value,
                    url4: document.querySelector('#img4-inp').value,
                    color4: document.querySelector('#color4-inp').value,
                },
                size:sizeItem,
                status: "Enabled"
            }
            document.querySelector('tbody').innerHTML += `
                <tr class="item-id-${item.id}">
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>${item.discountAmount}</td>
                    <td>${item.stock}</td>
                    <td>${item.brand}</td>
                    <td><img src="${item.img.url}" alt="img" width="50px"></td>
                    <td>${item.status}</td>
                    <td>
                        <button type="button" class="btn btn-outline-success" id="update">Update</button>
                    </td>
                </tr>
            `;
            createProduct(item);
            
            // document.querySelector('#add').modal('hide');
        }
    }
}

function passDataProductsBeforeUpdate(itemId) {
    let item = productsData.find(element => element.id ===  itemId);
    document.querySelector(`input[id="pName-update-${itemId}"]`).value = item.name;
    document.querySelector(`input[id="price-update-${itemId}"]`).value = item.price;
    document.querySelector(`input[id="discountAmount-update-${itemId}"]`).value = item.discountAmount;
    document.querySelector(`input[id="stock-update-${itemId}"]`).value = item.stock;
    document.querySelector(`input[id="description-update-${itemId}"]`).value = item.description;
    document.querySelector(`#brand-update-${itemId}`).value = item.brand;
    document.querySelector(`#category-update-${itemId}`).value = item.category;
    document.querySelector(`#img1-update-${itemId}`).value = item.img.url;
    document.querySelector(`#color1-update-${itemId}`).value = item.img.color;
    let size = document.querySelectorAll(`input[name="size-${itemId}"]`);
    
}

function checkAndHandleProductData(itemId) {
    let name = document.querySelector(`input[id="pName-update-${itemId}"]`).value;
    let price = document.querySelector(`input[id="price-update-${itemId}"]`).value;
    let discountAmount = document.querySelector(`input[id="discountAmount-update-${itemId}"]`).value;
    let stock = document.querySelector(`input[id="stock-update-${itemId}"]`).value;
    let description = document.querySelector(`input[id="description-update-${itemId}"]`).value;
    let brand = document.querySelector(`#brand-update-${itemId}`).value;
    let category = document.querySelector(`#category-update-${itemId}`).value;
    let url = document.querySelector(`#img1-update-${itemId}`).value;
    let color = document.querySelector(`#color1-update-${itemId}`).value;
    let sizeItem = [];
        let checkboxes = document.querySelectorAll(`input[name="size-update-${itemId}"]`);
        for (let i=0 ; i<checkboxes.length; i++){
            if (checkboxes[i].checked) sizeItem.push(checkboxes[i].value);
        }
    if(
        name.trim() === "" ||
        price.trim() === "" ||
        discountAmount.trim() === "" ||
        stock.trim() === "" ||
        description.trim() === "" ||
        brand.trim() === "Brand" ||
        category.trim() === "Category" ||
        url.trim() === "" ||
        color.trim() === "" ||
        sizeItem.length == 0
    ) {
        alert("Please complete all required information!");
        console.log(name.trim() === "" ,
        price.trim() === "" ,
        discountAmount.trim() === "" ,
        stock.trim() === "" ,
        description.trim() === "" ,
        brand.trim() === "Brand" ,
        category.trim() === "Category" ,
        url.trim() === "" ,
        color.trim() === "" ,
        sizeItem.length == 0)
    } else {
        product = {
            name: name,
            price: price,
            discountAmount: discountAmount,
            stock: stock,
            description: description,
            brand: brand,
            category: category,
            img: {
                url: url,
                color: color,
                url2: document.querySelector(`#img2-update-${itemId}`).value,
                color2: document.querySelector(`#color2-update-${itemId}`).value,
                url3: document.querySelector(`#img3-update-${itemId}`).value,
                color3: document.querySelector(`#color3-update-${itemId}`).value,
                url4: document.querySelector(`#img4-update-${itemId}`).value,
                color4: document.querySelector(`#color4-update-${itemId}`).value,
            },
            size:sizeItem,
            status: "Enabled",
            id: itemId
        }
        updateProduct(product);
        // document.querySelector('tbody').innerHTML += `
        //     <tr class="item-id-${item.id}">
        //         <td>${item.id}</td>
        //         <td>${item.name}</td>
        //         <td>${item.price}</td>
        //         <td>${item.discountAmount}</td>
        //         <td>${item.stock}</td>
        //         <td>${item.brand}</td>
        //         <td><img src="${item.img.url}" alt="img" width="50px"></td>
        //         <td>
        //             <button type="button" class="btn btn-outline-success" id="update">Update</button>
        //             <button type="button" class="btn btn-outline-danger" id="delete">Delete</button>
        //         </td>
        //     </tr>
        // `;
        // document.querySelector('#add').modal('hide');
    }
}

function updateProduct(data){
    let option ={
    method: 'PUT',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
    }
    fetch(productApi+`/${data.id}`,option)
    .then((response) => response.json())
}

function createProduct(data,id){
    let option ={
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }
    fetch(productApi,option)
        .then((response) => response.json())
}

function createUser(){
    let createbtn = document.getElementById("addUser");
}