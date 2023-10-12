function renderCart(){
    var tbody = document.getElementById('product-body');
    
    const cartRender = JSON.parse(localStorage.getItem("cart-data"))
    console.log(cartRender)
    const htmls=cartRender.map((element)=>{
        return `
        <div class="row mt-4"> 
        <div class="col-5">
          <img src="${element.img.url}" alt="T-shirt">
        </div>
        <div class="col-4">
          <h3>${element.name}</h3>
          <p>${element.size}</p>
          <p>${element.color}</p>
          <p>${element.price}</p>
        </div>
        <div class="col-3 flex-column">
          <div class="icon-cart">
            <i class="fas fa-trash trash-icon" style="color:red"></i>
          </div>
          <div class="nut">
            <input class="plus is-form" type="button" value="+">
            <input aria-label="quantity" class="input-qty" max="Số tối đa" min="Số tối thiểu" name="" type="number" value="${element.quanlity}">
            <input class="minus is-form" type="button" value="-">
          </div>
        </div>
      </div>
      <hr>`

    }
    )
    tbody.innerHTML=htmls.toString();

}  
renderCart();



     
       
   