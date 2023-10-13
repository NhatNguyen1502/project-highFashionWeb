// Show dữ liệu
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
                <img class="mb-3" id="" src="${element.img.url}" alt="">
                <p class="mb-1">${element.name}</p>
                <span class="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <p>${element.price}</p>
            </div>
        `;
        });
        container.innerHTML = htmls;
    });

// Show lựa chọn sản phẩm
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

 // Show lựa chọn màu
var colorRadios = document.querySelectorAll('input[name="color"]');
colorRadios.forEach((radio) => {
  radio.addEventListener('change', function() {
    var selectedColor = this.value;
    fetch(productsApi)
      .then(response => response.json())
      .then((products) => {
        console.log(products);
        var container = document.getElementById('body');
        var htmls = '';
        products.filter((element) => element.img.color === selectedColor).forEach((element) => {
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
  });
});

// Show product_detail



 

 

