export default function initMenuMobile(){
  
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