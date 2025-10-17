// 7. Apresente um script para somar 10 números aleatórios de 1 a 220 em um array.

function gerarArrayAleatorio(min, max, qnt) {
    let arr = []
    for (let i = 0; i < qnt; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }

    return arr
}

function somarArray(arr){
    let soma = 0
    for(let i = 0; i < arr.length; i++){
        soma += arr[i]
    }
    return soma
}

somarArray(gerarArrayAleatorio(1, 220, 10))