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

					$('#txtName').html(result['data'][0]['name']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});