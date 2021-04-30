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
        $(".header nav").css({"box-shadow":"0px 0px 0px #0D0D0D"});  
        nav.classList.remove(scrollDown);
        nav.classList.add(scrollUp);
        
    }
    else if (currentScroll == 0) {
        $(".header nav").css({"box-shadow":"0px 0px 0px #0D0D0D"});  
        nav.classList.remove(scrollUp);
        
        return;
    }

    else if (currentScroll > lastScroll && !nav.classList.contains(scrollDown)) {
        //down
        nav.classList.remove(scrollUp);
        nav.classList.add(scrollDown);
        $(".header nav").css({"box-shadow":"0px 0px 0px #0D0D0D"});
    } else if (currentScroll < lastScroll && nav.classList.contains(scrollDown)) {
        //up
        nav.classList.remove(scrollDown);
        nav.classList.add(scrollUp);
        $(".header nav").css({"box-shadow":"0px 0px 10px #0D0D0D"});
    }
}
else{
  $(".header nav").css({"box-shadow":"0px 0px 0px #0D0D0D"});  
}
    lastScroll = currentScroll;

}); 







//scroll to Projects section

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 250, function(){  //change this number for delay (ms)

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
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
  document.querySelector(".hero__text").style.opacity = opacity;

});








var content = document.querySelector('link[rel="import"]').import;











//type writer effect on Home page



var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};










//tabs for showing grid and list view in Member Home project page


// function openView(viewName) {
//   var i;
//   var x = document.getElementsByClassName("view");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   document.getElementById(viewName).style.display = "block";
// }














// image comparison slider




function initComparisons() {
  var x, i;
  /* Find all elements with an "overlay" class: */
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    /* Once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function: */
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider, img, clicked = 0, w, h;
    /* Get the width and height of the img element */
    w = img.offsetWidth;
    h = img.offsetHeight;
    /* Set the width of the img element to 50%: */
    img.style.width = (w / 2) + "px";
    /* Create slider: */
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /* Insert slider */
    img.parentElement.insertBefore(slider, img);
    /* Position the slider in the middle: */
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    /* Execute a function when the mouse button is pressed: */
    slider.addEventListener("mousedown", slideReady);
    /* And another function when the mouse button is released: */
    window.addEventListener("mouseup", slideFinish);
    /* Or touched (for touch screens: */
    slider.addEventListener("touchstart", slideReady);
     /* And released (for touch screens: */
    window.addEventListener("touchend", slideFinish);
    function slideReady(e) {
      /* Prevent any other actions that may occur when moving over the image: */
      e.preventDefault();
      /* The slider is now clicked and ready to move: */
      clicked = 1;
      /* Execute a function when the slider is moved: */
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /* The slider is no longer clicked: */
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /* If the slider is no longer clicked, exit this function: */
      if (clicked == 0) return false;
      /* Get the cursor's x position: */
      pos = getCursorPos(e)
      /* Prevent the slider from being positioned outside the image: */
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /* Execute a function that will resize the overlay image according to the cursor: */
      slide(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = e || window.event;
      /* Get the x positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x coordinate, relative to the image: */
      x = e.pageX - a.left;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /* Resize the image: */
      img.style.width = x + "px";
      /* Position the slider: */
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
} 
































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


// $(window).scroll(function(){
//   console.log($(window).scrollTop())
// if ($(window).scrollTop() == 0)
//    $(".header nav").css({"box-shadow":"none"});
//   //  $(".header nav").css({"box-shadow":"none"});
// else
//    $(".header nav").css({"box-shadow":"0px 10px 10px black"});
//   //  nav.classList.remove(scrollDown);
//    nav.classList.add(scrollUp);
//   //  $(".header nav").css({"opacity":0});
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

 
