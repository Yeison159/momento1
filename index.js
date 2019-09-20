
const fs = require('fs');

console.log("Escribe tu nombre:");
var stdin = process.openStdin();

stdin.addListener("data", function(d) {

    let idioma = [];
    idioma.push("Hola " + 
    d.toString().trim());
    idioma.push("Hello " + 
    d.toString().trim());
    idioma.push("Ciao " + 
    d.toString().trim());

var contenido = "";

for (let index = 0; index < idioma.length; index++) {
    contenido += `${idioma[index]}`+ "\n";
}

console.log(contenido);

 let nombre = d.toString().trim();
 fs.writeFile(
    `Saludo ${ nombre }.txt` , 
    contenido, 
    (err) => {
        if (err) 
            throw err;
        console.log(`El saludo a  ${ nombre } se ha  creado con éxito.`);
    }
);

  });