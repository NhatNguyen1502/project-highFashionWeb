const productsApi = 'http://localhost:3000/products';

fetch(productsApi)
    .then(response => response.json()) 
    .then((products) => {
        console.log(products);
        var container = document.getElementById('body');
        var htmls = '';
        products.forEach((element, index) => {
            if (index % 4 === 0) {
                htmls += '<div class="row">';
            }
            htmls += `
                <div class="col-sm-3">
                    <img class="mb-3" src="../image/Frame 20.png" alt="">
                    <p class="mb-1">${element.name}</p>
                    <span class="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <p>${element.price}</p>
                </div>
            `;
            if ((index + 1) % 4 === 0 || (index + 1) === products.length) {
                htmls += '</div>';
            }
        });
        container.innerHTML = htmls;
    });