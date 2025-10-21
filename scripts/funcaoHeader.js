document.addEventListener("DOMContentLoaded", () => {
    // Botões do header
    document.getElementById('botaoInicio')?.addEventListener('click', () => location.href = './home.html');
    document.getElementById('linkVoltar')?.addEventListener('click', e => { e.preventDefault(); history.back(); });

    // Dropdown
    const btn = document.querySelector(".dropdown-btn");
    const menu = document.querySelector(".dropdown-content");

    btn?.addEventListener("click", () => menu.classList.toggle("show"));
    document.addEventListener("click", e => {
        if (!btn?.contains(e.target) && !menu?.contains(e.target)) menu?.classList.remove("show");
    });
    menu?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => menu.classList.remove("show")));
});
