 var userLocation = document.getElementById("location");
userLocation.innerHTML=localStorage.getItem("inputvalue");
console.log(userLocation);

var passLocation = userLocation.innerHTML;
console.log(passLocation);


var pharmacyLocation = document.getElementsByClassName("location1");
    for(let i=0; i<=pharmacyLocation.length; i++){
        pharmacyLocation[i].innerHTML = passLocation + " ";
    }

medicineValue=()=>{
    var medicine = document.getElementById("form1").value;
    localStorage.setItem("drugvalue", medicine);
    return false;
}
console.log(medicine);