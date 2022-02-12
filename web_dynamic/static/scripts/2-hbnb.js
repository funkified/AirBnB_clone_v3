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
    $.get("http://0.0.0.0:5001/api/v1/status", function  (data) {
	if (data.status === 'success')
	    $("#api_status").addClass('available');
	else
	    $("#api_status").removeClass('available');
    });
});
