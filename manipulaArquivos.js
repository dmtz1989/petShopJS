let fs = require('fs');

let bancoDados = fs.readFileSync("arquivo.json", "utf-8");

bancoDados = JSON.parse(bancoDados);

bancoDados.pets.push({

    "nome": "Frank",
    "tipo": "cachorro",
    "idade": 4,
    "raca": "Pug",
    "peso": 3,
    "tutor": "W",
    "contato": "(81)99999-9999",
    "vacinado": "false",
    "servicos": []
})

let updateDados = JSON.stringify(bancoDados);
fs.writeFileSync("arquivo.json", updateDados, "utf-8");

console.log(updateDados);