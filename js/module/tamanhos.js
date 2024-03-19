import initTamanhoSelecionado from './tamanho-selecionado.js'

export default function initTamanho(){
  const tamanho = [...document.querySelectorAll('.tamanho-produto')];
  tamanho.map((itens)=>{
    itens.addEventListener('click', (event) =>{
      initTamanhoSelecionado();
      let item = event.target
      item.classList.toggle('tamanho-select')
    });
  });
};