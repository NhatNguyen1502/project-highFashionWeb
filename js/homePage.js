// document.addEventListener('DOMContentLoaded', function () {
//     var productApi = 'http://localhost:3000/products';
//     var productContainer = document.getElementById('product');
//     var viewBtn = document.getElementById('view');
// })

function showAll() {
    var productApi = 'http://localhost:3000/products';
    var productContainer = document.getElementById('product');
    var viewBtn = document.getElementById('view');

    viewBtn.style.display = 'none'; // Ẩn nút "View All"
    productContainer.style.display = 'block';  // Hiển thị khung chứa sản phẩm
    fetch(productApi)
        .then(res => res.json())
        .then(products => {
            console.log(products);
            var html = '';
            products.forEach(element => {
                html += `
                    <div class="row mt-4 text-center">
                        <div class="col-sm-3 col-12">
                            <div class="container-image">
                                <img class="image" src="${element.img["url"]}" alt="image">
                            </div>
                            <p class="fw-bold mt-2">${element.name}</p>
                            <p class="fw-bold fs-4">${element.price}</p>
                        </div>
                        <div class="col-sm-3 col-12">
                            <img class="image" src="${element.img["url"]}" alt="image">
                            <p class="fw-bold mt-2">${element.name}</p>
                            <p class="fw-bold fs-4">${element.price}</p>
                        </div>
                        <div class="col-sm-3 col-12">
                            <img class="image" src="${element.img["url"]}" alt="image">
                            <p class="fw-bold mt-2">${element.name}</p>
                            <p class="fw-bold fs-4">${element.price}</p>
                        </div>
                        <div class="col-sm-3 col-12">
                            <img class="image" src="${element.img["url"]}" alt="image">
                            <p class="fw-bold mt-2">${element.name}</p>
                            <p class="fw-bold fs-4">${element.price}</p>
                        </div>
                    </div>`;
            });
            productContainer.innerHTML = html;
        });
}

// viewBtn.addEventListener('click', function () {
//     viewBtn.style.display = 'none'; // Ẩn nút "View All"
//     productContainer.style.display = 'block';  // Hiển thị khung chứa sản phẩm
//     fetch(productApi)
//         .then(res => res.json())
//         .then(products => {
//             console.log(products);
//             var html = '';
//             products.forEach(element => {
//                 html += `
//                     <div class="row mt-4 text-center">
//                         <div class="col-sm-3 col-12">
//                             <div class="container-image">
//                                 <img class="image" src="${element.img["url"]}" alt="image">
//                             </div>
//                             <p class="fw-bold mt-2">${element.name}</p>
//                             <p class="fw-bold fs-4">${element.price}</p>
//                         </div>
//                         <div class="col-sm-3 col-12">
//                             <img class="image" src="${element.img["url"]}" alt="image">
//                             <p class="fw-bold mt-2">${element.name}</p>
//                             <p class="fw-bold fs-4">${element.price}</p>
//                         </div>
//                         <div class="col-sm-3 col-12">
//                             <img class="image" src="${element.img["url"]}" alt="image">
//                             <p class="fw-bold mt-2">${element.name}</p>
//                             <p class="fw-bold fs-4">${element.price}</p>
//                         </div>
//                         <div class="col-sm-3 col-12">
//                             <img class="image" src="${element.img["url"]}" alt="image">
//                             <p class="fw-bold mt-2">${element.name}</p>
//                             <p class="fw-bold fs-4">${element.price}</p>
//                         </div>
//                     </div>`;
//             });
//             productContainer.innerHTML = html;
//         });
// });