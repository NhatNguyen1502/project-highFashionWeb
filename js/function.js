const newProducts = document.querySelector('#newProducts');
const productApi = 'http://localhost:3000/products'



start();
function start() {
    getProducts(renderProducts);
}

function getProducts(callback) {
    fetch(productApi)
        .then((response) => response.json())
        .then(callback)
}

function renderProducts(products) {
    const newProducts = document.querySelector('#newProducts');
    let items ='';
    console.log(products);
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