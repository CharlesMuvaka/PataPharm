

var grandTotal = document.querySelector("#grandTotal");
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
    var total1 = cartAmount;
    var chemist1 = document.querySelector(".card-title1").innerHTML;

    var newRow = `
        <tr>
            <td>${localStorage.getItem("drugvalue")}</td>
            <td>${cartAmount}</td>
            <td>${chemist1}</td>
            <td>${total1}</td>
        </tr>

    `;
    table.innerHTML += newRow;
    var gTotal = price.innerHTML;
    grandTotal.innerHTML = gTotal;

    
}

var cart2 =document.querySelector("#trans")
var price = document.querySelector("#price");
var cartAmount1 = 750;

cart2.onclick = function(){
    
    if(price.innerHTML == 0 ){
        price.innerHTML = 750;
    }else{
        price.innerHTML = parseInt(price.innerHTML) + cartAmount1;
    }

    var table = document.querySelector("#myTable");
    var total = cartAmount1;
    var chemist = document.querySelector(".card-title2").innerHTML;

    var newRow = `
        <tr>
            <td>${localStorage.getItem("drugvalue")}</td>
            <td>${cartAmount1}</td>
            <td>${chemist}</td>
            <td>${total}</td>
        </tr>

    `;
    table.innerHTML += newRow; 
    var gTotal = price.innerHTML;
    grandTotal.innerHTML = gTotal;  
}

var cart3 =document.querySelector("#kam")
var price = document.querySelector("#price");
var cartAmount2 = 800 ;

cart3.onclick = function(){
    if(price.innerHTML == 0){
        price.innerHTML = cartAmount2 ;

    }else{
        price.innerHTML = parseInt(price.innerHTML) + cartAmount2;
    }

    var table = document.querySelector("#myTable");
    var total2 = cartAmount2;
    var chemist2 = document.querySelector(".card-title3").innerHTML;

    var newRow = `
        <tr>
            <td>${localStorage.getItem("drugvalue")}</td>
            <td>${cartAmount2}</td>
            <td>${chemist2}</td>
            <td>${total2}</td>
        </tr>

    `;
    table.innerHTML += newRow;
    var gTotal = price.innerHTML;
    grandTotal.innerHTML = gTotal; 
};

var cart4 =document.querySelector("#lemu")
var price = document.querySelector("#price");
var cartAmount4 = 520;

cart4.onclick = function(){
    if(price.innerHTML == 0){
        price.innerHTML = cartAmount4 ;

    }else{
        price.innerHTML = parseInt(price.innerHTML) + cartAmount4;
    }

    var table = document.querySelector("#myTable");
    var total4 = cartAmount4;
    var chemist4 = document.querySelector(".card-title4").innerHTML;

    var newRow = `
        <tr>
            <td>${localStorage.getItem("drugvalue")}</td>
            <td>${cartAmount4}</td>
            <td>${chemist4}</td>
            <td>${total4}</td>
        </tr>

    `;
    table.innerHTML += newRow; 
    var gTotal = price.innerHTML;
    grandTotal.innerHTML = gTotal;
};
var cart5 =document.querySelector("#harl")
var price = document.querySelector("#price");
var cartAmount5 = 680;

cart5.onclick = function(){
    if(price.innerHTML == 0){
        price.innerHTML = cartAmount5 ;

    }else{
        price.innerHTML = parseInt(price.innerHTML) + cartAmount5;
    }

    var table = document.querySelector("#myTable");
    var total5 = cartAmount5;
    var chemist5 = document.querySelector(".card-title5").innerHTML;

    var newRow = `
        <tr>
            <td>${localStorage.getItem("drugvalue")}</td>
            <td>${cartAmount5}</td>
            <td>${chemist5}</td>
            <td>${total5}</td>
        </tr>

    `;
    table.innerHTML += newRow;
    var gTotal = price.innerHTML;
    grandTotal.innerHTML = gTotal; 
};

var cart7 =document.querySelector("#malibu")
var price = document.querySelector("#price");
var cartAmount7 = 750;

cart7.onclick = function(){
    if(price.innerHTML == 0){
        price.innerHTML = cartAmount7 ;

    }else{
        price.innerHTML = parseInt(price.innerHTML) + cartAmount7;
    }

    var table = document.querySelector("#myTable");
    var total7 = cartAmount7;
    var chemist7 = document.querySelector(".card-title7").innerHTML;

    var newRow = `
        <tr>
            <td>${localStorage.getItem("drugvalue")}</td>
            <td>${cartAmount7}</td>
            <td>${chemist7}</td>
            <td>${total7}</td>
        </tr>

    `;
    table.innerHTML += newRow;
    var gTotal = price.innerHTML;
    grandTotal.innerHTML = gTotal; 
};
var cart8 =document.querySelector("#thorn")
var price = document.querySelector("#price");
var cartAmount8 = 660;

cart8.onclick = function(){
    if(price.innerHTML == 0){
        price.innerHTML = cartAmount8 ;

    }else{
        price.innerHTML = parseInt(price.innerHTML) + cartAmount8;
    }

    var table = document.querySelector("#myTable");
    var total8 = cartAmount8;
    var chemist8 = document.querySelector(".card-title8").innerHTML;

    var newRow = `
        <tr>
            <td>${localStorage.getItem("drugvalue")}</td>
            <td>${cartAmount8}</td>
            <td>${chemist8}</td>
            <td>${total8}</td>
        </tr>

    `;
    table.innerHTML += newRow;
    var gTotal = price.innerHTML;
    grandTotal.innerHTML = gTotal; 
};

var cart9 =document.querySelector("#penta")
var price = document.querySelector("#price");
var cartAmount9 =  710;

cart9.onclick = function(){
    if(price.innerHTML == 0){
        price.innerHTML = cartAmount9 ;

    }else{
        price.innerHTML = parseInt(price.innerHTML) + cartAmount9;
    }

    var table = document.querySelector("#myTable");
    var total9 = cartAmount9;
    var chemist9 = document.querySelector(".card-title9").innerHTML;

    var newRow = `
        <tr>
            <td>${localStorage.getItem("drugvalue")}</td>
            <td>${cartAmount9}</td>
            <td>${chemist9}</td>
            <td>${total9}</td>
        </tr>

    `;
    table.innerHTML += newRow;
    var gTotal = price.innerHTML;
    grandTotal.innerHTML = gTotal; 
};

var cart10 =document.querySelector("#ripple")
var price = document.querySelector("#price");
var cartAmount10 = 755;

cart10.onclick = function(){
    if(price.innerHTML == 0){
        price.innerHTML = cartAmount10 ;

    }else{
        price.innerHTML = parseInt(price.innerHTML) + cartAmount10;
    }

    var table = document.querySelector("#myTable");
    var total10 = cartAmount10;
    var chemist10 = document.querySelector(".card-title10").innerHTML;

    var newRow = `
        <tr>
            <td>${localStorage.getItem("drugvalue")}</td>
            <td>${cartAmount10}</td>
            <td>${chemist10}</td>
            <td>${total10}</td>
        </tr>

    `;
    table.innerHTML += newRow;
    var gTotal = price.innerHTML;
    grandTotal.innerHTML = gTotal; 
};
var cart11 =document.querySelector("#nila")
var price = document.querySelector("#price");
var cartAmount11 = 710;

cart11.onclick = function(){
    if(price.innerHTML == 0){
        price.innerHTML = cartAmount11 ;

    }else{
        price.innerHTML = parseInt(price.innerHTML) + cartAmount11;
    }

    var table = document.querySelector("#myTable");
    var total11 = cartAmount11;
    var chemist11 = document.querySelector(".card-title11").innerHTML;

    var newRow = `
        <tr>
            <td>${localStorage.getItem("drugvalue")}</td>
            <td>${cartAmount11}</td>
            <td>${chemist11}</td>
            <td>${total11}</td>
        </tr>

    `;
    table.innerHTML += newRow;
    var gTotal = price.innerHTML;
    grandTotal.innerHTML = gTotal; 
};
var cart12 =document.querySelector("#neem")
var price = document.querySelector("#price");
var cartAmount12 = 850;

cart12.onclick = function(){
    if(price.innerHTML == 0){
        price.innerHTML = cartAmount12 ;

    }else{
        price.innerHTML = parseInt(price.innerHTML) + cartAmount12;
    }

    var table = document.querySelector("#myTable");
    var total12 = cartAmount12;
    var chemist12 = document.querySelector(".card-title12").innerHTML;

    var newRow = `
        <tr>
            <td>${localStorage.getItem("drugvalue")}</td>
            <td>${cartAmount12}</td>
            <td>${chemist12}</td>
            <td>${total12}</td>
        </tr>

    `;
    table.innerHTML += newRow;
    var gTotal = price.innerHTML;
    grandTotal.innerHTML = gTotal; 
};



var btnConfirm = document.querySelector("#confirm");



btnConfirm.onclick = function(){
    var firstName = document.querySelector("#firstName").value;
    var lastName = document.querySelector("#lastName").value;
    var outputName = document.querySelector("#outputName");
    var form7 = document.querySelector("#form7");

    outputName.innerHTML = firstName + " " + lastName;
    

}
var oyole = document.querySelector("#oyole");

oyole.onclick = function(){
    var disabledTextInput = document.querySelector("#disabledTextInput");
    disabledTextInput.value = localStorage.getItem("inputvalue");
    
}








var place = document.getElementById("sea1");
place.innerHTML = localStorage.getItem("inputvalue");

var places = document.getElementsByClassName("search1");

for(let i=0; i<=places.length; i++){
    places[i].innerHTML = place.innerHTML;
}