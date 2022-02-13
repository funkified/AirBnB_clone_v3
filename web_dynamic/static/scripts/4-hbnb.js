$(document).ready(function () {
  const amenityCheck = {};
  $('.amenities INPUT').change(function () {
    if (this.checked) {
      amenityCheck.push($(this).attr('data-name'));
    } else {
      amenityCheck.pop($(this).attr('data-name'));
    }
    $('amenities H4').html(Object.values(amenityCheck).join(', '));
  });

  $.ajax({
    type: 'POST',
    url: '/api/orders',
    data: '{}',
    contentType: 'JSON',
    success: function (dtJsn) {
      $('places').empty();
      $('places').append(dtJsn.map(function (place) {
        return `<article>
<div class="title_box">
<h2>${place.name}</h2>
<div class="price_by_night"> ${place.price_by_night} </div>
</div>
<div class="information">
<div class="max_guest"> ${place.max_guest} Guest</div>
<div class="number_rooms"> ${place.number_rooms} Bedrooms</div>
<div class="number_bathrooms"> ${place.number_bathrooms} Bathrooms</div>
</div>
<div class="description">
${place.description}
</div>
</article>`;
      }));
    }
  });

  $.get('http://0.0.0.0:5001/api/v1/status', function (data) {
    if (data.status === 'success') { $('#api_status').addClass('available'); } else { $('#api_status').removeClass('available'); }
  });
});
