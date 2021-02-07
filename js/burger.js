$(document).ready(function(){
    $(".header__burger").click(function(event) {
        $(".header__burger,.header_menu").toggleClass('active');
        $('body').toggleClass('lock');}); 
});

$(document).ready(function(){
    $('.header__list, .close, .overlay').click(function(event) {
        $('.header__burger,.header_menu').removeClass('active');
        $('body').removeClass('lock');}); 
});


$(document).ready(function(){
    $(".buttonTeams").click(function(event) {
        $(".mypop-up").toggleClass('active');
        $('body').toggleClass('lock');}); 
});


$(document).ready(function(){
    $(".button-green").click(function(event) {
        $(".popup").toggleClass('active');
        $('body').toggleClass('lock');}); 
});


