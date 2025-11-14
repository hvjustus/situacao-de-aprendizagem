const resultadoPotencia = document.getElementById("resultadoPotencia")

document.getElementById("calcularPotencia").addEventListener("click", () => {
    const V = Number(document.getElementById("tensao").value);
    const I = Number(document.getElementById("correnteP").value);
    const R = Number(document.getElementById("resistenciaP").value);

    let P = 0;
    if (!isNaN(V) && !isNaN(I)) {
        P = V * I;
    } else if (!isNaN(V) && !isNaN(R)) {
        P = (V * V) / R;
    } else if (!isNaN(I) && !isNaN(R)) {
        P = I * I * R;
    }

    resultadoPotencia.innerHTML = `<b>Potência:</b> ${W} W`
});