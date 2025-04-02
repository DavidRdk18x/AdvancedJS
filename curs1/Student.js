export class Student {
  nota1;
  nota2;
  constructor(ID, Nume, Prenume, Varsta) {
    this.ID = ID;
    this.Nume = Nume;
    this.Prenume = Prenume;
    this.Varsta = Varsta;
  }
  salut() {
    console.log(
      `Buna ziua, numele meu este: ${this.Nume} ${this.Prenume} si am ${this.Varsta} ani.`
    );
  }
  examen(nota1, nota2) {
    this.nota1 = nota1;
    this.nota2 = nota2;
    console,
      log(
        `Am fost la examen si a, luat notele: ${this.nota1} si ${this.nota2} `
      );
  }
  calMedia() {
    let media = (this.nota1 + this.nota2) / 2;
    console.log(
      `Media pentru student ul ${this.Nume} ${this.Prenume} este ${this.media}`
    )
  }
}
