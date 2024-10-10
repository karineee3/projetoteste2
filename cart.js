const produtos = [
    { id: 1, nome: 'Brigadeiro Gourmet', preco: 5.99, quantidade: 1 },
    { id: 2, nome: 'Bolo de Cenoura', preco: 25.00, quantidade: 2 },
    { id: 3, nome: 'Pé de Moleque', preco: 3.00, quantidade: 1 }
];
function renderCartItems() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    cartItems.innerHTML = ''; 

    produtos.forEach(produto => {
        const subtotal = produto.preco * produto.quantidade;
        total += subtotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.quantidade}</td>
            <td>R$ ${produto.preco.toFixed(2)}</td>
            <td>R$ ${subtotal.toFixed(2)}</td>
            <td><button onclick="removerProduto(${produto.id})">Remover</button></td>
        `;
        cartItems.appendChild(row);
    });

    cartTotal.textContent = total.toFixed(2); 
}


function removerProduto(id) {
    const index = produtos.findIndex(produto => produto.id === id);
    if (index !== -1) {
        produtos.splice(index, 1);
        renderCartItems(); 
    }
}


window.onload = renderCartItems;
