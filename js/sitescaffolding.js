$(document).ready(function() {
    $('body').addClass('js');




    // // Parallax content
    // $(function(){
    //     var $parallaxContent = $('.banner').clone();
    //     $('.parallax-content').html($parallaxContent);
    // });




    // Menu toggle
    $('.menu-toggle').click(function() {
        $('.menu').toggleClass('block');
        return false;
    });




    // Tooltip
    $('[title]').each(function() {
        var tooltipText = $(this).attr('title');
        var item = $(this);
        item.hover(function() { 
            item.removeAttr('title');
            $('body').append('' + 
                '<div class="tooltip">' +
                    tooltipText +
                '</div>'
            );
            var tooltipPosition = item.position();
            $('.tooltip').css({
                top: tooltipPosition.top + 'px',
                left: tooltipPosition.left + 'px'
            }).show();
        }, function() {
            $('.tooltip').remove();
            item.attr('title', tooltipText);
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
                        '<div id="lightbox-close">+</div>' +
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
        $('#lightbox-close').click(function() {
            $('#lightbox-overlay').fadeOut(250, function() {
                $('#lightbox-overlay').remove();
            });
        });
    });
    $(document).keyup(function(e) {
      if (e.keyCode == 27) { $('#lightbox-overlay').remove(); }   // esc
    });




    // Toggle button
    var $toggleButton = $('.toggle')
    $toggleButton.click(function() {
        $toggleButton.toggleClass('active');
        if ($toggleButton.text() == $toggleButton.data("toggle-text")) {
            $toggleButton.text($toggleButton.data("toggle-text-orignal"));
        } else {
            $toggleButton.data("toggle-text-original", $toggleButton.text());
            $toggleButton.text($toggleButton.data("toggle-text"));
        }
    });
    // Swap text
    $("#example-two").on("click", function() {
        var el = $(this);
        if (el.text() == el.data("text-swap")) {
            el.text(el.data("text-original"));
            } else {
        el.data("text-original", el.text());
        el.text(el.data("text-swap"));
        }
    });
});