/**
 * 
 */

$jq311(document).ready(function($) {
	// Code that uses jQuery's $ can follow here.
	
	// si on n'a pas d'erreur ni client ni conducteur, on efface l'écran afin de choisir son type d'utilisateur
	if (document.getElementById("errorDivClient").innerText.length=0) {
		$("#divClient").hide();
		$("#divConducteur").hide();
	}
	
	// si message d'erreur, forcage sur client ou sur conducteur
	if (document.getElementById("errorDivClient").innerText.length!=0) {
		//document.getElementById('mySelect').value = 'client';    // TODO à mettre en fonction de client ou conducteur
		$("#mySelect option[value=utilisateur]").prop("selected", true);
		$("#mySelect option[value=client]").prop("selected", true);
		//$("#mySelect").trigger("change", [ 'client' ]);   // pour activer le on change   
		$("#mySelect").trigger("change");   // pour activer le on change   
	}
	
	// trigger change  TODO ne passe jamais dans le trigger alors que dans la console cela fonctionne -- voir pourquoi ?????????
	$("#mySelect").change(function(event,ValueDeLoption)
			{
				console.log("essai trigger change");
			    if (ValueDeLoption!= "")
			    {
			       //$("#mySelect option[value='"+ValueDeLoption+"']").attr("selected", "selected");
			    	console.log("essai");
			    }
			}
	);
	
	// permet de montrer la section conducteur ou client, suivant le choix dans la liste deroulante
	$("#mySelect").on('change', function() {
		
		console.log($("#mySelect").val());
		if ($("#mySelect").val() == "conducteur") {
			$("#divConducteur").show();
			$("#divClient").hide();

		 //   disponibilite();	
		} else if ($("#mySelect").val() == "client") {
			$("#divConducteur").hide();
			$("#divClient").show();

		} else {
			$("#divConducteur").hide();
			$("#divClient").hide();

		}
	});
	

});
