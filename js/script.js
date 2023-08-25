const posicao = [
    [document.querySelector('#aa'), document.querySelector('#ab'), document.querySelector('#ac')], 
    [document.querySelector('#ba'), document.querySelector('#bb'), document.querySelector('#bc')], 
    [document.querySelector('#ca'), document.querySelector('#cb'), document.querySelector('#cc')]
];
const reiniciar = document.querySelector('#reiniciar');
const info = document.querySelector('#info');
const subInfo = document.querySelector('#subInfo');

let posicaoStatus = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
let turno = 0;
let finalizado = false;
let vencedor = 0;

function vitoria() {
    if (posicaoStatus[1][1] != 0 && ((posicaoStatus[0][0] == posicaoStatus[1][1] && posicaoStatus[1][1] == posicaoStatus[2][2]) || (posicaoStatus[0][2] == posicaoStatus[1][1] && posicaoStatus[1][1] == posicaoStatus[2][0]))) {
        finalizado = true;
        return posicaoStatus[1][1];
    };
    for (let i = 0; i < posicaoStatus.length; i++) {
        if (posicaoStatus[i][i] != 0 && ((posicaoStatus[i][0] == posicaoStatus[i][1] && posicaoStatus[i][1] == posicaoStatus[i][2]) || (posicaoStatus[0][i] == posicaoStatus[1][i] && posicaoStatus[1][i] == posicaoStatus[2][i]))) {
            finalizado = true;
            return posicaoStatus[i][i];
        };
    };
    if(turno >= 9){
        finalizado = true;
        return -1;
    };
    return 0;
};

function jogada(linha, coluna){
    if(!finalizado){
        const vezDe = (turno % 2) + 1;
        
        if(posicaoStatus[linha][coluna] == 0){
            posicaoStatus[linha][coluna] = vezDe;
            posicao[linha][coluna].innerHTML = vezDe == 1 ? '<img class="xo" src="img/x.png">' : '<img class="xo" src="img/circulo.png">';
            turno++;
            vencedor = vitoria();
            info.innerHTML = finalizado ? (vencedor == -1 ? "Deu velha!" : (vencedor == 1 ? '<img class="vezDe" src="img/x.png">' : '<img class="vezDe" src="img/circulo.png">') + " venceu!") : "Vez de: " + (vezDe == 2 ? '<img class="vezDe" src="img/x.png">' : '<img class="vezDe" src="img/circulo.png">');
            subInfo.innerHTML = finalizado ? "Clique em reiniciar para jogar novamente!" : "";
        } else {
            subInfo.innerHTML = "Posição já jogada!";
        };
    };
};

for (let linha = 0; linha < posicao.length; linha++){
    for (let coluna = 0; coluna < posicao[linha].length; coluna++){
        posicao[linha][coluna].addEventListener('click', () => {jogada(linha, coluna)});
    };
};

reiniciar.addEventListener('click', () => {
    info.innerHTML = 'Vez de: <img class="vezDe" src="img/x.png">';
    subInfo.innerHTML = "";
    turno = 0;
    finalizado = false;
    for (let linha = 0; linha < posicaoStatus.length; linha++){
        for (let coluna = 0; coluna < posicaoStatus[linha].length; coluna++){
            posicaoStatus[linha][coluna] = 0;
            posicao[linha][coluna].innerHTML = "";
        };
    };
});