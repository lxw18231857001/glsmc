
    $(function () {
            //判断是否宽屏
        var winWide = window.screen.width;  
        var wideScreen = false;
        if (winWide >= 1024) {//1024及以下分辨率
          $("#navMenu").removeClass("hidden");
        }


        if(winWide > 1024){
            $("#winJs").filter("src", "{dede:global.cfg_templets_skin/}/js/winJs.js");
            wideScreen = true;
        } 

  });




/*
$(function(){
	var fanhui = "<li id='tr'>返回上一级</li>";
	var dropmenu1 = $("#dropmenu1").html();
	var dropmenu2 = $("#dropmenu2").html();
	var dropmenu3 = $("#dropmenu3").html();
	var dropmenu4 = $("#dropmenu4").html();
	var dropmenu5 = $("#dropmenu5").html();
	$("#navMenu a[rel='dropmenu1']").parent().click(function(){
		$("#dropmenu1").css("display","none");
		$("#navMenu .center").css("display","none");
		$(".headNav").css("display","none");
		$("#menu_button_wrapper").css("display","none");
		$("#erji").append(fanhui,dropmenu1);
		$("#tr").click(function(){
            $(".center").css("display","block");
            $("#erji").empty();
            $(".headNav").css("display","block");
            $("#menu_button_wrapper").css("display","block");
         });
	});
	$("#navMenu a[rel='dropmenu2']").parent().click(function(){
		$("#dropmenu2").css("display","none");
		$("#navMenu .center").css("display","none");
		$(".headNav").css("display","none");
		$("#menu_button_wrapper").css("display","none");
		$("#erji").append(fanhui,dropmenu2);
		$("#tr").click(function(){
            $(".center").css("display","block");
            $("#erji").empty();
            $(".headNav").css("display","block");
            $("#menu_button_wrapper").css("display","block");
         });

	});
	$("#navMenu a[rel='dropmenu3']").parent().click(function(){
		$("#dropmenu3").css("display","none");
		$("#navMenu .center").css("display","none");
		$(".headNav").css("display","none");
		$("#menu_button_wrapper").css("display","none");
		$("#erji").append(fanhui,dropmenu3);
		$("#tr").click(function(){
            $(".center").css("display","block");
            $("#erji").empty();
            $(".headNav").css("display","block");
            $("#menu_button_wrapper").css("display","block");
         });
	});
	$("#navMenu a[rel='dropmenu4']").parent().click(function(){
		$("#dropmenu4").css("display","none");
		$("#navMenu .center").css("display","none");
		$(".headNav").css("display","none");
		$("#menu_button_wrapper").css("display","none");
		$("#erji").append(fanhui,dropmenu4);
		$("#tr").click(function(){
            $(".center").css("display","block");
            $("#erji").empty();
            $(".headNav").css("display","block");
            $("#menu_button_wrapper").css("display","block");
         });
	});
	$("#navMenu a[rel='dropmenu5']").parent()	.click(function(){
		$("#dropmenu5").css("display","none");
		$("#navMenu .center").css("display","none");
		$(".headNav").css("display","none");
		$("#menu_button_wrapper").css("display","none");
		$("#erji").append(fanhui,dropmenu5);
		$("#tr").click(function(){
            $(".center").css("display","block");
            $("#erji").empty();
            $(".headNav").css("display","block");
            $("#menu_button_wrapper").css("display","block");
         });
	});
});
*/