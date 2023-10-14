var productApi = 'http://localhost:3000/products';
var productDetail = document.getElementById('productDetail');

fetch(productApi)
    .then(res => res.json())
    .then(products => {
        let id = window.localStorage.getItem('itemID');
        let product = products.find(item => item.id == id);
        console.log(id, products)
        
        var sizeOptions = Array.isArray(product.size) ? product.size : []; // Check if product.size is an array, otherwise use an empty array

        // Generate HTML for size options if sizeOptions is an array
        var sizeOptionsHTML = Array.isArray(sizeOptions) ? sizeOptions.map(size => `<option value="${size}">${size}</option>`).join('') : '';
        productDetail.innerHTML = `
    <div class="container">
        <div class="row mt-5">
            <div class="col-sm-4 col-12">
                <div class="image-container d-flex justify-content-center">
                    <img class="image1" src="${product.img["url"]}" alt="image" id="main-image">
                </div>
            </div>
            <div class="col-sm-6 col-12 heading">
                <h1 class="fw-bold">ONE LIFE GRAPHIC T-SHIRT</h1>
                <img src="../image/Frame 35.png" alt="image">
                <p class="fs-2 price">${product.price}
                    <span class="fs-2 dis">$300</span>
                    <img src="../image/Frame 42.png" alt="image">
                </p>
                <p class="sentence">${product.description}</p>
                <hr>
                <p class="sentence">Select Colors</p>
                <div class="row">
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
                <hr>
                <p class="sentence">Choose Size</p>
                <div class="sizeOption">
                    <select name="size" id="sizeOptions">
                        <option value="">Select size</option>
                        // <option value="S">S</option>
                        // <option value="M">M</option>
                        // <option value="L">L</option>
                        // <option value="XL">XL</option>
                        ${sizeOptionsHTML};
                    </select>
                </div>
                <hr>
                <p class="sentence">Quantity</p>
                <div class="row">
                    <div class="col-sm-3">
                        <input aria-label="quantity" class="input-qty" max="Số tối đa" min="Số tối thiểu" name="" type="number" value="1">
                   </div>
                </div>
                <hr>
                <button type="button" class="btn btn-primary">Add to cart</button>
            </div>
        </div>
    </div>`;
    })