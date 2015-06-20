var menuRight = document.getElementById( 'cbp-spmenu-s2' ),
	showRightPush = document.getElementById( 'nav-icon4' ),
	body = document.body;

showRight.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( menuRight, 'cbp-spmenu-open' );
	disableOther( 'showRight' );
};



showRightPush.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( body, 'cbp-spmenu-push-toleft' );
	classie.toggle( menuRight, 'cbp-spmenu-open' );
	disableOther( 'showRightPush' );
};



/**MENU ICON ANIMATION**/

$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});

	$('#showRightPush').click(function(){
		$('#nav-icon4').toggleClass('open');
	});

});


/*******dwif***/

