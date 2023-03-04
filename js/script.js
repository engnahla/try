
var allProducts = document.querySelectorAll(".list1 li")
var content = document.querySelector("#content")
var btn = document.querySelector("#btn1")
var totalPrice = 0

 allProducts.forEach( function (item){
      item.onclick = function (){
          totalPrice += +(item.getAttribute("price"))
          content.innerHTML += item.textContent + "+"     

          if (content.innerHTML != "" ){
              btn.style.display = "block"
              btn.style.color = "blue"
              btn.style.backgroundColor = "white"
              btn.style.width = "200px"
          }
      }
 })

 btn.onclick = function (){
    document.getElementById("total").innerHTML = totalPrice
 }
