$(document).ready(function() {
	/*
	|--------------------------------------------------
	| Common variable
	|--------------------------------------------------
	*/
	w = $( window ).width();

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
		checkOpen = $(this).parent().hasClass("open");
		// close all dropdown
		dropdowns = $('.group-dropdown-menu-selected');
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
			newRow = `
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

	//Toggle arrow Sort
	$('.btnSort').on('click', function() {
		$(this).find('span').toggleClass('iconRotate180');
	})

	//increase and decrease form type number
	$('.btnPlus').on('click', function(e) {
		e.preventDefault();
		range = 1;
		$(this).parent().find('input')[0].value = parseInt($(this).parent().find('input')[0].value) + range;
	})
	$('.btnMinus').on('click', function(e) {
		e.preventDefault();
		range = 1;
		$(this).parent().find('input')[0].value = parseInt($(this).parent().find('input')[0].value) - range;
	})

	/*
	|--------------------------------------------------
	| Simple Slider
	|--------------------------------------------------
	*/
	setWidthOfEachSlider(setColumnOfSlider(w));

	$('.simple-slider button.control-right').on('click', function(e) {
		e.preventDefault();
		if (!$(this).hasClass('disabled')) {
			simpleSlideMoveLeft(setColumnOfSlider(w));
		};
	})
	$('.simple-slider button.control-left').on('click', function(e) {
		e.preventDefault();
		if (!$(this).hasClass('disabled')) {
			simpleSlideMoveRight(setColumnOfSlider(w));
		};
	})

	/*
	|--------------------------------------------------
	| View Quote
	|--------------------------------------------------
	*/
	$('.btn-view-quote').on('click', function() {
		$('.quotation-form .form-request').removeClass('hidden');
	})

	/*
	|--------------------------------------------------
	| Notification
	|--------------------------------------------------
	*/
	$('.btn-notification').on('click', function() {
		$(this).removeClass('active');
	})

	/*
	|--------------------------------------------------
	| Choose Shape
	|--------------------------------------------------
	*/
	$('.btn-choose-shape').on('click', function () {
		shape = $(this).attr('alt');
		console.log(shape);
		$.ajax({
			// url: "your url",

		}).done(function(data) {
			$('.simple-slider .view ul').empty();
			// replace data in slide here
			$('.btn-choose-shape').removeClass("active");
			$(this).addClass("active");
		});
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

$(window).resize(function () {
	/*
	|--------------------------------------------------
	| Common variable
	|--------------------------------------------------
	*/
	w = $( window ).width();
	
	setWidthOfEachSlider(setColumnOfSlider(w));
})

/*
|--------------------------------------------------
| Budget page
|--------------------------------------------------
*/
function fixedTableHeader(elem) {
	elem.addClass('control-panel-fixed');
}
function unFixedTableHeader(elem) {
	elem.removeClass('control-panel-fixed');
}


/*
|--------------------------------------------------
| Function Simple Slider
|--------------------------------------------------
*/
setColumnOfSlider = function (windowWidth) {
	if (windowWidth>=768) {
		return 3;
	} else if (windowWidth>=480) {
		return 2;
	} else{
		return 1;
	}
}
setWidthOfEachSlider = function (column = 3) {
	containerWidth = $('.simple-slider .view').width();
	$('.simple-slider .view ul li').css('width', containerWidth/column);
}
simpleSlideMoveLeft = function (column = 3) {
	$('.simple-slider button.control').addClass('disabled');
	container = $('.simple-slider ul');
	slider = $('.simple-slider ul li:first-child');

	slider.clone().appendTo(container);

	container.animate({
		left: - slider.outerWidth(),
		},500, function() {
			slider.remove();
			container.css('left', '0');
			$('.simple-slider button.control').removeClass('disabled');
		}
	);
}
simpleSlideMoveRight = function (column = 3) {
	$('.simple-slider button.control').addClass('disabled');
	container = $('.simple-slider ul');
	slider = $('.simple-slider ul li:last-child');

	slider.clone().prependTo(container);
	container.css('left', - slider.outerWidth());

	container.animate({
		left: 0,
		},500, function() {
			slider.remove();
			$('.simple-slider button.control').removeClass('disabled');
		}
	);
}

