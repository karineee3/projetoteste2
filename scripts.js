// Inicialização do carrinho
let cart = [];

// Função para atualizar o contador do carrinho
function updateCartCount() {
    const cartCountElement = document.getElementById('contador-carrinho');
    cartCountElement.innerText = cart.length;
}

// Função para adicionar um produto ao carrinho
function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
        existingProduct.quantity += 1; // Aumenta a quantidade se já existir
    } else {
        cart.push({ ...product, quantity: 1 }); // Adiciona o novo produto
    }
    updateCartCount();
}

// Função para manipular o envio da newsletter
function handleNewsletterSubscription(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const email = document.getElementById("email").value;

    // Exibe uma mensagem de sucesso
    const message = document.getElementById("message");
    message.textContent = `Obrigado por se inscrever, ${email}!`;
    message.classList.add("alert", "alert-success");

    // Limpa o campo de entrada
    document.getElementById("email").value = "";
}

// Adiciona o evento ao formulário de newsletter
document.querySelector(".form-inline").addEventListener("submit", handleNewsletterSubscription);

// Exemplo de produtos destacados
const featuredProducts = [
    { id: 1, name: 'Doce de Leite', price: 10.00, image: 'doces/2072308678-doce-de-leite-cremoso (1).webp' },
    { id: 2, name: 'Brigadeiro Gourmet', price: 15.00, image: 'brgadeirogourmet/brigadeirogourmet2.webp' },
    { id: 3, name: 'Bolo de Pote', price: 20.00, image: 'doces/355179-original.jpg' }
];

// Função para exibir produtos destacados
function displayFeaturedProducts(products) {
    const productsContainer = document.querySelector('.row');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-4';
        productCard.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Preço: R$${product.price.toFixed(2)}</p>
                    <button class="btn btn-primary" onclick="addToCart({ id: ${product.id}, name: '${product.name}', price: ${product.price} })">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
}

// Inicializa a exibição dos produtos destacados
displayFeaturedProducts(featuredProducts);








