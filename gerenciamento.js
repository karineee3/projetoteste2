// gerenciamento.js

// Array para armazenar os produtos
let produtos = [];

// Função para cadastrar um produto
function cadastrarProduto(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Coleta os dados do formulário
    const nome = document.getElementById('nomeProduto').value;
    const descricao = document.getElementById('descricaoProduto').value;
    const preco = parseFloat(document.getElementById('precoProduto').value);
    const imagem = document.getElementById('imagemProduto').files[0];

    // Cria um objeto produto
    const novoProduto = {
        id: produtos.length + 1, // Gera um ID simples
        nome,
        descricao,
        preco,
        imagem: URL.createObjectURL(imagem) // Cria um URL temporário para a imagem
    };

    // Adiciona o produto ao array
    produtos.push(novoProduto);
    alert('Produto cadastrado com sucesso!');

       // Redireciona para a página de produtos
       window.location.href = 'produtos.html';

    // Limpa o formulário
    document.getElementById('cadastroProduto').reset();
}

// Função para editar um produto
function editarProduto(event) {
    event.preventDefault(); // Evita o envio do formulário

    const id = parseInt(document.getElementById('idProduto').value);
    const novoNome = document.getElementById('novoNomeProduto').value;
    const novaDescricao = document.getElementById('novaDescricaoProduto').value;
    const novoPreco = parseFloat(document.getElementById('novoPrecoProduto').value);
    const novaImagem = document.getElementById('novaImagemProduto').files[0];

    // Procura o produto pelo ID
    const produto = produtos.find(p => p.id === id);
    if (produto) {
        // Atualiza os dados do produto
        produto.nome = novoNome;
        produto.descricao = novaDescricao;
        produto.preco = novoPreco;
        if (novaImagem) {
            produto.imagem = URL.createObjectURL(novaImagem);
        }
        alert('Produto editado com sucesso!');
    } else {
        alert('Produto não encontrado!');
    }

    // Limpa o formulário
    document.getElementById('edicaoProduto').reset();
}

// Função para remover um produto
function removerProduto(event) {
    event.preventDefault(); // Evita o envio do formulário

    const id = parseInt(document.getElementById('idProdutoExcluir').value);

    // Filtra o produto a ser removido
    produtos = produtos.filter(p => p.id !== id);
    alert('Produto removido com sucesso!');

    // Limpa o formulário
    document.getElementById('idProdutoExcluir').value = '';
}

// Função para listar os produtos
function listarProdutos() {
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = ''; // Limpa a lista existente

    // Cria elementos de lista para cada produto
    produtos.forEach(produto => {
        const divProduto = document.createElement('div');
        divProduto.className = 'produto';
        divProduto.innerHTML = `
            <h5>${produto.nome}</h5>
            <p>${produto.descricao}</p>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <img src="${produto.imagem}" alt="${produto.nome}" style="width: 100px; height: auto;">
            <hr>
        `;
        listaProdutos.appendChild(divProduto);
    });
}

// Chama a função listarProdutos sempre que a aba de listagem é ativada
document.getElementById('listar-tab').addEventListener('click', listarProdutos);












