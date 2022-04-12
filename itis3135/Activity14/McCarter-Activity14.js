$(document).ready(function() {
	$("#nav_list li").click(function(){
        $.ajax({
            url:"json_files/" + $(this).children("a").attr("title") + ".json",
            dataType:"json",
            success: function(data)
            {
                $.each(data, function()
                {
                    $.each(this, function(key, value)
                    {
                        $("main h2").html(value.month),
                        $("main h1").html(value.title),
                        $("main h3").html(value.speaker),
                        $("main img").attr("src", value.image),
                        $("main p").html(value.text)
                    })
                })
            }
        });
    });
}); // end ready