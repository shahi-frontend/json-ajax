var pageCounter = 1;
var dynamicContainer = document.getElementById("dynamic");
//btn action
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-" + pageCounter + ".json");
    ourRequest.onload = function(){
    //    console.log(ourRequest.responseText);

        var ourData = JSON.parse(ourRequest.responseText);
//        console.log(ourData.products[0]);
        renderHtml(ourData);
        
    };

    //request to server
    ourRequest.send();
    pageCounter++;
    if(pageCounter > 3){
        btn.classList.add("hide");
    }
});

function renderHtml(data){
    var htmlString = "";
//    var c = data.products;
    for(i=0; i<data.length; i++){
        console.log(data[i].name);
        htmlString += "<p>" + data[i].name + " ";
        
        for (j=0; j<data[i].foods.likes.length; j++){
            htmlString += data[i].foods.likes[j];
        }
        htmlString += ".</p>";
        
    }
    dynamicContainer.insertAdjacentHTML("beforeend", htmlString);
};