document.getElementById('loginButton').addEventListener('click', function() {
    const Nome = document.getElementById('Nome').value;

    if (Nome) {
        window.location.href = `ok.html?name=${encodeURIComponent(Nome)}`;
    } else {
        document.getElementById('message').innerText = "Por favor, insira seu nome!";
    }
});

/* permitir apenas letras no input de nome */

document.getElementById('Nome').addEventListener('input', function() {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, '');


});

/* permitir apenas numeros no input de cpf */

document.getElementById('CPF').addEventListener('input', function() {
let cpf = this.value.replace(/\D/g,''); /* Remover qualquer caracteres não numericos */
if(cpf.length <= 11) {
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

this.value = cpf;

});
/* permitir apenas numeros no input de idade */

document.getElementById('Idade').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');


});