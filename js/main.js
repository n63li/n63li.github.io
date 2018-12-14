//Scroll to plugin for buttons
function scrollToElement(scrollTo) {
  $('html, body').animate({
    scrollTop: scrollTo.offset().top
  }, 625);
}

$(document).ready(function() {
  $("#experience-button").click(function() {
    scrollToElement($("#work"));
  });
});

$(document).ready(function() {
  $("#projects-button").click(function() {
    scrollToElement($("#projects"));
  });
});

$(document).ready(function() {
  $("#contact-button").click(function() {
    scrollToElement($("#contact"));
  });
});

// Animating name text
$('.ml6 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: function(el, i) {
      return 50 * i;
    }
  }).add({
  targets: '.ml6',
  opacity: 0,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 1000
});

//Arrow down disappears when scrolling down
// $(window).scroll(function(){
//   $(".arrow.bounce").toggle($(this).scrollTop() === 0);
// });

//Arrow down fades in and out on scroll
$(window).scroll(function(){
  $(".arrow.bounce").css("opacity", 1 - $(window).scrollTop() / 30);
});

let dots          = 4;
let sliderElem    = document.querySelector('.slider')
let dotElems      = sliderElem.querySelectorAll('.slider__dot')
let indicatorElem = sliderElem.querySelector('.slider__indicator')

Array.prototype.forEach.call(dotElems, (dotElem) => {

  dotElem.addEventListener('click', (e) => {
    e.preventDefault();

    let currentPos = parseInt(sliderElem.getAttribute('data-pos'))
    let newPos     = parseInt(dotElem.getAttribute('data-pos'))

    let newDirection     = (newPos > currentPos ? 'right' : 'left')
    let currentDirection = (newPos < currentPos ? 'right' : 'left')

    indicatorElem.classList.remove(`slider__indicator--${ currentDirection }`)
    indicatorElem.classList.add(`slider__indicator--${ newDirection }`)
    sliderElem.setAttribute('data-pos', newPos)

  })

})