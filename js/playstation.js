$(function(){

    $(".hover").hover(function(){

            $(this).css("width","220px");
            $(this).css("height","160px");
        },function(){

            $(this).css("width","200px");
            $(this).css("height","150px");
        });

    $(".focusinputs").on("focus",function(){

        $(".Biggerinputs").css({"width":"+60px","height":"47px"});
        $(".bi-chat-dots-fill,.bi-person-fill,.bi-envelope-fill").removeClass("h4").addClass("h2");

    });
    
    $(".focusinputs").on("blur",function(){

        $(".Biggerinputs").css({"width":"50px","height":"40px"});
        $(".bi-chat-dots-fill,.bi-person-fill,.bi-envelope-fill").removeClass("h2").addClass("h4");
    });


    $(".btn")
    .on("mouseenter",function(e){

      var parentOffset=$(this).offset(),
        relX=e.pageX-parentOffset.left,
        relY=e.pageY-parentOffset.top;
      $(this).find("span").css({
            top:relY,
            left:relX
        });        
    })
    .on("mouseout",function(e){

      var parentOffset=$(this).offset(),
        relX=e.pageX-parentOffset.left,
        relY=e.pageY-parentOffset.top;
      $(this).find("span").css({
            top:relY,
            left:relX
        });        
    });

    $(".card").on("mouseenter",function(){
        $(this).addClass("selected").siblings().removeClass("selected");
    });
       
})
