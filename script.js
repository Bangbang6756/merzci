function mobilenav(condition) {
    switch (condition) {
        case 1:
            document.getElementById('mobile-nav').style.visibility = "visible";
            document.getElementById('mobile-nav-button').style.transform = "rotate(90deg)";
            break;
        case 2:
            document.getElementById('mobile-nav').style.visibility = "hidden";
            document.getElementById('mobile-nav-button').style.transform = "rotate(0deg)";
            break;
        default:
            break;
    }
    if (condition = 1) {
        
    } 
}
let moblieHeader = document.getElementById("mheaderr");

function mheader(num) {
    switch (num) {
        case 1:
            moblieHeader.style.visibility = 'visible';
            break;
        case 0:
            moblieHeader.style.visibility = 'hidden';
            break;
        default:
            break;
    }
    
}
let gt1 = document.getElementById('gt1');
let gt2 = document.getElementById('gt2');
let boxwrapper1 = document.getElementById('boxwrapper1');
let boxwrapper2 = document.getElementById('boxwrapper2');
let boxwrapper3 = document.getElementById('boxwrapper3');
var screenWidth = screen.width;
console.log("Screen Width: " + screenWidth);


window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= 1000) {
        gt1.style.fontSize = "3vw";
        gt1.style.bottom= "70%";
        gt1.style.visibility = "visible";
        gt2.style.fontSize = "1vw";
        gt2.style.bottom= "60%";
        gt2.style.visibility = "visible";

        
        boxwrapper1.style.transition = "ease-in-out 1s  0.3s";
        boxwrapper2.style.transition = "ease-in-out 1s  0.3s";
        boxwrapper3.style.transition = "ease-in-out 1s  0.3s";

        boxwrapper1.style.transform ="translateY(0%)";
        boxwrapper2.style.transform ='translateY(0%)';
        boxwrapper3.style.transform ='translateY(0%)';

        boxwrapper1.style.background = "#ff0059";
        boxwrapper2.style.background = "#ffcb00";
        boxwrapper3.style.background = "#00cf68";
    } else {
        gt1.style.fontSize = "1.5vw";
        gt1.style.bottom= "0%";
        gt1.style.visibility = "hidden";
        gt2.style.fontSize = "0.1vw";
        gt2.style.bottom= "0%";
        gt2.style.visibility = "hidden";
        gt2.style.transition = "ease 1.3s";

        boxwrapper1.style.transition = "ease-in-out 0.1s";
        boxwrapper2.style.transition = "ease-in-out 0.1s";
        boxwrapper3.style.transition = "ease-in-out 0.1s";

        boxwrapper1.style.transform ="translateY(70%)";
        boxwrapper2.style.transform ='translateY(50%)';
        boxwrapper3.style.transform ='translateY(70%)';

        boxwrapper1.style.background = "transparent";
        boxwrapper2.style.background = "transparent";
        boxwrapper3.style.background = "transparent";
    }
    
  });