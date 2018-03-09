
function mySlickButtons() {

    $('.my-slick-prev').on('click', function(e) {
        $('#header-baner-js .slick-prev').trigger( "click" );
    });

    $('.my-slick-next').on('click', function(e) {
        $('#header-baner-js .slick-next').trigger( "click" );
    });
};

function showForm() {

    $('.btn-open-form-js').on('click', function(e) {

        var target = $('#form-block').offset().top-65;
        $('body,html').animate({scrollTop:target},700);
        
        setTimeout(function() {
            $('#vacancies-form').slideDown("slow");
        }, 800);
    })
}

function myGoTo() {

    let url = location.pathname;

    if(url === '/index.html') {

        $('.header .wrapp-menu a[href="/#block-2"]').click(function(e){

            e.preventDefault();
            var target = $('#block-2').offset().top-65;
            $('body,html').animate({scrollTop:target},700);
        });
    }
}

function upLoadFile() {

    $(".file-upload input[name=foto_1]").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $("#filename_1").val(filename);
    });

    $(".file-upload input[name=foto_2]").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $("#filename_2").val(filename);
    });

    $(".file-upload input[name=foto_3]").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $("#filename_3").val(filename);
    });

    $(".file-upload input[name=foto_4]").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $("#filename_4").val(filename);
    });

    $(".file-upload input[name=foto_5]").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $("#filename_5").val(filename);
    });
}

function menuButton() {

    $('#menu-icon-js').on('click', function() {

        $('#wrapp-menu').addClass("open-menu");
    });

    $('#close-icon-js').on('click', function() {

        $('#wrapp-menu').removeClass("open-menu");
    })
}

let widthWindow = $(window).width();

$(document).ready(function(){

    mySlickButtons();
    showForm();
    upLoadFile();
    menuButton();
    myGoTo();

    $('.header-baner-js').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: false,
        pauseOnHover: false,
        autoplaySpeed: 3000,
        speed: 1000,
        dots: true,
    });

    if( widthWindow < 1000 ) {

        $('.header-baner-js').slick('unslick');
    }
    if( widthWindow < 1024 ) {

        myMapCenterLat = pinMyMapLat;
        myMapCenterLng = pinMyMapLng;
    }

});

$(window).load(function(){


});

$(window).resize(function(){

    let widthWindow = $(window).width();

    if( widthWindow < 1000 ) {

        $('.header-baner-js').slick('unslick');
    }

});