var listNew = document.getElementById('newProduct');
// let productsData;
fetch(productApi)
    .then(res => res.json())
    .then(products => {
        productsData = products;
        var htmls = '';
        var newArrival = products.slice(0, 8);
        newArrival.forEach(e => {
            if (e.status == "Enabled") {
                htmls += `
                    <div class="col-sm-3 col-12 hoverProducts" onclick="handleTransferToDetail(${e.id})">
                        <div class="container-image">
                            <img class="image" src="${e.img["url"]}" alt="image">
                        </div>
                        <p class="fw-bold mt-2">${e.name}</p>
                        <span class="star">${e.vote}</span>
                        <p class="fw-bold fs-4">${e.price}$</p>
                    </div>`;
            }
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
    products.forEach(e => {
        if (e.status == "Enabled") {
            html += `
                    <div class="col-sm-3 col-12" onclick="handleTransferToDetail(${e.id})">
                        <div class="container-image">
                            <img class="image" src="${e.img["url"]}" alt="image">
                        </div>
                        <p class="fw-bold mt-2">${e.name}</p>
                        <span class="star">${e.vote}</span>
                        <p class="fw-bold fs-4">${e.price}$</p>
                    </div>`;
        }
    });
    productContainer.innerHTML += html;
};

var productDetail = document.getElementById('productDetail');

function handleTransferToDetail(id) {
    window.location.href = 'product_detail.html';
    window.localStorage.setItem('itemID', id);
}



