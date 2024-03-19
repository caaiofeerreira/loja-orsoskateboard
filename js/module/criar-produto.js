export default function initCriarProduto(imagenProduto, nomeProduto, tamanhoProduto, precoProduto, qtdProduto) {
  const newCardProduto = document.createElement('div');
  newCardProduto.classList.add('cart-produto');
  newCardProduto.innerHTML = `
    <img src="${imagenProduto}">
    <h1>${nomeProduto}</h1>
    <p>Tam. ${tamanhoProduto}</p>
    <p class="qtd">Qtd.<br>${qtdProduto}</p>
    <span>${precoProduto}</span>
    <ion-icon class="lixeira-cart" name="trash-outline"></ion-icon>
  `;
  return newCardProduto;
};