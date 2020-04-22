"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
    Sejour.prototype.getNom = function () {
        return "" + this.nom;
    };
    Sejour.prototype.getPrix = function () {
        return "" + this.prix;
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this.sejours = [new Sejour("Paris", 7500), new Sejour("Nantes", 44000)];
    }
    SejourService.prototype.RechercheSejour = function (nomSejour) {
        this.sejours.forEach(function (leSejour) {
            if (leSejour.getNom() == nomSejour) {
                console.log("trouvé !");
                return leSejour;
            }
            else {
                console.log("Pas trouvé");
            }
        });
    };
    return SejourService;
}());
var monSejourService = new SejourService();
monSejourService.RechercheSejour("Nantes");
