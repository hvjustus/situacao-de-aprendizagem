function gerarArrayAleatorio(min, max, qnt) {
    let arr = []
    for (let i = 0; i < qnt; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    return arr
}

function bubbleSort(arr) {
    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - 1 - j; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i + 1]
                arr[i + 1] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr
}

bubbleSort(gerarArrayAleatorio(1, 20, 10))