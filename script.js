//Função para habilitar menu mobile
function initMenuMobile(){
  
  const toggleBtn = document.querySelector('.toggle-btn');
  const dropDownMenu = document.querySelector('.dropdown-menu');
  const main = document.querySelector('.main');

  //Função para habilitar menu mobile
  function abrirMenuMobile(){
    toggleBtn.onclick = function(){
      dropDownMenu.classList.toggle('ativo');
    };
  };
  abrirMenuMobile();

  //Função para fechar menu mobile
  function fecharMenuMobile() {
    main.addEventListener('click', function(){
      dropDownMenu.classList.remove('ativo')
    })
  }
  fecharMenuMobile();
};
initMenuMobile();

//Função abrir carrinho e fechar carrinho
function initAbrirFecharCarrinho(){
  
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
initAbrirFecharCarrinho();

// Função seleciona o tamanho
function initTamanho(){
  const tamanho = [...document.querySelectorAll('.tamanho-produto')];
  tamanho.map((itens)=>{
    itens.addEventListener('click', (event) =>{
      initTamanhoSelecionado();
      let item = event.target
      item.classList.toggle('tamanho-select')
    });
  });
};
initTamanho();

//Função seleciona apenas UM tamanho 'P,M,G'
function initTamanhoSelecionado(){
  const tamanhoSelect =[...document.querySelectorAll('.tamanho-select')];
  tamanhoSelect.map((el) => {
    el.classList.remove('tamanho-select')
  });
};

// Função que soma o valor total do carrinho
let valorTotalCart = 0;
function initValorTotal() {
  let valorCart = document.querySelector('.valor-cart');
  if (!valorCart) {
    valorCart = document.createElement('div');
    valorCart.classList.add('valor-cart');
    const cartValor = document.querySelector('.cart-add');
    cartValor.append(valorCart);
  }
  const valorTotalFormatado = valorTotalCart.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  valorCart.innerHTML = `<p>${valorTotalFormatado}</p>`;
};

// Função para verificar se o carrinho está vazio e mostrar o botão "Finalizar Compra" correspondente
function initVerificarFinalizarCompra() {
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

// Função para criar o botão 'Finalizar Compra'
function initFinalizarCompra(){
  let btnFinalizar = document.createElement('div');
  btnFinalizar.classList.add('btnFinalizar-compra');
  btnFinalizar.innerHTML = `<p><a href="#">Finalizar Compra</a></p>`;

  const cartBtn = document.querySelector('.cart-add');
  cartBtn.append(btnFinalizar);
};

// Função para verificar se o carrinho está vazio e mostrar mensagem 'carrinho vazio'
function initMensagemCart() {
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
initMensagemCart();

// Função para criar mensagem 'carrinho vazio'
function initMensagemCartVazio(){
  let msgCart = document.createElement('p');
  msgCart.classList.add('cart-texto');
  msgCart.innerHTML = 'Seu carrinho está vazio.';

  const cartMsg = document.querySelector('.cart-list');
  cartMsg.append(msgCart);
};

// Adicionar evento de clique ao botão de comprar
function initComprar(){
  const comprar = document.querySelector('.comprar');
  comprar.addEventListener('click', () => {
  
    // Função para adicionar produto ao carrinho
    criarProduto(); 

    // Função que soma o valor total do carrinho
    initValorTotal();

    //Função seleciona apenas UM tamanho
    initTamanhoSelecionado();

    // Verificar se deve mostrar o botão "Finalizar Compra"
    initVerificarFinalizarCompra();

  });
};
initComprar();

// Função para adicionar produto ao carrinho
const iconCartSpan = document.querySelector('.produtos-add span');
let contadorProdutos = 0;
function criarProduto() {

  const imagenProduto = document.querySelector('.section-img').children[0].src;
  const nomeProduto = document.querySelector('.nome-produto').innerText;
  const precoProduto = document.querySelector('.preco-produto').innerText;
  const tamanhoProduto = document.querySelector('.tamanho-select').innerText;
  const qtdProduto = 1;


  // Criando carrinho com produtos
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

  // Adicionando produto ao carrinho
  const cart = document.querySelector('.cart-list');
  cart.append(newCardProduto);

  // Somando valores do carrinho
  const valorProduto = parseFloat(precoProduto.replace('R$', '').replace(',', '.'));
  valorTotalCart +=  valorProduto

  // Incrementando o contador de produtos
  contadorProdutos++;

  // Atualizando o texto do elemento span
  iconCartSpan.innerText = contadorProdutos;

  // Remover produto ao clicar na lixeira
  const lixeiraCart = newCardProduto.querySelector('.lixeira-cart');
  lixeiraCart.onclick = limpar;

  // Função para limpar o produto do carrinho
  function limpar(event) {
    const produto = event.target.parentElement;
    produto.remove();

    // Subtraindo valores do carrinho
    valorTotalCart -= valorProduto

    // decrementando o contador de produtos ao apagar
    contadorProdutos--;

    // Atualizando o texto do elemento span
    iconCartSpan.innerText = contadorProdutos;

    // Verificar se deve mostrar o botão "Finalizar Compra"
    initVerificarFinalizarCompra();

    // Função que soma o valor total do carrinho
    initValorTotal();

    // Verificar se deve mostrar a mensagem 'carrinho vazio'
    initMensagemCart();
  };
  // Verificar se deve mostrar o botão "Finalizar Compra"
  initVerificarFinalizarCompra();

  // Verificar se deve mostrar a mensagem 'carrinho vazio'
  initMensagemCart();
};