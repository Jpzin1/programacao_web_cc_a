///////////////////////////////// Validação de tudo ///////////////////////////////////

document.getElementById('loginButton').addEventListener('click', function() {
    const nome = document.getElementById('Nome').value;
    const cpf = document.getElementById('CPF').value;
    const idade = document.getElementById('Idade').value;
    const email = document.getElementById('Email').value;

    let formIsValid= true;

    if (!nome) {
        alert("Por favor, insira seu nome!\n");
        formIsValid = false;
    }

    if (!cpf || cpf.replace(/\D/g, '').length !== 11) {
        alert("Por favor, insira seu CPF corretamente!\n");
        formIsValid = false;
    }

    if (!idade) {
        alert("Por favor, insira sua idade!\n");
        formIsValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
        alert("Por favor, insira um e-mail válido!\n");
        formIsValid = false;
    }

    if (formIsValid) {
        window.location.href = `ok.html?name=${encodeURIComponent(nome)}&CPF=${encodeURIComponent(cpf)}&idade=${encodeURIComponent(idade)}&Email=${encodeURIComponent(email)}`;
    }
});

//////////////////////// Restrições de caracteres ////////////////////////////////////////

// Permitir apenas letras no input de nome
document.getElementById('Nome').addEventListener('input', function() {
    this.value = this.value.replace(/[^a-zA-Z\u00C0-\u017F\s]/g, '');
});

// Permitir apenas 11 números e apenas números no input de CPF
document.getElementById('CPF').addEventListener('input', function() {
    let cpf = this.value.replace(/\D/g, ''); // Remover qualquer caractere não numérico

    if (cpf.length > 11) {
        cpf = cpf.slice(0, 11);
    }

    if (cpf.length <= 11) {
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    this.value = cpf;
});

// Permitir apenas números no input de idade
document.getElementById('Idade').addEventListener('input', function() {
    let idade = this.value.replace(/\D/g, '');

    if (idade.length > 2) {
        idade = idade.slice(0, 2);
    }

    this.value = idade;
});
