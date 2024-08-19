document.getElementById('loginButton').addEventListener('click', function() {
    const nome = document.getElementById('Nome').value;
    const cpf = document.getElementById('CPF').value;
    const idade = document.getElementById('Idade').value;
    const email = document.getElementById('Email').value;

    let errorMessage = '';

    if (!nome) {
        errorMessage += "Por favor, insira seu nome!\n";
    }

    if (!cpf || cpf.replace(/\D/g, '').length !== 11) {
        errorMessage += "Por favor, insira seu CPF corretamente!\n";
    }

    if (!idade) {
        errorMessage += "Por favor, insira sua idade!\n";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        errorMessage += "Por favor, insira um e-mail válido!\n";
    }

    if (errorMessage) {
        document.getElementById('message').innerText = errorMessage;
    } else {
        window.location.href = `ok.html?name=${encodeURIComponent(nome)}&CPF=${encodeURIComponent(cpf)}&idade=${encodeURIComponent(idade)}&Email=${encodeURIComponent(email)}`;
    }
});

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
