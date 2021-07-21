//---------- Header Responsive ----------------    
$(document).ready(function(){
    $('.toggle').click(function(){
        $('ul').toggleClass('active');
    })
    })




$(document).ready(function(){
    $('.toggleB').hide(); //div con la clase toggleB se esconde con .hide

    $('.btnMore_Memoria').click(function(){
        $('.toggleB').toggle(2000);

        $('.btnMore_Memoria').html("Ver Menos");
    });
});
/*
$(document).ready(function(){
    $('.toggleM').hide();

    $('.btnMore_Balance').click(function(){
        $('.toggleM').toggle(2000);

        $('.btnMore_Balance').html("Ver Menos");

    });
});*/


$(function() {
    $(".btnMore_Balance").click(function () {
        $(".toggleB").hide(); 
    });

    $(".btnMore_Balance").toggle(function (){
        $(this).text("Ver Mas")
        .stop();
    }, function(){
        $(this).text("Ver Menos")
        .stop();
    });
});









