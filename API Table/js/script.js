	$('#btnRun').click(function() {

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

					$('#txtStationName').html(result['data'][0]['stationName']);
					$('#txtClouds').html(result['data'][0]['clouds']);
					$('#txtCountryCode').html(result['data'][0]['countryCode']);
					$('#txtTemperature').html(result['data'][0]['temperature']);
					$('#txtHumidity').html(result['data'][0]['humidity']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});