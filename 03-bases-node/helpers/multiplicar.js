const fs = require("fs");

const crearArchivo = async (base = 5, listar) => {
  // console.log(listar);
  try {
    if (listar === true) {
      console.log("===============");
      console.log("Tabla de: ", base);
      console.log("===============");

      let salida = "";
      for (let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
      }

      console.log(salida);
      fs.writeFileSync(`tabla-${base}.txt`, salida);
      // console.log(`tabla-${base}.txt creada`);
    }

    let nameArchivo = `tabla-${base}.txt`;
    return nameArchivo;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  crearArchivo,
};
