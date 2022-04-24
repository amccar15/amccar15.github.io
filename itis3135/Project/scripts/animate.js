$(document).ready(function()
{
    function isScrolledIntoView(el)
    {
        var topDoc = $(window).scrollTop();
        var bottomDoc = topDoc + $(window).height();

        var elTop = $(el).offset().top;
        var elBottom = elTop + $(el).height();

        return ((elBottom <= bottomDoc) && (elTop >= topDoc));
    }

    $(window).scroll(function()
    {
        if(isScrolledIntoView(($('.animate'))))
        {
            $('.animate').addClass('animation');
        }
    });
});