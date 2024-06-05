function receberItem() {
  var item = prompt('Digite um item');
  console.log(item);
  document.getElementById('p').innerHTML = item;
}

// Chama a função para que ela seja executada
receberItem();
