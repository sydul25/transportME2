package fr.transportME.controller;

public class ErreursCoherenceException extends Exception {

	public ErreursCoherenceException(String erreurs) {
		super(erreurs);
		System.out.println("==> retour formulaire inscription");
	}
}
