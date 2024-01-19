let ProductImages = [
  "Slider1.jpg", "Slider2.png", "Slider3.jpg", "Slider4.jpg", "Slider5.jpg",
  "Slider6.jpg", "Slider7.jpg", "Slider8.png", "Slider9.jpg", "Slider10.jpg",
  "Slider11.jpg","Slider12.jpg","Slider13.jpg","Slider14.jpg","Slider15.jpg",
  "Slider16.jpg"
];  

let ProductName = [
  "Ogoy-Ogoy", "Spanish Bread", "Banadas", "Toasted Mamon",
  "Napoleones", "Small Piyaya", "Piyaya", "Pulceras",
  "Double Body", "Bibingka", "Hopia", "Otap",
  "Biscocho", "Hopia Dice Monggo", "Barquillos", "Egg Crackers"
];

let ProductPrice = [20,10,15,30,40,10,20,15,15,50,15,10,15,15,20,20];

for (let i = 1; i < ProductPrice.length; i++) {/*--------------generate product list & added to html--------------*/
  const ProductContainer = document.getElementById('list');
  ProductContainer.innerHTML += `
  <div>
  <img draggable="false" src="${ProductImages[i]}" alt="">
  <span><p>${ProductName[i]}</p><h4>₱${ProductPrice[i]}.00</h4></span>
  <button id="b${i}" onclick="ADD(${i})"">add</button> 
</div>
  `;
  }
let cartNo = true;
let currentvalue = localStorage.getItem('NoOfProducts');
let cart = document.getElementById('cartno');
let ProductStatus = [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];
if (currentvalue == 0) {
  
} else {
  cart.innerHTML = currentvalue;
  cart.style.scale = "1";
}
function ADD(num) {
  
  
  if (ProductStatus[num] == true) {
    localStorage.setItem(`pro${num}`,true);
    ProductStatus[num] = false;
  currentvalue++;
  localStorage.setItem(ProductName[num], num);
  cart.innerHTML = currentvalue;
  cart.style.scale = "1";
  localStorage.setItem('NoOfProducts', currentvalue);
  }
  else {
    console.log('false');
  }

  
} 
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