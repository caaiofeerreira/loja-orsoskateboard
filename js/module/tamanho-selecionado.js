export default function initTamanhoSelecionado(){
  const tamanhoSelect =[...document.querySelectorAll('.tamanho-select')];
  tamanhoSelect.map((el) => {
    el.classList.remove('tamanho-select')
  });
};