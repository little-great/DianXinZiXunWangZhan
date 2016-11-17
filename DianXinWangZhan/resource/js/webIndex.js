/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/*$(document).ready(function () {
    scrollInit();
    selectInit();
});
function scrollInit() {
    $('html').mousewheel(function (event, delta, deltaX, deltaY) {
        if (delta === 1) {
            var pageIndex = Number($("#page").val()) - 1;
            down(pageIndex);
            $('html').unbind(scrollInit());
            setTimeout("$('html').bind(scrollInit())", 500);
        } else {
            var pageIndex = Number($("#page").val()) + 1;
            up(pageIndex);
            $('html').unbind(scrollInit());
            setTimeout("$('html').bind(scrollInit())", 500);
        }
    });
}
function up(pageIndex) {
    $(".top-select").animate({top: "-272px"}).attr("isshow", "false");
    var pageNow = Number($("#page").val());
    var list = $(".page");
    if (pageIndex > list.length - 1) {
        return;
    }
    list.eq(pageNow).animate({top: '-150%'});
    list.eq(pageIndex).animate({top: '0%'});
    $("#page").val(pageIndex);
}
function down(pageIndex) {
    $(".top-select").animate({top: "-272px"}).attr("isshow", "false");
    var pageNow = Number($("#page").val());
    var list = $(".page");
    if (pageIndex < 0) {
        return;
    }
    list.eq(pageIndex).animate({top: '0%'});
    list.eq(pageNow).animate({top: '150%'});
    $("#page").val(pageIndex);
}
var imgNum = new Array(7, 3, 4, 6, 5, 3);
//导航栏点击
function selectInit() {
    $(".top-menu").each(function (index, element) {
        $(".top-menu").eq(index).click(function () {
            selectShow(index);
            categoryClick(index);
        });
    });
}
//下拉菜单显示与隐藏
function selectShow(index) {
    var select = $(".top-select").eq(index);
    if (select.attr("isshow") === "false") {
        select.siblings().animate({top: "-272px"}).attr("isshow", "false");
        select.animate({top: "72px"});
        select.attr("isshow", "true");
    } else {
        select.animate({top: "-272px"});
        select.attr("isshow", "false");
    }
}
//下拉菜单点击
function indexClick(pageIndex) {
    var pageNow = Number($("#page").val());
    if (pageNow < pageIndex) {
        for (var i = pageNow + 1; i <= pageIndex; i++) {
            up(i);
        }
    } else if (pageNow > pageIndex) {
        for (var i = pageNow; i >= pageIndex; i--) {
            down(i);
        }
    }else{
        $(".top-select").animate({top: "-272px"}).attr("isshow", "false");
    }
}
//导航栏点击后加载
function categoryClick(index) {
    var category = Number($("#category").val());
    if (category === index) {
        return;
    } else {
        $("#category").val(index);
    }
    $(".top-menu").removeClass("menu-select").eq(index).addClass("menu-select");
    var category = index + 1;
    var num = imgNum[index];
    $("#img-div").empty();
    $("#page").val(0);
    for (var i = 1; i <= num; i++) {
        if (i === 1) {
            $("#img-div").append('<div class="page"><img src="resource/images/' + category + '-' + i + '.jpg" class="showImg"></div>');
        } else {
            $("#img-div").append('<div class="page" style="top: 150%;"><img src="resource/images/' + category + '-' + i + '.jpg" class="showImg"></div>');
        }
    }
    $("#img-div").append('<div class="page" style="top: 150%;"><img src="resource/images/bottom.jpg" class="showImg"></div>');
}*/


/*$(document).ready(function(e) {
    xianshi();

	$("#1").click(function(){
	});
});*/


window.onload=function() {
var aa=document.getElementsByClassName('top-menu');
var bb=document.getElementsByClassName("top-select");
var cc=document.getElementsByClassName("11");
var dd=document.getElementsByClassName("22");
var ee=document.getElementById("33");
var ff=document.getElementById("44");
var gg=document.getElementById("55");
var hh=document.getElementById("66");
aa[0].onmouseover=function(){xianshi(72);};
aa[3].onmouseover=function(){xianshi2(72)};
//aa[0].onmouseout=function(){xianshi(-52);};
//bb[0].onmouseout=function(){xianshi(-52);};
cc[0].onmouseover=function(){xianshi(-52);};
cc[1].onmouseover=function(){xianshi(-52);};
cc[2].onmouseover=function(){xianshi(-52);};
cc[3].onmouseover=function(){xianshi(-52);};

ee.onmouseover=function(){xianshi2(-52);};
ff.onmouseover=function(){xianshi2(-52);};
gg.onmouseover=function(){xianshi2(-52);};
hh.onmouseover=function(){xianshi2(-52);};
}

var timer=null;
function xianshi(target)
{
	
	clearInterval(timer);
	var aa=document.getElementsByClassName('top-menu');
	//alert(aa[0].innerHTML);
	
	
	timer=setInterval(
	function(){
		var bb=document.getElementsByClassName("top-select")
		if(target>0){

			if(bb[0].offsetTop==72){clearInterval(timer);}
			else{
			bb[0].style.top=bb[0].offsetTop+2+'px';
			}
			  }
	else if(target<0){
		if(bb[0].offsetTop==-52){clearInterval(timer)}
		else{
		bb[0].style.top=bb[0].offsetTop-2+'px';
		}
		        }

		      } ,0.5)

}

var timerr=null;
function xianshi2(target)
{
	
	clearInterval(timerr);
	var aa=document.getElementsByClassName('top-menu');
	//alert(aa[0].innerHTML);
	
	
	timerr=setInterval(
	function(){
		var bb=document.getElementsByClassName("top-select")
		if(target>0){

			if(bb[1].offsetTop==72){clearInterval(timerr);}
			else{
			bb[1].style.top=bb[1].offsetTop+2+'px';
			}
			  }
	else if(target<0){
		if(bb[1].offsetTop==-52){clearInterval(timerr)}
		else{
		bb[1].style.top=bb[1].offsetTop-2+'px';
		}
		        }

		      } ,0.5)

}

