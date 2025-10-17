document.getElementById('botaoInicio').addEventListener('click', function () {
    window.location.href = './home.html';
});

document.getElementById('linkVoltar').addEventListener('click', function (event) {
    event.preventDefault();
    history.back();
});

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".dropdown-btn");
    const menu = document.querySelector(".dropdown-content");

    btn.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
        if (!btn.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove("show");
        }
    });

    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("show");
        });
    });
}); 