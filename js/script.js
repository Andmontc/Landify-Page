const $menu = document.querySelector('.js-header-menu');
const $head = document.querySelector('.js-header');
const $landing = document.querySelector('.js-landing');
const $logo = document.querySelector('.js-logos');
const $feat = document.querySelector('.js-features');
const $client = document.querySelector('.js-clients');
const $stats = document.querySelector('.js-statistics');
const $hline = document.querySelector('.js-headline');
const $member = document.querySelector('.js-member');
const $foot = document.querySelector('.js-footer');
const sticky = $head.offsetTop;

window.onscroll = handleStickyScroll

$menu.addEventListener('click', () => {
  const header = $head.querySelector('.header__container');
  header.classList.toggle('header__active');
  $landing.classList.toggle('hidden');
  $logo.classList.toggle('hidden');
  $feat.classList.toggle('hidden');
  $stats.classList.toggle('hidden');
  $hline.classList.toggle('hidden-client');
  $client.classList.toggle('hidden-client');
  $member.classList.toggle('hidden-client');
  $foot.classList.toggle('hidden-client');
})

function handleStickyScroll () {
  if (window.pageYOffset > sticky) {
    $head.classList.add('header__sticky');
    return
  }

  $head.classList.remove('header__sticky');
}

var slideIndex = 0;
var faceIndex = 0;
showSlides();

function showSlides() {
  var i, j;
  var slides = document.getElementsByClassName("clients__slider");
  var face = document.getElementsByClassName("clients__people");
  var dots = document.getElementsByClassName("clients__dots-dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (j = 0; j < face.length; j++) {
    face[j].style.display = "none";  
  }

  slideIndex++;
  faceIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  if (faceIndex > face.length) {faceIndex = 1}     
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" on", "");
  }
  slides[slideIndex-1].style.display = "flex";
  face[faceIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " on";
  setTimeout(showSlides, 2000);
}