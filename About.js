
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