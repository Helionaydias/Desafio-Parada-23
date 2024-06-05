var itens = {
  maçã: 2.5,
  banana: 1.2,
  laranja: 1.8,
  abacaxi: 3.0,
};

// Função para exibir a lista de itens disponíveis
function exibirListaDeItens() {
  var itemList = document.getElementById('itemList');
  for (var item in itens) {
    if (itens.hasOwnProperty(item)) {
      var li = document.createElement('li');
      li.textContent = item;
      itemList.appendChild(li);
    }
  }
}

// Função para receber o item e exibir o valor na tela
function receberItem() {
  var item = document.getElementById('itemInput').value.toLowerCase();
  if (itens.hasOwnProperty(item)) {
    document.getElementById('output').innerText =
      'O valor de ' + item + ' é R$' + itens[item].toFixed(2);
  } else {
    document.getElementById('output').innerText = 'Item não encontrado.';
  }
}

// Adiciona o evento de clique ao botão
document.getElementById('enviarButton').addEventListener('click', receberItem);

// Chama a função para exibir a lista de itens imediatamente
exibirListaDeItens();
