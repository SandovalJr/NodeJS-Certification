// setTimeout(function(){
//     console.log('hola mudno');
// },1000)

const getUserbyID = (id, callback) => {
  const user = {
    id,
    nombre: "Elias",
  };

  setTimeout(() => {
    // console.log(user);
    callback(user);
  }, 1500);
};

getUserbyID(10, (usuario) => {
  console.log(usuario.id);
  console.log(usuario.nombre.toUpperCase());
});
