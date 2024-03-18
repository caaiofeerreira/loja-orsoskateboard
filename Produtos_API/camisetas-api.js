// Adicionando produtos ao SHOP usando API
async function fetchCamisetas(url){
  const camisetaResponse = await fetch(url);
  const camisetaJson = await camisetaResponse.json();
  const cardCamisetas = document.querySelector('.cards');
  camisetaJson.forEach(camiseta =>{
    const divCamiseta = criarCamiseta(camiseta);
    cardCamisetas.appendChild(divCamiseta);
  });
};

// Funçao criando card de produtos
function criarCamiseta(camiseta){
  const divCard = document.createElement('div');
  divCard.innerHTML = `
  <div class="card" onclick="mostrarDetalhes('${camiseta.imagem}', '${camiseta.imagemExtra}','${camiseta.id}', '${camiseta.preco}')">
    <img src= ${camiseta.imagem} alt="Modelos com a camiseta ORSO OG">
    <img class="imagem-extra" src= ${camiseta.imagemExtra} alt="Modelos com a camiseta ORSO OG">
    <h2>${camiseta.id}</h2>
    <span class="preco">R$ <strong>${camiseta.preco.toFixed(2).replace('.' , ',')}</strong></span>
  </div>
  `
  return divCard
}
fetchCamisetas('./Produtos_API/camisetas-api.json')

// Função que pega os detalhes do produto selecionado e redireciona a página mostrando mais detalhes
function mostrarDetalhes(imagem, imagemExtra, nome, preco) {
  // Armazenar informações do produto na sessão
  sessionStorage.setItem('produto_imagem', imagem);
  sessionStorage.setItem('produto_imagemExtra', imagemExtra);
  sessionStorage.setItem('produto_nome', nome);
  sessionStorage.setItem('produto_preco', preco);

  // Redireciona para a página 'camiseta-selecionada'
  window.location.href = 'camiseta-selecionada.html';
}

// Obter informações do produto da sessão
let imagem = sessionStorage.getItem('produto_imagem');
let imagemExtra = sessionStorage.getItem('produto_imagemExtra');
let nome = sessionStorage.getItem('produto_nome');
let preco = parseFloat(sessionStorage.getItem('produto_preco')).toFixed(2);

//Passando informações do produto selecionado para a página redirecionada
document.querySelector('#imagem_produto').src = imagem;
document.querySelector('#imagemExtra_produto').src = imagemExtra;
document.querySelector('#nome_produto').textContent = nome;
document.querySelector('#preco_produto').textContent = "R$ " + preco.replace('.', ',');