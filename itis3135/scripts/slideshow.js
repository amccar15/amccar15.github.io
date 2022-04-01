$(document).ready(() =>
{
    $('.next').on('click', () =>
    {
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if(nextImg.length)
        {
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });

    $('.prev').on('click', () =>
    {
        var currentImg = $('.active');
        var pervImg = currentImg.prev();

        if(pervImg.length)
        {
            currentImg.removeClass('active').css('z-index', -10);
            pervImg.addClass('active').css('z-index', 10);
        }
    });
});