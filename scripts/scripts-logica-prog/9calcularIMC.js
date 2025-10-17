function calcularIMC(peso, altura){ // em kg e metros
    return (peso / (altura * altura)).toFixed(2)
}

function principal(){
    calcularIMC(75, 1.80)
}

principal()