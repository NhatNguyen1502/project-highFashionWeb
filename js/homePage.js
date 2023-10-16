var productApi = 'http://localhost:3000/products';
var listNew = document.getElementById('newProduct');
let productsData;
fetch(productApi)
    .then(res => res.json())
    .then(products => {
        productsData = products;
        var htmls = '';
        var newArrival = products.slice(0,8);
        newArrival.forEach(e => {
            htmls += `
                <div class="col-sm-3 col-12" onclick="handleTransferToDetail(${e.id})">
                    <div class="container-image">
                        <img class="image" src="${e.img["url"]}" alt="image">
                    </div>
                    <p class="fw-bold mt-2">${e.name}</p>
                    <img src="../image/Frame 35.png" alt="image">
                    <p class="fw-bold fs-4">${e.price}</p>
                </div>`;
        })
        listNew.innerHTML = htmls;
    })

function showAll() {
    var viewBtn = document.getElementById('view');
    var productContainer = document.getElementById('newProduct');
    viewBtn.style.display = 'none'; // Ẩn nút "View All"
    // productContainer.style.display = 'block';  // Hiển thị khung chứa sản phẩm
    var html = '';
    let products = productsData.slice(8);
    products.forEach(element => {
        html += `
                <div class="col-sm-3 col-12" onclick="handleTransferToDetail(${element.id})">
                    <div class="container-image">
                        <img class="image" src="${element.img["url"]}" alt="image">
                    </div>
                    <p class="fw-bold mt-2">${element.name}</p>
                    <img src="../image/Frame 35.png" alt="image">
                    <p class="fw-bold fs-4">${element.price}</p>
                </div>
        `;
    });
    productContainer.innerHTML += html;
};

var productDetail = document.getElementById('productDetail');

function handleTransferToDetail(id) {
    window.location.href = 'http://127.0.0.1:5500/html/product_detail.html'
    window.localStorage.setItem('itemID', id);
}