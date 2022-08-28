// Toggle button Function for navbar
let btn = document.getElementById("menu-toggle");

// function openmenu(){
//     document.getElementById("menu").style.display="block"
// }
// function closemenu(){
//     document.getElementById("menu").style.display="none"
// }

 var clicked = false;
// function classToggle(){
//     if(clicked){
//         closemenu();
//         clicked=false;
//     }
//     else{
//         openmenu();
//         clicked= true;
//     }
// }
// toggle button end
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