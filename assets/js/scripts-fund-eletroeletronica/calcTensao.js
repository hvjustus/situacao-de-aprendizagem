const calcularTensao = document.getElementById("calcularTensao")
const resultadoOhm = document.getElementById("resultadoOhm");

calcularTensao.addEventListener("click", ()=>{
    const R = Number(document.getElementById("resistencia").value);
    const I = Number(document.getElementById("corrente").value);

    const V = R * I;

    resultadoOhm.innerHTML = ``
    resultadoOhm.innerHTML = `<b>Tensão:</b> ${V} V`
});