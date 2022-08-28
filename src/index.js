// Toggle button Function for navbar
let btn = document.getElementById("menu-toggle");


 var clicked = false;

function closemenuv(x){
    document.getElementById(x).style.display="none"
}
function openmenuv(x){
    document.getElementById(x).style.display="block"
    
        
}

function togglecontent(x){
    if(clicked){
        closemenuv(x);
        clicked= false;
    }
    else{
        openmenuv(x);
        clicked= true;
    }
}