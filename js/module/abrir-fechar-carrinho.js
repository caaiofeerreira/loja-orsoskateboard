export default function initAbrirFecharCarrinho(){
  
  const iconCart = document.querySelector('.icon-cart');
  const cartAdd = document.querySelector('#cart-add');
  const main = document.querySelector('.main');

  function abrirCarrinho(){
    iconCart.addEventListener('click', function(){
    cartAdd.classList.toggle('ativo')
    });
  };
  abrirCarrinho();

  function fecharCart(){
    main.addEventListener('click', function(){
      cartAdd.classList.remove('ativo')
    })
  }
  fecharCart();
};