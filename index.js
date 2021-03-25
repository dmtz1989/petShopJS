const nomeEmpresa = "Petshop JS";

let pets = [{
    nome: 'Billy',
    tipo: 'cachorro',
    idade: 7,
    raça: 'Beagle',
    peso: 5,
    tutor: 'William Faraday',
    contato: '(81)99999-9999',
    vacinado: true,
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
    vacinado: true,
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
        for(let i = 0; i < pets.length; i++) {
            console.log(pets[i].nome);
        }
    }

listarPets();