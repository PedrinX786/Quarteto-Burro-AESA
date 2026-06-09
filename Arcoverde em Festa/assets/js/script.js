// Para adicionar um hotel, restaurante, mototaxista etc.,
// inserir um novo objeto dentro da lista correspondente.

// Programação
// Estrutura: cada chave é uma data. Cada item tem polo, horário e atração.
const programacao = {
  "13 Junho": [
    {
      polo: "Polo Multicultural",
      horario: "18:00",
      atracao: "Coco das Irmãs Lopes",
    },
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Flávio José" },
    { polo: "Polo Alegre", horario: "22:00", atracao: "Alceu Valença" },
  ],
  "14 Junho": [
    { polo: "Polo Multicultural", horario: "18:00", atracao: "PV Calado" },
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Junior e Jorge" },
    { polo: "Polo Alegre", horario: "22:00", atracao: "Lipe Lucena" },
  ],
  "15 Junho": [
    {
      polo: "Polo Multicultural",
      horario: "18:00",
      atracao: "Festival de Quadrilhas",
    },
  ],
  "16 Junho": [
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Juciê" },
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Zé Vaqueiro" },
    { polo: "Polo Alegre", horario: "22:00", atracao: "Nattan" },
  ],
  "17 Junho": [
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Fernandinha" },
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Eric Land" },
    { polo: "Polo Alegre", horario: "22:00", atracao: "Vitor Fernandes" },
  ],
  "18 Junho": [
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Maciel Kuré" },
    {
      polo: "Polo Alternativo",
      horario: "20:00",
      atracao: "Iguinho e Lulinha",
    },
    { polo: "Polo Alegre", horario: "22:00", atracao: "Wesley Safadão" },
  ],
  "19 Junho": [
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Dani Aguiar" },
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Talita Mel" },
    { polo: "Polo Alegre", horario: "22:00", atracao: "Priscila Senna" },
  ],
  "20 Junho": [
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Mayana Neiva" },
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Edy & Nathan" },
    { polo: "Polo Alegre", horario: "22:00", atracao: "Fabinho Testado" },
  ],
  "21 Junho": [
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Ciro Santas" },
    { polo: "Polo Alternativo", horario: "18:30", atracao: "Assisão" },
    { polo: "Polo Alegre", horario: "20:00", atracao: "Super Oara" },
    { polo: "Polo Multicultural", horario: "22:00", atracao: "Capital do Sol" },
    { polo: "Polo Alegre", horario: "22:30", atracao: "Felipe Amorim" },
  ],
  "22 Junho": [
    {
      polo: "Polo Multicultural",
      horario: "18:00",
      atracao: "Coco Fulô do Barro",
    },
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Geraldinho Lins" },
    { polo: "Polo Alegre", horario: "22:00", atracao: " Garota Safada" },
  ],
  "23 Junho": [
    {
      polo: "Polo Multicultural",
      horario: "18:00",
      atracao: "Coco Raízes de Arcoverde",
    },
    { polo: "Polo Alternativo", horario: "20:00", atracao: "George Silva" },
    { polo: "Polo Alegre", horario: "20:30", atracao: "Jorge de Altinho" },
    {
      polo: "Polo Multicultural",
      horario: "22:00",
      atracao: "Cordel do Fogo Encantado",
    },
  ],
  "24 Junho": [
    { polo: "Polo Multicultural", horario: "18:00", atracao: "João Vaqueiro" },
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Mangníficos" },
    { polo: "Polo Alegre", horario: "22:00", atracao: "Xand Avião" },
  ],
  "25 Junho": [
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Will" },
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Nágylla Ferreira" },
    { polo: "Polo Alegre", horario: "22:00", atracao: "João Gomes" },
  ],
  "26 Junho": [
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Ycaro Andrade" },
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Harry Estigado" },
    { polo: "Polo Alegre", horario: "22:00", atracao: "Nathanzinho Lima" },
  ],
  "27 Junho": [
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Flávio Leandro" },
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Noda de Caju" },
    { polo: "Polo Alegre", horario: "22:00", atracao: "Limão com Mel" },
  ],
  "28 Junho": [
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Carlos e Fábio" },
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Forrozão Chacal" },
    { polo: "Polo Alegre", horario: "22:00", atracao: "Matheus e Kauan" },
  ],
};

// Hospedagem
// Campos: nome, endereco, telefone (com DDI 55), instagram, imagem
const hospedagens = [
  {
    nome: "Max Hotel",
    endereco: "BR-232, Km 254, 3551 - São Cristóvão, Arcoverde",
    telefone: "558738221552",
    instagram: "https://www.instagram.com/maxhotelarcoverde/",
    imagem: "assets/img/mapa1.jpg",
  },
  {
    nome: "Amaretto",
    endereco: "Avenida Aeroporto, 3790 - São Cristóvão, Arcoverde",
    telefone: "5587988064232",
    instagram: "https://www.instagram.com/amarettohotel/",
    imagem: "assets/img/mapa2.jpg",
  },
  {
    nome: "Hotel Cruzeiro",
    endereco: "Av. Osvaldo Cruz, 1740 - Cel. Siqueira Campos, Arcoverde",
    telefone: "5587996192624",
    instagram: "https://www.instagram.com/hoteiscruzeiro/",
    imagem: "assets/img/mapa3.jpg",
  },
  {
    nome: "Pousada Riacho do Mel",
    endereco: "Av. José Bonifácio, 1819 - São Miguel, Arcoverde",
    telefone: "558738212178",
    instagram: "https://www.instagram.com/pousada.riachodomel/",
    imagem: "assets/img/mapa4.jpg",
  },
  {
    nome: "Hotel Olho d'Águao",
    endereco: "R. Armando de Siqueira Brito, 475 - São Miguel, Arcoverde",
    telefone: "5587991670380",
    instagram: "https://www.instagram.com/hotelolhodaguadosbredos/",
    imagem: "assets/img/mapa5.jpg",
  },
];

// Alimentação
// Dividida em categorias: pizzarias, bares, restaurantes
const alimentacao = {
  pizzarias: [
    {
      nome: "Pizzaria Novo Sabor",
      endereco: "R. Alfredo de Souza Padilha, 38 - São Cristóvão, Arcoverde",
      telefone: "5587991111111",
      instagram: "https://www.instagram.com/pizzansabor/",
      imagem: "assets/img/pizza.jpg",
    },
    {
      nome: "Pizzaria Flor do Horizonte",
      endereco: "Av. José Bonifácio, 745 - São Cristóvão, Arcoverde",
      telefone: "5587991054927",
      instagram: "https://www.instagram.com/pizzariaflordohorizonte/",
      imagem: "assets/img/pizza2.jpg",
    },
  ],
  bares: [
    {
      nome: "Monteiro Bar",
      endereco: "Praça Barão do Rio Branco - Centro, Arcoverde",
      telefone: "5587999099498",
      instagram: "https://instagram.com/bardosertao",
      imagem: "assets/img/bar.jpg",
    },
  ],
  restaurantes: [
    {
      nome: "A OCA DO BUDA",
      endereco: "Rua das Flores, 120",
      telefone: "5587991111111",
      instagram: "https://instagram.com/pizzariasabor",
      imagem: "assets/img/restaurante.jpg",
    },
  ],
};

// Transporte
// Mototaxistas e taxistas seguem o mesmo formato
const mototaxistas = [
  {
    nome: "Moto Taxi Sucupira",
    descricao: "Atendimento no centro e polos",
    telefone: "55879938213444",
    imagem: "assets/img/mototaxi1.jpg",
  },
  {
    nome: "Mototáxi São Cristóvão 24 horas",
    descricao: "Corridas 24 horas",
    telefone: "55879938223015",
    imagem: "assets/img/mototaxi2.jpg",
  },
];

const taxistas = [
  {
    nome: "Ponto de Táxi Matriz",
    descricao: "Corridas urbanas e viagens",
    telefone: "558799181024057",
    imagem: "assets/img/taxi.jpg",
  },
];

// Mapas
const mapas = [
  {
    titulo: "Mapa Geral do Evento",
    descricao: "Visualize os principais polos do São João.",
    imagem: "assets/img/eventos.jpg",
  },
  {
    titulo: "Mapa dos Polos",
    descricao: "Veja a localização dos polos culturais.",
    imagem: "assets/img/polos.jpg",
  },
  {
    titulo: "Mapa de Transporte",
    descricao: "Pontos de táxi, mototáxi e acessos.",
    imagem: "assets/img/transporte.jpg",
  },
];

// Segurança
// Campo "telefone" também é usado no href de ligação
const contatosSeguranca = [
  { nome: "SAMU", telefone: "192" },
  { nome: "Polícia Militar", telefone: "190" },
  { nome: "Bombeiros", telefone: "193" },
  { nome: "Guarda Municipal", telefone: "153" },
];

// Patrocinadores
// "site" e "instagram" são opcionais — deixe como string vazia "" se não tiver
const patrocinadores = [
  {
    nome: "Izo-Ótica",
    descricao:
      "Moda, saúde visual e bem-estar, oferecendo armações, óculos de sol e lentes de grau com alta tecnologia.",
    instagram: "https://instagram.com/",
    site: "",
    imagem: "assets/img/patro.jpg",
  },
  {
    nome: "Delivery Arretado",
    descricao:
      "Aplicativo de entregas local, facilitando a conexão entre moradores e o comércio da região",
    instagram: "https://instagram.com/",
    site: "https://google.com",
    imagem: "assets/img/patro2.jpg",
  },
];

/* ARCOVERDE
   Texto histórico sobre Arcoverde.
   Cada item do array vira um parágrafo separado na tela.
   SUBSTITUA pelo texto definitivo quando estiver pronto.*/
const historiaArcoverde = [
  "Arcoverde é um município brasileiro localizado no sertão do estado de Pernambuco, a aproximadamente 253 km da capital, Recife. Com cerca de 70 mil habitantes, é considerada a principal cidade do Sertão do Moxotó e recebe o título carinhoso de Rainha do Sertão.",
  "Fundada oficialmente em 1928, a cidade tem raízes históricas que remontam ao século XIX, quando a região era conhecida como Vila do Cimbres. Seu desenvolvimento foi fortemente impulsionado pela chegada da ferrovia e pelo comércio regional.",
  "Arcoverde é reconhecida como o berço do forró e do baião, tendo sido palco das primeiras apresentações de Luiz Gonzaga, o Rei do Baião. Essa herança cultural transforma a cidade, todos os anos, no maior palco junino do sertão nordestino.",
];

// Pontos turísticos de Arcoverde.
// Campos: nome, descricao, imagem.
// SUBSTITUA pelas fotos e descrições definitivas.
const pontosTuristicos = [
  {
    nome: "Museu das Culturas Indígenas",
    descricao:
      "O Museu do Índio de Arcoverde é um espaço de preservação da memória, dos saberes e da ancestralidade dos povos originários. Oferecendo ao visitante a oportunidade de conhecer de perto o legado histórico indígena, promovendo um intercâmbio cultural e valorizando a identidade local. O espaço conta com um acervo de peças etnográficas, artesanatos e registros históricos. É considerado uma parada simples, mas muito rica em história e essencial para quem deseja valorizar a herança cultural do Brasil.",
    imagem: "assets/img/ponto.jpg",
  },
  {
    nome: "Alto do Cruzeiro",
    descricao:
      "O Alto do Cruzeiro, localizado no Morro da Santa Cruz, é um dos principais cartões-postais e berços culturais de Arcoverde. Famoso pela vista panorâmica da cidade, é um ponto de encontro histórico reverenciado como o local de origem do tradicional Samba de Coco Raízes de Arcoverde. Devido à sua altitude, oferece uma vista limpa e privilegiada de Arcoverde, tornando-se o point perfeito para moradores e turistas que sobem para apreciar o entardecer ou dias chuvosos na região. A sede do mundialmente famoso Samba de Coco Raízes de Arcoverde fica no local. O Alto é o ponto de partida e palco de celebrações tradicionais, abrigando frequentemente prévias do calendário junino, como o início da Caminhada do Forró, além de atrações de grandes eventos de música e festivais de cultura popular.",
    imagem: "assets/img/ponto2.jpg",
  },
  {
    nome: "Serra do Jacaré",
    descricao:
      "A Serra do Jacaré é um dos principais pontos de ecoturismo e aventura em Arcoverde (PE). Com uma trilha de nível moderado e elevação de 328 metros, ela oferece vistas deslumbrantes da caatinga e é o local ideal para caminhadas, contemplação da natureza e observação do pôr do sol. A trilha costuma iniciar na região do Alto do Cruzeiro e vai até o topo da Serra do Jacaré. O acesso fica próximo à BR-232, exigindo atenção ao caminhar pelo acostamento. A trilha é ótima para iniciantes, mas requer cuidado devido a pedras arredondadas soltas e cascalho. Devido ao terreno irregular e à exposição ao sol do sertão, o ideal é usar calçados fechados e levar bastante água.",
    imagem: "assets/img/ponto3.jpg",
  },
  {
    nome: "Estação da Cultura",
    descricao:
      "A Estação da Cultura é um importante polo cultural e histórico localizado na antiga estação ferroviária de Arcoverde, inaugurada em 1912. O espaço foi ocupado e revitalizado por artistas locais em 2001 e hoje funciona como uma referência em arte, educação e democratização cultural no estado. O local abriga diversos coletivos artísticos e ateliês, englobando teatro, capoeira, grafite, literatura e a produção de instrumentos musicais. A Associação Estação da Cultura é reconhecida por ter sido o primeiro Ponto de Cultura oficial do Ministério da Cultura no país. O espaço é palco para diversas programações ao longo do ano, incluindo a famosa mostra de artes 'A Vapor' e tradicionais polos de animação nos festejos de São João.",
    imagem: "assets/img/ponto4.jpg",
  },
  {
    nome: "CECORA",
    descricao:
      "O CECORA (Centro Comercial Regional de Arcoverde) é o principal polo do comércio popular da cidade. É o local mais tradicional para encontrar frutas e verduras frescas, além de carnes, peixes e outros produtos locais. O espaço é famoso por abrigar quiosques que vendem comidas típicas, como galinha de capoeira, buchada e carne de bode. O CECORA sedia eventos oficiais do município. Durante o calendário junino, o espaço se transforma em um polo de apresentações de forró pé de serra, além de movimentar a cidade em datas como o Carnaval. É o local de referência para comprar roupas, artesanato local e vestimentas típicas.",
    imagem: "assets/img/ponto5.jpg",
  },
];

/* Função de criar cards
   Cria um card com imagem, título, texto e botões de contato.
   Usada em Hospedagem, Alimentação, Transporte e Patrocinadores.
   Parâmetros: nome, endereco, telefone, etc.
   onfigurações do card:
            qual campo usar como título ("nome")
            qual campo usar como texto ("endereco" ou "descricao")
            mostrarInstagram: true/false
            mostrarSite: true/false */

function criarCard(item, opcoes) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img class="card-img" src="${item.imagem}" alt="${item[opcoes.tituloKey]}">
    <div class="card-info">
      <h2>${item[opcoes.tituloKey]}</h2>
      <p>${item[opcoes.textoKey]}</p>
      <div class="botoes-contato">

        ${
          item.telefone
            ? `
          <a href="https://wa.me/${item.telefone}" target="_blank">
            <button class="btn-whatsapp"><i class="fa-brands fa-whatsapp"></i></button>
          </a>
          <a href="tel:${item.telefone}">
            <button class="btn-ligar"><i class="fa-solid fa-phone"></i></button>
          </a>
        `
            : ""
        }

        ${
          opcoes.mostrarInstagram && item.instagram
            ? `
          <a href="${item.instagram}" target="_blank">
            <button class="btn-instagram"><i class="fa-brands fa-instagram"></i></button>
          </a>
        `
            : ""
        }

        ${
          opcoes.mostrarSite && item.site
            ? `
          <a href="${item.site}" target="_blank">
            <button class="btn-site"><i class="fa-solid fa-globe"></i></button>
          </a>
        `
            : ""
        }

      </div>
    </div>
  `;

  return card;
}

// HOME -> APP
const btnInformacoes = document.getElementById("btnInformacoes");
const home = document.getElementById("home");
const app = document.getElementById("app");

btnInformacoes.addEventListener("click", function () {
  home.classList.add("escondido");
  app.classList.remove("escondido");
});

// SISTEMA DE ABAS
const botoesMenu = document.querySelectorAll(".menu-btn");
const abas = document.querySelectorAll(".aba");

// Esconde todas as abas e mostra só a escolhida
function mostrarAba(idAba) {
  abas.forEach(function (aba) {
    aba.classList.add("escondido");
  });
  document.getElementById(idAba).classList.remove("escondido");
}

// Clique nos botões do menu inferior
botoesMenu.forEach(function (botao) {
  botao.addEventListener("click", function () {
    botoesMenu.forEach(function (btn) {
      btn.classList.remove("ativo");
    });
    botao.classList.add("ativo");
    mostrarAba(botao.getAttribute("data-aba"));
  });
});

// SIDEBAR
const sidebar = document.getElementById("sidebar");
const abrirMenu = document.getElementById("abrirMenu");
const fecharSidebar = document.getElementById("fecharSidebar");

abrirMenu.addEventListener("click", function () {
  sidebar.classList.add("ativo");
});

fecharSidebar.addEventListener("click", function () {
  sidebar.classList.remove("ativo");
});

// Navegação pelos itens da sidebar (Arcoverde, Segurança, Patrocinadores, Créditos)
const botoesSidebar = document.querySelectorAll(".item-sidebar[data-aba]");

botoesSidebar.forEach(function (botao) {
  botao.addEventListener("click", function () {
    mostrarAba(botao.getAttribute("data-aba"));
    // Remove destaque do menu inferior quando a sidebar abre uma aba
    botoesMenu.forEach(function (btn) {
      btn.classList.remove("ativo");
    });
    sidebar.classList.remove("ativo");
  });
});

// Botão "Home" da sidebar
document
  .getElementById("btnHomeSidebar")
  .addEventListener("click", function () {
    app.classList.add("escondido");
    home.classList.remove("escondido");
    sidebar.classList.remove("ativo");
  });

// Programação
const areaDatas = document.getElementById("datas");
const areaEventos = document.getElementById("eventos");

// Cria os cards de data (rolagem horizontal)
function criarDatas() {
  Object.keys(programacao).forEach(function (data, index) {
    const card = document.createElement("div");
    card.classList.add("card-data");

    if (index === 0) card.classList.add("ativa");

    card.innerHTML = `<h3>${data}</h3>`;

    card.addEventListener("click", function () {
      document.querySelectorAll(".card-data").forEach(function (c) {
        c.classList.remove("ativa");
      });
      card.classList.add("ativa");
      mostrarEventos(data);
    });

    areaDatas.appendChild(card);
  });
}

// Mostra os eventos de uma data, agrupados por polo em ordem alfabética
function mostrarEventos(data) {
  areaEventos.innerHTML = "";

  const eventosDia = programacao[data];

  // Agrupa por polo
  const polos = {};
  eventosDia.forEach(function (evento) {
    if (!polos[evento.polo]) polos[evento.polo] = [];
    polos[evento.polo].push(evento);
  });

  // Ordena alfabeticamente
  const polosOrdenados = Object.keys(polos).sort();

  polosOrdenados.forEach(function (nomePolo) {
    const card = document.createElement("div");
    card.classList.add("card-evento");
    card.innerHTML = `<h2>${nomePolo}</h2>`;

    polos[nomePolo].forEach(function (evento) {
      card.innerHTML += `
        <div class="item-evento">
          <span class="horario">${evento.horario}</span>
          <span>${evento.atracao}</span>
        </div>
      `;
    });

    areaEventos.appendChild(card);
  });
}

criarDatas();
mostrarEventos("13 Junho");

// Hospedagem
const listaHospedagem = document.getElementById("listaHospedagem");

hospedagens.forEach(function (hotel) {
  const card = criarCard(hotel, {
    tituloKey: "nome",
    textoKey: "endereco",
    mostrarInstagram: true,
    mostrarSite: false,
  });
  listaHospedagem.appendChild(card);
});

// Alimentação
const listaAlimentacao = document.getElementById("listaAlimentacao");
const botoesCategoria = document.querySelectorAll(".categoria-btn");

function mostrarCategoria(categoria) {
  listaAlimentacao.innerHTML = "";

  alimentacao[categoria].forEach(function (local) {
    const card = criarCard(local, {
      tituloKey: "nome",
      textoKey: "endereco",
      mostrarInstagram: true,
      mostrarSite: false,
    });
    listaAlimentacao.appendChild(card);
  });
}

botoesCategoria.forEach(function (botao) {
  botao.addEventListener("click", function () {
    botoesCategoria.forEach(function (btn) {
      btn.classList.remove("ativo-categoria");
    });
    botao.classList.add("ativo-categoria");
    mostrarCategoria(botao.getAttribute("data-categoria"));
  });
});

mostrarCategoria("pizzarias");

// Transporte
const listaMoto = document.getElementById("listaMoto");
const listaTaxi = document.getElementById("listaTaxi");

mototaxistas.forEach(function (pessoa) {
  const card = criarCard(pessoa, {
    tituloKey: "nome",
    textoKey: "descricao",
    mostrarInstagram: false,
    mostrarSite: false,
  });
  listaMoto.appendChild(card);
});

taxistas.forEach(function (pessoa) {
  const card = criarCard(pessoa, {
    tituloKey: "nome",
    textoKey: "descricao",
    mostrarInstagram: false,
    mostrarSite: false,
  });
  listaTaxi.appendChild(card);
});

// Mapas
const listaMapas = document.getElementById("listaMapas");

mapas.forEach(function (mapa) {
  const card = document.createElement("div");
  card.classList.add("card-mapa");
  card.innerHTML = `
    <img src="${mapa.imagem}" alt="${mapa.titulo}">
    <div class="info-mapa">
      <h2>${mapa.titulo}</h2>
      <p>${mapa.descricao}</p>
    </div>
  `;
  listaMapas.appendChild(card);
});

// Segurança
const listaSeguranca = document.getElementById("listaSeguranca");

contatosSeguranca.forEach(function (contato) {
  const card = document.createElement("div");
  card.classList.add("card-seguranca");
  card.innerHTML = `
    <h2>${contato.nome}</h2>
    <p>Telefone: ${contato.telefone}</p>
    <div class="botoes-contato">
      <a href="tel:${contato.telefone}">
        <button class="btn-ligar"><i class="fa-solid fa-phone"></i></button>
      </a>
    </div>
  `;
  listaSeguranca.appendChild(card);
});

// Patrocinadores
const listaPatrocinadores = document.getElementById("listaPatrocinadores");

patrocinadores.forEach(function (patrocinador) {
  const card = criarCard(patrocinador, {
    tituloKey: "nome",
    textoKey: "descricao",
    mostrarInstagram: true,
    mostrarSite: true,
  });
  listaPatrocinadores.appendChild(card);
});

// Arcoverde
// Preenche o bloco de texto histórico
const textoArcoverde = document.getElementById("textoArcoverde");
textoArcoverde.classList.add("texto-arcoverde");

// Cada item do array "historiaArcoverde" vira um parágrafo <p>
historiaArcoverde.forEach(function (paragrafo) {
  const p = document.createElement("p");
  p.textContent = paragrafo;
  textoArcoverde.appendChild(p);
});

// Preenche os cards dos pontos turísticos
// Os pontos turísticos não têm botões de contato,
// então criamos os cards manualmente (sem usar criarCard)
const listaPontos = document.getElementById("listaPontos");

pontosTuristicos.forEach(function (ponto) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img class="card-img" src="${ponto.imagem}" alt="${ponto.nome}">
    <div class="card-info">
      <h2>${ponto.nome}</h2>
      <p>${ponto.descricao}</p>
    </div>
  `;

  listaPontos.appendChild(card);
});

const campoPesquisa = document.getElementById("campoPesquisa");

campoPesquisa.addEventListener("input", pesquisarGlobal);

function pesquisarGlobal() {
  const termo = campoPesquisa.value.toLowerCase().trim();

  document.querySelectorAll(".resultado-encontrado").forEach((el) => {
    el.classList.remove("resultado-encontrado");
  });

  if (!termo) return;

  // ===== PROGRAMAÇÃO =====

  for (const data in programacao) {
    const encontrou = programacao[data].find((evento) =>
      (
        evento.atracao +
        " " +
        evento.polo +
        " " +
        evento.horario
      )
        .toLowerCase()
        .includes(termo)
    );

    if (encontrou) {
      mostrarAba("programacao");

      document.querySelectorAll(".card-data").forEach((card) => {
        card.classList.remove("ativa");

        if (card.textContent.includes(data)) {
          card.classList.add("ativa");
        }
      });

      mostrarEventos(data);

      setTimeout(() => {
        document.querySelectorAll(".card-evento").forEach((card) => {
          if (card.textContent.toLowerCase().includes(termo)) {
            card.classList.add("resultado-encontrado");

            card.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        });
      }, 50);

      return;
    }
  }

  // ===== HOSPEDAGEM =====

  const hotel = hospedagens.find((item) =>
    JSON.stringify(item).toLowerCase().includes(termo)
  );

  if (hotel) {
    mostrarAba("hospedagem");

    setTimeout(() => {
      document.querySelectorAll("#listaHospedagem .card").forEach((card) => {
        if (card.textContent.toLowerCase().includes(termo)) {
          card.classList.add("resultado-encontrado");
          card.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      });
    }, 50);

    return;
  }

  // ===== ALIMENTAÇÃO =====

  for (const categoria in alimentacao) {
    const encontrou = alimentacao[categoria].find((item) =>
      JSON.stringify(item).toLowerCase().includes(termo)
    );

    if (encontrou) {
      mostrarAba("alimentacao");

      document.querySelectorAll(".categoria-btn").forEach((btn) => {
        btn.classList.remove("ativo-categoria");

        if (btn.dataset.categoria === categoria) {
          btn.classList.add("ativo-categoria");
        }
      });

      mostrarCategoria(categoria);

      setTimeout(() => {
        document.querySelectorAll("#listaAlimentacao .card").forEach((card) => {
          if (card.textContent.toLowerCase().includes(termo)) {
            card.classList.add("resultado-encontrado");

            card.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        });
      }, 50);

      return;
    }
  }

  // ===== SEGURANÇA =====

  const contato = contatosSeguranca.find((item) =>
    JSON.stringify(item).toLowerCase().includes(termo)
  );

  if (contato) {
    mostrarAba("seguranca");

    setTimeout(() => {
      document.querySelectorAll(".card-seguranca").forEach((card) => {
        if (card.textContent.toLowerCase().includes(termo)) {
          card.classList.add("resultado-encontrado");

          card.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      });
    }, 50);

    return;
  }

  // ===== PONTOS TURÍSTICOS =====

  const ponto = pontosTuristicos.find((item) =>
    JSON.stringify(item).toLowerCase().includes(termo)
  );

  if (ponto) {
    mostrarAba("arcoverde");

    setTimeout(() => {
      document.querySelectorAll("#listaPontos .card").forEach((card) => {
        if (card.textContent.toLowerCase().includes(termo)) {
          card.classList.add("resultado-encontrado");

          card.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      });
    }, 50);
  }
}
