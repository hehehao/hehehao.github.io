$(document).ready(function(){
	makeToggle();
	makeSubMenu();
})
function makeToggle () {
	$('.sch-btn').click(function () {
		var e = $('.search-area');
		if (!e.data('isShow')) {
			e.animate({left:'0'},'slow');
			e.data('isShow', true);
		}else{
			e.animate({left:'-267px'},'slow');
			e.data('isShow', false);
		}
	})
}
function makeSubMenu(){
	$('ul.sub-menu li').hover(function(){
		$(this).find('span.zh').slideDown(300);
	},function () {
		$(this).find('span.zh').slideUp(300);
	})
}