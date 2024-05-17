var L1 = window.document.getElementById('ligada')

function estaQuebrada(){
    return L1.src.indexOf('quebrada') > -1
}

function Ligar(){
    if( !estaQuebrada()){
    L1.src = 'Lampada_img/acesa.svg'}
}

function Desligar(){
    if( !estaQuebrada()){
    L1.src = 'Lampada_img/apagada.svg'}
}

L1.addEventListener ('click', Quebrar)
function Quebrar(){
    L1.src = 'Lampada_img/quebrada.svg'
}