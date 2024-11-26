function mostrarDetalhes(arma) {
    // Verifica se os elementos estão presentes
    var listaArmas = document.getElementById("armas-lista");
    var detalhesArma = document.getElementById("arma-detalhes");

    // Se os elementos não estiverem presentes, sai da função
    if (!listaArmas || !detalhesArma) {
        console.error("Elementos não encontrados!");
        return;
    }

    // Esconde a lista de armas
    listaArmas.style.display = "none";

    // Exibe a seção de detalhes
    detalhesArma.style.display = "block";

    // Inicialização de variáveis para os detalhes
    let nomeArma = "";
    let descricaoArma = "";
    let imagemArma = "";
    let detalhesArmaLista = [];

    // Configura os detalhes com base na arma selecionada
    if (arma === "ak47") {
        nomeArma = "AK-47";
        descricaoArma = "Rifle de alta potência, ideal para confrontos de longo alcance.";
        imagemArma = "<img src='../images/ak-details.jpg' alt='AK-47 Detalhes'>";
        detalhesArmaLista = [
            "<strong>Dano:</strong> 111 (cabeça)",
            "<strong>Preço:</strong> $2700",
            "<strong>Categoria:</strong> Rifle"
        ];
    } else if (arma === "m4a1") {
        nomeArma = "M4A1-S";
        descricaoArma = "Rifle silencioso com excelente precisão. Ideal para CTs.";
        imagemArma = "<img src='../images/M4A1-S-Comp.png' alt='M4A1-S Detalhes'>";
        detalhesArmaLista = [
            "<strong>Dano:</strong> 88 (cabeça)",
            "<strong>Preço:</strong> $3100",
            "<strong>Categoria:</strong> Rifle"
        ];
    } else if (arma === "deagle") {
        nomeArma = "Desert Eagle";
        descricaoArma = "Pistola de alto dano, boa para eliminação de inimigos em uma bala.";
        imagemArma = "<img src='../images/Desert-Details.jpg' alt='Desert Eagle Detalhes'>";
        detalhesArmaLista = [
            "<strong>Dano:</strong> 150 (cabeça)",
            "<strong>Preço:</strong> $700",
            "<strong>Categoria:</strong> Pistola"
        ];
    } else if (arma === "awp") {
        nomeArma = "AWP";
        descricaoArma = "A AWP (Arctic Warfare Police) é uma das rifles de sniper mais poderosas do jogo, capaz de eliminar um inimigo com um único tiro na cabeça.";
        imagemArma = "<img src='../images/awp-details.jpg' alt='AWP Detalhes'>";
        detalhesArmaLista = [
            "<strong>Dano:</strong> 450 (cabeça) 101 (corpo)",
            "<strong>Preço:</strong> $4.750",
            "<strong>Categoria:</strong> Sniper"
        ];
    } else if (arma === "mac") {
        nomeArma = "MAC-10";
        descricaoArma = "A MAC-10 é uma submetralhadora leve e de baixo custo, ideal para situações de combate rápido e agressivo.";
        imagemArma = "<img src='../images/mac-details.jpeg' alt='MAC-10 Detalhes'>";
        detalhesArmaLista = [
            "<strong>Dano:</strong> 27 (cabeça)",
            "<strong>Preço:</strong> $1.050",
            "<strong>Categoria:</strong> Submetralhadora"
        ];
    } else if (arma === "glock") {
        nomeArma = "Glock-18";
        descricaoArma = "A Glock-18 é a pistola padrão dos Terroristas (T), oferecendo uma opção barata e eficaz no início de cada rodada.";
        imagemArma = "<img src='../images/glock-details.webp' alt='Glock-18 Detalhes'>";
        detalhesArmaLista = [
            "<strong>Dano:</strong> 40 (cabeça)",
            "<strong>Preço:</strong> $500",
            "<strong>Categoria:</strong> Pistola"
        ];
    }

    // Atualiza os elementos de detalhes na página
    document.getElementById("arma-nome").textContent = nomeArma;
    document.getElementById("arma-detalhes-lista").innerHTML = detalhesArmaLista.map(item => `<li>${item}</li>`).join("");
    document.getElementById("arma-imagem").innerHTML = imagemArma;
}

function fecharDetalhes() {
    // Verifica se os elementos estão presentes
    var listaArmas = document.getElementById("armas-lista");
    var detalhesArma = document.getElementById("arma-detalhes");

    // Se os elementos não estiverem presentes, sai da função
    if (!listaArmas || !detalhesArma) {
        console.error("Elementos não encontrados!");
        return;
    }

    // Mostra a lista de armas novamente
    listaArmas.style.display = "block";

    // Esconde a seção de detalhes
    detalhesArma.style.display = "none";
}
