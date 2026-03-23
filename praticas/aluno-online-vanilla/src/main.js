import './login.css'

const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const botao = document.querySelector('button')

botao.addEventListener('click', function(e){

    const emailErro = document.querySelector('#emailErro')
    const senhaErro = document.querySelector('#senhaErro')

    emailErro.textContent = '';
    senhaErro.textContent = '';

    let valido = true;

    if (email.value == ''){
        emailErro.textContent = 'O Campo do e-mail é obrigatório';
        return;
    }

        if (senha.value == '') {
        senhaErro.textContent = 'O Campo da senha é obrigatório';
        return;
    }

    if (senha.value.length < 8) {
        senhaErro.textContent = 'Senha deve ter no minímo 8 caracteres';
        return;
    }

    if (valido) {
        window.location.href = "index.html";
    }
})