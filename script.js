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
    
    for(i=0; i<=data.length; i++){
        htmlString += "<p>" + data[i].products.Price + "</p>";
    }
    dynamicContainer.insertAdjacentHTML("beforeend", htmlString);
};