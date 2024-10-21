// Array de produtos
const produtos = [
    { nome: "Brigadeiro", preco: 5.00, categoria: "brigadeiros", img: "" },
    { nome: "Bombom", preco: 3.00, categoria: "bombons", img: "" },
    { nome: "Bolo de Chocolate", preco: 25.00, categoria: "bolos", img: "" },
    { nome: "Cupcake de Baunilha", preco: 5.00, categoria: "cupcakes", img: "" },
    { nome: "Bolo de Morango", preco: 25.00, categoria: "bolos", img: ""},
];

// Função para mostrar os produtos
function mostrarProdutos(produtosFiltrados) {
    const galeria = document.getElementById("galeria-produtos");
    galeria.innerHTML = ""; // Limpa a galeria antes de adicionar os produtos
    produtosFiltrados.forEach(produto => {
        const div = document.createElement("div");
        div.className = "produto";
        div.innerHTML = `
            <img src="${produto.img}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button class="adicionar-carrinho">Adicionar ao Carrinho</button>
        `;
        galeria.appendChild(div);
    });
}

// Função para filtrar produtos
function filtrarProdutos() {
    const filtroNome = document.getElementById("search").value.toLowerCase();
    const filtroCategoria = document.getElementById("categoria-filter").value;

    const produtosFiltrados = produtos.filter(produto => {
        const nomeCorreto = produto.nome.toLowerCase().includes(filtroNome);
        const categoriaCorreta = filtroCategoria === "todos" || produto.categoria === filtroCategoria;
        return nomeCorreto && categoriaCorreta;
    });

    mostrarProdutos(produtosFiltrados);
}

// Adicionando eventos
document.getElementById("search").addEventListener("input", filtrarProdutos);
document.getElementById("categoria-filter").addEventListener("change", filtrarProdutos);

// Mostrar todos os produtos inicialmente
mostrarProdutos(produtos);

