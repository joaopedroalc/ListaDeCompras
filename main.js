const checkBoxs = document.querySelectorAll('.checkbox');
const itensSelecionados = document.querySelector('.itens-selecionados')
const divItens = document.querySelector('.itens-selecionados p')

let itens = "";
let marcado = false;

checkBoxs.forEach((checkbox) => {
  const caixa = checkbox;
  caixa.addEventListener('click', (el) =>{
    marcado = false;
    if(el.target.checked === true && marcado==false) {
      itens = itens + `
      <div class="resultado">
        <span class="adicionado">${el.target.value}</span>
        <input type="number" name="numero" min="0" max="99" class="num" value="0">
        <img src="/assets/lixeira.png" class="lixeira"/>
      </div>`

      divItens.innerHTML = itens;
    }
  })
})

let car = document.querySelector('.carrinho');
let close = document.querySelector('.close');

function carrinho() {
  itensSelecionados.classList.add('active')
  close.classList.add('on')
}

document.addEventListener('click', (el)=>{
  if(el.target.classList.contains('close')){
    itensSelecionados.classList.remove('active')
    close.classList.remove('on')
  }
  else if(el.target.classList.contains('lixeira')){
    let resultado = el.target.parentNode
    resultado.style.display = 'none'
    resultado.style.visibility = 'hidden'
  }
})

function addTudo(){
  let num = document.querySelectorAll(".num")
  num.forEach(numero => {
    numero.classList.add("range")
  })
}