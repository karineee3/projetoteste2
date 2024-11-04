// scripts.js

// Variável para armazenar o contador do carrinho
let contadorCarrinho = 0;

// Função para atualizar o contador do carrinho
function atualizarContadorCarrinho() {
    const contadorElement = document.getElementById('contador-carrinho');
    contadorElement.textContent = contadorCarrinho;
}

// Função para simular a adição de produtos ao carrinho
function adicionarAoCarrinho() {
    contadorCarrinho++;
    atualizarContadorCarrinho();
}

// Função para lidar com a inscrição na newsletter
function inscreverNewsletter(event) {
    event.preventDefault(); // Previne o envio do formulário
    const emailInput = document.getElementById('email');
    const messageElement = document.getElementById('message');

    if (emailInput.value) {
        messageElement.textContent = `Obrigado por se inscrever, ${emailInput.value}!`;
        emailInput.value = ''; // Limpa o campo de email
    } else {
        messageElement.textContent = 'Por favor, insira um e-mail válido.';
    }
}

// Adiciona event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Atualiza o contador do carrinho ao carregar a página
    atualizarContadorCarrinho();

    // Adiciona evento de clique para o botão de inscrição
    const form = document.querySelector('.newsletter form');
    form.addEventListener('submit', inscreverNewsletter);

    // Aqui você pode simular a adição de produtos ao carrinho (por exemplo, quando um botão de "Adicionar ao Carrinho" for clicado)
    // adicione chamadas para a função adicionarAoCarrinho() onde necessário
});








