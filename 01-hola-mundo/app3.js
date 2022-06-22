console.log("inicio programa"); //1

setTimeout(() => {
  console.log("primer TimeOut");
}, 3000);

setTimeout(() => {
  console.log("segundo TimeOut");
}, 0);

setTimeout(() => {
  console.log("tercer TimeOut");
}, 0);

console.log("fin programa");
