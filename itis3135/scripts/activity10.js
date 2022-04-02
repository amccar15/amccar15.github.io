$(document).ready(function() {


    // preload the image for each link
    $("#image_list a").each(function ()
    {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });
    // set up the event handlers for each link
    $("#image_list").click(function (evt) 
    {
        // get the image URL and caption for each image and animate the caption
        var imageURL = $(this).attr("href");

        $("#image").attr("src", imageURL);

        var caption = $(this).attr("title");

        $("#caption").fadeOut(3000, function()
        {
            $("#caption").text(caption).fadeIn(3000);

            $('#caption').animate({ fontSize: "2.0em"}, 2000);
        });

        $('#image').fadeOut(3000, function ()
        {
            $('#image').attr("src", imageURL).fadeIn(3000);
        })
        // cancel the default action of each link
        evt.preventDefault();
    });
    // move the focus to the first link
    $("li:first-child a").focus();
}); // end ready