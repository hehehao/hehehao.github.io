function makeSize(){
	var maxW = 1366;
	var maxH = 768;
	var pw = Math.max($(window).innerWidth(),620);
	var ph = Math.max($(window).innerHeight(), 465);
	//var pleft = Math.max(pw-maxW, 0)/2
	//var ptop = Math.max(ph-maxH, 0)/2
	
	//var pw = Math.min(pw,1366);
	//var ph = Math.min(ph,768);
	/*if(pw<1067){
		$('#container').removeClass('container');
		$('#container').addClass('container-s');
	}else{
			$('#container').removeClass('container-s')
			$('#container').addClass('container');
	}*/
	$('.container').css('width', pw + 'px');
	$('.container').css('height', ph + 'px');
	$('ul.feature-list li').css('margin-right', Math.max((pw-640-112-100)/3,30)+'px');
	$('ul.feature-list li.last').css('margin-right', '0px');
	//$('.bg').css('left', pleft + 'px')
	//$('.bg').css('top', ptop + 'px')
}
function showNumber () {
	if(!$(this).data('isShow')){
		$('#nb-btn-img').rotate({
            angle: 0, 
            animateTo:45,
            duration:600
          });
		delayShow('.sp-area',100);
		delayShow('.cl-area',200);
		delayShow('.case-area',300);
		$(this).data('isShow',true);
	}else{
		$('#nb-btn-img').rotate({
            angle: 45, 
            animateTo:0,
            duration:600
          });
		delayHide('.sp-area',100);
		delayHide('.cl-area',100);
		delayHide('.case-area',100);
		$(this).data('isShow',false);
	}
}
function delayShow(sel, t){
	setTimeout(function(){
		var selEle =$(sel);
		selEle.show(300);
		var nbEle = selEle.find('.nbnum')
		var min = Number(nbEle.text());
		var max = Number(nbEle.attr('max-num'));
		var now = min;
		var it = setInterval(function(){
			if(now<max){
				now = now + 1
				nbEle.text(now);
			}else{
				clearInterval(it);
			}
		},30)
	},t);
}

function delayHide(sel, t){
	setTimeout(function(){
		$(sel).hide(100);
	},t);
}


$(window).ready(function(){
	makeSize();
	$('.nb-btn').click(showNumber);
	$('.nb-btn').click();
	//setInterval(resetBg, 
})
$(window).resize(makeSize);