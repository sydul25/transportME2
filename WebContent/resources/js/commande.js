function initMap() {

	var map = new google.maps.Map(document.getElementById('map'), {
		center : {
			lat : 50.632492,
			lng : 3.069908
		},
		zoom : 15,
		mapTypeId : google.maps.MapTypeId.ROADMAP

	});
	var infoWindow = new google.maps.InfoWindow({
		map : map
	});

	var image = 'resources/images/voitureS.png';
	// Try HTML5 geolocation.
	if (navigator.geolocation) {
		navigator.geolocation
				.getCurrentPosition(
						function(position) {
							var pos = {
								lat : position.coords.latitude,
								lng : position.coords.longitude,

							};

							$.ajax({
										method : 'GET',
										url : 'http://maps.googleapis.com/maps/api/geocode/json',
										data : {
											latlng : pos.lat + "," + pos.lng,
											sensor : 'true'
										},
										success : function(data) {

											console.log(data.results[0].formatted_address
															+ "xyz");
											infoWindow.setPosition(pos);
											infoWindow.setContent('Votre position est: '
															+ 'lat:='
															+ pos.lat
															+ '  long:='
															+ pos.lng
															+ ' \n et votre adresse est: '
															+ data.results[0].formatted_address);
											map.setCenter(pos);

										}

									});

							console.log("lat=" + pos.lat + ' lng=' + pos.lng);
							// var url =
							// 'http://localhost:8080/TransportME/api/conducteurs/disponibilites?lat='+pos.lat+'&lng='+pos.lng;
							var latlong = 'lat=' + pos.lat + '&lng=' + pos.lng;
							// console.log(url);
							$.ajax({
										url : 'http://localhost:8080/TransportME/api/conducteurs/disponibilites?lat=50.6079121&lng=3.1672095', // TODO
																																				// rendre
																																				// dynamique
										error : function(request, error) { 
											alert("Erreur sous genre - responseText: "
													+ request.responseText);
										},
										dataType : "json",
										success : function(data) {
											$.each(data,function(i, item) {
																console.log(item);

																marker = new google.maps.Marker(
																		{
																			position : new google.maps.LatLng(
																					item.posActuelleLat,
																					item.posActuelleLong),
																			map : map
																		});

																google.maps.event.addListener(
																				marker,
																				'click',
																				(function(
																						marker,
																						i) {
																					return function() {
																						// Affichage de la légende de chaque lieu
																						infowindow.setContent('Conducteur : '
																										+ item.nomUtil
																										+ ', '
																										+ item.prenomUtil
																										+ ', ' 
																										+ item.marqueVoiture
																										+ ', '
																										+ item.modeleVoiture
																										+ ', '
																										+ item.nbrPassagers
																										)
																										
																						
																						infowindow.open(
																										map,
																										marker);
																					}
																				})
																						(
																								marker,
																								i));

															})

										}
									});

						}, function() {
							handleLocationError(true, infoWindow, map.getCenter());
						});
	} else {
		// Browser doesn't support Geolocation
		handleLocationError(false, infoWindow, map.getCenter());
	}

	function handleLocationError(browserHasGeolocation, infoWindow, pos) {
		infoWindow.setPosition(pos);
		infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.'
						: 'Error: Your browser doesn\'t support geolocation.');
	}

	var input = /** @type {!HTMLInputElement} */
	(document.getElementById('pac-input'));

	var types = document.getElementById('type-selector');
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

	var autocomplete = new google.maps.places.Autocomplete(input);
	autocomplete.bindTo('bounds', map);

	var infowindow = new google.maps.InfoWindow();
	var marker = new google.maps.Marker({
		map : map,
		anchorPoint : new google.maps.Point(0, -29)
	});

	autocomplete.addListener('place_changed', function() {
		infowindow.close();
		marker.setVisible(false);
		var place = autocomplete.getPlace();
		if (!place.geometry) {
			window.alert("Autocomplete's returned place contains no geometry");
			return;
		}

		// If the place has a geometry, then present it on a map.
		if (place.geometry.viewport) {
			map.fitBounds(place.geometry.viewport);
		} else {
			map.setCenter(place.geometry.location);
			map.setZoom(17); // Why 17? Because it looks good.
		}
		marker.setIcon(/** @type {google.maps.Icon} */
		({
			url : place.icon,
			size : new google.maps.Size(71, 71),
			origin : new google.maps.Point(0, 0),
			anchor : new google.maps.Point(17, 34),
			scaledSize : new google.maps.Size(35, 35)
		}));
		marker.setPosition(place.geometry.location);
		marker.setVisible(true);

		var address = '';
		if (place.address_components) {
			address = [
					(place.address_components[0]
							&& place.address_components[0].short_name || ''),
					(place.address_components[1]
							&& place.address_components[1].short_name || ''),
					(place.address_components[2]
							&& place.address_components[2].short_name || '') ]
					.join(' ');
		}

		infowindow.setContent('<div><strong>' + place.name + '</strong><br>'
				+ address);
		infowindow.open(map, marker);
	});

	// Sets a listener on a radio button to change the filter type on Places
	// Autocomplete.
	function setupClickListener(id, types) {
		var radioButton = document.getElementById(id);

	}

	var input2 = /** @type {!HTMLInputElement} */
	(document.getElementById('pac-input2'));
	var autocomplete2 = new google.maps.places.Autocomplete(input2);

}
