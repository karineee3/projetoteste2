document.addEventListener('DOMContentLoaded', () => {
    inicializarApp();
});

// Variáveis globais
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

// Função principal para inicializar a aplicação
function inicializarApp() {
    listarProdutos();
    atualizarContadorCarrinho();
}

// Atualiza o contador de itens no carrinho
function atualizarContadorCarrinho() {
    const contadorCarrinho = document.getElementById('contador-carrinho');
    if (contadorCarrinho) {
        contadorCarrinho.textContent = carrinho.length;
    }
}

// Lista os produtos cadastrados no localStorage
function listarProdutos() {
    const listaProdutosDiv = document.getElementById('listaProdutos');
    if (!listaProdutosDiv) return;

    listaProdutosDiv.innerHTML = '';

    // Verifica se existem produtos no localStorage
    if (produtos.length === 0) {
        listaProdutosDiv.innerHTML = '<p>Nenhum produto disponível.</p>';
        return;
    }

    produtos.forEach(produto => {
        const produtoDiv = criarProdutoCard(produto);
        listaProdutosDiv.appendChild(produtoDiv);
    });

    // Adiciona event listeners para os botões "Adicionar ao Carrinho"
    const botoesAdicionar = listaProdutosDiv.querySelectorAll('button[data-id]');
    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', () => {
            const produtoId = parseInt(botao.getAttribute('data-id'));
            adicionarAoCarrinho(produtoId);
        });
    });
}

// Cria o card de produto para exibição
function criarProdutoCard(produto) {
    const produtoDiv = document.createElement('div');
    produtoDiv.classList.add('col-md-4', 'mb-4');
    
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    
    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = produto.imagem;
    img.alt = produto.nome;
    
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    
    const titulo = document.createElement('h5');
    titulo.classList.add('card-title');
    titulo.textContent = produto.nome;
    
    const descricao = document.createElement('p');
    descricao.classList.add('card-text');
    descricao.textContent = produto.descricao;
    
    const preco = document.createElement('p');
    preco.classList.add('card-text');
    preco.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;
    
    const botao = document.createElement('button');
    botao.classList.add('btn', 'btn-primary');
    botao.textContent = 'Adicionar ao Carrinho';
    botao.dataset.id = produto.id;
    
    // Adiciona elementos ao cardBody
    cardBody.appendChild(titulo);
    cardBody.appendChild(descricao);
    cardBody.appendChild(preco);
    cardBody.appendChild(botao);
    
    // Adiciona imagem e cardBody ao card
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);
    
    // Adiciona o card ao produtoDiv
    produtoDiv.appendChild(cardDiv);
    
    return produtoDiv;
}

// Adiciona um produto ao carrinho e atualiza localStorage
function adicionarAoCarrinho(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);

    if (produto) {
        carrinho.push(produto);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarContadorCarrinho();
        alert(`${produto.nome} foi adicionado ao carrinho!`);
    } else {
        console.error('Produto não encontrado!');
        alert('Erro ao adicionar produto ao carrinho.');
    }
}
















