const $menu = document.querySelector('.js-header-menu');
const $head = document.querySelector('.js-header');
const $landing = document.querySelector('.js-landing');
const $logo = document.querySelector('.js-logos');
const $feat = document.querySelector('.js-features');
const $line = document.querySelector('.js-hr');
const $client = document.querySelector('.js-clients');
const $stats = document.querySelector('.js-statistics');
const sticky = $head.offsetTop;

window.onscroll = handleStickyScroll

$menu.addEventListener('click', () => {
  const header = $head.querySelector('.header__container');
  header.classList.toggle('header__active');
  $landing.classList.toggle('hidden');
  $logo.classList.toggle('hidden');
  $feat.classList.toggle('hidden');
  $line.classList.toggle('hidden');
  $stats.classList.toggle('hidden');
  $client.classList.toggle('hidden-client');
})

function handleStickyScroll () {
  if (window.pageYOffset > sticky) {
    $head.classList.add('header__sticky');
    return
  }

  $head.classList.remove('header__sticky');
}
