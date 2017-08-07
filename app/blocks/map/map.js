function initMap() {
	const coordinate = {lat: 44.600548, lng: 38.041701};

	const map = new google.maps.Map(document.getElementById('map'), {

		center: coordinate,
		zoom: 13,
		scrollwheel: false

	});
	const marker = new google.maps.Marker({
		position: coordinate,
		map,
		animation: google.maps.Animation.BBOUNCE
	});

	const styles = [
		{
			"featureType": "landscape",
			"stylers": [
				{
					"color": "#ffffff"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels",
			"stylers": [
				{
					"saturation": -80
				},
				{
					"lightness": 10
				},
				{
					"weight": 2
				}
			]
		},
		{
			"featureType": "poi.park",
			"stylers": [
				{
					"color": "#61dac9"
				}
			]
		},
		{
			"featureType": "road",
			"stylers": [
				{
					"color": "#acacac"
				},
				{
					"weight": 1
				}
			]
		},
		{
			"featureType": "water",
			"stylers": [
				{
					"color": "#6e97de"
				}
			]
		}
	]

	map.setOptions({styles: styles});
}

export default initMap;

