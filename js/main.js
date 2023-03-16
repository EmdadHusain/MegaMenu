$(document).ready(function(){
    $(window).on("scroll", function(){
        if($(this).scrollTop() >53){
            $('header').addClass("sticky");
        }else{
            $('header').removeClass("sticky");
        }
    });
});