function customization() {

  function addComponnestButtonsFloat() {
    //ADICIONAR COMPONENTE DE REDES SOCIAIS
    var buttonsFloat = document.createElement("div");
    buttonsFloat.style.position = "fixed";
    buttonsFloat.style.transform = "translate(0%, -50%)";
    buttonsFloat.style.top = "50%";
    buttonsFloat.style.right = "20px";
    buttonsFloat.style.display = "flex";
    buttonsFloat.style.flexDirection = "column";
    buttonsFloat.style.justifyContent = "space-around";
    buttonsFloat.style.padding = "5px";
    buttonsFloat.style.paddingTop = "10px";
    buttonsFloat.style.paddingBottom = "10px";
    buttonsFloat.style.gap = "10px";
    buttonsFloat.style.borderRadius = "40px";
    buttonsFloat.style.backgroundColor = "white";
    buttonsFloat.style.zIndex = "9999";

    //HOVER
    function hoverButton(button) {
      button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.1)";
      });
      button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
      });
    }

    //HOVER CONTAINER
    buttonsFloat.addEventListener("mouseenter", () => {
      buttonsFloat.style.border = "2px solid #2196F3";
    });
    buttonsFloat.addEventListener("mouseleave", () => {
      buttonsFloat.style.border = "";
    });

    //VOLTAR AO TOPO
    function backToTop(button) {
      button.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      //SCROLL DETECT
      window.addEventListener("scroll", () => {
        const currentScrollTop = document.documentElement.scrollTop;
        if (currentScrollTop > 0) {
          button.style.display = "block";
        } else {
          button.style.display = "none";
        }
        previousScrollTop = currentScrollTop;
      });
    }

    //ESTILO DOS BOTÕES
    let cont = 0;
    function addButtonsMedia(props) {
      props.forEach((element) => {
        let button = document.createElement("a");
        button.style.backgroundImage = `url(${element.img})`;
        button.href = element.url;

        if (window.innerWidth > 720) {
          button.style.width = "50px";
          button.style.height = "50px";
        } else {
          button.style.width = "40px";
          button.style.height = "40px";
          buttonsFloat.style.border = "none";
          buttonsFloat.style.right = "10px";
        }

        button.style.backgroundRepeat = "no-repeat";
        button.style.backgroundPosition = "center";
        button.style.backgroundSize = "cover";
        button.style.borderRadius = "50%";
        button.style.transition = "200ms";
        button.style.cursor = "pointer";

        if (element.size) {
          button.style.backgroundSize = element.size + "%";
        }

        //identificar e adicionar btn topo
        if (cont == 0) {
          backToTop(button);
          button.style.display = "none";

          cont++;

          // Evite o comportamento padrão do botão (atualizar a página)
          button.addEventListener("click", function (event) {
            event.preventDefault();
          });
        } else {
          button.target = "_blank";
        }

        //adicionar hover
        hoverButton(button);
        buttonsFloat.appendChild(button);
      });
    }

    let buttons = [
      {
        img: "https://cdn-icons-png.flaticon.com/512/1828/1828630.png",
        url: "",
      },
      {
        img: "https://cdn-icons-png.flaticon.com/256/3670/3670051.png",
        url: "https://api.whatsapp.com/send?phone=5592992376689",
      },
      {
        img: "https://img.freepik.com/premium-vector/gradient-social-media-logo_197792-2599.jpg",
        url: "https://www.instagram.com/shopdosbaloes/",
        size: 120,
      },
    ];
    addButtonsMedia(buttons);
    document.body.appendChild(buttonsFloat);
  }
  function zoomCorrection() {
    //SOLUÇÃO ZOOM PRODUTO
    let zoomImg = document.querySelector(".zoomImg");
    let swiperLazy = document.querySelector(".swiper-lazy");

    if (zoomImg && swiperLazy) {
      zoomImg.addEventListener("mouseenter", () => {
        zoomImg.style.transform = "scale(1.5)";
        swiperLazy.style.display = "none";
      });

      zoomImg.addEventListener("mouseleave", () => {
        zoomImg.style.transform = "scale(1)";
        swiperLazy.style.display = "block";
      });
    }
  }
  function addButtonSaibaMais() {
    //ADICIONAR BOTÃO SAIBA MAIS NO WHATSAPP

    function bomDia() {
      const date = new Date();
      const hora = date.getHours();

      if (hora >= 5 && hora < 12) {
        return "Bom dia";
      } else if (hora >= 12 && hora < 18) {
        return "Boa tarde";
      } else if (hora >= 18 && hora < 23) {
        return "Boa noite";
      }
    }

    document.querySelectorAll("div .actions").forEach((e) => {
      const productContainer = e.parentElement.querySelector(".product-info");
      const productName =
        productContainer.querySelector(".product-name")?.innerText ||
        "Nome do Produto não encontrado";
      const productValue =
        productContainer.querySelector(".current-price")?.innerText ||
        "Valor do Produto não encontrado";
      const productLink = e.children[0].href || "Link não encontrado";

      const productNameWithoutSpecialChars = productName
        .replace(/- SHOP DOS BALÕES/g, "") // Remove '- SHOP DOS BALÕES' em toda a string
        .replace(/[áàãâ]/g, "a") // Substitui caracteres acentuados por 'a'
        .replace(/[ÁÀÃÂ]/g, "A") // Substitui caracteres acentuados por 'a'
        .replace(/[éèê]/g, "e") // Substitui caracteres acentuados por 'e'
        .replace(/[ÉÈÊ]/g, "E") // Substitui caracteres acentuados por 'e'
        .replace(/[íìî]/g, "i") // Substitui caracteres acentuados por 'i'
        .replace(/[ÍÌÎ]/g, "I") // Substitui caracteres acentuados por 'i'
        .replace(/[ÓÒÕÔ]/g, "O") // Substitui caracteres acentuados por 'o'
        .replace(/[úùû]/g, "u") // Substitui caracteres acentuados por 'u'
        .replace(/[ÚÙÛ]/g, "U") // Substitui caracteres acentuados por 'u'
        .replace(/[ç]/g, "c") // Substitui 'ç' por 'c'
        .replace(/[Ç]/g, "C"); // Substitui 'ç' por 'c'

      const mensagem = `👋 Olá,  ${bomDia()}! 
    Quero saber mais sobre.
    🎈 produto: *${productNameWithoutSpecialChars.toUpperCase()}*,
    💰 Valor: ${productValue},;
    🔗 Link: ${productLink}.`;

      const mensagemCodificada = encodeURIComponent(mensagem);
      const saibaMais = document.createElement("a");
      saibaMais.target = "_blank";
      saibaMais.href = `https://api.whatsapp.com/send?phone=5592992376689&text=${mensagemCodificada}`;
      saibaMais.style.display = "flex";
      saibaMais.style.alignItems = "center";
      saibaMais.style.justifyContent = "center";
      saibaMais.style.width = "100%";
      saibaMais.style.height = "40px";
      saibaMais.style.backgroundColor = "green";
      saibaMais.style.borderRadius = "4px";
      saibaMais.style.marginTop = "5px";

      const text = document.createElement("p");
      text.innerText = "SAIBA MAIS";
      text.style.color = "white";
      text.style.fontWeight = "700";
      text.style.fontSize = "12px";

      const img = document.createElement("img");
      img.src =
        "https://gam-lorem.github.io/shopdosbaloes/tray/icons/icons8-whatsapp-96.png";
      img.style.height = "60%";
      img.style.marginRight = "5px";

      saibaMais.appendChild(img);
      saibaMais.appendChild(text);

      e.appendChild(saibaMais);
    });
  }
  function addCarouselCustom() {
    //SUBSTITUI O CARROSEL POR OUTRO
    if (
      document.location.href == "https://www.shopdosbaloes.com.br/" ||
      document.location.href == "http://www.shopdosbaloes.com.br/" ||
      document.location.href == "shopdosbaloes.com.br" ||
      document.location.href == "https://www.shopdosbaloes.com.br/"
    ) {
      //LOCAL DE INJEÇÃO
      let container;

      if (window.innerWidth > 720) {
        container = document.querySelector("header");
      } else {
        container = document.querySelector(".bg");
      }

      //DESATIVAR BANNER PADRÃO
      let bannerHome = document.querySelector(".banner-home");
      if (bannerHome) {
        bannerHome.style.display = "none";
      }

      //CONTAINER MAIN
      let containerBanner = document.createElement("div");
      containerBanner.style.width = "100%";
      containerBanner.style.position = "relative";
      containerBanner.style.overflow = "hidden";

      if (window.innerWidth < 720) {
        containerBanner.style.height = "25vh";
      } else {
        containerBanner.style.height = "93vh";
        // containerBanner.style.marginTop = '10px';
      }

      //VOLTAR BTN
      let Voltar = document.createElement("button");
      Voltar.style.position = "absolute";
      Voltar.style.transform = "translate(0%, -50%) scaleX(-1)";
      Voltar.style.top = "50%";
      Voltar.style.left = "1%";
      Voltar.style.width = "50px";
      Voltar.style.height = "50px";
      Voltar.style.zIndex = "1";
      Voltar.style.backgroundColor = "white";
      Voltar.style.border = "none";
      Voltar.style.opacity = "0.7";
      Voltar.style.backgroundImage = "url(https://gam-lorem.github.io/shopdosbaloes/tray/icons/btnPass.png)";
      Voltar.style.backgroundPositionX = "center";
      Voltar.style.backgroundSize = "cover";
      Voltar.style.borderRadius = "4px";
      Voltar.onclick = voltar;

      //PASSAR BTN
      let Passar = document.createElement("button");
      Passar.style.position = "absolute";
      Passar.style.transform = "translate(0%, -50%) scaleX(1";
      Passar.style.top = "50%";
      Passar.style.right = "1%";
      Passar.style.width = "50px";
      Passar.style.height = "50px";
      Passar.style.zIndex = "1";
      Passar.style.backgroundColor = "white";
      Passar.style.border = "none";
      Passar.style.opacity = "0.7";
      Passar.style.backgroundImage =
        "url(https://gam-lorem.github.io/shopdosbaloes/tray/icons/btnPass.png)";
      Passar.style.backgroundPositionX = "center";
      Passar.style.backgroundSize = "cover";
      Passar.style.borderRadius = "4px";
      Passar.onclick = passar;

      //FUNÇÕES DE PASSAR E VOLTAR CAROUSEL SLIDE
      function passar() {
        currentIndex = (currentIndex + 1) % banners.length;
        updateBanners();
      }
      function voltar() {
        currentIndex = (currentIndex - 1 + banners.length) % banners.length;
        updateBanners();
      }

      //INJETAR ELEMENTOS NO CONTAINER MAIN
      containerBanner.appendChild(Voltar);
      containerBanner.appendChild(Passar);
      document.body.appendChild(containerBanner);

      //BANNERS
      let ContainerBanners = [
        // "https://gam-lorem.github.io/shopdosbaloes/tray/images/banner/banner-promocao.png",
        // "https://gam-lorem.github.io/shopdosbaloes/tray/images/banner/Banner%20pc%20v2-min.png",
        // "https://raw.githubusercontent.com/gam-lorem/shopdosbaloes/main/tray/images/banner/banner-frete-manaus.png",
        // "https://raw.githubusercontent.com/gam-lorem/shopdosbaloes/main/tray/images/banner/banner-frete-amazonas.png",
      ];

      //ADICIONAR BANNER
      let currentIndex = 0;
      let banners = [];
      function addBanner(imgs) {
        imgs.forEach((element, index) => {
          let banner = document.createElement("div");
          banner.style.width = "100%";
          banner.style.height = "100%";
          banner.style.transition = "700ms";
          banner.style.backgroundColor = "gay";
          banner.style.position = "absolute";
          banner.style.top = "0%";
          banner.style.backgroundImage = `url(${element})`;
          banner.style.backgroundPosition = "top";
          banner.style.backgroundRepeat = "no-repeat";
          banner.style.backgroundSize = "100%";
          banner.style.left = index === 0 ? "0%" : "100%";
          banners.push(banner);
          containerBanner.appendChild(banner);
        });
      }

      function updateBanners() {
        for (let i = 0; i < banners.length; i++) {
          banners[i].style.left = (i - currentIndex) * 100 + "%";
        }
      }

      addBanner(ContainerBanners);
      container.insertAdjacentElement("afterend", containerBanner);

      //passar automatico
      setInterval(() => {
        passar();
      }, 20000);
    }
  }
  function borderRadius() {
    //DEIXAR BORDAS ARREDONDADAS
    let product = document.querySelectorAll(".product");
    if (product) {
      product.forEach((e) => {
        e.style.borderRadius = "8px";
      });
    }
  }
  function addComponenteMarcas() {
    //ADICIONAR COMPONENTE CAROSELL MARCAS
    let container = document.createElement("div");
    container.style.width = "100%";
    container.style.paddingTop = "10px";
    container.style.paddingBottom = "10px";
    container.style.marginTop = "10px";
    container.style.marginBottom = "10px";
    container.style.maxWidth = "1210px";
    container.style.margin = "auto";

    let h2 = document.createElement("h2");
    h2.innerText = "Marcas";
    h2.style.fontFamily = "arial, montserrat";
    h2.style.textAlign = "center";
    container.appendChild(h2);

    let hr = document.createElement("hr");
    hr.style.width = "100%";
    hr.style.margin = "auto";
    hr.style.color = "gray";
    hr.style.marginBottom = "10px";
    container.appendChild(hr);

    let CCCarrosel = document.createElement("div");
    CCCarrosel.style.position = "relative";
    CCCarrosel.style.margin = "auto";
    CCCarrosel.style.width = "100%";

    if (window.innerWidth < 720) {
      CCCarrosel.style.width = "100%";
    }

    let containerCarrosel = document.createElement("div");
    containerCarrosel.style.width = "100%";
    containerCarrosel.style.overflowX = "hidden";
    containerCarrosel.style.whiteSpace = "nowrap";
    containerCarrosel.style.width = "90%";

    if (window.innerWidth < 720) {
      containerCarrosel.style.width = "70%";
    }

    containerCarrosel.style.margin = "auto";
    containerCarrosel.style.paddingTop = "10px";
    containerCarrosel.style.paddingBottom = "10px";

    CCCarrosel.appendChild(containerCarrosel);
    container.appendChild(CCCarrosel);

    const marcasImgs = [
      {
        img: "https://yt3.googleusercontent.com/ytc/AOPolaRIK3refq6Kt0pcLPz0zR0yPb_TCvti7HoBDP5L=s900-c-k-c0x00ffffff-no-rj",
        url: "http://www.shopdosbaloes.com.br/pic-pic",
      },
      {
        img: "https://baloessaoroque.com.br/wp-content/uploads/2020/11/logo.png",
        url: "http://www.shopdosbaloes.com.br/sao-roque",
      },
      {
        img: "https://www.festcolor.com.br/static/images/logo-festcolor.png",
        url: "http://www.shopdosbaloes.com.br/festcolor",
      },
      {
        img: "https://diskempresarial.com.br/img/produtos/zoom/1565807613f05cdfc3b6b43c54b3cfc75242b65b3f.jpg",
        url: "http://www.shopdosbaloes.com.br/happy-day",
      },
      {
        img: "https://img.elo7.com.br/product/zoom/3A1E403/pacote-balao-branco-n-9-50-unidades-art-latex-bexigas-brancos-art-latex.jpg",
        url: "http://www.shopdosbaloes.com.br/art-latex",
      },
      {
        img: "https://baloesfestball.com.br/web/img/logo.png",
        url: "http://www.shopdosbaloes.com.br/festball",
      },
      {
        img: "https://pontodasfestas.com.br/wp-content/uploads/2023/04/Logo-Fox-import-hr.png",
        url: "http://www.shopdosbaloes.com.br/ponto-das-festas",
      },
      {
        img: "https://baloesjoy.com.br/wp-content/uploads/2022/06/logo-joy.png",
        url: "https://www.shopdosbaloes.com.br/joy",
      },
      {
        img: "https://yt3.googleusercontent.com/ytc/AOPolaRLgeq-QOb5GtXR2WIU3zq7ri5zfKaGk78BRnrR=s900-c-k-c0x00ffffff-no-rj",
        url: "http://www.shopdosbaloes.com.br/",
      },

      {
        img: "https://www.aeroflex.ind.br/img/logo/seo.png",
        url: "http://www.shopdosbaloes.com.br/",
      },
      {
        img: "https://seeklogo.com//images/S/sempertex-logo-743D32B199-seeklogo.com.png",
        url: "http://www.shopdosbaloes.com.br/",
      },
      {
        img: "https://rhegia.com.br/wp-content/uploads/2021/03/mac.png",
        url: "http://www.shopdosbaloes.com.br/",
      },
      {
        img: "https://boletos.cromus.com.br/img/logo_empresa.png",
        url: "http://www.shopdosbaloes.com.br/",
      },
      {
        img: "https://static.wixstatic.com/media/1c4367_e4e1c599c93a408d985b6d49f0445bc0~mv2_d_2482_1382_s_2.png",
        url: "http://www.shopdosbaloes.com.br/",
      },
      {
        img: "https://yt3.googleusercontent.com/a6D4tzOSCRw5OYL5G1dRiJajlZ_cVjVJ7B4mncq5hDYmxbkBBwDo9L-fLZo6qNXEms6cUoKPRw=s900-c-k-c0x00ffffff-no-rj",
        url: "http://www.shopdosbaloes.com.br/",
      },
      {
        img: "https://static.wixstatic.com/media/99b010_640e9e9c3f514128a81953a6ec033d27~mv2.jpg/v1/fit/w_2500,h_1330,al_c/99b010_640e9e9c3f514128a81953a6ec033d27~mv2.jpg",
        url: "http://www.shopdosbaloes.com.br/",
      },
      {
        img: "http://silverplastic.com.br/wp-content/themes/default/img/home/logo-party-box.png",
        url: "http://www.shopdosbaloes.com.br/",
      },
      {
        img: "https://megatoon.org/pub/media/logo/stores/1/logo-megatoon.png",
        url: "http://www.shopdosbaloes.com.br/",
      },
    ];

    marcasImgs.forEach((e) => {
      let item = document.createElement("a");
      item.style.display = "inline-block";
      item.style.width = "100px";
      item.style.height = "100px";
      item.style.borderRadius = "8px";
      item.style.backgroundColor = "white";
      item.style.backgroundImage = `url(${e.img})`;
      item.href = e.url;
      item.style.backgroundPosition = "center";
      item.style.backgroundSize = "80%";
      item.style.backgroundRepeat = "no-repeat";
      item.style.marginLeft = "10px";
      item.style.marginRight = "10px";
      item.style.opacity = "0.5";

      if (window.innerWidth < 720) {
        item.style.opacity = "1";
      }

      item.addEventListener("mouseenter", () => {
        item.style.opacity = "1";
      });
      item.addEventListener("mouseleave", () => {
        item.style.opacity = "0.5";
      });

      containerCarrosel.appendChild(item);
    });

    let scrollX = 0;
    function scrollCarrossel(direction) {
      const carrosselWidth = containerCarrosel.scrollWidth - containerCarrosel.clientWidth;

      if (direction === "left" && scrollX > 0) {
        scrollX -= 200; // Ajuste a quantidade que deseja rolar
      } else if (direction === "right" && scrollX < carrosselWidth) {
        scrollX += 200; // Ajuste a quantidade que deseja rolar
      }

      containerCarrosel.scrollTo({
        left: scrollX,
        behavior: "smooth",
      });
    }

    const prevButton = document.createElement("button");
    prevButton.style.borderRadius = "50%";
    prevButton.style.border = "none";
    prevButton.style.position = "absolute";
    prevButton.style.transform = "translate(0%, -50%) scaleX(-1)";
    prevButton.style.top = "50%";
    prevButton.style.left = "0px";
    prevButton.style.width = "50px";
    prevButton.style.height = "50px";
    prevButton.style.backgroundPosition = "center";
    prevButton.style.backgroundRepeat = "no-repeat";
    prevButton.style.backgroundSize = "80%";
    prevButton.style.backgroundImage =
      "url(https://gam-lorem.github.io/shopdosbaloes/tray/icons/btnPass.png)";
    prevButton.addEventListener("click", () => scrollCarrossel("left"));

    const nextButton = document.createElement("button");
    nextButton.style.borderRadius = "50%";
    nextButton.style.border = "none";
    nextButton.style.position = "absolute";
    nextButton.style.transform = "translate(0%, -50%)";
    nextButton.style.top = "50%";
    nextButton.style.right = "0px";
    nextButton.style.width = "50px";
    nextButton.style.height = "50px";
    nextButton.style.backgroundPosition = "center";
    nextButton.style.backgroundRepeat = "no-repeat";
    nextButton.style.backgroundSize = "80%";
    nextButton.style.backgroundImage =
      "url(https://gam-lorem.github.io/shopdosbaloes/tray/icons/btnPass.png)";

    nextButton.addEventListener("click", () => scrollCarrossel("right"));
    CCCarrosel.appendChild(prevButton);
    CCCarrosel.appendChild(nextButton);
    document.querySelector("main").appendChild(container);
  }
  function removerParcelamento() {
    let productInstallments = document.querySelectorAll(
      ".product-installments"
    );
    if (productInstallments) {
      productInstallments.forEach((element) => {
        element.style.display = "none";
      });
    }
  }
  function animacaoFlutuacao() {
    const elementosFlutuantes = document.querySelectorAll(".lazyload");
    const amplitudeVertical = 6;
    const amplitudeHorizontal = 3; // Amplitude horizontal reduzida para um movimento mais suave
    const frequencia = 0.003;

    function animarElementoFlutuante(elemento, delay) {
      const iniciarAnimacao = Date.now() + delay;

      function animacao() {
        const tempoAtual = Date.now();
        const tempoDecorrido = tempoAtual - iniciarAnimacao;
        const posicaoVertical =
          amplitudeVertical * Math.sin(frequencia * tempoDecorrido);
        const posicaoHorizontal =
          amplitudeHorizontal * Math.cos(frequencia * tempoDecorrido);

        elemento.style.transform = `translateY(${posicaoVertical}px) translateX(${posicaoHorizontal}px)`;

        requestAnimationFrame(animacao);
      }

      animacao();
    }

    elementosFlutuantes.forEach((elemento) => {
      const delay = Math.random() * 4000; // Delay aleatório de até 3 segundos (3000 milissegundos)
      animarElementoFlutuante(elemento, delay);
    });
  }
  function MsgAvisoVendaAmazonas() {
    var novoElemento = document.createElement("div");
    novoElemento.style.padding = "8px";
    novoElemento.style.backgroundColor = "#2196F3";
    novoElemento.style.height = "30px";
    novoElemento.style.overflow = "hidden";
    novoElemento.style.position = "relative";

    var container = document.createElement("div");
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.position = "relative";
    container.style.transform = "translate(0%, -50%)";
    container.style.position = "absolute";
    container.style.top = "50%";
    container.style.left = "100%";

    var img2 = document.createElement("img");
    img2.src =
      "https://static.todamateria.com.br/upload/ba/nd/bandeira-do-brasil-og.jpg";
    img2.style.height = "20px";
    img2.style.width = "35px";
    img2.style.marginRight = "10px";
    container.appendChild(img2);

    var texto = document.createElement("h4");
    texto.style.color = "white";
    texto.style.fontWeight = "bold";
    texto.style.display = "flex none";
    texto.style.whiteSpace = "nowrap";
    texto.textContent = "Atenção, vendas somente para o estado do Amazonas";
    container.appendChild(texto);

    var img = document.createElement("img");
    img.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Bandeira_do_Amazonas.svg/1280px-Bandeira_do_Amazonas.svg.png";
    img.style.height = "20px";
    img.style.width = "35px";
    img.style.marginLeft = "10px";
    container.appendChild(img);
    novoElemento.appendChild(container);

    let x = window.innerWidth;
    setInterval(() => {
      x -= 1;
      container.style.left = x + "px";
      if (x == container.offsetWidth * -1) {
        x = window.innerWidth;
      }
    }, 16);

    if (window.innerWidth <= 720) {
      let corpoPagina = document.body;
      corpoPagina.insertBefore(novoElemento, corpoPagina.firstChild);
    }
    if (window.innerWidth >= 720) {
      let corpoPagina = document.querySelector(".header");
      corpoPagina.insertBefore(novoElemento, corpoPagina.firstChild);
    }
  }
  function addBannerFornecedor() {
    let fornecedor = [
      {
        marca: "pic-pic",
        img: "https://raw.githubusercontent.com/gam-lorem/shopdosbaloes/main/tray/banner/PIC-PIC.png",
        img2: "https://raw.githubusercontent.com/gam-lorem/shopdosbaloes/main/tray/banner/picpic-mobile.png",
      },
      {
        marca: "sao-roque",
        img: "https://raw.githubusercontent.com/gam-lorem/shopdosbaloes/main/tray/banner/SAO-ROQUE.png",
        img2: "https://raw.githubusercontent.com/gam-lorem/shopdosbaloes/main/tray/banner/saoroque-mobile.png",
      },
      {
        marca: "happy-day",
        img: "https://raw.githubusercontent.com/gam-lorem/shopdosbaloes/main/tray/banner/HAPPY-DAY.png",
        img2: "https://raw.githubusercontent.com/gam-lorem/shopdosbaloes/main/tray/banner/happyday-mobile.png",
      },
      {
        marca: "art-latex",
        img: "https://raw.githubusercontent.com/gam-lorem/shopdosbaloes/main/tray/banner/ARTE-LATEX.png",
        img2: "https://raw.githubusercontent.com/gam-lorem/shopdosbaloes/main/tray/banner/artelatex-mobile.png",
      },
      {
        marca: "festball",
        img: "https://raw.githubusercontent.com/gam-lorem/shopdosbaloes/main/tray/banner/FEST-BALL.png",
        img2: "https://raw.githubusercontent.com/gam-lorem/shopdosbaloes/main/tray/banner/FEST-BALL.png",
      },
      {
        marca: "ponto-das-festas",
        img: "https://raw.githubusercontent.com/gam-lorem/shopdosbaloes/main/tray/banner/PONTO-DAS-FESTAS.png",
        img2: "https://raw.githubusercontent.com/gam-lorem/shopdosbaloes/main/tray/banner/pontodasfestas-mobile.png",
      },
      {
        marca: "festcolor",
        img: "https://raw.githubusercontent.com/gam-lorem/shopdosbaloes/main/tray/banner/FEST-COLOR.png",
        img2: "https://raw.githubusercontent.com/gam-lorem/shopdosbaloes/main/tray/banner/festcolor-mobile.png",
      },
      {
        marca: "joy",
        img: "https://raw.githubusercontent.com/gam-lorem/shopdosbaloes/main/tray/banner/JOY.png",
        img2: "https://raw.githubusercontent.com/gam-lorem/shopdosbaloes/main/tray/banner/joy-mobile.png",
      },
    ]
    try{
      const nome = document.querySelector('.catalog-name').innerText.toLocaleLowerCase().replace(/ /g, "-")
      const item =  fornecedor.find((e)=> e.marca === nome) 
      let catalog = document.querySelector(".catalog-header");
      
      let banner = document.createElement("div");
      banner.style.boxShadow = "1px 1px 5px 0px";
      banner.style.borderRadius = "8px";
      banner.style.width = "100%";
      banner.style.height = "250px";
      banner.style.marginBottom = "20px";
      banner.style.backgroundPosition = "center";
      banner.style.backgroundSize = "cover";
      if (window.innerWidth > 720) {
        banner.style.backgroundImage = `url(${item.img})`;
      } else {
        banner.style.backgroundImage = `url(${item.img2})`;
      }
      let paiDoCatalog = catalog.parentNode;
      paiDoCatalog.insertBefore(banner, catalog.nextSibling);
    }catch(erro){
      console.log('Erro ao exibir banner fornecedor')
    }
  }
  function blockSite() {
    if (!localStorage.SenhA) {
      let body = document.querySelector("body");

      let screen = document.createElement("div");
      screen.style.backgroundColor = "#F7F7F7";
      screen.style.width = "100vw";
      screen.style.height = "100vh";
      screen.style.backgroundColor = "white";
      screen.style.position = "fixed";
      screen.style.zIndex = "9999999";
      screen.style.top = "0px";
      screen.style.left = "0px";
      screen.style.display = "grid";
      screen.style.alignItems = "center";
      screen.style.justifyContent = "center";
      screen.id = "screen123";

      let containerLogin = document.createElement("div");
      containerLogin.style.margin = "auto";
      containerLogin.style.display = "grid";
      containerLogin.style.alignItems = "center";
      containerLogin.style.justifyContent = "center";
      containerLogin.style.padding = "20px";
      containerLogin.style.maxWidth = "500px";

      let img = document.createElement("img");
      img.src =
        "https://images.tcdn.com.br/img/img_prod/1238052/1692902488_logotipo_03.png";
      img.style.margin = "auto";
      img.style.width = "50%";
      containerLogin.appendChild(img);

      let h2 = document.createElement("h2");
      h2.style.textAlign = "center";
      h2.style.fontSize = "20px";
      h2.innerText =
        "Atenção: Esta loja está em Implantação. Nenhum pedido deverá ser considerado. Itens expostos são apenas testes. Aguarde e volte em breve!, shop dos balões agradece a compreenção!";
      containerLogin.appendChild(h2);

      let input = document.createElement("input");
      input.type = "password";
      input.placeholder = "Digite sua senha...";
      input.style.margin = "auto";
      input.style.padding = "8px";
      input.style.borderRadius = "4px";
      input.style.width = "100%";
      input.style.marginTop = "20px";
      containerLogin.appendChild(input);

      let btnSubmit = document.createElement("button");
      btnSubmit.innerText = `DESTRAVAR`;
      btnSubmit.style.padding = "10px";
      btnSubmit.style.paddingLeft = "20px";
      btnSubmit.style.paddingRight = "20px";
      btnSubmit.style.backgroundColor = "#0091D4";
      btnSubmit.style.color = "white";
      btnSubmit.style.margin = "auto";
      btnSubmit.style.borderRadius = "20px";
      btnSubmit.style.marginTop = "10px";
      btnSubmit.style.fontWeight = "bold";
      containerLogin.appendChild(btnSubmit);

      let checkSenha = true;
      btnSubmit.addEventListener("click", () => {
        if (checkSenha == true) {
          if (input.value == "Shop@baloes23") {
            localStorage.SenhA = "Shop@baloes23";
            document.querySelector("#screen123").style.display = "none";
          } else {
            alert("Senha Errada!, espere 5s");
            checkSenha = false;

            setTimeout(() => {
              checkSenha = true;
            }, 5000);
          }
          input.value = "";
        } else {
          alert("Aguarde!");
        }
      });

      screen.appendChild(containerLogin);
      body.appendChild(screen);
    } else {
      console.log("Usuario logado!");
    }
  }
  function addCard() {
    if (
      document.location.href == "http://www.shopdosbaloes.com.br/" ||
      document.location.href == "https://www.shopdosbaloes.com.br/"
    ) {
      //container
      let container = document.createElement("div");
      container.style.width = "80%";
      container.style.margin = "auto";
      container.style.marginTop = "20px";
      container.style.height = "auto";
      container.style.alignItems = "center";
      container.style.justifyContent = "space-around";
      container.style.display = "grid";

      function check() {
        if (window.innerWidth > 1650) {
          container.style.width = "80%";
          container.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
        } else if (window.innerWidth < 1650 && window.innerWidth > 870) {
          container.style.gridTemplateColumns = "1fr 1fr";
          container.style.width = "80%";
        } else if (window.innerWidth < 870) {
          container.style.gridTemplateColumns = "1fr 1fr";
          container.style.overflow = `hidden`;
          container.style.padding = "20px";
          container.style.gap = "10px";
          container.style.width = "100%";
        }
        requestAnimationFrame(check);
      }
      requestAnimationFrame(check);

      let banner = [
        {
          img: "https://raw.githubusercontent.com/gam-lorem/shopdosbaloes/main/tray/images/banner/segurança.png",
        },
        {
          img: "https://raw.githubusercontent.com/gam-lorem/shopdosbaloes/main/tray/images/banner/cartao.png",
        },
        {
          img: "https://raw.githubusercontent.com/gam-lorem/shopdosbaloes/main/tray/images/banner/frete.png",
        },
        {
          img: "https://raw.githubusercontent.com/gam-lorem/shopdosbaloes/main/tray/images/banner/pix.png",
        },
      ];

      for (let i = 0; i < banner.length; i++) {
        let bannerImg = document.createElement("img");

        bannerImg.style.width = `320px`;
        if (window.innerWidth < 870) {
          bannerImg.style.width = `100%`;
        }
        bannerImg.style.flex = `none`;
        bannerImg.style.borderRadius = "8px";
        bannerImg.style.margin = "auto";
        bannerImg.style.marginTop = "10px";
        bannerImg.style.marginBottom = "10px";
        bannerImg.src = banner[i].img;

        bannerImg.style.transition = "400ms";

        bannerImg.addEventListener("mouseenter", () => {
          bannerImg.style.transform = "scale(1.1)";
        });
        bannerImg.addEventListener("mouseleave", () => {
          bannerImg.style.transform = "scale(1)";
        });

        container.appendChild(bannerImg);
      }

      let root = document.querySelector("main");
      // Obtém uma referência ao pai de root
      var parent = root.parentNode;

      // root.appendChild(container)
      // Insere o container antes do root
      parent.insertBefore(container, root);
    }
  }
  function start() {
    addCard();
    addBannerFornecedor();
    animacaoFlutuacao();
    MsgAvisoVendaAmazonas();
    addCarouselCustom();
    zoomCorrection();
    addComponnestButtonsFloat();
    addButtonSaibaMais();
    borderRadius();
    addComponenteMarcas();
    removerParcelamento();
    
  }

  return { start };
}

const customizationApp = customization();
customizationApp.start();
