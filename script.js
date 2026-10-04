let formulario = document.getElementById("formulario");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("mensagem", mensagem);

    mostrarCandidatura();
});

function mostrarCandidatura() {
    let nomeSalvo = localStorage.getItem("nome");
    let emailSalvo = localStorage.getItem("email");
    let mensagemSalvo = localStorage.getItem("mensagem");

    if (nomeSalvo && emailSalvo) {
        resultado.innerHTML = `
            <p><strong>Nome:</strong> ${nomeSalvo}</p>
            <p><strong>Email:</strong> ${emailSalvo}</p>
            <p><strong>Mensagem:</strong> ${mensagemSalvo}</p>
        `;
    }
}
mostrarCandidatura();
