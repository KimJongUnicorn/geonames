	$('#btnRun1').click(function() {

		$.ajax({
			url: "php/getWeather.php",
			type: 'POST',
			dataType: 'json',
			data: {
				ICAO: $('#selICAO').val(),
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtStationName').html(result['data']['stationName']);
					$('#txtClouds').html(result['data']['clouds']);
					$('#txtCountryCode').html(result['data']['countryCode']);
					$('#txtTemperature').html(result['data']['temperature']);
					$('#txtHumidity').html(result['data']['humidity']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});

	$('#btnRun2').click(function() {

		$.ajax({
			url: "php/neighbours.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selCountry').val(),
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtCountryName1').html(result['data'][0]['name']);
					$('#txtCountryName2').html(result['data'][1]['name']);
					$('#txtCountryName3').html(result['data'][2]['name']);
					$('#txtCountryName4').html(result['data'][3]['name']);
					$('#txtCountryName5').html(result['data'][4]['name']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});

	$('#btnRun3').click(function() {

		$.ajax({
			url: "php/hierarchy.php",
			type: 'POST',
			dataType: 'json',
			data: {
				geonameId: $('#selGeoNameId').val(),
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtPlaceName1').html(result['data'][0]['name']);
					$('#txtPlaceName2').html(result['data'][1]['name']);
					$('#txtPlaceName3').html(result['data'][2]['name']);
					$('#txtPlaceName4').html(result['data'][3]['name']);
					$('#txtPlaceName5').html(result['data'][4]['name']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});