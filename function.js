let valor = 0 ;
let valorTotal = 0;
let valorCliente = 0;
let contador =1;


while (contador != 0) {
    
    valor = parseFloat(prompt("Valor do prduto \n Ou \n 0 para finalizar venda."));
    valorTotal = valorTotal + valor;
    if (valor == 0 ) {
        contador = valor
        finalizarCompra();
    }
}
    function finalizarCompra () {
        valorCliente = parseFloat(prompt("Dinheiro entregue pelo cliente."))
        let troco = valorCliente - valorTotal;
        alert(`Total da Compra ${valorTotal} \n Valor entregue pelo cliente ${valorCliente} \n Troco ${troco}`)
    }