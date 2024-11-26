// Função para mostrar o detalhe de cada dica
function mostrarDetalhes(id) {
    var detalhe = document.getElementById(id);

    // Verifica se o elemento com o ID existe
    if (detalhe) {
        if (detalhe.style.display === "none" || detalhe.style.display === "") {
            detalhe.style.display = "block"; // Exibe a explicação
        } else {
            detalhe.style.display = "none"; // Esconde a explicação
        }
    } else {
        console.error(`Elemento com ID "${id}" não encontrado!`);
    }
}
