document.addEventListener('DOMContentLoaded', onInit);

const produtos = [
    { id: 1, nome: "Brigadeiros", categoria: "brigadeiros", preco: "R$ 2,00", imagem: "" },
    { id: 2, nome: "Bomboms", categoria: "bombons", preco: "R$ 3,50", imagem: "" },
    { id: 3, nome: "Bolos", categoria: "bolos", preco: "R$ 25,00", imagem: "" },
    { id: 4, nome: "Cupcakes", categoria: "cupcakes", preco: "R$ 5,00", imagem: "" },
]

function renderizarProdutos(produtos) {
    const galeria = document.getElementById('galeria-produtos');
    galeria.innerHTML = ''; 

    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.className = 'produto';

        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>${produto.preco}</p>
        `;

        galeria.appendChild(produtoDiv);
    });
}


function filtrarProdutos() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const categoria = document.getElementById('categoria-filter').value;

    const produtosFiltrados = produtos.filter(produto => {
        const nomeMatches = produto.nome.toLowerCase().includes(searchTerm);
        const categoriaMatches = categoria === 'todos' || produto.categoria === categoria;
        return nomeMatches && categoriaMatches;
    });

    renderizarProdutos(produtosFiltrados);
}

document.getElementById('search').addEventListener('input', filtrarProdutos);
document.getElementById('categoria-filter').addEventListener('change', filtrarProdutos);


renderizarProdutos(produtos);
