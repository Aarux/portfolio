///////////////////
//////////////////
// JavaScript< //
////////////////

///////////////////////////////////////
// Loading Screen Animation Script ///
$("document").ready(function() {
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 3000);
    
});

////////////////////////////////
// Smooth Scroll Javascript ///
// Smooth scroll  - Scroll to Item 1 //
$("#nav1").click(function() {
    $('html,body').animate({
        scrollTop: $(".projects").offset().top -68},
        'slow');
});

////////////////////////////////////////
// Smooth scroll - Scroll to Item 2 ///
$("#nav2").click(function() {
    $('html,body').animate({
        scrollTop: $(".about-me").offset().top -68},
        'slow');
});

////////////////////////////////////////
// Smooth scroll - Scroll to Item 3 ///
$("#nav3").click(function() {
    $('html,body').animate({
        scrollTop: $(".contact-me").offset().top -68},
        'slow');
});

//////////////////////////////////////////
// Smooth scroll - Scroll Back to Top ///
$("#to-top").click(function() {
    $('html,body').animate({
        scrollTop: 0},
        'slow');
});

////////////////////////////////////////
/// End of Document ///////////////////
//////////////////////////////////////