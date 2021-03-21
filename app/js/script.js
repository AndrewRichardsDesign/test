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
  document.querySelector(".hero").style.opacity = opacity;

});








// I commented this line...should it be uncommented?

var content = document.querySelector('link[rel="import"]').import;











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

 
