$(function() {
	// Insert hamburger menu
	$('._uaw').prepend('<button id="flatbook-hamburger">☰</button>');

	// Move media above user content
	$('._4-u2').each(function() {
		$(this).find('.mtm').prependTo(this);
	});

	// Add Flatbook credit
	$('.rhcFooterWrap').append('<div class="rhcFooterCopyright"><span>Redesign by <a href="https://github.com/danbovey/Flatbook" target="_blank">Flatbook</a></span></div>');
});