document.addEventListener('DOMContentLoaded', function() {
    listarProdutos();
    atualizarContadorCarrinho();
});

let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Atualiza o contador do carrinho
function atualizarContadorCarrinho() {
    const contadorCarrinho = document.getElementById('contador-carrinho');
    if (contadorCarrinho) {
        contadorCarrinho.textContent = carrinho.length;
    }
}

// Lista produtos cadastrados no localStorage
function listarProdutos() {
    const listaProdutosDiv = document.getElementById('listaProdutos');
    if (listaProdutosDiv) {
        listaProdutosDiv.innerHTML = '';

        // Recupera os produtos do localStorage
        const produtos = JSON.parse(localStorage.getItem('produtos')) || []; // Verifique se a chave 'produtos' está correta

        if (produtos.length === 0) {
            listaProdutosDiv.innerHTML = '<p>Nenhum produto disponível.</p>';
            return;
        }

        produtos.forEach(produto => {
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('col-md-4', 'mb-4');
            produtoDiv.innerHTML = `
                <div class="card">
                    <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}"> <!-- Adicione a imagem aqui -->
                    <div class="card-body">
                        <h5 class="card-title">${produto.nome}</h5>
                        <p class="card-text">${produto.descricao}</p>
                        <p class="card-text">Preço: R$ ${produto.preco.toFixed(2)}</p>
                        <button class="btn btn-primary" data-id="${produto.id}">Adicionar ao Carrinho</button>
                    </div>
                </div>`;

            listaProdutosDiv.appendChild(produtoDiv);
        });

        // Adiciona event listeners para os botões
        const botoesAdicionar = listaProdutosDiv.querySelectorAll('button');
        botoesAdicionar.forEach(botao => {
            botao.addEventListener('click', function() {
                adicionarAoCarrinho(parseInt(this.getAttribute('data-id')));
            });
        });
    }
}

// Adiciona um produto ao carrinho
function adicionarAoCarrinho(produtoId) {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const produto = produtos.find(p => p.id === produtoId);
    if (produto) {
        carrinho.push(produto);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarContadorCarrinho();
        alert(`${produto.nome} foi adicionado ao carrinho!`);
    }
}














