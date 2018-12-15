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

//Material slider cards
// let sliderElem    = document.querySelector('.slider')
// let dotElems      = sliderElem.querySelectorAll('.slider__dot')
// let indicatorElem = sliderElem.querySelector('.slider__indicator')

let sliderElem    = document.querySelector('.slider')
let dotElems      = sliderElem.querySelectorAll('.slider__dot')
let indicatorElem = sliderElem.querySelector('.slider__indicator')

Array.prototype.forEach.call(dotElems, (dotElem) => {

  dotElem.addEventListener('click', (e) => {
    e.preventDefault();

    console.log("test")


    let currentPos = parseInt(sliderElem.getAttribute('data-pos'))
    let newPos     = parseInt(dotElem.getAttribute('data-pos'))

    let newDirection     = (newPos > currentPos ? 'right' : 'left')
    let currentDirection = (newPos < currentPos ? 'right' : 'left')

    indicatorElem.classList.remove(`slider__indicator--${ currentDirection }`)
    indicatorElem.classList.add(`slider__indicator--${ newDirection }`)
    sliderElem.setAttribute('data-pos', newPos)

  })

});

let sliderElem2    = document.querySelector('.projects__slider')
let dotElems2      = sliderElem2.querySelectorAll('.projects__slider__dot')
let indicatorElem2 = sliderElem2.querySelector('.projects__slider__indicator')

Array.prototype.forEach.call(dotElems2, (dotElem) => {

  dotElem.addEventListener('click', (e) => {
    e.preventDefault();


    let currentPos = parseInt(sliderElem2.getAttribute('data-pos'))
    let newPos     = parseInt(dotElem.getAttribute('data-pos'))

    console.log("current: " + currentPos)
    console.log("new: " + newPos)

    let newDirection     = (newPos > currentPos ? 'right' : 'left')
    let currentDirection = (newPos < currentPos ? 'right' : 'left')

    indicatorElem2.classList.remove(`projects__slider__indicator--${ currentDirection }`)
    indicatorElem2.classList.add(`projects__slider__indicator--${ newDirection }`)
    sliderElem2.setAttribute('data-pos', newPos)

  })

});



// let contactButton = '';
// $('.contact-button').mouseover(function () {
//   contactButton = this.id;
//   //console.log(contactButton);
// });


//Parallax contact button
const docStyle = document.documentElement.style
let aElem = '';
$('.contact-button').mouseover(function () {
  console.log(this.id)
  aElem = document.querySelector('#github-button');
  const boundingClientRect = aElem.getBoundingClientRect()

  aElem.onmousemove = function(e) {

    const x = e.clientX - boundingClientRect.left
    const y = e.clientY - boundingClientRect.top

    const xc = boundingClientRect.width/2
    const yc = boundingClientRect.height/2

    const dx = x - xc
    const dy = y - yc

    docStyle.setProperty('--rx', `${ dy/-1 }deg`)
    docStyle.setProperty('--ry', `${ dx/10 }deg`)

  }

  aElem.onmouseleave = function(e) {

    docStyle.setProperty('--ty', '0')
    docStyle.setProperty('--rx', '0')
    docStyle.setProperty('--ry', '0')

  }

  aElem.onmousedown = function(e) {

    docStyle.setProperty('--tz', '-25px')

  }

  document.body.onmouseup = function(e) {

    docStyle.setProperty('--tz', '-12px')
  }
});
// console.log(aElem)
const githubElem = document.getElementById('github-button')
const linkedinElem = document.getElementById('linkedin-button')
const emailElem = document.getElementById('email-button')

// $('.contact-button').mouseover(function () {
//   const test = document.getElementById(this.id);
//   parallax(test);
//   console.log(test.id)
// });

// const aElem = document.getElementById('github-button')
// parallax(aElem);

// parallax(githubElem)

// function parallax (elem) {
//   const boundingClientRect = elem.getBoundingClientRect()
//
//   elem.onmousemove = function (e) {
//
//     const x = e.clientX - boundingClientRect.left
//     const y = e.clientY - boundingClientRect.top
//
//     const xc = boundingClientRect.width / 2
//     const yc = boundingClientRect.height / 2
//
//     const dx = x - xc
//     const dy = y - yc
//
//     docStyle.setProperty('--rx', `${ dy / -1 }deg`)
//     docStyle.setProperty('--ry', `${ dx / 10 }deg`)
//
//   }
//
//   elem.onmouseleave = function (e) {
//
//     docStyle.setProperty('--ty', '0')
//     docStyle.setProperty('--rx', '0')
//     docStyle.setProperty('--ry', '0')
//
//   }
//
//   elem.onmousedown = function (e) {
//
//     docStyle.setProperty('--tz', '-25px')
//
//   }
//
//   document.body.onmouseup = function (e) {
//
//     docStyle.setProperty('--tz', '-12px')
//
//   }
// }

// const boundingClientRect = githubElem.getBoundingClientRect()
//
// githubElem.onmousemove = function (e) {
//
//   const x = e.clientX - boundingClientRect.left
//   const y = e.clientY - boundingClientRect.top
//
//   const xc = boundingClientRect.width / 2
//   const yc = boundingClientRect.height / 2
//
//   const dx = x - xc
//   const dy = y - yc
//
//   docStyle.setProperty('--rx', `${ dy / -1 }deg`)
//   docStyle.setProperty('--ry', `${ dx / 10 }deg`)
//
// }
//
// githubElem.onmouseleave = function (e) {
//
//   docStyle.setProperty('--ty', '0')
//   docStyle.setProperty('--rx', '0')
//   docStyle.setProperty('--ry', '0')
//
// }
//
// githubElem.onmousedown = function (e) {
//
//   docStyle.setProperty('--tz', '-25px')
//
// }
//
// document.body.onmouseup = function (e) {
//
//   docStyle.setProperty('--tz', '-12px')
//
// }