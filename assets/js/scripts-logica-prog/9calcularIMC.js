function calcularIMC(peso, altura){
    return (peso / (altura * altura)).toFixed(2)
}

function principal(){
    calcularIMC(75, 1.80)
}

principal()