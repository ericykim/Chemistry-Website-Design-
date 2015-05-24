var chemicalFormula = $(".molarMassInput").focus(function(){
    // Select input field contents
    this.select();
});

$(document).ready(function() {
	$("#form").submit(function(event){
		var input = $("#input").val();
		runAjax(input);

		//prevent function from double-firing
		event.preventDefault();
		event.stopImmediatePropagation();
	});
});

function runAjax(input) {
	// var url = 'http://cors.maxogden.com/http://cors.maxogden.com/http://api.wolframalpha.com/v2/query?input=' +  input + '&appid=397E2T-UKTJ5XUVH5&includepodid=Basic:ChemicalData';
	var url = 'http://cors.maxogden.com/http://cors.maxogden.com/http://api.wolframalpha.com/v2/query?input=molar%20mass%20' +  input + '&appid=397E2T-UKTJ5XUVH5&includepodid=Result';
	$.ajax({
		type: 'GET', 
		url: url,
		dataType: 'xml',
		success: function (data) {
			console.log(data);
			$(data).find('pod subpod').each(function() {
				var molarMass = $(this).find('plaintext').text();
				console.log(molarMass);
				$('.outPut').append('<p>Molar Mass: ' + molarMass + '</p>')
				//$('.molarmass').text(molarMass);
			});
		},


		
	});

	$.ajax({
		type: 'GET', 
		url: 'http://cors.maxogden.com/http://cors.maxogden.com/http://api.wolframalpha.com/v2/query?input=boiling%20point%20' + input +'&appid=397E2T-UKTJ5XUVH5&includepodid=Result',
		dataType: 'xml',
		success: function (data) {
			console.log(data);
			$(data).find('pod subpod').each(function() {
				var boilingPoint = $(this).find('plaintext').text();
				console.log(boilingPoint);
				$('.outPut').append('<p>Boiling point:' + boilingPoint + '</p>')
				//$('.molarmass').text(molarMass);
			});
		},
		
	});

		$.ajax({
		type: 'GET', 
		url: 'http://cors.maxogden.com/http://cors.maxogden.com/http://api.wolframalpha.com/v2/query?input=freezing%20point%20' + input +'&appid=397E2T-UKTJ5XUVH5&includepodid=Result',
		dataType: 'xml',
		success: function (data) {
			console.log(data);
			$(data).find('pod subpod').each(function() {
				var freezingPoint = $(this).find('plaintext').text();
				console.log(freezingPoint);
				$('.outPut').append('<p>Freezing point:' + freezingPoint + '</p>')
				//$('.molarmass').text(molarMass);
			});
		},
		
	});

	$.ajax({
		type: 'GET', 
		url: 'http://cors.maxogden.com/http://cors.maxogden.com/http://api.wolframalpha.com/v2/query?input=lewis%20stucture%20'+ input +'&appid=397E2T-UKTJ5XUVH5&includepodid=LewisDotStructureLargePod:ChemicalData',
		dataType: 'xml',
		success: function (data) {
			console.log(data);
			$(data).find('pod subpod').each(function() {
				var lewisStructure = $(this).find('img').attr('src');
				//console.log(freezingPoint);
				$('.outPut').append('<img src="' + lewisStructure + '"</img>')
				//$('.molarmass').text(molarMass);
			});
		},
		
	});

	$.ajax({
		type: 'GET', 
		url: 'http://cors.maxogden.com/http://cors.maxogden.com/http://api.wolframalpha.com/v2/query?input=phase%20diagram%20'+ input +'&appid=397E2T-UKTJ5XUVH5&includepodid=BasicPhaseDiagram:ThermodynamicData',
		dataType: 'xml',
		success: function (data) {
			console.log(data);
			$(data).find('pod subpod').each(function() {
				var lewisStructure = $(this).find('img').attr('src');
				//console.log(freezingPoint);
				$('.outPut').append('<img src="' + lewisStructure + '"</img>')
				//$('.molarmass').text(molarMass);
			});
		},
		
	});


	$.ajax({
		type: 'GET', 
		url: 'http://cors.maxogden.com/http://cors.maxogden.com/http://api.wolframalpha.com/v2/query?input=specific%20heat%20'+ input +'&appid=397E2T-UKTJ5XUVH5&includepodid=Result',
		dataType: 'xml',
		success: function (data) {
			console.log(data);
			$(data).find('pod subpod').each(function() {
				var specificHeat = $(this).find('plaintext').text();
				//console.log(freezingPoint);
				$('.outPut').append('<p> Specific Heat: ' + specificHeat +'</p>')
				//$('.molarmass').text(molarMass);
			});
		},
		
	});

}