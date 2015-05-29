// Pattern by Brad Frost
// http://codepen.io/bradfrost/pen/sHvaz

$(document).ready(function() {	
	
	var $menu = $('[role=navigation]'),    
    	$menulink = $('.nav-link');
  
	$menulink.click(function() {
	  $menulink.toggleClass('active');
	  $menu.toggleClass('active');
	  return false;
	});

});