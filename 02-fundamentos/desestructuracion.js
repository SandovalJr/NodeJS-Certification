const spiderman = {
  nombre: "Tom",
  apellido: "Holland",
  poder: "araña",
  getNombre() {
    return `${this.nombre} ${this.apellido} - ${this.poder}`;
  },
};

// console.log(spiderman.getNombre());

// const nombre = spiderman.nombre;
// const apellido = spiderman.apellido;
// const poder = spiderman.poder;

function imprimeHero({ nombre, apellido, poder, edad = 25 }) {
  nombre = "elias";
  console.log(nombre, apellido, poder, edad);
}

imprimeHero(spiderman);

// extrarar cada propiedad del objeto
// const { nombre, apellido, poder, edad=25 } = spiderman;
// console.log(nombre, apellido, poder, edad);

const heroes = ["deadpool", "thor", "batman"];

const [, , h3] = heroes;
console.log(h3);
