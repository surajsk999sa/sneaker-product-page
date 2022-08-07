
//navbar responsive design
const menuButton = document.getElementById('menu-btn');
const closeButton = document.getElementById('close-btn');
const navItem = document.getElementById('nav-item');
 //menu button event 
 menuButton.addEventListener('click', navOpen);
 //close button event
 closeButton.addEventListener('click', navOpen);
   //navbar open close function
    function navOpen(){
      if(navItem.classList.contains('hide-nav')){
        navItem.classList.remove('hide-nav');
      }else{
        navItem.classList.add('hide-nav');
      }
    }
//cart checkout code 
const cart = document.querySelector('.main-cart');

    //show checkout function
    function showCart(){
      if(cart.classList.contains('hide-cart')){
        cart.classList.remove('hide-cart');
      }else{
        cart.classList.add('hide-cart')
      }
    }

// item add in cart code implementation  
let item = document.querySelector('.number-of-item');
let items = 0;
  // number of item add
  function addNum(){
   items++;
  item.textContent= items;
  }
  function subtractNum(){
    if(items<1){
      alert('we can not add less then one item');
    }else{
      items--;
    item.textContent= items;
    }
   
  }


//this code is for product slide and pop up design
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}

// add item to cart button 
const checkoutItem = document.querySelector('.item-cart');
  //add item function
  function itemAdd(){
    if(items>0){
      const element = document.createElement('div');
      element.classList.add('cart-item');
      
      element.innerHTML = ` <div class="item-image">
      <img style="width:100%; height: 100%; border-radius: 0.2rem;" src="images/image-product-1-thumbnail.jpg" alt="">
     </div>
     <div class="item-info">
       <p class="item-name">Fall Limited Edition Sneakers</p>
       <p class="item-quantity">$125.00 x ${items} <span class="total-price" > $${125*items} </span></p>
     </div>
     <div class="item-delete">
       <img src="images/icon-delete.svg" alt="it's items delete icon">
     </div>`;
     checkoutItem.appendChild(element);
      console.log(element);
    }else{
      alert('pleace add number of product');
    }

    //delete button
 
    
  }
