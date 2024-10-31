document.addEventListener('DOMContentLoaded', function() {
    // Inicializa a exibição dos produtos
    listarProdutos();

    // Atualiza o contador do carrinho ao carregar a página
    atualizarContadorCarrinho();
});

// Array de produtos (você pode preencher com seus produtos reais)
const produtos = [
    { id: 1, nome: "Bolo de Chocolate", preco: 29.90, descricao: "Delicioso bolo de chocolate" },
    { id: 2, nome: "Pudim", preco: 12.50, descricao: "Pudim com calda de caramelo" },
    { id: 3, nome: "Brigadeiro", preco: 1.50, descricao: "Brigadeiro tradicional" },
    { id: 4, nome: "Bolo de Cenoura", preco: 25.00, descricao: "Bolo de cenoura com cobertura de chocolate" },
    { id: 5, nome: "Coxinha", preco: 5.00, descricao: "Coxinha com recheio de frango" }
];

// Recupera o carrinho do localStorage
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Função para atualizar o contador do carrinho
function atualizarContadorCarrinho() {
    const contadorCarrinho = document.getElementById('contador-carrinho');
    if (contadorCarrinho) {
        contadorCarrinho.textContent = carrinho.length;
    }
}

// Função para exibir os produtos na página
function listarProdutos() {
    const listaProdutosDiv = document.getElementById('listaProdutos');
    if (listaProdutosDiv) {
        listaProdutosDiv.innerHTML = '';

        if (produtos.length === 0) {
            listaProdutosDiv.innerHTML = '<p>Nenhum produto disponível.</p>';
            return;
        }

        produtos.forEach(produto => {
            const produtoHTML = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${produto.nome}</h5>
                            <p class="card-text">${produto.descricao}</p>
                            <p class="card-text">Preço: R$ ${produto.preco.toFixed(2)}</p>
                            <button class="btn btn-primary" onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
                        </div>
                    </div>
                </div>`;
            listaProdutosDiv.innerHTML += produtoHTML;
        });
    }
}

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    if (produto) {
        carrinho.push(produto);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarContadorCarrinho();
        alert(`${produto.nome} foi adicionado ao carrinho!`);
    }
}











