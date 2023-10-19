var productDetail = document.getElementById('productDetail');
var cartsApi = 'http://localhost:3000/carts';
var testCart = document.getElementById('testCart');

fetch(productApi)
    .then(res => res.json())
    .then(products => {
        let id = window.localStorage.getItem('itemID');
        let product = products.find(item => item.id == id);

        var sizeOptionsHTML = Array.isArray(product.size) ? product.size.map(size =>
            `<option value="${size}">${size}</option>`).join('') : '';

        productDetail.innerHTML = `
    <div class="container">
        <div class="row mt-5">
            <div class="col-sm-4 col-12">
                <div class="image-container d-flex justify-content-center">
                    <img class="image1" src="${product.img["url"]}" alt="image" id="main-image">
                </div>
            </div>
            <div class="col-sm-6 col-12 heading" data-product-id="${product.id}">
                <h1 class="fw-bold">ONE LIFE GRAPHIC T-SHIRT</h1>
                <img src="../image/Frame 35.png" alt="image">
                <p class="fs-2 price">${product.price}$
                    <span class="fs-2 dis">$300</span>
                    <img src="../image/Frame 42.png" alt="image">
                </p>
                <p class="sentence">${product.description}</p>
                <hr>
                <div class="row">
                    <div class="col-sm-4 col-7">
                        <p class="sentence">Select Colors</p>
                        <form>
                            <label class="radio brown" for="brown">
                                <input type="radio" class="option" id="brown" name="option" value="brown" checked>
                            </label>
                            <label class="radio green" for="green">
                                <input type="radio" class="option" id="green" name="option" value="brown" >
                            </label>
                            <label class="radio purple" for="purple">
                                <input type="radio" class="option" id="purple" name="option" value="brown" >
                            </label>
                        </form>
                    </div>
                    <div class="col-sm-3 col-5">
                        <p class="sentence">Choose Size</p>
                        <div class="sizeOption">
                            <select name="size" id="sizeOptions">
                                <option value="empty">Select size</option>
                                ${sizeOptionsHTML};
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-2 text-center">
                        <p class="sentence qty">Quantity</p>
                        <input aria-label="quantity" class="input-qty" max="${product.stock}" min="1" name="" type="number" value="1">
                    </div> 
                </div>
                <hr>
                <div class="addCart">
                    <button type="button" class="btn btn-primary addToCart" onclick = "AddToCart()">Add to cart</button>
                </div>
            </div>
        </div>
    </div>`;
    })

function AddToCart() {
    var selectSize = document.getElementById('sizeOptions').value;
    if (selectSize == "empty") {
        alert("Please select size before adding to cart!")
    }
    else {
        fetch(cartsApi)
            .then(res => res.json())
            .then(data => {
                let carts = data;

                const userID = window.localStorage.getItem('userId');
                let productId;
                let size = '';
                let color = '';
                let quantity = '';

                // Lấy thông tin từ các phần tử HTML tương ứng trên trang
                let selectedSizeOption = document.getElementById('sizeOptions');
                size = selectedSizeOption.value;

                let selectedColorOption = document.querySelector('input[name="option"]:checked');
                color = selectedColorOption.value;

                let quantityInput = document.querySelector('.input-qty');
                quantity = quantityInput.value;

                let productElement = document.querySelector('.heading');
                productId = productElement.dataset.productId;

                let userCart = carts.find(user => user.id === userID);
                if (userCart) {
                    const newProductCart = {
                        productId: productId,
                        size: size,
                        color: color,
                        quantity: quantity
                    }
                    let arr = userCart.productsCart;
                    console.log('param', arr);
                    arr.push(newProductCart);
                    let option = {
                        method: 'PUT',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(userCart)
                    }
                    fetch(cartsApi + '/' + userID, option)
                        .then((response) => response.json())
                } else {
                    console.log('arg', carts)
                    const newCart = {
                        id: userID,
                        productsCart: [{
                            productId: productId,
                            size: size,
                            color: color,
                            quantity: quantity
                        }]
                    }

                    carts.push(newCart);
                    let option = {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(newCart)
                    }
                    fetch(cartsApi, option)
                        .then((response) => response.json())
                }
                console.log(carts);
                alert('Add to cart successful!');
            });
    }

}