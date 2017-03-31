$(document).ready(function() {
	$('.controlCollapse').on('click', function(e) {
		if ($(this).hasClass('iconArrowRight')) {
			$(this).removeClass('iconArrowRight');
			$(this).addClass('iconArrowDown');
		} else {
			$(this).removeClass('iconArrowDown');
			$(this).addClass('iconArrowRight');
		}
	})
})