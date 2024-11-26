function mostrarDetalhes(mapa) {
    // Dados dos mapas
    const mapasDetalhes = {
        dust2: {
            nome: "Dust 2",
            descricao:
                "O clássico mapa, refeito e com gráficos renovados. Conhecido pela popularidade e equilíbrio entre Terroristas e Contra-Terroristas.",
            imagem: "../images/dust2-2-aquarius.jpeg",
            alt: "Imagem do mapa Dust 2",
        },
        mirage: {
            nome: "Mirage",
            descricao:
                "Mapa altamente competitivo, famoso por sua grande quantidade de entradas no A e B. Requer boa comunicação e habilidades táticas.",
            imagem: "../images/mirage-cs2-1.jpg",
            alt: "Imagem do mapa Mirage",
        },
        inferno: {
            nome: "Inferno",
            descricao:
                "Mapa de combate próximo, perfeito para estratégias de site e controle de posições. Ideal para trabalho em equipe.",
            imagem: "../images/cs-2-inferno-4.jpg",
            alt: "Imagem do mapa Inferno",
        },
        nuke: {
            nome: "Nuke",
            descricao:
                "Mapa altamente competitivo, conhecido pela sua verticalidade e desafios táticos. Com vários andares e entradas para os sites A e B, exige boa coordenação entre a equipe e controle de pontos estratégicos como escadas e o topo do silo.",
            imagem: "../images/nuke-details.jpg",
            alt: "Imagem do mapa Nuke",
        },
        cache: {
            nome: "Cache",
            descricao:
                "Mapa equilibrado com muitas entradas para os sites A e B. O controle do meio é essencial para definir a estratégia da partida.",
            imagem: "../images/cache-details.jpg",
            alt: "Imagem do mapa Cache",
        },
        train: {
            nome: "Train",
            descricao:
                "Mapa clássico com temática ferroviária, famoso pelos vagões e plataformas que exigem controle cuidadoso e comunicação constante. As equipes devem dominar áreas como o ponto B e os pontos elevados.",
            imagem: "../images/train-details.png",
            alt: "Imagem do mapa Train",
        },
    };

    // Verifica se o mapa existe no objeto
    const mapaSelecionado = mapasDetalhes[mapa];
    if (!mapaSelecionado) {
        console.error("Mapa não encontrado:", mapa);
        return;
    }

    // Atualiza os detalhes no HTML
    document.getElementById("mapas-lista").style.display = "none"; // Esconde a lista
    document.getElementById("mapa-detalhes").style.display = "block"; // Exibe os detalhes

    document.getElementById("mapa-nome").textContent = mapaSelecionado.nome;
    document.getElementById("mapa-descricao").textContent =
        mapaSelecionado.descricao;

    const imagemElemento = document.getElementById("mapa-imagem");
    imagemElemento.src = mapaSelecionado.imagem;
    imagemElemento.alt = mapaSelecionado.alt;
}

function fecharDetalhes() {
    // Mostra a lista de mapas novamente
    document.getElementById("mapas-lista").style.display = "block";

    // Esconde a seção de detalhes
    document.getElementById("mapa-detalhes").style.display = "none";
}
