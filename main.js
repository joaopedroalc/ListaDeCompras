let carrinho = document.querySelector('.carrinho')
let close = document.querySelector('.close')
let itensSelecionados = document.querySelector('.itens-selecionados')
let divContent = document.querySelector('.itens-selecionados div')

mercearia = [
  "Arroz",
  "Feijão",
  "Açucar",
  "Sal",
  "Ovos",
  "Vinagre",
  "Macarrão",
  "Óleo",
  "Mostarda",
  "Ketchup",
  "Maionese",
  "Trigo",
  "Fermento",
  "Pipoca",
  "Adoçante",
]

  frios = [
    "Leite",
    "Iorgute",
    "Manteiga",
    "Presunto",
    "Queijo",
    "Frita",
    "Hamburguer",
  ]

  matinais = [
    "Café",
    "Chá",
    "Achocolatado",
    "Cereais",
    "Geleia",
    "Biscoito",
    "Pães",
    "Pão de Forma",
  ]

  acougue = [
    "Bife",
    "Moída",
    "Fígado",
    "Costela",
    "Porco",
    "Calabresa",
    "Toscana",
    "Frango",
    "Peixe",
  ]
  hortiFruti = [
    "Alho",
    "Alface",
    "Batata",
    "Beterraba",
    "Cenoura",
    "Cebola",
    "Chuchu",
    "Couve",
    "Pimentão",
    "Salsa",
    "Cebolinha",
    "Coentro",
    "Vargem",
    "Maçã",
    "Uva",
    "Banana",
    "Morango",
    "Mamão",
    "Maracujá",
    "Abacate",
    "Abacaxi",
  ]

function adicionarProdutos(produtos) {
  const itens = produtos.map(produto => {
    return `
    <div class="item">
      <label class="label" for="${produto}">${produto}</label>
      <input type="checkbox" class="checkbox" id="${produto}" value="${produto}">
    </div>
    `;
  })
  return itens
}

const todosMercearia = adicionarProdutos(mercearia)
const todosFrios = adicionarProdutos(frios)
const todosMatinais = adicionarProdutos(matinais)
const todosAcougue = adicionarProdutos(acougue)
const todosHortiFruti = adicionarProdutos(hortiFruti)

const containerMercearia = document.querySelector('.containerMercearia')
containerMercearia.innerHTML += todosMercearia

const containerFrios = document.querySelector('.containerFrios')
containerFrios.innerHTML += todosFrios

const containerMatinais = document.querySelector('.containerMatinais')
containerMatinais.innerHTML += todosMatinais

const containerAçougue = document.querySelector('.containerAçougue')
containerAçougue.innerHTML += todosAcougue

const containerHortiFruti = document.querySelector('.containerHortiFruti')
containerHortiFruti.innerHTML += todosHortiFruti


carrinho.onclick = () => {
  itensSelecionados.classList.add('active')
  close.classList.add('on')
}

close.onclick = () => {
  itensSelecionados.classList.remove('active')
  close.classList.remove('on')
}

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready();
}

function ready() {
  let lixeira = document.getElementsByClassName('lixeira')
  for (let i = 0; i < lixeira.length; i++) {
    let button = lixeira[i]
    button.addEventListener('click', removeCartItem)
  }

  let checkboxs = document.getElementsByClassName('checkbox')
  for (let i = 0; i < checkboxs.length; i++) {
    let button = checkboxs[i]
    button.addEventListener('click', addCartClicked)
  }
}

function addCartClicked(event) {
  let button = event.target
  let item = button.parentElement
  let label = item.getElementsByClassName('label')[0].innerHTML
  addProductToCart(label)

  button.parentElement.style.display = 'none'
  button.parentElement.style.overflow = 'hidden'
}

let checkBoxs = document.querySelectorAll('.checkbox')

function addProductToCart(label) {
  let divItens = document.createElement('div')
  divItens.classList.add('resultado')

  let content = `
  <span class="adicionado">${label}</span>
  <input type="number" name="numero" min="0" max="99" class="num" value="1">
  <img src="/assets/lixeira.png" class="lixeira"/>
  `

  checkBoxs.forEach((checkbox) => {
    checkbox.addEventListener('click', (el) => {
      let check = el.target.checked;
      if (check == false) {
        el.target.classList.add('block')
      }
    })
  })

  divItens.innerHTML = content;
  divContent.appendChild(divItens)
  divItens.getElementsByClassName('lixeira')[0].addEventListener('click', removeCartItem)
}

function removeCartItem(event) {
  let r = confirm("Tem certeza ? Se você remover esse item não poderá adiciona-lô novamente!");
  if (r == true) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove()
  }
}

function addTudo() {
  let num = document.querySelectorAll(".num")
  num.forEach(numero => {
    numero.classList.add("range")
  })
}