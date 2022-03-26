var cartData = JSON.parse(localStorage.getItem("cart"));
// console.log(cartData)
var total = cartData.reduce(function (sum, elem, index, arr) {
    return sum + Number(elem.price);
  }, 0);

  var length = cartData.length;
  console.log(length);

  console.log(total);
  // total is Rs 16365
  //`` - template literals
  document.querySelector(
    "p"
  ).innerText = ` You have  selected ${length} items in cart and The total amount is Rs ${total}`;

cartData.map(function(elem,index){
    var box = document.createElement("div")

    var img = document.createElement("img");
    img.src = elem.image_url;

    var name = document.createElement("p");
    name.textContent = elem.name;
    
    var totalPrice = document.createElement("div")
    totalPrice.style.display = "flex";
    totalPrice.setAttribute("class","price")

    var price = document.createElement("p");
    price.innerText = elem.price;

    var sPrice = document.createElement("p");
    sPrice.innerText = elem.strikedoffprice;
    sPrice.style.textDecoration = "line-through"

    totalPrice.append(price,sPrice)
     
    var btn = document.createElement("button")
    btn.innerText = "Remove from cart"
    btn.style.width = "190px"
    btn.style.cursor = "pointer"
    btn.style.borderRadius = "5px"
    btn.style.marginBottom = "10px"
    btn.style.marginLeft = "20px"
    btn.addEventListener("click",function(){
      removeItem(elem,index);
    })
    box.append(img,name,totalPrice,btn);
    //   console.log(img,name,totalPrice,btn)
    document.querySelector("#container").append(box)
})
function removeItem(elem,index){
//    console.log(elem,index) 
   cartData.splice(index,1);
//    console.log(cartData)
localStorage.setItem("cart",JSON.stringify(cartData));
window.location.reload();
}