<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
    
    


<div class="presentation">
	<h3 class="titre">  Profil Conducteur</h3>
	<br>
	<br>
	

	<fieldset>
		<div class="inscription">
			<div id="divprofilclient">
				<form id="dispo" action="dispo" >
				
					<input type="hidden" id="idUtil" name="idUtil" value="${ conducteur.idUtil }" required><br> <br>
	
					<label for="loginUtil"> Votre Login: </label> 
					<input type="text" id="loginUtil" name="loginUtil" value="${ conducteur.loginUtil }" required><br><br> 
					
					<label for="mdpUtil">Votre mot de passe: </label> 
					<input type="password" id="mdpUtil" name="mdpUtil" value="${ conducteur.mdpUtil }" required><br> <br> 
					
					<label for="nomUtil">Votre Nom de famille: </label> 
					<input type="text" id="nomUtil" name="nomUtil" value="${ conducteur.nomUtil }" required><br><br> 
					
					<label for="prenomUtil">Votre prénom: </label> 
					<input type="text" id="prenomUtil" name="prenomUtil" value="${ conducteur.prenomUtil }" required><br><br> 
					
					<label for="dateNaissanceUtil">Votre date de naissance: </label> 
					<input type="date" id="dateNaissanceUtil" name="dateNaissanceUtil" value="${ conducteur.dateNaissanceUtil }" required><br><br> 
					
					<label for="telephoneUtil">Téléphone: </label>  
					<input type="text" id="telephoneUtil" name="telephoneUtil" value="${ conducteur.telephoneUtil }" required><br><br> 
					
					<label for="emailUtil">Votre e-mail: </label> 
					<input type="email" id="emailUtil" name="emailUtil" value="${ conducteur.emailUtil }" required> <br> <br>
					
					<label for="anneePermis">Année Permis de conduire: </label> 
					<input type="text" id="anneePermis" name="anneePermis" value="${ conducteur.anneePermis }" required><br> <br> 
					
					<label for="marqueVoiture">Marque de voiture: </label> 
					<input type="text" id="marqueVoiture" name="marqueVoiture" value="${ conducteur.marqueVoiture }" required><br> <br> 
					
					<label for="modeleVoiture">Modele de voiture: </label> 
					<input type="text" id="modeleVoiture" name="modeleVoiture" value="${ conducteur.modeleVoiture }" required><br> <br> 
					
					<label for="nbrPassagers">Nombre de passagers: </label> 
					<input type="text" id="nbrPassagers" name="nbrPassagers" value="${ conducteur.nbrPassagers }" required><br> <br> 
					
					<label for="immatriculation">Imatriculation: </label> 
					<input type="text" id="immatriculation" name="immatriculation" value="${ conducteur.immatriculation }" required><br> <br> 
					
					<input type="hidden" id="statut" name="statut" value="${ conducteur.statut }"><br> <br> 
					
					<div id="statut">
						<h3> Statut :</h3> <br>
			
							<input type="radio" name="souhait" value="1" id="disponible"/> 
							<label for="disponible">Disponible</label><br>
			           
							<input type="radio" name="souhait" value="0" id="indisponible" checked="checked"/> 
							<label for="indisponible">indisponible</label>
					</div>
			
					<br> 
					<div id="messageError"></div>
					<br> <br>
	
					<div class="inputLogin">
								<div class="reset">
								
									<!--  <button id="reset"
										class="btn waves-effect waves-light orange darken-4" type="reset"
										onclick="location.href='dispo'"
										name="Réinitialiser">
										Gerer disponibilité  <i class="material-icons right">send</i>
									</button>
									-->
									
									<button id="subdispo"
									class="btn waves-effect waves-light orange darken-4"
									type="submit"  name="Envoyer">
									Gerer disponibilité <i class="material-icons right">send</i>
								</button>
								</div>
					</div>
					<div id="messageAction"></div>
				</form>
			</div>
			<div class="reset">
						<div class="btnLogin">
							<button id="submitModifProfilConducteur"
								class="btn waves-effect waves-light orange darken-4"
								type="submit" name="Envoyer">
								Modification <i class="material-icons right">send</i>
							</button>
						</div>
			</div>
			<br>
		
	<!-- 			<div class="comment"> -->
	<!-- 					<div class="btnComment"> -->
	<!-- 						<button id="submit" -->
	<!-- 							class="btn waves-effect waves-light orange darken-4" -->
	<!-- 							type="submit" name="Envoyer"> -->
	<!-- 							Commentaire <i class="material-icons right">send</i> -->
	<!-- 						</button> -->
	<!-- 					</div> -->
	<!-- 			</div> -->
			<br>

		</div>
	</fieldset>		
			
</div>

<div class="comments">

	<ul>
	
		<c:forEach items = "${comments }" var = "comment">
			<li> 
			
				<div class="commentTotal">
				
					<div class="texteComment"></div>
					<div class="noteComment"></div>
					<div class="dateComment"></div>
				
				</div>
			
			
			</li>
		</c:forEach>
	
	</ul>

</div>
			
<script src="${ pageContext.request.contextPath }/resources/js/methodesConducteur.js"></script>

















