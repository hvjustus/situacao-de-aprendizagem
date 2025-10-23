const programTitle = document.getElementById("programTitle");
const codeEl = document.getElementById("programCode");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const programs = [
    { title: "Contador", file: "../scripts/scripts-logica-comp/1contador.js" },
    { title: "Conversor de Km/h em M/s", file: "../scripts/scripts-logica-comp/2conversorKmsMs.js" },
    { title: "Verificar se número é par ou ímpar", file: "../scripts/scripts-logica-comp/3verificarParImpar.js" }
];

let currentIndex = 0;
let isAnimating = false;

async function showCode(index) {
    if (isAnimating) return;
    isAnimating = true;

    codeEl.classList.add("fade-out");
    await new Promise(r => setTimeout(r, 400));

    try {
        const res = await fetch(programs[index].file);
        const text = await res.text();
        codeEl.textContent = text;
        programTitle.textContent = programs[index].title;
        Prism.highlightElement(codeEl);
    } catch {
        codeEl.textContent = "Erro ao carregar código";
    }

    codeEl.classList.remove("fade-out");
    await new Promise(r => setTimeout(r, 400));
    isAnimating = false;
}

nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % programs.length;
    showCode(currentIndex);
};
prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + programs.length) % programs.length;
    showCode(currentIndex);
};

showCode(currentIndex);
