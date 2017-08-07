function init_map() {
	let googleMapTitle = "Zurb";
	var googleMapAddress="100 W Rincon Ave, Campbell, CA 95008";
	let googleMapLat = 44.600548;
	let googleMapLong = 38.041701;
	var myOptions = {
		zoom: 13,
		scrollwheel: false,
		disableDefaultUI: false,
		center: new google.maps.LatLng(googleMapLat, googleMapLong),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById('map'), myOptions);
	marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(googleMapLat, googleMapLong)
	});
	infowindow = new google.maps.InfoWindow({
		content: `
          <strong>${googleMapTitle}</strong>
          <br>${googleMapAddress}<br>
        `
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);
	});
	infowindow.open(map, marker);
}

export default init_map;

