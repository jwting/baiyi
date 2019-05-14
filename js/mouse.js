$(function(){
  
   $(".nav > ul >li").mouseenter(function(){
        $(this).find(">ul").stop(false,false).slideDown(100);
        $(this).children("a").addClass("nav-check");
        $(this).children("a").find("span").show();
        $(this).siblings().children("a").removeClass("nav-check");
        $(this).siblings().children("a").find("span").hide();
   }).mouseleave(function(){
        $(this).find(">ul").stop(false,false).slideUp(300);
        $(this).children("a").find("span").hide();
        $(this).children("a").removeClass("nav-check");
       // $(".Nav-box > ul >li:first").children("a").addClass("navcheckcolor").removeClass("navnucheckcolor");
   });
  $(".nav > ul >li> ul > li").mouseenter(function(){
        $(this).find(">ul").stop(false,false).fadeIn(100);
        $(this).children("a").addClass("nav-twocheck");
        $(this).siblings().children("a").removeClass("nav-twocheck");
  }).mouseleave(function(){
        $(this).find(">ul").stop(false,false).fadeOut(100);
  }) 
  
  $(".colorbut").click(function(){
        if ($(this).find(">ul").css("display") == "none") {
             $(this).find(">ul").slideDown(400);   
        }else{
             $(this).find(">ul").slideUp(400);
        }
     });
  $(".colorbut>ul>li").click(function(event){
         event.stopPropagation();
         var colorname = $(this)[0].className;
         $("#colorstyle").attr({
          "href":"css/" + colorname +".css"
         });
  });
  $(".page-listbox > ul > li").click(function(){
        if ($(this).find(">ul").css("display")=="none") {
            $(this).find(">ul").slideDown(300);
            $(this).siblings().find(">ul").slideUp();
            $(this).children("a").addClass("list-onecheck");
            $(this).siblings().children("a").removeClass("list-onecheck");
            $(this).find(">ul>li:first").children("a").addClass("list-twocheck");
            $(this).find(">ul>li:first").siblings().children("a").removeClass("list-twocheck");
           // $(".content-list > ul  li   ul > li:first").find(".list-towbox").removeClass("list-townucolor").addClass("list-towchcolor");
        }else{
            $(this).find(">ul").slideUp(300);
            $(this).find(">ul>li>ul").stop(false,false).slideUp();                                      
        }
   });
    $(".page-listbox > ul > li > ul > li").click(function(e){
           var event = e || event;
           event.stopPropagation();
   });
   $(".page-listbox > ul > li > ul > li").mouseenter(function(){
            $(this).find(">ul").stop(false,false).slideDown(500);
            $(this).siblings().find(">ul").stop(false,false).slideUp(300);
            $(this).children("a").addClass("list-twocheck");
            $(this).siblings().children("a").removeClass("list-twocheck");
   }).mouseleave(function(){

   });

   $(".remember-me > .check-bg").click(function(){
      if ($(this).children("input").prop("checked")) {
         $(this).addClass("check-iocn");
      }else{
        $(this).removeClass("check-iocn");
      }
  });
  
 })
 
   