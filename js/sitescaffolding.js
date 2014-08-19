(function($){
 
  /* addClass shim
   ****************************************************/
  var addClass = $.fn.addClass;
  $.fn.addClass = function(value) {
    var orig = addClass.apply(this, arguments);
 
    var elem,
      i = 0,
      len = this.length;
 
    for (; i < len; i++ ) {
      elem = this[ i ];
      if ( elem instanceof SVGElement ) {
        var classes = $(elem).attr('class');
        if ( classes ) {
            var index = classes.indexOf(value);
            if (index === -1) {
              classes = classes + " " + value;
              $(elem).attr('class', classes);
            }
        } else {
          $(elem).attr('class', value);
        }
      }
    }
    return orig;
  };
 
  /* removeClass shim
   ****************************************************/
  var removeClass = $.fn.removeClass;
  $.fn.removeClass = function(value) {
    var orig = removeClass.apply(this, arguments);
 
    var elem,
      i = 0,
      len = this.length;
 
    for (; i < len; i++ ) {
      elem = this[ i ];
      if ( elem instanceof SVGElement ) {
        var classes = $(elem).attr('class');
        if ( classes ) {
          var index = classes.indexOf(value);
          if (index !== -1) {
            classes = classes.substring(0, index) + classes.substring((index + value.length), classes.length);
            $(elem).attr('class', classes);
          }
        }
      }
    }
    return orig;
  };
 
  /* hasClass shim
   ****************************************************/
  var hasClass = $.fn.hasClass;
  $.fn.hasClass = function(value) {
    var orig = hasClass.apply(this, arguments);
 
    var elem,
      i = 0,
      len = this.length;
        
    for (; i < len; i++ ) {
      elem = this[ i ];
      if ( elem instanceof SVGElement ) {
        var classes = $(elem).attr('class');
 
        if ( classes ) {
          if ( classes.indexOf(value) === -1 ) {
            return false;
          } else {
            return true;
          }
        } else {
            return false;
        }
      }
    }
    return orig;
  };
})(jQuery);



$(function() {
	$('body').addClass('js');

	// Menu toggle
	$('.menu-toggle').click(function() {
		$('.menu').toggleClass('block');
		return false;
	});

	// Toggle
	$('.toggle').click(function() {
		$(this).children('input[type=checkbox]').trigger('click');
	});
	$('.toggle label').click(function(e) {
		e.preventDefault();
	});




	// Tree
	$('.tree li').each(function() {
		if($(this).children('ul').length > 0) {
			$(this).children('.node').prepend('<svg class="icon-chevron rotate-90"><use xlink:href="#icon-chevron"></use></svg>');
		}
	});
	$('.tree .node').click(function() {
		$(this).next('ul').slideToggle('fast');
		var icon = $(this).children('.icon-chevron');
		if (icon.hasClass('rotate-90')) {
			icon.removeClass('rotate-90');
		} else {
			icon.addClass('rotate-90');
		}
	});




	// Checkbox buttons
	$('.button input[type=checkbox]:checked').parent('label').addClass('active');
	$('.button input[type=checkbox]').parent('label').click(function() {
		if($(this).children('input[type=checkbox').is(':checked')) {
			$(this).addClass('active');
		} else {
			$(this).removeClass('active');
		}
	});




	// Radio buttons
	$('.button input[type=radio]:checked').parent('label').addClass('active');
	$('.button input[type=radio]').parent('label').click(function() {
		$('.button input[type=radio]').parent('label').removeClass('active');
		if($(this).children('input[type=radio').is(':checked')) {
			$(this).addClass('active');
		} else {
			$(this).removeClass('active');
		}
	});



	// Callouts
	$('.dismiss').append('<svg class="icon-cancel"><use xlink:href="#icon-cancel"></use></svg>');
	$('div').on('click', '.dismiss .icon-cancel', function() {
		$(this).parent().remove();
	});
	$('[data-trigger-callout]').click(function() {
		if($(this).hasClass('success')) {
			$('.placeholder-callout').after('' +
				'<div class="callout success dismiss round">' +
					'<svg class="icon-check-circle-large"><use xlink:href="#icon-check-circle-large"></use></svg>' +
					'<h4>Success!</h4>' +
					'<p>This is an example of the success callout. Great for notifying users of important information.</p>' +
					'<svg class="icon-cancel" viewBox="0 0 512 512">' +
      					'<path d="m438 375l-118-119 118-119-63-63-119 118-119-118-63 63 118 119-118 119 63 63 119-118 119 118z"></path>' +
    				'</svg>' +
    			'</div>');
		}
		else if($(this).hasClass('info')) {
			$('.placeholder-callout').after('' +
				'<div class="callout info dismiss round">' +
					'<svg class="icon-info"><use xlink:href="#icon-info"></use></svg>' +
					'<h4>Info!</h4>' +
					'<p>This is an example of the info callout. Great for notifying users of important information.</p>' +
					'<svg class="icon-cancel" viewBox="0 0 512 512">' +
      					'<path d="m438 375l-118-119 118-119-63-63-119 118-119-118-63 63 118 119-118 119 63 63 119-118 119 118z"></path>' +
    				'</svg>' +
    			'</div>');
		}
		else if($(this).hasClass('warning')) {
			$('.placeholder-callout').after('' +
				'<div class="callout warning dismiss round">' +
					'<svg class="icon-warning"><use xlink:href="#icon-warning"></use></svg>' +
					'<h4>Warning!</h4>' +
					'<p>This is an example of the warning callout. Great for notifying users of important information.</p>' +
					'<svg class="icon-cancel" viewBox="0 0 512 512">' +
      					'<path d="m438 375l-118-119 118-119-63-63-119 118-119-118-63 63 118 119-118 119 63 63 119-118 119 118z"></path>' +
    				'</svg>' +
    			'</div>');
		}
		else if($(this).hasClass('alert')) {
			$('.placeholder-callout').after('' +
				'<div class="callout danger dismiss round">' +
					'<svg class="icon-cancel-sign"><use xlink:href="#icon-cancel-sign"></use></svg>' +
					'<h4>Danger!</h4>' +
					'<p>This is an example of the danger callout. Great for notifying users of important information.</p>' +
					'<svg class="icon-cancel" viewBox="0 0 512 512">' +
      					'<path d="m438 375l-118-119 118-119-63-63-119 118-119-118-63 63 118 119-118 119 63 63 119-118 119 118z"></path>' +
    				'</svg>' +
    			'</div>');
		}
		else {
			$('.placeholder-callout').after('' +
				'<div class="callout dismiss round">' +
					'<svg class="icon-megaphone"><use xlink:href="#icon-megaphone"></use></svg>' +
					'<h4>Callout!</h4>' +
					'<p>This is an example of a callout. Great for notifying users of important information.</p>' +
					'<svg class="icon-cancel" viewBox="0 0 512 512">' +
      					'<path d="m438 375l-118-119 118-119-63-63-119 118-119-118-63 63 118 119-118 119 63 63 119-118 119 118z"></path>' +
    				'</svg>' +
    			'</div>');
		}
	});




	// Notifications
	$('[data-trigger-notification]').click(function() {
		if($('.notifications').length) {
			$('.notifications').append('' +
			'<div class="notification">' +
				'<svg class="icon-upload-1"><use xlink:href="#icon-upload-1"></use></svg>' +
				'<h5>Notification!</h5>' +
				'<p>This is an example notification! Use these to display important information to your users.</p>' +
				'<svg class="icon-cancel" viewBox="0 0 512 512">' +
  					'<path d="m438 375l-118-119 118-119-63-63-119 118-119-118-63 63 118 119-118 119 63 63 119-118 119 118z"></path>' +
				'</svg>' +
			'</div>');
		} else {
			$('body').append('' +
			'<div class="notifications">' +
				'<div class="notification">' +
					'<svg class="icon-upload-1"><use xlink:href="#icon-upload-1"></use></svg>' +
					'<h5>Notification!</h5>' +
					'<p>This is an example notification! Use these to display important information to your users.</p>' +
					'<svg class="icon-cancel" viewBox="0 0 512 512">' +
	  					'<path d="m438 375l-118-119 118-119-63-63-119 118-119-118-63 63 118 119-118 119 63 63 119-118 119 118z"></path>' +
					'</svg>' +
				'</div>' +
			'</div>');
		}
		
	});
	$('body').on('click', '.notification .icon-cancel', function() {
		$(this).parent().remove();
	});




	// Accordion
	// Hide all panels
	$('.accordion .panel-content').hide();
	$('.accordion .panel-header').addClass('round-bottom');
	// Show the first panel
	$('.accordion .panel:first .panel-content').show();
	$('.accordion .panel:first .panel-header').removeClass('round-bottom');
	// Rotate the first panel chevron
	$('.accordion .panel:first .icon-chevron').attr("class", "icon-chevron rotate-90");
	// On click of header
	$('.accordion .panel-header').click(function() {
		// Collapse all panels
		$('.accordion .panel-content').stop().slideUp(200);
		// Expand clicked panel
		$(this).next().stop().slideDown(200);
		// If content is visible
		if($(this).next('.panel-content').is(":visible")) {
			// Set all chevrons to default
			$('.accordion .panel-header .icon-chevron').attr("class", "icon-chevron");
			// Set the clicked chevron to rotate
			$(this).find('.icon-chevron').attr("class", "icon-chevron rotate-90");
			$('.accordion .panel-header').addClass('round-bottom');
			$(this).removeClass('round-bottom');
		}
	});




	// Tabs
	// Hide all tabs
	$('.tabs .panel-content').hide();
	// Show the first tab
	$('.tabs .panel-content:first').show();
	// Set first tab to active
	$('.tabs .tab:first').addClass('active');
	// On click of tag
	$('.tabs .tab').click(function(e) {
		// Prevent default anchor scoll
		e.preventDefault();
		var selectedTab = $(this).attr('href');
		$('.tabs .panel-content').hide();
		$(selectedTab).show();
		$('.tabs .tab').removeClass('active');
		$(this).addClass('active');
	});



	// Scroll to anchor
	$('a[href^="#"]').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 'slow');
	    return false;
	});



	// Rating
	$('.rating label').hover(function() {
		$(this).prevAll('label').toggleClass('hover');
	});

	// ========================================
	// Tooltips
	// ========================================
	$('[title]:not(.slider img)').each(function() {
		// Get title attribute text
		var toolTipText = $(this).attr('title');
		// On mouse over
		$(this).hover(function() {
			// Temporarily remove title attribute to prevent default browser tooltip
			$(this).removeAttr('title');
			// Get position of object that has the tooltip
			var toolTipPosition = $(this).offset();
			// Get width of object that has the tooltip
			var toolTipToggleWidth = $(this).outerWidth();
			// Get height of object that has the tooltip
			var toolTipToggleHeight = $(this).outerHeight();
			// Add the tooltip markup to the body with the tooltip text
			$('body').append('' +
				'<div class="tooltip">' +
					toolTipText +
				'</div>');
			// Get width of tooltip
			var toolTipWidth = $('.tooltip').outerWidth();
			// Get height of tooltip
			var toolTipHeight = $('.tooltip').outerHeight();
			// Tooptip right
			if ($(this).hasClass('tooltip-right')) {
				// Add tooltip-right class
				$('.tooltip').addClass('tooltip-right');
				// Set potion of tooltip to be right of object then show it
				$('.tooltip').css({
					// Add 1/2 height of object then subtract 1/2 height of tooltip to vertically center
					top: (toolTipPosition.top + (toolTipToggleHeight / 2) - (toolTipHeight / 2)) + 'px',
					// Add 8px from left to account for tooltip tip
					left: (toolTipPosition.left + toolTipToggleWidth) + 'px'
				}).fadeIn('fast');
			// Tooltip bottom
			} else if ($(this).hasClass('tooltip-bottom')) {
				// Add tooltip-bottom class
				$('.tooltip').addClass('tooltip-bottom');
				// Set potion of tooltip to be below object then show it
				$('.tooltip').css({
					// Add 8px from bottom to account for tooltip tip
					top: (toolTipPosition.top + toolTipToggleHeight) + 'px',
					// Add 1/2 width of object then subtract 1/2 width of tooltip to center it
					left: (toolTipPosition.left + (toolTipToggleWidth / 2) - (toolTipWidth / 2)) + 'px'
				}).fadeIn('fast');
			// Tooltip left
			} else if ($(this).hasClass('tooltip-left')) {
				// Add tooltip-right left
				$('.tooltip').addClass('tooltip-left');
				// Set potion of tooltip to be left of object then show it
				$('.tooltip').css({
					// Add 1/2 height of object then subtract 1/2 height of tooltip to vertically center
					top: (toolTipPosition.top + (toolTipToggleHeight / 2) - (toolTipHeight / 2)) + 'px',
					// Sutract 8px from right to account for tooltip tip
					left: (toolTipPosition.left - toolTipWidth) + 'px'
				}).fadeIn('fast');
			// Tooltip top
			} else {
				if ($(this).hasClass('tooltip-align-left')) {
					$('.tooltip').addClass('tooltip-align-left');
					$('.tooltip').css({
						top: (toolTipPosition.top - toolTipHeight) + 'px',
						left: (toolTipPosition.left) + 'px'
					}).fadeIn('fast');
				} else {
					// Set potion of tooltip to be on top of object then show it
					$('.tooltip').css({
						// Subtract 8px from top to account for tooltip tip
						top: (toolTipPosition.top - toolTipHeight) + 'px',
						// Add 1/2 width of object then subtract 1/2 width of tooltip to center it
						left: (toolTipPosition.left + (toolTipToggleWidth / 2) - (toolTipWidth / 2)) + 'px'
					}).fadeIn('fast');
				}
			}
		// On mouse out
		}, function() {
			// Delete tooltip
			$('.tooltip').remove();
			// Reapply the title attribute
			$(this).attr('title', toolTipText);
		});
	});




	// Drop-down
	$('.drop-down-toggle').click(function() {
		var dropDown = $(this).find('.drop-down:first');
		if (dropDown.is(':visible')) {
			$(dropDown).fadeOut(250);
		}
		else {
			// $('.drop-down-toggle').not('.sticky').children('.drop-down').hide();
			$(dropDown).fadeIn(250);
		}
	})
	$('.drop-down').click(function() {
		event.stopPropagation();
	});
	$('.drop-down-toggle').click(function(event) {
		event.stopPropagation();
	});
	$(document).click(function() {
		$('.drop-down-toggle').not('.sticky').children('.drop-down').hide();
	});
	var hoverTimeout;
	$('.drop-down-toggle.hover').hover(function() {
		clearTimeout(hoverTimeout);
		$(this).find('.drop-down:first').fadeIn(250);
	}, function() {
		var $this = $(this);
		hoverTimeout = setTimeout(function() {
			$this.find('.drop-down:first').fadeOut(250);
		}, 500);
	});




	// Modal
	$('.modal-trigger').click(function(e) {
		e.preventDefault();
		$(this).next('.modal-overlay').fadeIn(250);
	});
	$('.modal-close').click(function() {
		$('.modal-overlay').fadeOut(250);
	});
	$('.modal-overlay').click(function() {
		$('.modal-overlay').fadeOut(250);
	}).find('.modal').click(function(e) {
		return false;
	});
	



	// Lightbox
	$('.lightbox-trigger').click(function(e) {
		// Prevent default link action
		e.preventDefault();
		// Get image link tag
		var imgLink = $(this).children('img').attr("src");
		// If lighbox exists
		if ($('#lightbox').length > 0) {
			// Show image that was linked
			$('#content').html('<img src="'+ imgLink + '" />');
			$('#ligthbox').show();
		}
		// If lightbox doesn't exist
		else {
			// Create lightbox HTML
			var lightbox =
			'<div id="lightbox-overlay">' +
				'<div id="lightbox">' +
					'<div id="lightbox-image">' +
						'<img src="' + imgLink + '" />' +
						'<div class="lightbox-close"></div>' +
					'</div>' +
				'</div>' +
			'</div>';
			// Append lightbox HTML to body
			$('body').append(lightbox);
			$('#lightbox-overlay').hide();
			$('#lightbox-overlay').fadeIn(250);
		}
		// Click anywhere to close lighbox
		// $('#lightbox img').click(function() {
		//     event.stopPropagation();
		// });
		// Click anywhere to close lighbox
		// $('#lightbox-overlay').click(function() {
		//     $('#lightbox-overlay').remove();
		// });
		// Click clsoe to close lighbox
		$('.lightbox-close').click(function() {
			$('#lightbox-overlay').fadeOut(250, function() {
				$('#lightbox-overlay').remove();
			});
		});
		$('#lightbox-overlay').click(function() {
			$('#lightbox-overlay').fadeOut(250, function() {
				$('#lightbox-overlay').remove();
			});
		}).find('#lightbox-image').click(function(e) {
			return false;
		});
	});
	$(document).keyup(function(e) {
	  if (e.keyCode == 27) { $('#lightbox-overlay').remove(); }   // esc
	});




	// Slider
	$('.slider img').hide();
	$('.slider img:first').show();
	var sliderHTML =
	'<a class="prev">' +
		'<svg class="icon-chevron rotate-180"><use xlink:href="#icon-chevron"></use></svg>' +
	'</a>' +
	'<a class="next">' +
		'<svg class="icon-chevron"><use xlink:href="#icon-chevron"></use></svg>' +
	'</a>' +
	'<div class="title"></div>' +
	'<div class="bullets"></div>';
	$('.slider').prepend(sliderHTML);
	var numberOfSlides = $('.slider img').length;
	var currentSlide = 0;
	var bullet = '<a class="bullet"></a>';
	for (var i = 0; i < numberOfSlides; i++) {
		$('.bullets').append(bullet);
	}
	$('.slider .bullets .bullet').eq(currentSlide).addClass('active');
	var bulletsWidth = $('.slider .bullets').outerWidth();
	$('.slider .bullets').css('margin-left', "-" + (bulletsWidth / 2) + "px");
	$('.slider .title').append($('.slider img:first').attr('title'));
	var titleWidth = $('.slider .title').outerWidth();
	$('.slider .title').css('margin-left', "-" + (titleWidth /2) + "px");
	$('.slider .next').click(function() {
		$('.slider img').eq(currentSlide).hide();
		if(currentSlide >= (numberOfSlides - 1)) {
			currentSlide = 0;
			console.log(currentSlide);
		} else {
			currentSlide += 1;
			console.log(currentSlide);
		}
		$('.slider img').eq(currentSlide).show();
		$('.slider .title').empty().append($('.slider img').eq(currentSlide).attr('title'));
		var titleWidth = $('.slider .title').outerWidth();
		$('.slider .title').css('margin-left', "-" + (titleWidth /2) + "px");
		$('.slider .bullets .bullet').removeClass('active');
		$('.slider .bullets .bullet').eq(currentSlide).addClass('active');
	});
	$('.slider .prev').click(function() {
		$('.slider img').eq(currentSlide).hide();
		if(currentSlide == 0) {
			currentSlide = (numberOfSlides - 1);
			console.log(currentSlide);
		} else {
			currentSlide -= 1;
			console.log(currentSlide);
		}
		$('.slider img').eq(currentSlide).show();
		$('.slider .title').empty().append($('.slider img').eq(currentSlide).attr('title'));
		var titleWidth = $('.slider .title').outerWidth();
		$('.slider .title').css('margin-left', "-" + (titleWidth /2) + "px");
		$('.slider .bullets .bullet').removeClass('active');
		$('.slider .bullets .bullet').eq(currentSlide).addClass('active');
	});
	$('.slider .bullets .bullet').click(function() {
		$('.slider .bullets .bullet').removeClass('active');
		$(this).addClass('active');
		var selectedSlide = $(this).index();
		currentSlide = selectedSlide;
		console.log(currentSlide);
		$('.slider img').hide();
		$('.slider img').eq(selectedSlide).show();
	});




	// Validation
	// var textReg = /$^[A-Za-z]+$/;
	// var numberReg = /^[0-9]+$/;
	// var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

	// $('.validate-text').each(function() {
	// 	$(this).on('change', function() {
	// 		if (!textReg.test($(this).val())) {
	// 			$(this).addClass('error');
	// 		}
	// 	});
	// });
});