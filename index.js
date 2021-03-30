const moment = require('moment');
const nomePetshop = "PETSHOP AVANADE";
const fs = require('fs');

let bancoDados = fs.readFileSync('./arquivo.json');
bancoDados = JSON.parse(bancoDados);

const atualizarDados = () => {
    let petsAtualizado = JSON.stringify(bancoDados);
    fs.writeFileSync('arquivo.json', petsAtualizado, 'utf-8');
}
const listarPets = () => {
   /* for (let pet of bancoDados.pets) {
        //template string
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
        (pet.vacinado) ? console.log("o pet está vacinado \n") : console.log("o pet ainda não foi vacinado \n")
        for (const servico of pet.servicos) {
        console.log(`${servico.data} - ${servico.nome}`);*/
bancoDados.pets.array.forEach((pet)=> {
    console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}, ${(pet.vacinado) ? 'vacinado': 'não vacinado' }`);
    
    pet.servicos.forEach((servico) =>{
        console.log(`${servico.data} - ${servico.nome}`);
    });
});

};
const vacinarPet = pet => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado com sucesso!`);
    } else {
        console.log(`Ops, ${pet.nome} já está vacinado!`);
    }
};
const campanhaVacina = () => {
    console.log("Campanha de vacina 2020");
    console.log("vacinando...");

    let petVacinadosCampanha = 0;
    bancoDados.pets = bancoDados.pets.map((pet) => {
        if (!pet.vacinado) {
            vacinarPet(pet);
            petVacinadosCampanha++;
        }
    return pet;
});

    console.log(`${petVacinadosCampanha} pets foram vaciados nessa campanha!`);
};
const adicionarPet = novoPet => {
        bancoDados.pets.push(novoPet);
        atualizarDados();
        console.log(`${novoPet.nome} foi adicionado com sucesso`);
};
const darBanhoPet = pet => {
    pet.servicos.push({
        'nome':'banho',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de banho tomado!`);
};
const tosarPet = pet => {
    pet.servicos.push({
        'nome':'tosa',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está com cabelinho na régua :)`);
};
const apararUnhasPet = pet => {
    
    pet.servicos.push({
        'nome':'corte de unhas',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de unhas aparadas!`);
};
const atenderCliente = (pet, funcao) => {
    console.log(`\n atendendo ${pet.nome}`);
    funcao(pet);
    console.log('fim do atendimento \n');
};
const buscarPet = (nomePet) => {
    let petEncontrado = bancoDados.pets.find((pet) =>{
        return pet.nome === nomePet;
    });

    return petEncontrado ? petEncontrado: `nenhum pet encontrado com o nome ${nomePet}`;
};
const filtrarTipoPet = (tipoPet) => {
    let petsEncontrados = bancoDados.pets.flter((pet) => {
        return pet.tipo == tipoPet;
    });
    return petsEncontrados;
};
const clientePremium = (pet) => {
    let numServicos = pet.servicos.length;

    if(numServicos > 5 ) {
        console.log(`Olá, ${pet.nome}! Voce é um cliente especial e ganhou um DESCONTÃO!`);
    } else {
        console.log(`Olá, ${pet.nome}! Você ainda não tem descontos =( `);
    }
}


/*atenderCliente(bancoDados.pets[4], apararUnhasPet);
console.log(bancoDados.pets[4].servicos);*/

//console.log("-----------")
//listarPets();

// console.log(pets)