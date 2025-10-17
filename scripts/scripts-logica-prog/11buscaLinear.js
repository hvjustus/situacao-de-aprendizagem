let arr = ["macas", "1", "teste", "3"]

function buscaLinear(arr, valor) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valor) {
            console.log("Encontrado \"" + valor + "\" no índice " + i)
            return true
        }
    }
    console.log("\"" + valor + "\" Não Encontrado")
    return false
}

console.log(buscaLinear(arr, "teste"))