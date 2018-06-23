// JavaScript Document
/*导航*/
$(function(){
	$(".nav li").hover(function(){
		$(this).children("ul").slideDown();								
	},function(){
		$(this).children("ul").slideUp();		
	})	
})