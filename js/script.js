const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');

let currentIndex = 0;

// Função para calcular a largura dos slides
const setSlideWidth = () => {
    const slideWidth = slides[0].getBoundingClientRect().width; // Largura de um slide
    slides.forEach(slide => {
        slide.style.width = `${slideWidth}px`; // Aplica a mesma largura a todos os slides
    });
    moveToSlide(currentIndex); // Ajusta a posição do carrossel
};

// Função para mover o carrossel para o slide correto
const moveToSlide = (index) => {
    const slideWidth = slides[0].getBoundingClientRect().width; // Largura do slide
    track.style.transform = `translateX(-${index * slideWidth}px)`;
};

// Avançar para o próximo slide
const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length; // Ciclo infinito
    moveToSlide(currentIndex);

    // Quando o último slide for alcançado, resetar a posição suavemente
    if (currentIndex === 0) {
        setTimeout(() => {
            track.style.transition = 'none'; // Desativar transição temporariamente
            track.style.transform = `translateX(0)`; // Move para o primeiro slide
        }, 500); // Aguarda o tempo da transição
    }
};

// Voltar para o slide anterior
const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(currentIndex);

    // Quando o primeiro slide for alcançado, resetar a posição suavemente
    if (currentIndex === slides.length - 1) {
        setTimeout(() => {
            track.style.transition = 'none'; // Desativa transição temporariamente
            track.style.transform = `translateX(-${(slides.length - 1) * 100}%)`; // Move para o último slide
        }, 500); // Aguarda o tempo da transição
    }
};

// Reinicia a transição para o carrossel
const resetTransition = () => {
    setTimeout(() => {
        track.style.transition = 'transform 0.5s ease-in-out'; // Restaura a transição
    }, 500); // Tempo para aguardar a transição suave
};

// Configurar botões de navegação
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Rolar automaticamente
let autoScroll = setInterval(nextSlide, 3000); // Muda a cada 3 segundos

// Parar a rolagem automática ao interagir
const stopAutoScroll = () => clearInterval(autoScroll);

nextButton.addEventListener('mouseenter', stopAutoScroll);
prevButton.addEventListener('mouseenter', stopAutoScroll);
track.addEventListener('mouseenter', stopAutoScroll);

// Reiniciar rolagem automática ao sair
const restartAutoScroll = () => {
    autoScroll = setInterval(nextSlide, 3000);
};

nextButton.addEventListener('mouseleave', restartAutoScroll);
prevButton.addEventListener('mouseleave', restartAutoScroll);
track.addEventListener('mouseleave', restartAutoScroll);

// Ajustar o carrossel ao redimensionar a janela
window.addEventListener('resize', setSlideWidth);

