
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Change slide every 6 seconds
setInterval(nextSlide, 6000);
//add to cart
function addToCart(productName, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name: productName, price: price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${productName} added to cart!`);
}


