// Selecting Image Div and img tag
var imagesContainer = $('.images');
var imgElement = $('.images img');
console.log(imgElement);

// On hover display description of 
imagesContainer.hover(
			function(){$(this).find('.description:first').slideToggle(800,'swing');},
			function(){$(this).find('.description:first').fadeOut(800);}
			);



// On hover display border around menu item.
imgElement.hover(function(){
	$(this).animate({borderTopColor:" rgba(255,124,124,1)",
		borderBottomColor:"rgba(255,124,124,1)",
		borderRightColor:'rgba(255,124,124,1)',
		borderLeftColor:'rgba(255,124,124,1)'},
		'5000');
}, function(){
	$(this).animate({borderTopColor:'none',
		borderBottomColor:'none',
		borderRightColor:'none',
		borderLeftColor:'none'},
		'5000');
});