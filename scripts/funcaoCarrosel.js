const programTitle = document.getElementById("programTitle");
const codeEl = document.getElementById("programCode");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const programs = [
  { title: "Ordenar Crescente e Decrescente", file: "../scripts/scripts-logica-prog/5ordenarCresDec.js" },
  { title: "Ordenar com BubbleSort", file: "../scripts/scripts-logica-prog/6bubbleSort.js" },
  { title: "Somar Array", file: "../scripts/scripts-logica-prog/7somarArr.js" },
  { title: "Matriz 3x3", file: "../scripts/scripts-logica-prog/8matrizFixa.js" },
  { title: "Calcular IMC", file: "../scripts/scripts-logica-prog/9calcularIMC.js" },
  { title: "Conversor de Temperatura", file: "../scripts/scripts-logica-prog/10conversorTemperatura.js" },
  { title: "Busca Linear", file: "../scripts/scripts-logica-prog/11buscaLinear.js" }
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
