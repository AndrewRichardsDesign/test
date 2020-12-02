// const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const nav = document.querySelector('.header nav');
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
// const header = document.querySelector('.header');
// const overlay = document.querySelector('.overlay'); 
// const fadeElems = document.querySelectorAll('.has-fade');



window.addEventListener("scroll", ()=> {
    const currentScroll = window.pageYOffset;
    const windowWidth = window.document.documentElement.clientWidth;
    console.log(currentScroll, windowWidth)
    const scrollThreshold = windowWidth > 640 ? 35 : 20;

    if (currentScroll > scrollThreshold) {

    if (currentScroll < 0) {
        nav.classList.remove(scrollDown);
        nav.classList.add(scrollUp);
    }
    else if (currentScroll == 0) {
        nav.classList.remove(scrollUp);
        return;
    }

    else if (currentScroll > lastScroll && !nav.classList.contains(scrollDown)) {
        //down
        nav.classList.remove(scrollUp);
        nav.classList.add(scrollDown);
    } else if (currentScroll < lastScroll && nav.classList.contains(scrollDown)) {
        //up
        nav.classList.remove(scrollDown);
        nav.classList.add(scrollUp);
    }
}
    lastScroll = currentScroll;

}); 





//fade header
const checkpoint = 350;
const checkpoint2 = 300;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector(".hero").style.opacity = opacity;

});


//if I want the description (p) to fade independent of the h1. I need to add h1 to .hero in line 59.
//   window.addEventListener("scroll", () => {
//     const currentScroll = window.pageYOffset;
//     if (currentScroll <= checkpoint2) {
//       opacity = 1 - currentScroll / checkpoint2;
//     } else {
//       opacity = 0;
//     }
//     document.querySelector(".hero p").style.opacity = opacity;

// });





//start with no shadow on top nav, scroll down and shadow appears
// if($(window).scrollTop() > 0 ){
//   $('.header nav').css({'box-shadow': '0px 0px 10px 0px black'});
// }

// $(window).scroll(function(){
// if($(window).scrollTop() > 0 ){
//   $('#myNav').css('box-shadow', '0px 0px 10px 0px black');
// } else {
//   $('#myNav').css('box-shadow', 'none');
// }
// });


// var smoothScroll = function(elementId) {
//   var MIN_PIXELS_PER_STEP = 16;
//   var MAX_SCROLL_STEPS = 30;
//   var target = document.getElementById(elementId);
//   var scrollContainer = target;
//   do {
//       scrollContainer = scrollContainer.parentNode;
//       if (!scrollContainer) return;
//       scrollContainer.scrollTop += 1;
//   } while (scrollContainer.scrollTop == 0);

//   var targetY = 0;
//   do {
//       if (target == scrollContainer) break;
//       targetY += target.offsetTop;
//   } while (target = target.offsetParent);

//   var pixelsPerStep = Math.max(MIN_PIXELS_PER_STEP,
//                                (targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS);

//   var stepFunc = function() {
//       scrollContainer.scrollTop =
//           Math.min(targetY, pixelsPerStep + scrollContainer.scrollTop);

//       if (scrollContainer.scrollTop >= targetY) {
//           return;
//       }

//       window.requestAnimationFrame(stepFunc);
//   };

//   window.requestAnimationFrame(stepFunc);
// }












// btnHamburger.addEventListener('click', function(){
//     console.log('click hamburger');

//     if(header.classList.contains('open')){ // close hamburger menu
//         body.classList.remove('noscroll');
//         header.classList.remove('open');
//         fadeElems.forEach(function(element){
//             element.classList.remove('fade-in'); 
//             element.classList.add('fade-out'); 
//          });
         
//     }

//     else {  // open hamburger menu 
//         body.classList.add('noscroll');
//         header.classList.add('open');
//         fadeElems.forEach(function(element){
//             element.classList.remove('fade-out'); 
//             element.classList.add('fade-in'); 
//         })   
//     }
// });

 
