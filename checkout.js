document.getElementById('finalizar-compra').addEventListener('click'), function() {
    const nome = document.getElementById('name').value;
    const endereco = document.getElementById('address').value;
    const cidade = document.getElementById('city').value;
    const cep = document.getElementById('postal-code').value;
    const estado = document.getElementById('state').value;}
    
    const metodoPagamento = document.querySelector('input[name="payment-method"]:checked').value;
    
    if (metodoPagamento === "credit-card") {
        const nomeCartao = document.getElementById('card-name').value;
        const numeroCartao = document.getElementById('card-number').value;
        const validade = document.getElementById('expiry').value;







    }
