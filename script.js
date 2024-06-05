function receberItem() {
  var item = prompt('Digite um item');

  var itensValores = {
    maçã: 2.5,
    banana: 1.2,
    laranja: 3.0,
    abacaxi: 5.5,
    uva: 4.0,
  };
}
document.getElementById('p').innerHTML = 'item digitado:' + item;

if (itensValores[item.toLowerCase()]) {
  document.getElementById('valor').innerHTML =
    'Valor do(a) ' +
    item +
    ': R$ ' +
    itensValores[item.toLowerCase()].toFixed(2);
} else {
  document.getElementById('valor').innerHTML = 'Item não encontrado.';
}

// Chama a função para que ela seja executada
receberItem();
