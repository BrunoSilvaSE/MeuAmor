document.addEventListener('DOMContentLoaded', function () {
    const botoes = document.querySelectorAll('.btn-digit');
    const input = document.querySelector('#input');
    const inputWrapper = document.querySelector('.input'); // div que envolve o input
    let senha = '';

    botoes.forEach(botao => {
        botao.addEventListener('click', function () {
            const valor = botao.textContent.trim();

            // Verifica se é o botão de backspace
            if (botao.querySelector('img')) {
                senha = senha.slice(0, -1);
            } else {
                if (senha.length >= 4) return; // Limita a 4 dígitos
                senha += botao.textContent.trim();
            }

            // Atualiza o input com asteriscos gigantes
            const restante = 4 - senha.length;
            input.value = senha + '✱'.repeat(restante);


            // Se acertar a senha
            if (senha === '6666') {
                inputWrapper.style.border = '2px solid #2ecc71'; 

                input.value = '❤️❤️❤️❤️'; 

                setTimeout(() => {
                    senha = ""
                    input.value = '✱✱✱✱'
                    inputWrapper.style.border = 'none'
                    window.location.href = 'main.html';
                }, 1000);

            } else if (senha.length > 3){
                inputWrapper.style.border = '2px solid rgb(204, 46, 46)'; 

                input.value = '❌❌❌❌'; 

                // Espera 1 segundo
                setTimeout(() => {
                    senha = ""
                    input.value = '✱✱✱✱'
                    inputWrapper.style.border = 'none'
                }, 1000);
            }
        });
    });
});
