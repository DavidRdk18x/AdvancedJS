export class Carte {
    constructor(titluCarte, autorCarte, edituraCarte, anCarte, pretCarte) {
        this.titlu = titluCarte;
        this.autor = autorCarte;
        this.editura = edituraCarte;
        this.an = anCarte;
        this.pret = pretCarte;
    }
    obtineTitlu(){
        console.log(`Titlul cartii este ${this.titlu}`)
    }
    afiseazaInfo(){
        console.log(`Detalii despre aceasta carte sunt: ${this.titlu}, ${this.autor}, ${this.an}, ${this.editura}, ${this.pret}`)
    }
    deschidCartea(){
        console.log(`Am deschis cartea la pagina 15`);
    }
}