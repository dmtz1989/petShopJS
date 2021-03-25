const nomeEmpresa = "Petshop JS";

let pets = [{
    nome: 'Billy',
    tipo: 'cachorro',
    idade: 7,
    raça: 'Beagle',
    peso: 5,
    tutor: 'William Faraday',
    contato: '(81)99999-9999',
    vacinado: false,
    servicos: ['banho','tosa']
},
{
    nome: 'Scooby',
    tipo: 'Cachorro',
    idade: 10,
    raça: 'Dogue Alemãp',
    peso: 30,
    tutor: 'Salsicha',
    contato: '(81)98765-4321',
    vacinado: false,
    servicos: ['banho','tosa','manicure']

},
{
    nome: 'Abu',
    tipo: 'macaco',
    idade: 13,
    raça: 'Macaco Prego',
    peso: 1.5,
    tutor: 'Alladin',
    contato: '(81)91234-5678',
    vacinado: true,
    servicos: ['banho','tosa']
}
];
    const listarPets = () => {
        for(let pet of pets) {
            //console.log(pets[i].nome);
            console.log(`o nome do pet é ${pet.nome}`);
        }
    }

   let nomePet = 'Billy';

    const vacinarPets = () => {
        for (let pet of pets) {
            if (nomePet == pet.nome) {
               if (pet.vacinado == false){
                    pet.vacinado = true;
                    console.log("o pet " + pet.nome + " foi vacinado");
            } else
                console.log("o pet " + pet.nome + " ja está vacinado");
        }   
    }
}

let cont = 0;

     const campanhaVacina = () => {
        for (let pet of pets) {
            if(pet.vacinado == false){
                pet.vacinado = true
                cont++;
            } 
        } console.log("foram vacinados " + cont + " pets");
    }


let novoPet = {
        nome: 'Salém',
        tipo: 'gato',
        idade: 1237,
        raça: 'preto',
        peso: 5,
        tutor: 'sabrina',
        contato: '(81)96666-6666',
        vacinado: false,
        servicos: ['banho','tosa']
    }

    pets.push(novoPet);

listarPets();
vacinarPets();
campanhaVacina();