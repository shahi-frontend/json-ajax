//btn action
var btn = document.getElementById("btn");
btn.addEventListener("click")

var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "https://shahi-frontend.github.io/api/products.json");
ourRequest.onload = function(){
//    console.log(ourRequest.responseText);
    
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData.products[0])
};

//request to server
ourRequest.send();