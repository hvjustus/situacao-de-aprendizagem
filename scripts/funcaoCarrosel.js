document.addEventListener("DOMContentLoaded", () => {
    const programas = [
        { nome: "Ordenar Crescente e Decrescente", arquivo: "../scripts/5ordenarCresDec.js" },
        { nome: "Ordenar com BubbleSort", arquivo: "../scripts/6bubbleSort.js" },
        { nome: "Somar Array", arquivo: "../scripts/7somarArr.js" },
        { nome: "Matriz 3x3", arquivo: "../scripts/8matrizFixa.js" },
        { nome: "Calcular IMC", arquivo: "../scripts/9calcularIMC.js" },
        { nome: "Conversor de Temperatura", arquivo: "../scripts/10conversorTemperatura.js" },
        { nome: "Busca Linear", arquivo: "../scripts/11buscaLinear.js" }
    ];

    let index = 0;

    const titulo = document.getElementById("tituloPrograma");
    const codigoArea = document.getElementById("codigo");
    const resDiv = document.getElementById("res");

    const carregarPrograma = i => {
        const { nome, arquivo } = programas[i];
        titulo.textContent = nome;
        resDiv.textContent = "";
        fetch(arquivo)
            .then(res => res.text())
            .then(texto => codigoArea.textContent = texto)
            .catch(() => codigoArea.textContent = "Erro ao carregar código 😢");
    };

    const mudarPrograma = delta => {
        index = (index + delta + programas.length) % programas.length;
        carregarPrograma(index);
    };

    document.getElementById("prevBtn")?.addEventListener("click", () => mudarPrograma(-1));
    document.getElementById("nextBtn")?.addEventListener("click", () => mudarPrograma(1));

    document.getElementById("runBtn")?.addEventListener("click", () => {
        try { resDiv.textContent = eval(codigoArea.textContent) ?? ""; }
        catch { resDiv.textContent = "Erro ao executar o código ⚠️"; }
    });

    carregarPrograma(index);
});
