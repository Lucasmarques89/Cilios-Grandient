// Carrossel de imagens
let indiceAtual = 0;
const imagens = document.querySelectorAll('.carrossel-img');
const totalImagens = imagens.length;

// Função para mudar a imagem do carrossel
function mudarImagem(direcao) {
    // Remove a classe 'active' da imagem atual
    imagens[indiceAtual].classList.remove('active');
    
    // Atualiza o índice
    indiceAtual = (indiceAtual + direcao + totalImagens) % totalImagens;
    
    // Adiciona a classe 'active' à nova imagem
    imagens[indiceAtual].classList.add('active');
}

// Inicia o carrossel automaticamente
setInterval(() => mudarImagem(1), 5000);

// Função para abrir o agendamento
function abrirAgendamento() {
    // Substitua pelo link real do WhatsApp ou sistema de agendamento
    const mensagem = "Olá! Quero agendar o pacote Glam Gradient de cílios e unhas!";
    const numero = "5511999999999"; // Substitua pelo número real
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`, '_blank');
}