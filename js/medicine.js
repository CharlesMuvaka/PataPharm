var userSearch = document.getElementById("sea");
userSearch.innerHTML = localStorage.getItem("drugvalue");

var med = document.getElementsByClassName("search");


    for(let i=0; i<=med.length; i++){
        var medicine = userSearch.innerHTML;
        
        
        med[i].innerHTML = medicine;
    }

    console.log("med[i]]")





