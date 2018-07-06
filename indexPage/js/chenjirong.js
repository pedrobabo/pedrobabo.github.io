
/*弹出框触发*/
$(function(){
		  $('a[data-toggle="popover"]').popover();
		  });
		  
/*小屏导航条点击后收缩*/
$(function(){
	$('.navbar-collapse a.scroll-move').click(function(){
		$('.navbar-toggle:visible').click();
		});
	});
	
/*滚动动画效果*/
$(function(){
	$('a.scroll-move').bind('click',function(event){
		  var $scroll=$(this);
		  $('html,body').stop().animate({
			  scrollTop:$($scroll.attr('href')).offset().top
			  },1500,'easeInOutExpo');
			  event.preventDefault();
		});
	});
