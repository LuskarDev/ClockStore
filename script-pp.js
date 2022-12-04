function showProdutos(product){
    let slides = document.querySelector(".slides");
  
    let produtos = " ";
  
  product.forEach((relogios) => {
    let preco = relogios.preco;
    let novo_preco = preco.toFixed(2)
    
    produtos += `
    <div class="swiper-slide slide-product">
  
    <figure>
        <img src="${relogios.img}" alt="${relogios.name}">
    </figure>
    <div class="info-clock">
        <div class="title">
          <h4 class="name-clock">${relogios.nome}</h4>
          <p class="mark">Marca: <span> ${relogios.marca} </span> </p>
        </div>
        <p class="description">${relogios.descricao}</p>
        <p  class="price">R$<span>${novo_preco}</span></p>
        <div class="buttons">
          <button><i class="fa-solid fa-cart-plus"></i></button>
          <button>Mais informações</button>
        </div>
    </div>
  </div>
      `
  })
      slides.innerHTML = produtos
  }
  
showProdutos(clocks);

  
  function slidePrincipal(infoSlide){
  
    let swiper = document.querySelector(".swiper-wrapper");
    let sliders = " ";
  
    infoSlide.forEach((slide) => {
  
        sliders += `
        <div class="swiper-slide">
        <div class="text">
            <h2>${slide.title}</h2>
            <p>${slide.subtitle}</p>
        </div>
  
        <figure>
            <img src="${slide.img}" alt="${slide.title}" title="${slide.title}">
        </figure>    
    </div>
        `
      })
      swiper.innerHTML = sliders
  }

slidePrincipal(slide);

  
  function Showcategory(imgcategory){
      let painel = document.querySelector(".clocks");
      let category = " ";
  
      imgcategory.forEach((categori) => {

        category += `
        <div>
            <a href="">
              <p>${categori.text}</p>
                <figure>
                  <img src="${categori.img}" alt="${categori.text}" title="Categorias de ${categori.text}">
                </figure>
            </a>
        </div>
        `
      })
      painel.innerHTML = category
  }

  Showcategory(category);
  
