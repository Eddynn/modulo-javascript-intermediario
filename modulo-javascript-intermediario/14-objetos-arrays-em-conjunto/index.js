// let jogo1 = {
//     nome: 'Final fantasy'
// }

// let jogo2 = {
//     nome: 'Fallout'
// }

// let videoGame = {
//     nome: 'Xbox',
//     valor: 3000,
//     jogos: [
//         { nome: 'Final fantasy' },
//         { nome: 'Fallout' }
//     ]
// }

// let jogo3 = {
//     nome: 'Fifa'
// }

// videoGame.jogos.push(jogo3)

// console.log(videoGame)

let cliente = {
    nome: 'Edgard',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos: [
            { nome: 'Fifa' }
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0].nome)