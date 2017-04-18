var dynamicContainer = document.getElementById("dynamic");
//btn action
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "https://shahi-frontend.github.io/api/products.json");
    ourRequest.onload = function(){
    //    console.log(ourRequest.responseText);

        var ourData = JSON.parse(ourRequest.responseText);
//        console.log(ourData.products[0]);
        renderHtml(ourData);
        
    };

    //request to server
    ourRequest.send();
});

function renderHtml(data){
    var htmlString = "";
    var c = data.products;
    for(i=0; i<c.length; i++){
        console.log(c[i].Price);
        htmlString += "<p>" + c[i].Price + "</p>";
    }
    dynamicContainer.insertAdjacentHTML("beforeend", htmlString);
};