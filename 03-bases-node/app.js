const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  // listar
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: "false",
  })
  .check((argv, options) => {
    // console.log("yargs", argv);
    if (isNaN(argv.b)) {
      throw "la base tiene que se numerica";
    }
    return true;
  }).argv;

console.clear();

// console.log(process.argv);
console.log(argv);
console.log("base: yargs", argv.base);

// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");

// const base = 3;
// delete

crearArchivo(argv.b, argv.l)
  .then((nombreArchivo) => console.log(nombreArchivo))
  .catch((err) => console.log(err));
