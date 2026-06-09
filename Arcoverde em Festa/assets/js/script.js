// Para adicionar um hotel, restaurante, mototaxista etc.,
// inserir um novo objeto dentro da lista correspondente.

// Programação
// Estrutura: cada chave é uma data. Cada item tem polo, horário e atração.
const programacao = {
  "13 Junho": [
    { polo: "Arraiá da Cecora", horario: "10:00", atracao: "Forró na Feira" , imagem: "assets/img/Forró na Feira.webp",},
    {polo: "Polo Alternativo", horario: "20:00", atracao: "Flávio José" , imagem: "assets/img/Flavio José.webp",},
    { polo: "Polo Festivo", horario: "22:00", atracao: "Alceu Valença" , imagem: "assets/img/Alceu Valença.webp",},
    {polo: "Polo Multicultural", horario: "18:00", atracao: "Coco das Irmãs Lopes" , imagem: "assets/img/Coco das Irmãs Lopes.webp",},
  ],
  "14 Junho": [
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Junior e Jorge" , imagem: "assets/img/Junior e Jorge.webp",},
    { polo: "Polo Festivo", horario: "22:00", atracao: "Lipe Lucena" , imagem: "assets/img/Lipe Lucena.webp",},
    { polo: "Polo Multicultural", horario: "18:00", atracao: "PV Calado" , imagem: "assets/img/PV Calado.webp",},
  ],
  "15 Junho": [
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Festival de Quadrilhas" , imagem: "assets/img/Festival de Quadrilhas.webp",},
  ],
  "16 Junho": [
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Zé Vaqueiro" , imagem: "assets/img/Zé Vaqueiro.webp",},
    { polo: "Polo Festivo", horario: "22:00", atracao: "Nattan" , imagem: "assets/img/Nattan.webp",},
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Juciê" , imagem: "assets/img/Juciê.webp",},
  ],
  "17 Junho": [
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Eric Land" , imagem: "assets/img/Eric Land.webp",},
    { polo: "Polo Festivo", horario: "22:00", atracao: "Vitor Fernandes" , imagem: "assets/img/Vitor Fernandes.webp",},
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Fernandinha" , imagem: "assets/img/Fernandinha.webp",},
  ],
  "18 Junho": [
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Iguinho e Lulinha" , imagem: "assets/img/Iguinho e Lulinha.webp",},
    { polo: "Polo Festivo", horario: "22:00", atracao: "Wesley Safadão" , imagem: "assets/img/Wesley Safadão.webp",},
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Maciel Kuré" , imagem: "assets/img/Maciel Kuré.webp",},
  ],
  "19 Junho": [
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Talita Mel" , imagem: "assets/img/Talita Mel.webp",},
    { polo: "Polo Festivo", horario: "22:00", atracao: "Priscila Senna" , imagem: "assets/img/Priscila Senna.webp",},
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Dani Aguiar" , imagem: "assets/img/Dani Aguiar.webp",},
    { polo: "Polo Pé de Serra", horario: "20:00", atracao: "Ademir e Banda" , imagem: "assets/img/Ademir e Banda.webp",},
    { polo: "Polo Pé de Serra", horario: "22:00", atracao: "Silvia Regina" , imagem: "assets/img/Silvia Regina.webp",},
  ],
"20 Junho": [
    { polo: "Arraiá da Cecora", horario: "10:00", atracao: "Neguinho Arcoverde" , imagem: "assets/img/Neguinho Arcoverde.webp",},
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Edy & Nathan" , imagem: "assets/img/Edy & Nathan.webp",},
    { polo: "Polo Festivo", horario: "22:00", atracao: "Fabinho Testado" , imagem: "assets/img/Fabinho Testado.webp",},
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Mayana Neiva" , imagem: "assets/img/Mayana Neiva.webp",},
    { polo: "Polo Pé de Serra", horario: "20:00", atracao: "Forró Maktub" , imagem: "assets/img/Forró Maktub.webp",},
    { polo: "Polo Pé de Serra", horario: "22:00", atracao: "Forró de Pai pra Filho" , imagem: "assets/img/Forró de Pai pra Filho.webp",},
  ],
"21 Junho": [
    { polo: "Polo Alternativo", horario: "18:30", atracao: "Assisão" , imagem: "assets/img/Assisão.webp",},
    { polo: "Polo Festivo", horario: "20:00", atracao: "Super Dara" , imagem: "assets/img/Super Dara.webp",},
    { polo: "Polo Festivo", horario: "22:30", atracao: "Felipe Amorim" , imagem: "assets/img/Felipe Amorim.webp",},
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Ciro Santas" , imagem: "assets/img/Ciro Santas.webp",},
    { polo: "Polo Multicultural", horario: "22:00", atracao: "Capital do Sol" , imagem: "assets/img/Capital do Sol.webp",},
    { polo: "Polo Pé de Serra", horario: "20:00", atracao: "Sergio Coringa e Cliente a Flor do Sertão" , imagem: "assets/img/Sergio Coringa e Cliente a Flor do Sertão.webp",},   
    { polo: "Polo Pé de Serra", horario: "22:00", atracao: "Cição" , imagem: "assets/img/Cição.webp",},
  ],
  "22 Junho": [
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Geraldinho Lins" , imagem: "assets/img/Geraldinho Lins.webp",},
    { polo: "Polo Festivo", horario: "22:00", atracao: "Garota Safada" , imagem: "assets/img/Garota Safada.webp",},
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Coco Fulô do Barro" , imagem: "assets/img/Coco Fulô do Barro.webp",},
    { polo: "Polo Pé de Serra", horario: "20:00", atracao: "Zé do Peba e Trio Catingueira" , imagem: "assets/img/Zé do Peba e Trio Catingueira.webp",},
    { polo: "Polo Pé de Serra", horario: "22:00", atracao: "Pau no Xote" , imagem: "assets/img/Pau no Xote.webp",},
  ],
  "23 Junho": [
    { polo: "Polo Alternativo", horario: "20:00", atracao: "George Silva" , imagem: "assets/img/George Silva.webp",},
    { polo: "Polo Festivo", horario: "20:30", atracao: "Jorge de Altinho" , imagem: "assets/img/Jorge de Altinho.webp",},
    { polo: "Polo Multicultural", horario: "22:00", atracao: "Cordel do Fogo Encantado" , imagem: "assets/img/Cordel do Fogo Encantado.webp",},
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Coco Raízes de Arcoverde" , imagem: "assets/img/Coco Raízes de Arcoverde.webp",},
    { polo: "Polo Pé de Serra", horario: "20:00", atracao: "James Vaqueiro" , imagem: "assets/img/James Vaqueiro.webp",},
    { polo: "Polo Pé de Serra", horario: "20:30", atracao: "Lorenção" , imagem: "assets/img/Lorenção.webp",},
    { polo: "Polo Pé de Serra", horario: "22:00", atracao: "Boka Diniz" , imagem: "assets/img/Boka Diniz.webp",},
  ],
  "24 Junho": [
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Mangníficos" , imagem: "assets/img/Mangníficos.webp",},
    { polo: "Polo Festivo", horario: "22:00", atracao: "Xind Avião" , imagem: "assets/img/Xind Avião.webp",},
    { polo: "Polo Multicultural", horario: "18:00", atracao: "João Vaqueiro" , imagem: "assets/img/João Vaqueiro.webp",},
    { polo: "Polo Pé de Serra", horario: "20:00", atracao: "Tiago e Dineide Araújo" , imagem: "assets/img/Tiago e Dineide Araújo.webp",},
    { polo: "Polo Pé de Serra", horario: "22:00", atracao: "Vaqueirões do Forró" , imagem: "assets/img/Vaqueirões do Forró.webp",},
  ],
  "25 Junho": [
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Nágylla Ferreira" , imagem: "assets/img/Nágylla Ferreira.webp",},
    { polo: "Polo Festivo", horario: "22:00", atracao: "João Gomes" , imagem: "assets/img/João Gomes.webp",},  
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Will" , imagem: "assets/img/Will.webp",},
  ],
  "26 Junho": [
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Harry Estigado" , imagem: "assets/img/Harry Estigado.webp",},
    { polo: "Polo Festivo", horario: "22:00", atracao: "Nathanzinho Lima" , imagem: "assets/img/Nathanzinho Lima.webp",},
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Ycaro Andrade" , imagem: "assets/img/Ycaro Andrade.webp",},
  ],
  "27 Junho": [
    { polo: "Arraiá da Cecora", horario: "10:00", atracao: "Mariquinhos Pernabunco" , imagem: "assets/img/Mariquinhos Pernabunco.webp",},
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Noda de Caju" , imagem: "assets/img/Noda de Caju.webp",},
    { polo: "Polo Festivo", horario: "20:30", atracao: "Flávio Leandro" , imagem: "assets/img/Flávio Leandro.webp",},
    { polo: "Polo Festivo", horario: "22:00", atracao: "Limão com Mel" , imagem: "assets/img/Limão com Mel.webp",},
    { polo: "Polo Pé de Serra", horario: "20:00", atracao: "Ricardo Lima" , imagem: "assets/img/Ricardo Lima.webp",},
    { polo: "Polo Pé de Serra", horario: "22:00", atracao: "Daci Pires e Forró Baluarte" , imagem: "assets/img/Daci Pires e Forró Baluarte.webp",},
  ],
  "28 Junho": [
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Carlos e Fábio" , imagem: "assets/img/Carlos e Fábio.webp",},
    { polo: "Polo Alternativo", horario: "20:00", atracao: "Forrozão Chacal" , imagem: "assets/img/Forrozão Chacal.webp",},
    { polo: "Polo Festivo", horario: "22:00", atracao: "Matheus e Kauan" , imagem: "assets/img/Matheus e Kauan.webp",},
    { polo: "Polo Multicultural", horario: "18:00", atracao: "Flávio Leandro" , imagem: "assets/img/Flávio Leandro.webp",},
    { polo: "Polo Pé de Serra", horario: "20:00", atracao: "Zezinho do Acordeon" , imagem: "assets/img/Zezinho do Acordeon.webp",},
    { polo: "Polo Pé de Serra", horario: "22:00", atracao: "Forró Júnior Saygon" , imagem: "assets/img/Forró Júnior Saygon.webp",},
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
    imagem: "assets/img/mapa1.webp",
  },
  {
    nome: "Amaretto",
    endereco: "Avenida Aeroporto, 3790 - São Cristóvão, Arcoverde",
    telefone: "5587988064232",
    instagram: "https://www.instagram.com/amarettohotel/",
    imagem: "assets/img/mapa2.webp",
  },
  {
    nome: "Hotel Cruzeiro",
    endereco: "Av. Osvaldo Cruz, 1740 - Cel. Siqueira Campos, Arcoverde",
    telefone: "5587996192624",
    instagram: "https://www.instagram.com/hoteiscruzeiro/",
    imagem: "assets/img/mapa3.webp",
  },
    {
    nome: "Pousada Riacho do Mel",
    endereco: "Av. José Bonifácio, 1819 - São Miguel, Arcoverde",
    telefone: "558738212178",
    instagram: "https://www.instagram.com/pousada.riachodomel/",
    imagem: "assets/img/mapa4.webp",
  },
    {
    nome: "Hotel Olho d'Água",
    endereco: "R. Armando de Siqueira Brito, 475 - São Miguel, Arcoverde",
    telefone: "5587991670380",
    instagram: "https://www.instagram.com/hotelolhodaguadosbredos/",
    imagem: "assets/img/mapa5.webp",
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
      imagem: "assets/img/pizza.webp",
    },
    {
      nome: "Pizzaria Flor do Horizonte",
      endereco: "Av. José Bonifácio, 745 - São Cristóvão, Arcoverde",
      telefone: "5587991054927",
      instagram: "https://www.instagram.com/pizzariaflordohorizonte/",
      imagem: "assets/img/pizza2.webp",
    },
  ],
  bares: [
    {
      nome: "Monteiro Bar",
      endereco: "Praça Barão do Rio Branco - Centro, Arcoverde",
      telefone: "5587999099498",
      instagram: "https://instagram.com/bardosertao",
      imagem: "assets/img/bar.webp",
    },
  ],
  restaurantes: [
    {
      nome: "A OCA DO BUDA",
      endereco: "Av. José Bonifácio, 540 - São Cristóvão, Arcoverde",
      telefone: "558087991485539",
      instagram: "",
      imagem: "assets/img/restaurante.webp",
    },
    {
      nome: "Cantana Restaurante",
      endereco: "R. Dantas Barreto, 21 - Centro, Arcoverde",
      telefone: "5587991490958",
      instagram: "https://www.instagram.com/cantanarestaurante",
      imagem: "assets/img/restaurante2.webp",
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
    imagem: "assets/img/mototaxi1.webp",
  },
  {
    nome: "Mototáxi São Cristóvão 24 horas",
    descricao: "Corridas 24 horas",
    telefone: "55879938223015", 
    imagem: "assets/img/mototaxi2.webp",
  },
];

const taxistas = [
 {
    nome: "Ponto de Táxi Matriz",
    descricao: "Corridas urbanas e viagens",
    telefone: "558799181024057",
    imagem: "assets/img/taxi.webp",
  },
];

// Mapas
const mapas = [
  {
    titulo: "Mapa Geral do Evento",
    descricao: "Visualize os principais polos do São João.",
    imagem: "assets/img/eventos.webp",
  },
  {
    titulo: "Mapa dos Polos",
    descricao: "Veja a localização dos polos culturais.",
    imagem: "assets/img/polos.webp",
  },
  {
    titulo: "Mapa de Transporte",
    descricao: "Pontos de táxi, mototáxi e acessos.",
    imagem: "assets/img/transporte.webp",
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
    descricao: "Moda, saúde visual e bem-estar, oferecendo armações, óculos de sol e lentes de grau com alta tecnologia.",
    instagram: "https://instagram.com/",
    site: "",
    imagem: "assets/img/patro.webp",
  },
  {
    nome: "Delivery Arretado",
    descricao: "Aplicativo de entregas local, facilitando a conexão entre moradores e o comércio da região",
    instagram: "https://instagram.com/",
    site: "https://google.com",
    imagem: "assets/img/patro2.webp",
  },
];

/* ARCOVERDE
   Texto histórico sobre Arcoverde.
   Cada item do array vira um parágrafo separado na tela.
   SUBSTITUA pelo texto definitivo quando estiver pronto.*/
const historiaArcoverde = [
  {imagem: "assets/img/Arcoverde.webp",},
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
    imagem: "assets/img/ponto.webp",
  },
  {
    nome: "Alto do Cruzeiro",
    descricao:
      "O Alto do Cruzeiro, localizado no Morro da Santa Cruz, é um dos principais cartões-postais e berços culturais de Arcoverde. Famoso pela vista panorâmica da cidade, é um ponto de encontro histórico reverenciado como o local de origem do tradicional Samba de Coco Raízes de Arcoverde. Devido à sua altitude, oferece uma vista limpa e privilegiada de Arcoverde, tornando-se o point perfeito para moradores e turistas que sobem para apreciar o entardecer ou dias chuvosos na região. A sede do mundialmente famoso Samba de Coco Raízes de Arcoverde fica no local. O Alto é o ponto de partida e palco de celebrações tradicionais, abrigando frequentemente prévias do calendário junino, como o início da Caminhada do Forró, além de atrações de grandes eventos de música e festivais de cultura popular.",
    imagem: "assets/img/ponto2.webp",
  },
  {
    nome: "Serra do Jacaré",
    descricao:
      "A Serra do Jacaré é um dos principais pontos de ecoturismo e aventura em Arcoverde (PE). Com uma trilha de nível moderado e elevação de 328 metros, ela oferece vistas deslumbrantes da caatinga e é o local ideal para caminhadas, contemplação da natureza e observação do pôr do sol. A trilha costuma iniciar na região do Alto do Cruzeiro e vai até o topo da Serra do Jacaré. O acesso fica próximo à BR-232, exigindo atenção ao caminhar pelo acostamento. A trilha é ótima para iniciantes, mas requer cuidado devido a pedras arredondadas soltas e cascalho. Devido ao terreno irregular e à exposição ao sol do sertão, o ideal é usar calçados fechados e levar bastante água.",
    imagem: "assets/img/ponto3.webp",
  },
    {
    nome: "Estação da Cultura",
    descricao:
      "A Estação da Cultura é um importante polo cultural e histórico localizado na antiga estação ferroviária de Arcoverde, inaugurada em 1912. O espaço foi ocupado e revitalizado por artistas locais em 2001 e hoje funciona como uma referência em arte, educação e democratização cultural no estado. O local abriga diversos coletivos artísticos e ateliês, englobando teatro, capoeira, grafite, literatura e a produção de instrumentos musicais. A Associação Estação da Cultura é reconhecida por ter sido o primeiro Ponto de Cultura oficial do Ministério da Cultura no país. O espaço é palco para diversas programações ao longo do ano, incluindo a famosa mostra de artes 'A Vapor' e tradicionais polos de animação nos festejos de São João.",
    imagem: "assets/img/ponto4.webp",
  },
    {
    nome: "CECORA",
    descricao:
      "O CECORA (Centro Comercial Regional de Arcoverde) é o principal polo do comércio popular da cidade. É o local mais tradicional para encontrar frutas e verduras frescas, além de carnes, peixes e outros produtos locais. O espaço é famoso por abrigar quiosques que vendem comidas típicas, como galinha de capoeira, buchada e carne de bode. O CECORA sedia eventos oficiais do município. Durante o calendário junino, o espaço se transforma em um polo de apresentações de forró pé de serra, além de movimentar a cidade em datas como o Carnaval. É o local de referência para comprar roupas, artesanato local e vestimentas típicas.",
    imagem: "assets/img/ponto5.webp",
  },
];

// Lista de integrantes da equipe nos Créditos
const equipe = [
  {
    nome: "Emanuel Gouveia",
    funcao: "Desenvolvedor",
    imagem: "assets/img/Emanuel Gouveia.webp"
  },
  {
    nome: "José Gilmar",
    funcao: "Designer",
    imagem: "assets/img/José Gilmar.webp"
  },
  {
    nome: "Pedro Rangel",
    funcao: "Desenvolvedor",
    imagem: "assets/img/Pedro Rangel.webp"
  },
  {
    nome: "Victor Barbosa",
    funcao: "Designer",
    imagem: "assets/img/Victor Barbosa A.webp"
  }
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
      // Define uma imagem padrão caso a atração não tenha uma imagem própria no objeto
      const imagemAtracao = evento.imagem || "assets/img/eventos.jpg";

      card.innerHTML += `
        <div class="item-evento">
          <div class="detalhes-evento">
            <span class="horario">${evento.horario}</span>
            <span class="atracao">${evento.atracao}</span>
          </div>
          <img class="img-evento" src="${imagemAtracao}" alt="${evento.atracao}">
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


// Preenche o bloco de texto histórico e imagens
const textoArcoverde = document.getElementById("textoArcoverde");
textoArcoverde.classList.add("texto-arcoverde");

textoArcoverde.innerHTML = ""; // Limpa antes de preencher

historiaArcoverde.forEach(function (item) {
  // Se o item for um objeto e tiver a propriedade 'imagem'
  if (typeof item === "object" && item.imagem) {
    const img = document.createElement("img");
    img.src = item.imagem;
    img.alt = "Imagem de Arcoverde";
    img.classList.add("img-historia"); // Classe para estilizar no CSS se quiser
    textoArcoverde.appendChild(img);
  } else {
    // Se for apenas texto (string), cria o parágrafo normal
    const p = document.createElement("p");
    p.textContent = item;
    textoArcoverde.appendChild(p);
  }
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

// Preenche a seção da Equipe nos Créditos dinamicamente
const listaEquipe = document.getElementById("listaEquipe");

if (listaEquipe) {
  listaEquipe.innerHTML = ""; // Limpa conteúdo estático anterior

  equipe.forEach(function (membro) {
    // Caso algum integrante fique sem imagem temporariamente, usa a imagem padrão do app
    const fotoMembro = membro.imagem || "assets/img/eventos.jpg"; 

    const itemMembro = document.createElement("div");
    itemMembro.classList.add("item-membro-equipe");

    itemMembro.innerHTML = `
      <img src="${fotoMembro}" alt="Foto de ${membro.nome}" class="foto-membro">
      <div class="infos-membro">
        <span class="nome-membro">${membro.nome}</span>
        <span class="funcao-membro">${membro.funcao}</span>
      </div>
    `;

    listaEquipe.appendChild(itemMembro);
  });
}


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
