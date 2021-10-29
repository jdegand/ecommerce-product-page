const bars = document.getElementById('bars');
const sidePanel = document.querySelector('.side-panel');
const close = document.getElementById('close');
const body = document.querySelector('body');
let slide = document.getElementById('slide');
let controls = document.querySelector('.controls');
// hamburger

bars.addEventListener('click', ()=> {
    sidePanel.classList.toggle('open');
    body.classList.toggle('bg-dark');
    slide.classList.toggle('opacity');
    controls.classList.toggle('opacity');
})

close.addEventListener('click', ()=> {
    sidePanel.classList.toggle('open');
    body.classList.toggle('bg-dark');
    slide.classList.toggle('opacity');
    controls.classList.toggle('opacity');
})

// Mobile Slider

//array of photos
const photos = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg"
];

const left = document.getElementById("left");
const right = document.getElementById("right");

//set current index
let i = 0;

//set slide src to current index
slide.src = photos[i];

right.onclick = () => {
  //when right is clicked
  i++;
  //add 1 to current index
  if (i > photos.length - 1) {
    //if current index passes last photo in array
    i = 0;
    //set index back to zero
  }
  slide.src = photos[i];
  //set slide to current index
};

left.onclick = () => {
  //when left is clicked
  i--;
  //minus 1 from current index
  if (i < 0) {
    //if current index goes below zero
    i = photos.length - 1;
    //set index to the last photo in array
  }
  slide.src = photos[i];
  //display current photo to #slide
};

// Thumbnails

let thumbnails = document.querySelectorAll('.thumbnail');
let featured = document.querySelector('.featured');
let modal = document.querySelector('.modal');
let startingIndex = 1; // for Modal Slider

let modalFeatured = document.querySelector('.modal-featured');

//let src = 'images/image-product-1.jpg';
let newPic = 'images/image-product-1.jpg';

thumbnails.forEach(thumb => thumb.addEventListener('click', ()=> {

  thumbnails.forEach(thumb => thumb.classList.remove('active'));

  thumb.classList.toggle('active');

  let desktopEqual = thumb.src.split('-thumbnail')[0];

  newPic = desktopEqual.concat('.jpg')

  /*
  using the mobile src, causes blurry images 
  
  featured.src = thumb.src;
  src = featured.src;
  modalFeatured.src = src;
  */

  featured.src = newPic;
  modalFeatured.src = newPic;

  if(modal.classList.contains('open')){
    startingIndex = modalThumbnailDiv.querySelector('.active').src.split('-product-')[2][0];
  }
  // startingIndex produces error when null

}))

// Lightbox

featured.addEventListener('click', ()=> {
  modal.classList.toggle('open');
  modalFeatured.src = newPic;
})

let modalClose = document.querySelector('.modal-close');

modalClose.addEventListener('click', ()=> {
  modal.classList.toggle('open');
})


//Modal slider

const modalLeft = document.getElementById("modal-left");
const modalRight = document.getElementById("modal-right");
const modalThumbnailDiv = document.querySelector('.modal-thumbnail-div');

modalRight.onclick = () => {

  startingIndex++;

  if(startingIndex > 4){
    startingIndex = 1;
  }

  modalFeatured.src = `images/image-product-${startingIndex}.jpg`;
};

modalLeft.onclick = () => {

  startingIndex--;
  
  if(startingIndex < 1){
    startingIndex = 4;
  }

  modalFeatured.src = `images/image-product-${startingIndex}.jpg`;
};


// Add to Cart

const plus = document.getElementById('plus');
const subtract = document.getElementById('subtract');
let quantity = document.getElementById('quantity');
let total = parseInt(quantity.innerText);
let emptyCart = document.querySelector('.empty-cart');
let cartFilled = document.querySelector('.cart-filled');
const bubble = document.querySelector('.bubble');
let quantitySpan = document.querySelector('.quantity-span');
let totalBill = document.querySelector('.bill');

plus.addEventListener('click', ()=> {
  total++;
  quantity.innerText = total;
})

subtract.addEventListener('click', ()=> {
  if(total <= 0) return total = 0;
  total--;
  quantity.innerText = total;
})

const addToCart = document.querySelector('.add-button');

addToCart.addEventListener('click', ()=> {

  bubble.innerText = total;

  let bill = (total * 125).toFixed(2);
  //console.log(bill)
  quantitySpan.innerText = total; 
  totalBill.innerText = bill;
})

const cartModal = document.querySelector('.cart-modal');

const carts = document.querySelectorAll('.cart');

carts.forEach(cart => cart.addEventListener('click', ()=> {
  
  cartModal.classList.toggle('modalOpen');

  if(total === 0) {
    emptyCart.innerText = 'Your cart is empty.'
    cartFilled.style.display = 'none';
  } else {
    emptyCart.innerText = '';
    cartFilled.style.display = 'block';
  }
}))

let trash = document.querySelector('.trash');

trash.addEventListener('click', ()=> {
  emptyCart.innerText = 'Your cart is empty';
  cartFilled.style.display = 'none';
  bubble.innerText = '0';
  total = 0;
  quantity.innerText = '0';
})


let checkoutButton = document.querySelector('.checkout-button');

checkoutButton.addEventListener('click', ()=> {
  cartFilled.innerText = 'Congratulations';
  bubble.innerText = '0';
  total = 0;
  quantity.innerText = '0';
})
