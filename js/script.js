// jqurey

$(document).ready(function(){
    $('butto').click(function(){
        alert("hellow");
    });


    $('#hideText').on('click',function(){
        $('#hide').hide(3000);
    });

    $('#showText').on('click',function(){
        $('#hide').show(2000);
    });
    
     
     
    $('#tet').on('click',function(){
          $('#tog').toggle();
      });


      $("#flip").click(function(){
        $("#panel").slideUp("slow");
      });





    $('#fadebtn').on('click',function(){
        $('#box1').fadeOut();
    });

    $('#fadebtn').on('click',function(){
        $('#box2').fadeOut("slow");
    });
    $('#fadebtn').on('click',function(){
        $('#box3').fadeOut(3000);
    });

    $('#collas').on('click',function(){
        $('#tex').slideUp();
    });

    $('#pra').on('click',function(){
        $('#we').slideDown();
    });

    $('#ani').on('click',function(){
        $('#box').animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });


    



});


