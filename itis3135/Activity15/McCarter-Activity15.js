$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "facultyList.json",
        dataType: "json",
        success: function(data) 
        {
            $("#faculty").html("")
            $.each(data, function()
            {
                $.each(this, function(key, value)
                {
                    $("<img>").attr("src", value.image).appendTo("#faculty"),
                    $("#faculty").append(
                        "<h2>" + value.full_name + "</h2>",
                        "<h3>" + value.department + "</h3>",
                        "<p>" + value.bio + "</p>"
                        )
                });
            });
        }
    });
});
