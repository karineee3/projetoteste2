document.addEventListener('DOMContentLoaded', onInit);

let cart = [
    {id: 1, nome: '', preco: 0, quantidade: 0, imagem: ''},
    {id: 2, nome: '', preco: 0, quantidade: 0, imagem: ''}
];

function renderCart() {
   const cartItemsDiv = document.getElementById('cart-items');
   const itemCount = document.getElementById('item-count');
   const totalPrice = document.getElementById('total-price');

   cartItemsDiv.innerHTML = ''; 

   let totalItems = 0;
   let totalCost = 0;

   cart.forEach(item => {
       const cartItemDiv = document.createElement('div');
       cartItemDiv.classList.add('cart-item');

       cartItemDiv.innerHTML = `
           <img src="${item.imagem}" alt="${item.nome}">
           <div>
               <strong>${item.nome}</strong>
               <span>R$ ${(item.preco).toFixed(2)}</span>
               <span>Quantidade: ${item.quantidade}</span>
           </div>
           <button onclick="removeItem(${item.id})">Remover</button>
       `;

       cartItemsDiv.appendChild(cartItemDiv);

       totalItems += item.quantidade;
       totalCost += item.preco * item.quantidade;
   });

   itemCount.textContent = totalItems;
   totalPrice.textContent = `R$ ${totalCost.toFixed(2)}`;
}

function removeItem(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    renderCart();
}


function onInit() {
    renderCart();
}
