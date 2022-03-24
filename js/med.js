


var cart1 =document.querySelector("#goodLife")
var price = document.querySelector("#price");

var cartAmount = 1000;

cart1.onclick = function(){
    
    if(price.innerHTML == 0 ){
        price.innerHTML = 1000;
    }else{
        price.innerHTML = parseInt(price.innerHTML) + cartAmount;
    }

    var table = document.querySelector("#myTable");
    var total = cartAmount;
    var chemist = document.querySelector(".card-title1").innerHTML;

    var newRow = `
        <tr>
            <td>${localStorage.getItem("drugvalue")}</td>
            <td>${cartAmount}</td>
            <td>${chemist}</td>
            <td>${total}</td>
        </tr>

    `;
    table.innerHTML += newRow;

    
}

var cart2 =document.querySelector("#trans")
var price = document.querySelector("#price");
var cartAmount = 750;

cart2.onclick = function(){
    
    if(price.innerHTML == 0 ){
        price.innerHTML = 750;
    }else{
        price.innerHTML = parseInt(price.innerHTML) + cartAmount;
    }

    var table = document.querySelector("#myTable");
    var total = cartAmount;
    var chemist = document.querySelector(".card-title2").innerHTML;

    var newRow = `
        <tr>
            <td>${localStorage.getItem("drugvalue")}</td>
            <td>${cartAmount}</td>
            <td>${chemist}</td>
            <td>${total}</td>
        </tr>

    `;
    table.innerHTML += newRow;

    
}









var place = document.getElementById("sea1");
place.innerHTML = localStorage.getItem("inputvalue");

var places = document.getElementsByClassName("search1");

for(let i=0; i<=places.length; i++){
    places[i].innerHTML = place.innerHTML;
}