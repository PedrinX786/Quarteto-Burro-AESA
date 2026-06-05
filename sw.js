// Service Worker — São João de Arcoverde 2026
// Atualiza este número a cada nova versão do app para forçar o reload do cache.
const CACHE_NAME = "sjoao-arcoverde-v1";

// Arquivos que serão cacheados no momento da instalação (shell do app).
const ARQUIVOS_CACHE = [
  "/",
  "/index.html",
  "/assets/css/style.css",
  "/assets/js/script.js",
  // Imagens principais
  "/assets/img/fundo.jpg",
  "/assets/img/fundo2.png",
  "/assets/img/mapa-mototaxi.jpeg",
  "/assets/img/eventos.jpg",
  "/assets/img/polos.jpg",
  "/assets/img/transporte.jpg",
  // Hospedagem
  "/assets/img/mapa1.jpg",
  "/assets/img/mapa2.jpg",
  "/assets/img/mapa3.jpg",
  "/assets/img/mapa4.jpg",
  "/assets/img/mapa5.jpg",
  // Alimentação
  "/assets/img/pizza.jpg",
  "/assets/img/pizza2.jpg",
  "/assets/img/bar.jpg",
  "/assets/img/restaurante.jpg",
  // Transporte
  "/assets/img/mototaxi1.jpg",
  "/assets/img/mototaxi2.jpg",
  "/assets/img/taxi.jpg",
  // Pontos turísticos
  "/assets/img/ponto.jpg",
  "/assets/img/ponto2.jpg",
  "/assets/img/ponto3.jpg",
  "/assets/img/ponto4.jpg",
  "/assets/img/ponto5.jpg",
  // Patrocinadores
  "/assets/img/patro.jpg",
  "/assets/img/patro2.jpg",
  // Ícones PWA
  "/assets/icons/icon-192x192.png",
  "/assets/icons/icon-512x512.png",
];

// INSTALL — cacheia o shell do app
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(ARQUIVOS_CACHE);
      })
      .then(function () {
        // Força a ativação imediata sem esperar abas antigas fecharem
        return self.skipWaiting();
      }),
  );
});

// ACTIVATE — apaga caches antigos de versões anteriores
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches
      .keys()
      .then(function (nomes) {
        return Promise.all(
          nomes
            .filter(function (nome) {
              return nome !== CACHE_NAME;
            })
            .map(function (nome) {
              return caches.delete(nome);
            }),
        );
      })
      .then(function () {
        // Assume controle de todas as abas imediatamente
        return self.clients.claim();
      }),
  );
});

// FETCH — estratégia "Cache First, fallback para rede"
// Recursos em cache são servidos imediatamente (ideal para eventos offline).
// Recursos não cacheados são buscados na rede e salvos para uso futuro.
self.addEventListener("fetch", function (event) {
  // Ignora requisições que não sejam GET (ex: POST do Font Awesome CDN)
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then(function (respostaCache) {
      if (respostaCache) {
        return respostaCache;
      }

      // Não está no cache: busca na rede e salva
      return fetch(event.request)
        .then(function (respostaRede) {
          // Só cacheia respostas válidas (status 200, tipo básico)
          if (
            !respostaRede ||
            respostaRede.status !== 200 ||
            respostaRede.type !== "basic"
          ) {
            return respostaRede;
          }

          const respostaParaSalvar = respostaRede.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, respostaParaSalvar);
          });

          return respostaRede;
        })
        .catch(function () {
          // Fallback offline: retorna a home cacheada se tudo falhar
          return caches.match("/index.html");
        });
    }),
  );
});
