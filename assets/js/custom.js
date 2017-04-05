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

$(window).scroll(function () {
	var header = $('.budget-detail .control-panel');
	if (header.length) {
		if (!header.hasClass('control-panel-fixed')) {
			if ($(window).scrollTop() > header.offset().top + header.height() )
				fixedTableHeader(header)
		} else {
			if ($(window).scrollTop() < ($('.budget-detail').offset().top + 30))
				unFixedTableHeader(header)
		}

	}
})

// for Budget page
function fixedTableHeader(elem) {
	elem.addClass('control-panel-fixed');
}
function unFixedTableHeader(elem) {
	elem.removeClass('control-panel-fixed');
}