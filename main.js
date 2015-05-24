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
	$('.mspecificHeat').empty();
	$('.bfPoint').empty();
	$('.lstructure').empty();
	$('.phaseChange').empty();
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
				$('.mspecificHeat').append('<strong>Molar Mass: </strong>' + molarMass + '<br>')
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
				$('.bfPoint').append('<strong>Boiling point:</strong>' + boilingPoint + '<br>')
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
				$('.bfPoint').append('<strong>Freezing point:</strong>' + freezingPoint + '<br>')
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
				$('.lstructure').append('<img  class="lewisImage" src="' + lewisStructure + '"</img><br>')
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
				var phaseDiagram = $(this).find('img').attr('src');
				//console.log(freezingPoint);
				$('.phaseChange').append('<img class="centered" src="' + phaseDiagram + '"</img><br>')
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
				$('.mspecificHeat').append('<strong> Specific Heat:</strong>' + specificHeat +'<br>')
				//$('.molarmass').text(molarMass);
			});
		},
		
	});

	/*$.ajax({
		type: 'GET', 
		url: 'http://cors.maxogden.com/http://cors.maxogden.com/http://api.wolframalpha.com/v2/query?input=3d%20structure%20NH3&appid=397E2T-UKTJ5XUVH5&includepodid=3DStructure:ChemicalData',
		dataType: 'xml',
		success: function (data) {
			console.log(data);
			$(data).find('pod subpod').each(function() {
				var 3dStructure = $(this).find('img').attr('src');
				//console.log(freezingPoint);
				$('.outPut').append('<img src = "' + 3dStructure +'"></img>')
				//$('.molarmass').text(molarMass);
			});
		},
		
	}); */

}