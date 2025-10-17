/* 5. Gere um script para ordenar números de de 1 a 20, em ordem crescente e decrescente */

function gerarArrayAleatorio(min, max, qnt){
    let arr = []
    for(let i = 0; i < qnt; i++){
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    return arr
}

function ordenarArrayCrescente(arr){
    return arr.sort((a, b) => a - b)
}

function ordenarArrayDecrescente(arr){
    return arr.reverse(arr.sort((a, b) => a - b))
}

function principal(){
    let arr = gerarArrayAleatorio(1, 20, 10)

    ordenarArrayCrescente(arr)
    ordenarArrayDecrescente(arr)
}

principal()