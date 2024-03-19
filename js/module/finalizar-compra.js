export default function initFinalizarCompra(){
  let btnFinalizar = document.createElement('div');
  btnFinalizar.classList.add('btnFinalizar-compra');
  btnFinalizar.innerHTML = `<p><a href="#">Finalizar Compra</a></p>`;

  const cartBtn = document.querySelector('.cart-add');
  cartBtn.append(btnFinalizar);
};

