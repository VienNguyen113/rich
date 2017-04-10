$(document).ready(function() {
	//Control arrow of Collapse
	$('.controlCollapse').on('click', function(e) {
		if ($(this).hasClass('iconArrowRight')) {
			$(this).removeClass('iconArrowRight');
			$(this).addClass('iconArrowDown');
		} else {
			$(this).removeClass('iconArrowDown');
			$(this).addClass('iconArrowRight');
		}
	})

	//Dropdown Menu
	$('.btn-dropdown-menu-selected').on('click', function (event) {
		var checkOpen = $(this).parent().hasClass("open");
		// close all dropdown
		var dropdowns = $('.group-dropdown-menu-selected');
		dropdowns.removeClass('open');
		// toogle dropdown selected
		if (!checkOpen) $(this).parent().addClass('open');
	});
	$('body').on('click', function (e) {
	    if (!$('btn-dropdown-menu-selected').is(e.target) 
	        && $('btn-dropdown-menu-selected').has(e.target).length == 0 
	        && $('.group-dropdown-menu-selected').has(e.target).length == 0
	    ) {
	        $('.group-dropdown-menu-selected').removeClass('open');
	    }
	});

	//Top Menu Auto show
	$('.menu-sublink-wrapper').on('mouseover', function (event) {
		var w = $(window).width();
		if (w >= 768) 
			$(this).addClass("active");
	});
	$('.menu-sublink-wrapper').on('mouseleave', function (event) {
		$(this).removeClass("active");
		$(this).find('.menu-sublink-wrapper').removeClass("active");
	});

	//Slect number of guest in Manuallu modal
	$('#selectNbGuest').on("change", function (event) {
		$(".form-dynamic").empty();
		if (event.target.value == 0) {
			$(this).parent().addClass('alone');
		} else 
			$(this).parent().removeClass('alone');

		for (var i = 0; i < event.target.value; i++) {
			var newRow = `
				<div class="form-dynamic-row clearfix">
					<select name="guest-relation-${i}" id="">
						<option value="">Relation</option>
						<option value="">optional</option>
						<option value="">optional</option>
					</select>
					<input type="text" name="guest-name-${i}">
					<select name="guest-place-with-${i}" id="">
						<option value="">Place with</option>
						<option value="">optional</option>
						<option value="">optional</option>
					</select>
				</div>`;
			$(".form-dynamic").append(newRow);
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

