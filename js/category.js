const productsApi = 'http://localhost:3000/products';

fetch(productsApi)
    .then(response => response.json()) 
    .then((products) => {
        console.log(products);
        var container = document.getElementById('body');
        var htmls = '';
        products.forEach((element) => {
            htmls += `
            <div class="col-sm-3">
                <img class="mb-3" src="${element.img.url}" alt="">
                <p class="mb-1">${element.name}</p>
                <span class="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <p>${element.price}</p>
            </div>
        `;
        });
        container.innerHTML = htmls;
    });

 function filterByCategory(categoryName){
    fetch(productsApi)
    .then(response => response.json()) 
    .then((products) => {
        console.log(products);
        var container = document.getElementById('body');
        var htmls = '';
        products.filter((element)=>element.category===categoryName).forEach((element) => {
            htmls += `
            <div class="col-sm-3">
                <img class="mb-3" src="${element.img.url}" alt="">
                <p class="mb-1">${element.name}</p>
                <span class="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <p>${element.price}</p>
            </div>
        `;
        });
        container.innerHTML = htmls;
    });
 }
 function filterByCategory(categoryName) {
    fetch(productsApi)
      .then(response => response.json())
      .then((products) => {
        console.log(products);
        var container = document.getElementById('body');
        var htmls = '';
        products.filter((element) => element.category === categoryName).forEach((element) => {
          htmls += `
            <div class="col-sm-3">
              <img class="mb-3" src="${element.img.url}" alt="">
              <p class="mb-1">${element.name}</p>
              <span class="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <p>${element.price}</p>
            </div>
          `;
        });
        container.innerHTML = htmls;
      });
  }
 

