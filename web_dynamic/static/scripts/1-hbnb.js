$(document).ready(function () {
  const amenityCheck = {};
  $('.amenities INPUT').change(function () {
        if (this.checked) {
          amenityCheck.push($(this).attr('data-name'))
	} else {
	   amenityCheck.pop($(this).attr('data-name'));
	}
	$('amenities H4').html(Object.values(amenityCheck).join(', '));
    });
});
