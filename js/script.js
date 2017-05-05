$(document).ready(function(){

	// console.log($('#skolioz').css('margin-top'));

	var i = 0;
	var interval = setInterval(function(){
		i++;
		if(i==10)clearInterval(interval);
		$('.box'+i).addClass('magictime spaceInUp');
		$('.box'+i).removeClass('invisible');},100);

	$(".box").click(function(){
		$('.maxbox').removeClass('maxbox')
					.addClass('box')
					.css('order','')
					.children('.inner-menu').css('top','0');

		$(this).removeClass('box')
				.removeClass('minibox')
				.addClass('maxbox')
				.css({'order':'9'});

		var li_menu = $(this).children('.inner-menu').children('ol').children('li').toArray();
		var li_menu2 = $(this).children('.inner-menu').children('ol').children('li').children('ol').children('li').toArray();
		var sum = li_menu.length + li_menu2.length;
		var margin_top_maxbox;
		if($('.maxbox').css('width')=="700px"){
			switch(sum){
				case 28: margin_top_maxbox=260; break;
				case 16: margin_top_maxbox=310; break;
				case 39: margin_top_maxbox=185; break;
				case 10: margin_top_maxbox=365; break;
				case 4: margin_top_maxbox=365; break;
				case 16: margin_top_maxbox=315; break;
				case 3: margin_top_maxbox=370; break;
				case 6: margin_top_maxbox=400; break;
				default: margin_top_maxbox=280; break;
			};
		};
		if($('.maxbox').css('width')=="950px"){
			switch(sum){
				case 28: margin_top_maxbox=410; break;
				case 16: margin_top_maxbox=510; break;
				case 39: margin_top_maxbox=295; break;
				case 10: margin_top_maxbox=565; break;
				case 4: margin_top_maxbox=565; break;
				case 16: margin_top_maxbox=515; break;
				case 3: margin_top_maxbox=570; break;
				case 6: margin_top_maxbox=600; break;
				default: margin_top_maxbox=480; break;
			};
		};
		var top = $(this).children('.inner-menu').css('top');
		$(this).children('.inner-menu').css('top',margin_top_maxbox);
		delete margin_top_maxbox;

		var boxes = $('.box').toArray();
		$.each(boxes,function(){
			$(this).addClass('minibox');
			$(this).css('order','none');

			if($(this).hasClass('box9'))
				$(this).find('h2').text(('влияние эми').toUpperCase());

			if($('.minibox').css('height')=="100px"){
				var h2_length = $(this).find('h2').text().length;
				var margin_t = (h2_length>24) ? '10px' : '25px';
				$(this).find('h2').css('margin-top',margin_t);
			};

			var li = $(this).children('.inner-menu').children('ol').children('li');
			if($('.minibox').css('height')=="78px"){
				switch(li.length){
					case 1: margin_t='35px'; break;
					case 2: margin_t='30px'; break;
					case 3: margin_t='27px'; break;
					case 4: margin_t='18px'; break;
					case 5: margin_t='15px'; break;
					case 6: margin_t='9px'; break;
					case 8: margin_t='4px'; break;
					default: margin_t='4px';break;
				};
			};
			if($('.minibox').css('height')=="100px"){
				switch(li.length){
					case 1: margin_t='42px'; break;
					case 2: margin_t='35px'; break;
					case 3: margin_t='27px'; break;
					case 4: margin_t='20px'; break;
					case 5: margin_t='15px'; break;
					case 6: margin_t='5px'; break;
					case 8: margin_t='-5px'; break;
					default: margin_t='4px';break;
				};
			};
			if($(this).hasClass('box'))
				$(this).children('.inner-menu').children('ol').css('margin-top',margin_t);
		});
		delete margin_t;

		if($('.maxbox').css('width')=="700px"){
			$('.container').css({'height':'685px',
				'flex-direction':'column',
				'margin-top':'0'});
		};

		if($('.maxbox').css('width')=="950px"){
			$('.container').css({'height':'900px',
				'flex-direction':'column',
				'margin-top':'-8px'});
			$('header').css('margin','0 auto')
						.children('.head').css({'width':'1337px'});
			$('footer').css({'margin':'0 auto','margin-top':'-65px'})
						.children('.foot').css('width','1344px');
		};

		if($('.maxbox').css('width')=="300px"){
			$(this).children('.inner-menu').css('top','50px');
			$(this).children('.inner-menu').css('text-align','right');
		};

		if($('.box').css('height')=="40px"){
			$('.maxbox').children('.inner-menu').css('top','75');
		};
	});

	$('a').hover(function () {
		$(this).addClass('hvr-grow');
	});

//------------FOOTER-------------


	$('#rights').hover( function () {
		$('.dropdown-content-rights').css('display','block')
									.addClass('magictime swap');
	});
	$('.dropdown-content-rights').mouseleave(function () {
		$('.dropdown-content-rights').css('display','none');
	});

	$('#contacts').hover( function () {
		$('.dropdown-content-contacts').css('display','block')
									.addClass('magictime swap');
	});
	$('.dropdown-content-contacts').mouseleave(function () {
		$('.dropdown-content-contacts').css('display','none');
	});

	$('#literature').hover( function () {
		$('.dropdown-content-literature').css('display','block')
									.addClass('magictime swap');
	});

	$('.dropdown-content-literature').mouseleave(function () {
		$('.dropdown-content-literature').css('display','none');
	});

	$('#rights').click(function(){
		$('.dropdown-content-rights').css('display','none');
	});

	$('#contacts').click(function(){
		$('.dropdown-content-contacts').css('display','none');
	});

	$('#literature').click(function(){
		$('.dropdown-content-literature').css('display','none');
	});



//----------------SCROLL NAV--------------------
	// $(window).on("scroll", onScroll);

	// function onScroll(event){
	// 	var scrollPos = $(document).scrollTop();
	// 	console.log('scroll');
	// 	$('.inner-menu a').each(function () {
	// 		console.log($(this));
	// 		var currLink = $(this);
	// 		var refElement = $(currLink.attr("href"));
	// 		if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	// 			$('.maxbox .inner-menu ol li a').removeClass("active");
	// 			$('.maxbox .inner-menu ol li ol li a').removeClass("active");
	// 			currLink.addClass("active");
	// 		}
	// 		else{
	// 			currLink.removeClass("active");
	// 		}
	// 	});
	// };




});
