export default function initAbrirFecharCarrinho(){
  
  const iconCart = document.querySelector('.icon-cart');
  const cartAdd = document.querySelector('#cart-add');
  const main = document.querySelector('.main');

  //Função abrir carrinho
  function abrirCarrinho(){
    iconCart.addEventListener('click', function(){
    cartAdd.classList.toggle('ativo')
    });
  };
  abrirCarrinho();

  //Função para fechar ao clicar fora do carrinho
  function fecharCart(){
    main.addEventListener('click', function(){
      cartAdd.classList.remove('ativo')
    })
  }
  fecharCart();
};