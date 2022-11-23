
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
        <h3>${clocksProduct.marca}</h3>
        <p>R$ <span>${novo_preco}</span></p>
        <div class="buttons">
            <button>Adicionar no Carrinho</button>
            <button>Comprar</button>
        </div>
      </div>       
        `
      });
      showProdutos.innerHTML = produtos;
}

const menu = document.getElementById("menu");
const lista = document.querySelector(".lista");
const icons = document.querySelectorAll("#menu i")
console.log(icons)

menu.onclick = () => {
    lista.classList.toggle("showMenu");
    icons[1].classList.toggle('showClose');
    icons[0].classList.toggle('Closemenu');
}

const TextCategory = document.querySelector(".options-category"),
options = document.querySelector(".options"),
optionsFilter = document.querySelector(".optionsFilter");

TextCategory.onclick = () => {
    optionsFilter.classList.toggle("showCategory");
    options.classList.toggle("ShowOptions")
}

showClocks(clocks);


function showMarca(marca){
  let categoria = document.getElementById("categoriaMarcas");

  let marcas = " ";


  marca.forEach((infoMarca) => {
      let marca = infoMarca.marca;
      let id = infoMarca.id

      marcas += `
      <option onclick="filterMarcas(clocks)"  value="${id}">${marca}</option>
      
      `

  });

  categoria.innerHTML = marcas
}

showMarca(clocks)


function filterMarcas(marcas){
  let categoria = document.getElementById("categoriaMarcas");
  const valor = categoria.options[categoria.selectedIndex].text;

  for(let CatMarcas of marcas){
    let allMarcas = CatMarcas.marca;

    if(valor == allMarcas ){
      console.log("foi")
    }
  }
}

