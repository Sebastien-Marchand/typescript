class Sejour{
	constructor(private nom:string, private prix:number) {
    
    }
	public getNom(){
		return `${this.nom}`;
	}
	public getPrix(){
		return `${this.prix}`;
	}
}

class SejourService{
    private sejours:Sejour[]
    constructor(){
        this.sejours = [new Sejour("Paris",7500),new Sejour("Nantes",44000)];
    }
	public RechercheSejour(nomSejour:string):Sejour|void{
		this.sejours.forEach((leSejour)=>{
			if(leSejour.getNom() == nomSejour){
                console.log("trouvé !");
                return leSejour;
            }
			else {
                console.log("Pas trouvé")
            }
		});
	}
}
const monSejourService:SejourService = new SejourService();
monSejourService.RechercheSejour("Nantes");
