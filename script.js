// JavaScript Document
$(function() {
/******************************************** ハンバーガーメニュー*/
	
	$('.humberger,.sp-none').on('click',function() {
		$('.humberger,.sp-none,.open-items').toggleClass('open');
	});
/******************************************** スクロールアニメーション*/
	ScrollReveal().reveal('.btn',{
		duration: 1300,
		viewFactor: 2,
		origin: 'bottom',
		distance: '100px',
		reset: false
	});
ScrollReveal().reveal('.top-btn',{
		duration: 1300,
		viewFactor: 0.8,
		origin: 'bottom',
		distance: '80px',
		reset: false
	});
ScrollReveal().reveal('h3',{
	duration: 1300,
		viewFactor: 0.8,
		origin: 'bottom',
		distance: '80px',
		reset: false
	});
ScrollReveal().reveal('.slide-up',{
		duration: 1300,
		viewFactor: 0.8,
		origin: 'bottom',
	distance: '80px',
		reset: false
	});
	ScrollReveal().reveal('.sub-text',{
		duration: 1300,
		viewFactor: 0.8,
		origin: 'bottom',
		distance: '80px',
		reset: false
	});
	
	ScrollReveal().reveal('.contact-text',{
		duration: 1300,
		viewFactor: 0.8,
		origin: 'bottom',
		distance: '80px',
		reset: false
	});
	ScrollReveal().reveal('.content-box',{
		duration: 1300,
		viewFactor: 0.8,
		origin: 'bottom',
		distance: '80px',
		reset: false
	});

		ScrollReveal().reveal('.line-logo',{
		duration: 1300,
		viewFactor: 0.8,
		origin: 'bottom',
		distance: '80px',
		reset: false
	});
	
	ScrollReveal().reveal('.service-items',{
		duration: 1300,
	viewFactor: 0.8,
		reset: false
	});
	
ScrollReveal().reveal('.scale',{
		duration: 1300,
		viewFactor: 0.8,
		scale: 0.3,	
		reset: false
	});
		ScrollReveal().reveal('.copy',{
		duration: 1300,
		viewFactor: 0.8,
		origin: 'bottom',
		distance: '80px',
		reset: false
	});
/******************************************** トップ移動*/
	$('.top-btn').click(function() {
		$('body, html').animate({
			scrollTop: 0
		},1500);
		return false;
    });
  /******************************************** ページ遷移*/
//	$('body').fadeMover({
//		'effectType': 1,
//		'inSpeed': 800,
//		'outSpeed': 800,
//		'inDelay': '0',
//		'outDelay': '0'
//	});

  /******************************************** フォーム必須チェック*/

$('#submit').prop("disabled", true);
	
	$('form input:required').change(function () {
		let flag = true;

	$('form input:required').each(function(e) {
	
		if($('form input:required').eq(e).val()=== ""){
			flag = false;
		}
	});	 
		if(flag) {
			$('#submit').prop("disabled",false);
		} 
		else {
			$('#submit').prop("disabled",true);
		}
	});
	/******************************************** PRICEタブ*/
	$('.tab').click(function(){
		$('.is-active').removeClass('is-active');
		$(this).addClass('is-active');
		$('.is-show').removeClass('is-show');
		
		const index = $(this).index();
		$('.panel').eq(index).addClass('is-show');
	});
		/******************************************** serviceタブ*/
		$('.tab-box').click(function(){
		$('.is-active').removeClass('is-active');
		$(this).addClass('is-active');
		$('.is-show').removeClass('is-show');
		
		const index = $(this).index();
		$('.menu').eq(index).addClass('is-show');
	});
	
});