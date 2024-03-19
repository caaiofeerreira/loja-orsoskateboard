import initMensagemCartVazio from './mensagem-carrinho-vazio.js'

export default function initMensagemCart() {
  const cart = document.querySelector('.cart-list');
  const textoCart = document.querySelector('.cart-texto');

  if (cart.children.length > 0) {
    // Se houver produtos no carrinho, remover mensagem 'carrinho vazio'
    if (textoCart) {
      textoCart.remove();
    }
  } else {
    // Se o carrinho estiver vazio, exibir mensagem 'carrinho vazio'
    if (!textoCart) {
      initMensagemCartVazio();
    };
  };
};