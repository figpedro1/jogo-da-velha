const posicao = [
    [document.querySelector('#aa'), document.querySelector('#ab'), document.querySelector('#ac')], 
    [document.querySelector('#ba'), document.querySelector('#bb'), document.querySelector('#bc')], 
    [document.querySelector('#ca'), document.querySelector('#cb'), document.querySelector('#cc')]
];
const reiniciar = document.querySelector('#reiniciar');
const addTurno = document.querySelector('#addTurno');

let posicaoStatus = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let turno = 0;

reiniciar.addEventListener('click', () => {
    turno = 0;
    console.log(turno);
});

for (let linha = 0; posicao.length; linha++){
    for(let coluna = 0; posicao[linha]; coluna++){
        posicao[linha][coluna].addEventListener('click', jogada(linha, coluna))
    }
};

function jogada(linha, coluna){
    const vezDe = (turno % 2) + 1
    
    if(posicaoStatus[linha][coluna] == 0){
        posicaoStatus[linha][coluna] = vezDe
    } else {
        return "Posição já jogada!"
    }
};