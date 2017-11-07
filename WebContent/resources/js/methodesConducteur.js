$jq311(document).ready(function($) {
	
	function modifProfilConducteur() {
		
		
		$("#dispo").validate({
			//errorLabelContainer: $("#dispo div.error")
			
			invalidHandler: function(event, validator) {
			    // 'this' refers to the form
			    var errors = validator.numberOfInvalids();
			    if (errors) {
			      var message = errors == 1
			        ? 'You missed 1 field. It has been highlighted'
			        : 'You missed ' + errors + ' fields. They have been highlighted';
			      $("div.error span").html(message);
			      $("div.error").show();
			    } else {
			      $("div.error").hide();
			    }
		  }
		});
		
		var conducteur = {};
		var messageerror = null;
		
		conducteur.idUtil = $("input[name='idUtil']").val();
		conducteur.nomUtil = $("input[name='nomUtil']").val();
		conducteur.prenomUtil = $("input[name='prenomUtil']").val();
		conducteur.loginUtil = $("input[name='loginUtil']").val();
		conducteur.mdpUtil = $("input[name='mdpUtil']").val();
		conducteur.dateNaissanceUtil = $("input[name='dateNaissanceUtil']").val();
		conducteur.telephoneUtil = $("input[name='telephoneUtil']").val();
		conducteur.emailUtil = $("input[name='emailUtil']").val();
		conducteur.anneePermis = $("input[name='anneePermis']").val();
		conducteur.marqueVoiture = $("input[name='marqueVoiture']").val();
		conducteur.modeleVoiture = $("input[name='modeleVoiture']").val();
		conducteur.nbrPassagers = $("input[name='nbrPassagers']").val();
		conducteur.immatriculation = $("input[name='immatriculation']").val();
		
		if ($('#indisponible').prop("checked") == true) {
			conducteur.statut = false;
		} else {
			conducteur.statut = true;
		}
		
		$("#messageAction").hide();
		
		// validations sur les champs avant appel du service web
		$("#messageError").hide();
		messageerror = ctrlvalid(conducteur);
		if (messageerror != null & messageerror != '') 
			{
			$("#messageError").html(messageerror);
			$("#messageError").show();
			}
		if (messageerror == null || messageerror == '') 
		{
			$.ajax({
				
				method: 'PUT',
				dataType: 'json',
				contentType: 'application/json',
				url: 'api/conducteurs/' + conducteur.idUtil,
				data: JSON.stringify(conducteur),
				beforeSend: function() {
					$("#messageAction").html("En cours de modification...");
					$("#messageAction").show();
				},
				success: function() {
					$("#messageAction").hide();
					$("#messageAction").html("Modification effectuée.");
					$("#messageAction").show();
					setTimeout(function() {
						$("#messageAction").hide();
					}, 3000);					
				},
				error: function() {
					$("#messageAction").hide();
					$("#messageAction").html("La modification a echouée.");
					$("#messageAction").show();
					setTimeout(function() {
						$("#messageAction").hide();
					}, 3000);	
				}
			});
		}
			else
				{
				// on retire les bordures rouges
		        document.getElementById('immatriculation').style.borderColor = "grey";
				}
		}	
	
	function ctrlvalid(conducteur) {
		var errormessage = '';
		
		// on met en rouge les champs en erreur

		// controles conducteur
	    if (conducteur.anneePermis.length == 0) {
	        errormessage += "Année de permis doit etre renseignée \r";
	        document.getElementById('anneePermis').style.borderColor = "red";
	    }	
	    if (conducteur.marqueVoiture.length == 0) {
	        errormessage += "La marque doit etre renseignée \r";
	        document.getElementById('marqueVoiture').style.borderColor = "red";
	    }	    
	    if (conducteur.modeleVoiture.length == 0) {
	        errormessage += "Le modèle doit etre renseigné \r";
	        document.getElementById('modeleVoiture').style.borderColor = "red";
	    }		    
	    if (conducteur.nbrPassagers.length == 0) {
	        errormessage += "Le nb de passagers doit etre renseigné \r";
	        document.getElementById('nbrPassagers').style.borderColor = "red";
	    }	
	    if (conducteur.immatriculation.length != 7) {
	        errormessage += "immatriculation sur 7 caracteres \r";
	        document.getElementById('immatriculation').style.borderColor = "red";
	    }	    

	    // controles Utilisateur
	    if (conducteur.prenomUtil.length == 0) {
	        errormessage += "le prénom est obligatoire  \r";
	        document.getElementById('prenomUtil').style.borderColor = "red";
	    }	
	    if (conducteur.nomUtil.length == 0) {
	        errormessage += "le nom est obligatoire \r ";
	        document.getElementById('nomUtil').style.borderColor = "red";
	    }	    
	    if (conducteur.loginUtil.length == 0) {
	        errormessage += "le login est obligatoire \r ";
	        document.getElementById('loginUtil').style.borderColor = "red";
	    }
	    if (conducteur.mdpUtil.length == 0) {
	        errormessage += "le mdp est obligatoire \r ";
	        document.getElementById('mdpUtil').style.borderColor = "red";
	    }
	    if (conducteur.telephoneUtil.length == 0) {
	        errormessage += "le telephone est obligatoire \r ";
	        document.getElementById('telephoneUtil').style.borderColor = "red";
	    }
	    if (conducteur.telephoneUtil.length != 10) {
	        errormessage += "telephone sur 10 caracteres \r";
	        document.getElementById('telephoneUtil').style.borderColor = "red";
	    }
	    if (conducteur.emailUtil.length == 0) {
	        errormessage += "le mail est obligatoire \r ";
	        document.getElementById('emailUtil').style.borderColor = "red";
	    }	    
	    if (conducteur.dateNaissanceUtil.length == 0) {
	        errormessage += "la date de naissance doit etre renseign \r";
	        document.getElementById('dateNaissanceUtil').style.borderColor = "red";
	    }	    
	    
	    return errormessage;
	}

	function disponibilite() {
		var statut = $("input[name='statut']").val();
		console.log(statut);
		if(statut == "false") {
			$('#indisponible').prop("checked", true);
		}
		else {
			$('#disponible').prop("checked", true);
			
		}
	}
	
	
//	$('#submitDemarrerCourse').on('click', demarrerCourse);
//	$('#submitTerminerCourse').on('click', terminerCourse);
	$('#submitModifProfilConducteur').on('click', modifProfilConducteur);
	//$('#submitAcceptation').on('click', modifStatutAccept);
	//$('#submitRefus').on('click', modifStatutRefus);
	
	disponibilite();
});


