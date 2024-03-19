export default function initMensagemCartVazio(){
  let msgCart = document.createElement('p');
  msgCart.classList.add('cart-texto');
  msgCart.innerHTML = 'Seu carrinho está vazio.';

  const cartMsg = document.querySelector('.cart-list');
  cartMsg.append(msgCart);
};