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
let saveQuantityName = [
"Ogoy-Ogoy0", "Spanish Bread1", "Banadas2", "Toasted Mamon3",
"Napoleones4", "Small Piyaya5", "Piyaya6", "Pulceras7",
"Double Body8", "Bibingka9", "Hopia10", "Otap11",
"Biscocho12", "Hopia Dice Monggo13", "Barquillos14", "Egg Crackers15"
];
let ProductPrice = [20,10,15,30,40,10,20,15,15,50,15,10,15,15,20,20];
var cartaddedProduct =  localStorage.getItem('NoOfProducts');
var newProPrice = [];
let updatedproductprice = [20,10,15,30,40,10,20,15,15,50,15,10,15,15,20,20];
let ProductQuantity = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
//                       0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5
let carpro = document.getElementById('cartaddedproducts');
let itemnum = {};
let updatedNoofProduct = null;
productValues = {};
for (let i = 0; i < ProductName.length; i++) {
productValues[i] = localStorage.getItem(ProductName[i]);
if (productValues[i] == i ) {
  console.log(productValues);
} 
}
for (let i = 0; i < ProductName.length; i++) {
if (productValues[i] == i) {
  document.getElementById('cartaddedproducts').innerHTML += `
  <li id="${i}">
  <div class="prowrapper">
  <img src="${ProductImages[i]}">
  <h5 class="proname">${ProductName[i]}</h5> 

  <div class="quantity"> 
  <button onclick="decrementQuantity(${i})">-</button>
  <h4 id="${saveQuantityName[i]}" class="qtty">${ProductQuantity[i]}</h4>
  <button onclick="incrementQuantity(${i})">+</button>

  </div>
  <input onclick="removeItem(${i})" type="button" value="X" class="removeitem">
  <h3 class="proPrice" id="${ProductName[i]}">${ProductPrice[i]}</h3>
  </div>
  </li>`;
  updatedNoofProduct++;
  newProPrice[i] = ProductPrice[i];
var sumOfArray = newProPrice.reduce(function (a, b) {
  return a + b;
}, 0);
document.getElementById('orderno').innerHTML = sumOfArray;
}
}

function incrementQuantity(inc) {
var qttyID = document.getElementById(saveQuantityName[inc]); 
ProductQuantity[inc]++;
qttyID.innerHTML =   ProductQuantity[inc];
ProductPrice[inc] = ProductPrice[inc]+updatedproductprice[inc];
console.log(ProductPrice[inc]);
localStorage.setItem('total',ProductPrice[inc]);
document.getElementById(ProductName[inc]).innerHTML = ProductPrice[inc];
newProPrice[inc] = ProductPrice[inc];
var sumOfArray = newProPrice.reduce(function (a, b) {
  return a + b;
}, 0);
document.getElementById('orderno').innerHTML = sumOfArray;
}

function decrementQuantity(dec) {
  newProPrice[dec] = ProductPrice[dec]-updatedproductprice[dec];
var sumOfArray = newProPrice.reduce(function (a, b) {
  return a + b;
}, 0);
document.getElementById('orderno').innerHTML = sumOfArray;
var qttyID = document.getElementById(saveQuantityName[dec]); 
if (ProductQuantity[dec] > 0) {
  ProductQuantity[dec]--;
  qttyID.innerHTML =   ProductQuantity[dec];
  ProductPrice[dec] = ProductPrice[dec]-updatedproductprice[dec];
  document.getElementById(ProductName[dec]).innerHTML = ProductPrice[dec];
  if (ProductPrice[dec] == 0 ) {
    removeItem(dec);
  }
 }
}
function removeItem(e) {
  newProPrice[e] = 0;
  var sumOfArray = newProPrice.reduce(function (a, b) {
    return a + b;
  }, 0);
  document.getElementById('orderno').innerHTML = sumOfArray;
var liElements = carpro.getElementsByTagName("li");
for (var i = 0; i < liElements.length; i++) {
 var liElement = liElements[i];
 if (liElement.id == e) {
  updatedNoofProduct--;
      localStorage.setItem(ProductName[e], null);
      localStorage.setItem('NoOfProducts', updatedNoofProduct);
      liElement.remove();
     break; 
 }
}}
let cartNo = true;
let currentvalue = localStorage.getItem('NoOfProducts');
let cart = document.getElementById('cartno');
let ProductStatus = [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];
function ADD(num) {
  if (ProductStatus[num] == true) {
    ProductStatus[num] = false;
    currentvalue++;
    localStorage.setItem(ProductName[num], num);
    cart.innerHTML = currentvalue;
    localStorage.setItem('NoOfProducts', currentvalue);
  }
  else {
    console.log('false');
  }
} 
function paymenttype(num) {
  switch (num) {
    case 1:
      document.getElementById('paymenttype1').style.border = "solid 0.3vw";
      document.getElementById('paymenttype2').style.border = "0";
      document.getElementById('paymenttype3').style.border = "0";
      break;
    case 2:
      document.getElementById('paymenttype1').style.border = "0";
      document.getElementById('paymenttype2').style.border = "solid 0.3vw black";
      document.getElementById('paymenttype3').style.border = "0";
      break;
    case 3:
      document.getElementById('paymenttype1').style.border = "0";
      document.getElementById('paymenttype2').style.border = "0";
      document.getElementById('paymenttype3').style.border = "solid 0.3vw black";
      break;
    default:
      break;
  }
}
function confirmorder() {
  let name = document.getElementById('name');
  let adress = document.getElementById("Adress");
  let emailPhone = document.getElementById('emailphone');
  if (name.value === "") {
    console.log('no value');
    name.placeholder = "Name Required";
    name.style.outline = ' solid 5px red';
  }
  else {
    console.log('has a value');
    name.style.outline = ' 0';
  }
  if (adress.value === "") {
    console.log('no value');
    adress.placeholder = "Name Required";
    adress.style.outline = ' solid 5px red';
  }
  else {
    console.log('has a value');
    adress.style.outline = ' 0';
  }
  if (emailPhone.value === "") {
    console.log('no value');
    emailPhone.placeholder = "Name Required";
    emailPhone.style.outline = ' solid 5px red';
  }
  else {
    console.log('has a value');
    emailPhone.style.outline = ' 0';
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