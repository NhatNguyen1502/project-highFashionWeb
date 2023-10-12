var productApi = 'http://localhost:3000/products';
var listNew = document.getElementById('newProduct');
fetch(productApi)
    .then(res => res.json())
    .then(products => {
        var htmls = '';
        var newArrival = products.slice(-8);
        console.log(newArrival);
        newArrival.forEach(e => {
            htmls += `
                <div class="col-sm-3 col-12">
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
    fetch(productApi)
        .then(res => res.json())
        .then(products => {
            console.log(products);
            var html = '';
            products.forEach(element => {
                html += `
                        <div class="col-sm-3 col-12">
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
        });
}

var productDetail = document.getElementById('productDetail');
