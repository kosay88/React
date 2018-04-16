$(document).ready(function(){
    $("#hide").click(function(){
        $("#hideshow").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });
});

$(document).ready(function(){
    $(".btn1").click(function(){
        $("#fadeinout").fadeOut()
    });
    $(".btn2").click(function(){
        $("#fadeinout").fadeIn();
    });
});

$(document).ready(function(){
    $("#btn1").click(function(){
        $("#append").append(" <b>Yes i am!</b>.");
    });
    $("#btn2").click(function(){
        $("#append").append("<li>Yes, it's true</li>");
    });
});

$(document).ready(function(){
    $("#Change").click(function(){
        $("#html").html("<b>Good by!</b>");
    });
});

$(document).ready(function(){
    $(".value button").click(function(){
        $("input:text").val("Welcome!");
    });
});

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideDown("slow");
    });
});
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideUp("slow");
    });
});

$(document).ready(function(){
    $("#animate").click(function(){
        $(".animate").animate({left: '1500px'});
    });
});

$(document).ready(function(){
    $("#animatebig").click(function(){
        $(".animate").animate({
            left: '250px',
            opacity: '0.5',
            height: '500px',
            width: '500px'
        });
    });
});

$(document).ready(function(){
    $("#Cool").click(function(){
        var div = $(".Cool");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
});

$(document).ready(function(){
	var size = 15;
    $("p").click(function(){
    if($(this).hasClass('KOSAY')){
    	size += 10;
        $(this).addClass('green').css('font-size', size + 'px');
       }
    });
});
