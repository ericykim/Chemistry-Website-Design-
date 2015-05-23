$.ajax({
	type: 'GET', 
	url: 'http://cors.maxogden.com/http://cors.maxogden.com/http://api.wolframalpha.com/v2/query?input=NH3&appid=397E2T-UKTJ5XUVH5&includepodid=Basic:ChemicalData',
	dataType: 'xml',
	success: function (data) {
		$(data).find('pod subpod').each(function() {
			var molarMass = $(this).find('plaintext').text();

			$('.molarmass').append(
				$('<li />', {
					text: molarMass
				}));
		});
	},
	
});
