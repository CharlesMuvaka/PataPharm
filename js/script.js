passValue = () =>{
    var userlocation = document.getElementById("userLocation").value;
    localStorage.setItem("inputvalue", userlocation);

    userlocation.reset();
    return false;

    
}


var userLocation = document.getElementById("location");
userLocation.innerHTML=localStorage.getItem("inputvalue");
console.log(userLocation);

var pharmacyLocation = document.getElementsByClassName("location1");
    for(let i=0; i<=pharmacyLocation.length; i++){
        var passLocation = userLocation.innerHTML;
        pharmacyLocation[i].innerHTML = passLocation + " ";
    }