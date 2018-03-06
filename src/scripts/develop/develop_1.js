
function mySlickButtons() {

    $('.my-slick-prev').on('click', function(e) {
        $('#header-baner-js .slick-prev').trigger( "click" );
    });

    $('.my-slick-next').on('click', function(e) {
        $('#header-baner-js .slick-next').trigger( "click" );
    });
};

$(document).ready(function(){

    mySlickButtons();

});

$(window).load(function(){

});

$(window).resize(function(){

});