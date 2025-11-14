// lei de ohm

// V = I * R
document.getElementById('input1a').addEventListener('input', (event) => {
    const I = parseFloat(event.target.value) || 0;
    const R = parseFloat(document.getElementById('input1b').value) || 0;
    const V = I * R;
    document.getElementById('resTensao').textContent = V.toFixed(2) + ' V';
});

document.getElementById('input1b').addEventListener('input', (event) => {
    const I = parseFloat(document.getElementById('input1a').value) || 0;
    const R = parseFloat(event.target.value) || 0;
    const V = I * R;
    document.getElementById('resTensao').textContent = V.toFixed(2) + ' V';
});

// I = V / R
document.getElementById('input2a').addEventListener('input', (event) => {
    const V = parseFloat(event.target.value) || 0;
    const R = parseFloat(document.getElementById('input2b').value) || 0;
    const I = R !== 0 ? V / R : 0;
    document.getElementById('resCorrente').textContent = I.toFixed(2) + ' A';
});

document.getElementById('input2b').addEventListener('input', (event) => {
    const V = parseFloat(document.getElementById('input2a').value) || 0;
    const R = parseFloat(event.target.value) || 0;
    const I = R !== 0 ? V / R : 0;
    document.getElementById('resCorrente').textContent = I.toFixed(2) + ' A';
});

// R = V / I
document.getElementById('input3a').addEventListener('input', (event) => {
    const V = parseFloat(event.target.value) || 0;
    const I = parseFloat(document.getElementById('input3b').value) || 0;
    const R = I !== 0 ? V / I : 0;
    document.getElementById('resResistencia').textContent = R.toFixed(2) + ' Ω';
});

document.getElementById('input3b').addEventListener('input', (event) => {
    const V = parseFloat(document.getElementById('input3a').value) || 0;
    const I = parseFloat(event.target.value) || 0;
    const R = I !== 0 ? V / I : 0;
    document.getElementById('resResistencia').textContent = R.toFixed(2) + ' Ω';
});

// potencia

// P = V * I
document.getElementById('input4a').addEventListener('input', (event) => {
    const V = parseFloat(event.target.value) || 0;
    const I = parseFloat(document.getElementById('input4b').value) || 0;
    const P = V * I;
    document.getElementById('resPotencia1').textContent = P.toFixed(2) + ' W';
});

document.getElementById('input4b').addEventListener('input', (event) => {
    const V = parseFloat(document.getElementById('input4a').value) || 0;
    const I = parseFloat(event.target.value) || 0;
    const P = V * I;
    document.getElementById('resPotencia1').textContent = P.toFixed(2) + ' W';
});

// P = I² * R
document.getElementById('input5a').addEventListener('input', (event) => {
    const I = parseFloat(event.target.value) || 0;
    const R = parseFloat(document.getElementById('input5b').value) || 0;
    const P = I * I * R;
    document.getElementById('resPotencia2').textContent = P.toFixed(2) + ' W';
});

document.getElementById('input5b').addEventListener('input', (event) => {
    const I = parseFloat(document.getElementById('input5a').value) || 0;
    const R = parseFloat(event.target.value) || 0;
    const P = I * I * R;
    document.getElementById('resPotencia2').textContent = P.toFixed(2) + ' W';
});

// P = V² / R
document.getElementById('input6a').addEventListener('input', (event) => {
    const V = parseFloat(event.target.value) || 0;
    const R = parseFloat(document.getElementById('input6b').value) || 0;
    const P = R !== 0 ? (V * V) / R : 0;
    document.getElementById('resPotencia3').textContent = P.toFixed(2) + ' W';
});

document.getElementById('input6b').addEventListener('input', (event) => {
    const V = parseFloat(document.getElementById('input6a').value) || 0;
    const R = parseFloat(event.target.value) || 0;
    const P = R !== 0 ? (V * V) / R : 0;
    document.getElementById('resPotencia3').textContent = P.toFixed(2) + ' W';
});
