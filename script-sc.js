
function showClocks(productClock){  
     
  let showProdutos = document.querySelector(".all-products");
  
  let produtos = " ";

      productClock.forEach((clocksProduct) => {
        let preco = clocksProduct.preco;
        let novo_preco = preco.toFixed(2);

        produtos += `
      <div class="card-product">
        <figure>
            <img src="${clocksProduct.img2}" alt="${clocksProduct.nome}">
        </figure>
        <h2>${clocksProduct.nome}</h2>
        <h3>Marca:<span id="mark">${clocksProduct.marca}</span></h3>
        <h4>${clocksProduct.genero}</h4>
        <p class="descri">${clocksProduct.descricao}</p>
        <div class="flex">
          <button><i class="fa-solid fa-cart-plus"></i></button>
          <p>R$ <span>${novo_preco}</span></p>
        </div>
        <div class="buttons">
            <button>Comprar</button>
        </div>
      </div>       
        `
      });
      showProdutos.innerHTML = produtos;
}

const menu = document.getElementById("menu");
const lista = document.querySelector(".lista");
const icons = document.querySelectorAll("#menu i");


menu.onclick = () => {
    lista.classList.toggle("showMenu");
    icons[1].classList.toggle('ShowClose');
    icons[0].classList.toggle('Closemenu');
}

const options = document.querySelector(".options"),
optionsFilter = document.querySelector(".optionsFilter"),
h1filter = document.querySelector(".optionsFilter h1")

function ShowCate() {
    optionsFilter.classList.toggle("showCategory");
    optionsFilter.style.opacity = "1";
    h1filter.style.marginBottom = "10px";
    options.classList.toggle("ShowOptions")
}

function CloseFilter() {
  optionsFilter.style.opacity = "0"
}
showClocks(clocks);


function showMarca(marca){
  let categoria = document.getElementById("categoriaMarcas");

  let marcas = " ";

  marca.forEach((infoMarca) => {
      let marca = infoMarca.marca;

      marcas += `
      <option onclick="filterMarcas(clocks)" value="${marca}">${marca}</option>
        
      `
  });

  categoria.innerHTML = marcas;
}

showMarca(clocks)

const input = document.getElementById("search");
var Cards = document.querySelectorAll(".all-products .card-product")

input.addEventListener("input", filterMarcas)


function filterMarcas(){

  let valor = input.value;

  if(valor != ""){
      
    for (let card of Cards){
      var title = card.querySelector('h2');
      let mark = card.querySelector('h3');

      title = title.textContent.toLowerCase();
      mark = mark.textContent.toLowerCase();

      var filterText = input.value.toLowerCase();

      
      if(!title.includes(filterText) && !mark.includes(filterText)){
        card.style.display = "none";
      }
      else {
        card.style.display = "flex";
      } 
    }
  }else {
    
      for(let card of Cards) {
        card.style.display = "flex";
      }
  }
}

const ValueFilter = document.querySelector("#marca select");

ValueFilter.addEventListener("click",() => {
  let value = ValueFilter.value;

  
  for(let card of Cards){
    let cardValue = card.querySelector("span");

    let mark = cardValue.textContent;

    if(!value.includes(mark)){
      card.style.display = "none";
    }else {
      card.style.display = "flex";
    }
  }
  }
)

function filterGenero() {
  let value = ValueFilterG.value;
  value = value.toLowerCase();
  let escolha = document.getElementById("escolha");

  for(let card of Cards){
    const Genero = card.querySelector("h4");

    const valorueGenero = Genero.textContent.toLowerCase();

    escolha.innerText = value;

    if(!value.includes(valorueGenero)){
      card.style.display = "none";
    }else{
      card.style.display = "flex";
    }
  }

}

const ValueFilterG = document.querySelector("#CateGe select");

ValueFilterG.addEventListener("click", filterGenero)

const range = document.querySelector(".filter .range input");

range.addEventListener("input", FilterValue)

function FilterValue(){
    let value = range.value;
    
    for(let card of Cards){
      let price = card.querySelector("p span").textContent;
      let newprice = parseInt(price);

      if(newprice >= value){
        card.style.display = "flex"
      }else{
        card.style.display = "none"
      }

    }
}

function ShowSearch() {
  let inputSea = document.querySelector('nav .input-search');
  let button = inputSea.querySelector("button")
  let input = inputSea.querySelector("input")
  
  input.classList.toggle("Showput")
  button.classList.toggle("Showbtn")
  inputSea.classList.toggle("showSearch")
}
