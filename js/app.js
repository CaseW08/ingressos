function comprar () {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    let qtdIngresso = document.getElementById(`qtd-${tipoIngresso}`).textContent;
    
    if (quantidade >= 1) {
        if (qtdIngresso <= 0) {
            alert('Ingressos esgotados!');
        } else if (quantidade > qtdIngresso) {
            alert('Quantidade superior ao total disponível!');
        } else {
            document.getElementById(`qtd-${tipoIngresso}`).textContent = qtdIngresso - quantidade;
            alert('Compra realizada com sucesso!');
        }
    } else {
        alert('Selecione uma quantidade valida!');
    }
    
    
    document.getElementById('qtd').value = '';
}