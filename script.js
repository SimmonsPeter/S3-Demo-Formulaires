function valider() {
    let mdp1 = document.forms[0]["mdp1"].value;
    let mdp2 = document.forms[0]["mdp2"].value;

    if (mdp1 === mdp2 && mdp1.length >= 8) {
        // On veut aussi avoir minimum 8 caractères
        // On veut aussi avoir des chiffres et des lettres
        return true
    } else {
        alert("Les 2 mots de passe doivent être identiques et contenir au moins 8 caractères")
        return false; //Empêcher l'envoie du formulaire
    }
}