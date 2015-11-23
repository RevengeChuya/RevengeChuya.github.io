/* common.js */

var navTop = 1000;

//読み込み時とリサイズ時
$(window).on("load resize", function(){
/*
	//ウィンドウの横幅が641px以上
	if (window.matchMedia( "(min-width: 641px)" ).matches) {
		$("#nav").css("display", "block");
	} else {
		$("#nav").css("display", "none");
	}
*/
	//ナビ位置
	navTop = $("header").innerHeight();
	if($(window).scrollTop() > navTop) {
		$('#nav').addClass('fixed');
		$("#nav").css("top", 0);
	} else {
		$('#nav').removeClass('fixed');
		$("#nav").css("top", navTop);
	}
});
$(function(){
	//タップ対応
	$("#gNav > li:nth-of-type(2)").addClass('touch');
	$("#gNav > li:nth-of-type(3)").addClass('touch');
	$("#gNav > li:nth-of-type(4)").addClass('touch');
	$("#gNav > li:nth-of-type(5)").addClass('touch');
	$("#gNav > li.touch > a").bind("touchstart", function () {
		$("#gNav li").removeClass('touchOn');
		$(this).parent().addClass('touchOn');
		if (window.matchMedia( "(min-width: 641px)" ).matches) {
			return false;
		}
	});

	//グローバルナビの固定
	$(window).scroll(function () {
		if($(window).scrollTop() > navTop) {
			$('#nav').addClass('fixed');
			$("#nav").css("top", 0);
		} else {
			$('#nav').removeClass('fixed');
			$("#nav").css("top", navTop);
		}
	});

	//モバイル用のメニューボタン
	$(".navBtn").on("click", function() {
		//ウィンドウの横幅が640px以下
		if (window.matchMedia( "(max-width: 640px)" ).matches) {
//			$("#nav").slideToggle("fast");
			$("#nav").animate({height: 'toggle'}, 400, "easeOutExpo");
		}
	});

	//スムーススクロール
	$('a.scr').click(function(){
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		//ウィンドウの横幅が641px以上
		if (window.matchMedia( "(min-width: 641px)" ).matches) {
			position -= 56
		}
		$("html, body").animate({scrollTop:position}, 400, "swing");
		return false;
	});

	//ページトップへ
	var pageTopDisp = false;
	var pageTop = $('#pageTop');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			if (pageTopDisp == false) {
				pageTopDisp = true;
				pageTop.stop().animate({
					'bottom': '50px'
				}, 200);
			}
		} else {
			if (pageTopDisp) {
				pageTopDisp = false;
				pageTop.stop().animate({
					'bottom': '-50px'
				}, 200);
			}
		}
	});

});
