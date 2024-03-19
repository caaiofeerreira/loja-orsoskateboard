import initFinalizarCompra from './finalizar-compra.js'

export default function initVerificarFinalizarCompra() {
  const cart = document.querySelector('.cart-list');
  const btnFinalizar = document.querySelector('.btnFinalizar-compra');

  if (cart.children.length === 0) {
    // Se o carrinho estiver vazio, remove o botão "Finalizar Compra", se existir
    if (btnFinalizar) {
      btnFinalizar.remove();
    }
  } else {
  // Se houver produtos no carrinho, mostra o botão "Finalizar Compra", se não existir
    if (!btnFinalizar) {
      initFinalizarCompra();
    };
  };
};