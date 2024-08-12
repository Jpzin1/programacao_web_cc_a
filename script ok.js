const urlParams = new URLSearchParams(window.location.search);
        const nome = urlParams.get('name');

        if (nome) {
            document.getElementById('mensagem').innerText = `Parabéns, ${nome}! Seus dados foram enviados com sucesso.`;
        } else {
            document.getElementById('mensagem').innerText = `Parabéns! Seus dados foram enviados com sucesso.`;
        }