const $menu = document.querySelector('.js-header-menu');
const $head = document.querySelector('.js-header');
const $edit = document.querySelector('.js-button');
const $editButton = document.querySelector('.js-edit');
const $editText = document.querySelector('.js-text-edit');
const $landing = document.querySelector('.js-landing');
const $logo = document.querySelector('.js-logos');
const $feat = document.querySelector('.js-features');
const $client = document.querySelector('.js-clients');
const $stats = document.querySelector('.js-statistics');
const $hline = document.querySelector('.js-headline');
const $member = document.querySelector('.js-member');
const $foot = document.querySelector('.js-footer');
var $editable = document.querySelectorAll('.js-editable');
const sticky = $head.offsetTop;
let userVersion = [];
let i = 0;

var data = localStorage.getItem("edit");
data = JSON.parse(data);

$editButton.style.display="none";

if (data) {
  Array.from($editable).forEach(function(item){
    item.innerHTML = data[i];
    i++;
  })
}

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

hotkeys('ctrl+k, cmd+k', function (event, handler){
  switch (handler.key) {
    case 'ctrl+k':
      $edit.classList.toggle('hidden')
      $editButton.style.display="block";
      $editText.style.display="flex";
      Array.from($editable).forEach(function(item){
        item.style.border="dashed";
        item.contentEditable = true;
      })
      break;
    case 'cmd+k':
      $edit.classList.toggle('hidden')
      $editButton.style.display="block";
      $editText.style.display="flex";
      Array.from($editable).forEach(function(item){
        item.style.border="dashed";
        item.contentEditable = true;
      })
      break;

    default: 
      document.body.contentEditable = false;
  }
});

function editSave () {
  $edit.classList.remove('hidden')
  $editButton.style.display="none";
  $editText.style.display="none";
  Array.from($editable).forEach(function(item){
    userVersion.push(item.textContent);
    item.style.border="none";
    item.contentEditable = false;
  })

  userVersion.forEach(function(user, index) {
    localStorage.setItem("edit", JSON.stringify(userVersion));
  })
}
