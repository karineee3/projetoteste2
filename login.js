document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Aqui você pode adicionar lógica para verificar as credenciais
    alert('Login realizado com sucesso!');

    // Redireciona para a página inicial após login
    window.location.href = 'index.html'; // Altere para o caminho correto do seu arquivo de início
});