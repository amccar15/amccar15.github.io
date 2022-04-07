$(document).ready(function() {
    $("#slider").bxSlider({
        randomStart: true,
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
        captions: true,
        speed: 300,
        pagerSelector: ('#id_pager'),
        pagerType: 'short'
    });
});