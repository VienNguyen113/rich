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

	$('.btn-dropdown-menu-selected').on('click', function (event) {
		$(this).parent().toggleClass("open");
	});

	$('.menu-sublink-wrapper').on('mouseover', function (event) {
		var w = $(window).width();
		if (w >= 768) 
			$(this).addClass("active");
	});
	$('.menu-sublink-wrapper').on('mouseleave', function (event) {
		$(this).removeClass("active");
		$(this).find('.menu-sublink-wrapper').removeClass("active");
	});
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