const casa = [
    [document.querySelector('#aa'), document.querySelector('#ab'), document.querySelector('#ac')], 
    [document.querySelector('#ba'), document.querySelector('#bb'), document.querySelector('#bc')], 
    [document.querySelector('#ca'), document.querySelector('#cb'), document.querySelector('#cc')]
];
const reset = document.querySelector('#reiniciar');
reset.addEventListener('mouseover', () => {
    reset.style.backgroundColor = "#d1385e";
});

reset.addEventListener('mouseout', () => {
    reset.style.backgroundColor = "#e83f68";
    reset.style.height = "70px";
    reset.style.width = "170px";
    reset.style.fontSize = "20px";
})

reset.addEventListener('mouseup', () => {
    reset.style.backgroundColor = "#d1385e";
    reset.style.height = "70px";
    reset.style.width = "170px";
    reset.style.fontSize = "20px";
});

reset.addEventListener('mousedown', () => {
    reset.style.backgroundColor = "#c1284e";
    reset.style.height = "60px";
    reset.style.width = "150px";
    reset.style.fontSize = "18px";
});

for (let linha = 0; linha < casa.length; linha++){
    for (let coluna = 0; coluna < casa[linha].length; coluna++){
        casa[linha][coluna].addEventListener('mouseover', () => {hoverCasa(linha, coluna)});
    };
};

for (let linha = 0; linha < casa.length; linha++){
    for (let coluna = 0; coluna < casa[linha].length; coluna++){
        casa[linha][coluna].addEventListener('mouseout', () => {mouseoutCasa(linha, coluna)});
    };
};

function hoverCasa(linha, coluna){
    casa[linha][coluna].style.backgroundColor = "#88888833";
};

function mouseoutCasa(linha, coluna){
    casa[linha][coluna].style.backgroundColor = "";
};