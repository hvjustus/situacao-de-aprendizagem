function gerarMatrizAleatoria(lado, min, max) {
    let mat = [], cont = 1
    for (let i = 0; i < lado; i++) {
        mat[i] = []
        for (let j = 0; j < lado; j++) {
            mat[i][j] = Math.floor(Math.random() * (max - min + 1)) + min
        }
    }
    console.table(mat)
    return mat
}

function principal(){
    let mat = gerarMatrizSequencial(3, 1, 20)
}

principal()