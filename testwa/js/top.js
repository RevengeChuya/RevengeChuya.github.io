/* top.js */

//�ǂݍ��ݎ��ƃ��T�C�Y��
$(window).on("load resize", function(){
	//�E�B���h�E�̉�����641px�ȏ�
	if (window.matchMedia( "(min-width: 641px)" ).matches) {
		$("#gNav").css("padding-top", 0);
	} else {
		$("#gNav").css("padding-top", $(".navBtn").innerHeight());
	}
});

$(function(){
	//�X���C�h�V���[
	$('.flexslider').flexslider({
		animation:"fade",
		slideshowSpeed:4000,
		animationSpeed:600,
		controlNav:false,
		start: function(){
			//�i�r�ʒu
			navTop = $("header").innerHeight();
			if($(window).scrollTop() > navTop) {
				$('#nav').addClass('fixed');
			} else {
				$('#nav').removeClass('fixed');
			}
		}
	});

	//�|�b�v�A�b�v�^�u
	$('.posterBox p:first').show();
	$('.posterLink li:nth-of-type(1)').addClass('current');
	$('.posterLink li').click(function() {
		$('.posterLink li').removeClass('current');
		var index = $('.posterLink li').index(this) + 1;
		if (index >= 4) { index -= 3; }
		$('.posterLink li:nth-of-type(' + index + ')').addClass('current');
		$('.posterLink li:nth-of-type(' + index + 3 + ')').addClass('current');
		$('.posterBox p').hide();
		$($(this).find('a').attr('href')).show();
		return false;
	});
});

//�摜��YOUTUBE��ؑ�
function chgMove(obj, code) {
	html = '<div class="tileItem"><div class="tileMovie"><iframe name="mov" width="100%" height="100%" src="http://www.youtube.com/embed/' + code + '?autoplay=1" frameborder="0" allowfullscreen></iframe></div></div>';
	$(obj).html(html);
};