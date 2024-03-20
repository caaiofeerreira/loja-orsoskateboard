import initMenuMobile from './js/module/menu-mobile.js';
import initAbrirFecharCarrinho from './js/module/abrir-fechar-carrinho.js';
import initTamanho from './js/module/tamanhos.js';
import initTamanhoSelecionado from './js/module/tamanho-selecionado.js';
import initVerificarFinalizarCompra from './js/module/verificar-finalizar-compra.js';
import initMensagemCart from './js/module/mensagem-carrinho.js';
import initCriarProduto from './js/module/criar-produto.js';

initMenuMobile();
initAbrirFecharCarrinho();
initTamanho();
initVerificarFinalizarCompra();
initMensagemCart();

let valorTotalCart = 0;
let contadorProdutos = 0;

function initValorTotal() {
  const cart = document.querySelector('.cart-list');
  let valorCart = document.querySelector('.valor-cart');

  if (!valorCart) {
    valorCart = document.createElement('div');
    valorCart.classList.add('valor-cart');
    const cartValor = document.querySelector('.cart-add');
    cartValor.append(valorCart);
  };

  if (cart.children.length === 0) {
    valorCart.style.display = 'none';
  } else {
    const valorTotalFormatado = valorTotalCart.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    valorCart.innerHTML = `<p>${valorTotalFormatado}</p>`;
    valorCart.style.display = 'flex';
  };
};

function initProdutoCarrinho() {
  const imagenProduto = document.querySelector('.section-img').children[0].src;
  const nomeProduto = document.querySelector('.nome-produto').innerText;
  const precoProduto = document.querySelector('.preco-produto').innerText;
  const tamanhoProduto = document.querySelector('.tamanho-select').innerText;
  const qtdProduto = 1;

  const newCardProduto = initCriarProduto(imagenProduto, nomeProduto, tamanhoProduto, precoProduto, qtdProduto);

  const cart = document.querySelector('.cart-list');
  cart.append(newCardProduto);

  const valorProduto = parseFloat(precoProduto.replace('R$', '').replace(',', '.'));
  valorTotalCart +=  valorProduto

  contadorProdutos++;

  let iconCartSpan = document.querySelector('.produtos-add span');
  iconCartSpan.innerText = contadorProdutos;

  const lixeiraCart = newCardProduto.querySelector('.lixeira-cart');
  lixeiraCart.onclick = limpar;

  function limpar(event) {
    const produto = event.target.parentElement;
    produto.remove();

    valorTotalCart -= valorProduto

    contadorProdutos--;

    iconCartSpan.innerText = contadorProdutos;

    initVerificarFinalizarCompra();

    initValorTotal();

    initMensagemCart();
  };
  initVerificarFinalizarCompra();

  initMensagemCart();
};

function initComprar(){
  const comprar = document.querySelector('.comprar');
  comprar.addEventListener('click', () => {
  
    initProdutoCarrinho(); 

    initValorTotal();

    initTamanhoSelecionado();

    initVerificarFinalizarCompra();
  });
};
initComprar();