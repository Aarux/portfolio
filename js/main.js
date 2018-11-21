// Javascript //

// Loading Screen Animation //
$('document').ready(function() {
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 3000);
    
});

// "Safe" E-Mail with JQuery Mailtoo // 
$('a.mail').on('click', function(){
    var href = $(this).attr('href');
    $(this).attr('href', href.replace('badmail.', ''));
});

// Smooth Scroll Javascript //
// Smooth scroll  - Scroll to item 1 //
$('#nav1').click(function() {
    $('html,body').animate({
        scrollTop: $(".projects").offset().top -68},
        'slow');
});

// Smooth scroll - Scroll to item 2 //
$('#nav2').click(function() {
    $('html,body').animate({
        scrollTop: $(".about-me").offset().top -68},
        'slow');
});

// Smooth scroll - Scroll to item 3 //
$('#nav3').click(function() {
    $('html,body').animate({
        scrollTop: $(".contact-me").offset().top -68},
        'slow');
});

// Smooth scroll - Scroll to top //
$('#to-top').click(function() {
    $('html,body').animate({
        scrollTop: 0},
        'slow');
});