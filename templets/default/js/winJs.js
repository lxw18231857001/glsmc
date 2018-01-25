$(function(){
    var outerHeight = $(".rowL").outerHeight();
    var out1 = $(".img2").outerHeight();
    var out2 = $(".img3").outerHeight();
    $(".img1").attr("style","height:"+out1+"px");
    $(".rowR").outerHeight(outerHeight);
    $(".img4").attr("style","height:"+out2+"px");
   });