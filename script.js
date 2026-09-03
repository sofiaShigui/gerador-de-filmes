// ---------------------------------------------------------
// Base de dados de filmes
// ---------------------------------------------------------
const FILMES = [
  { titulo: "Interestelar", generos: ["Ficção Científica", "Drama","Ação"], ano: 2014, classificacao: "PG-13", duracao: 169, popularidade: "popular", spoilerSensivel: false, sinopse: "Um grupo de astronautas atravessa um buraco de minhoca em busca de um novo lar para a humanidade." },
  { titulo: "Vingadores: Ultimato", generos: ["Ação", "Ficção Científica", "Aventura"], ano: 2019, classificacao: "PG-13", duracao: 181, popularidade: "popular", spoilerSensivel: false, sinopse: "Os heróis remanescentes se unem para reverter os efeitos de uma destruição em escala universal." },
  { titulo: "Clube da Luta", generos: ["Drama", "Suspense"], ano: 1999, classificacao: "18+", duracao: 139, popularidade: "cult", spoilerSensivel: true, sinopse: "Um homem insone forma, ao lado de um vendedor de sabão carismático, um clube de luta clandestino." },
  { titulo: "Cidade de Deus", generos: ["Drama", "Ação"], ano: 2002, classificacao: "18+", duracao: 130, popularidade: "cult", spoilerSensivel: false, sinopse: "A trajetória de jovens ligados ao crime organizado em uma comunidade do Rio de Janeiro, ao longo de duas décadas." },
  { titulo: "Toy Story", generos: ["Animação", "Aventura", "Comédia"], ano: 1995, classificacao: "PG", duracao: 81, popularidade: "popular", spoilerSensivel: false, sinopse: "Um cowboy de brinquedo vê sua posição ameaçada quando um boneco espacial chega ao quarto de seu dono." },
  { titulo: "Divertida Mente", generos: ["Animação", "Comédia", "Drama"], ano: 2015, classificacao: "PG", duracao: 95, popularidade: "popular", spoilerSensivel: false, sinopse: "Dentro da mente de uma garota de onze anos, cinco emoções disputam o controle de suas reações." },
  { titulo: "Coringa", generos: ["Drama", "Suspense"], ano: 2019, classificacao: "16+", duracao: 122, popularidade: "popular", spoilerSensivel: false, sinopse: "Um comediante fracassado mergulha em uma espiral que o transforma em um dos vilões mais icônicos dos quadrinhos." },
  { titulo: "Parasita", generos: ["Drama", "Suspense", "Comédia"], ano: 2019, classificacao: "16+", duracao: 132, popularidade: "popular", spoilerSensivel: true, sinopse: "Uma família de baixa renda se infiltra, aos poucos, na rotina de uma família rica." },
  { titulo: "A Origem", generos: ["Ficção Científica", "Ação", "Suspense"], ano: 2010, classificacao: "PG-13", duracao: 148, popularidade: "popular", spoilerSensivel: false, sinopse: "Um ladrão especializado em roubar segredos através de sonhos recebe a missão inversa: plantar uma ideia." },
  { titulo: "Pantera Negra", generos: ["Ação", "Ficção Científica", "Aventura"], ano: 2018, classificacao: "PG-13", duracao: 134, popularidade: "popular", spoilerSensivel: false, sinopse: "O novo rei de Wakanda precisa proteger seu povo enquanto enfrenta um rival que ameaça seu trono." },
  { titulo: "O Iluminado", generos: ["Terror", "Suspense"], ano: 1980, classificacao: "16+", duracao: 146, popularidade: "cult", spoilerSensivel: false, sinopse: "Um escritor aceita cuidar de um hotel isolado no inverno e começa a perder o contato com a realidade." },
  { titulo: "Hereditário", generos: ["Terror", "Drama"], ano: 2018, classificacao: "18+", duracao: 127, popularidade: "cult", spoilerSensivel: true, sinopse: "Após a morte da avó, uma família começa a desvendar segredos sombrios escondidos por gerações." },
  { titulo: "Corra!", generos: ["Terror", "Suspense"], ano: 2017, classificacao: "16+", duracao: 104, popularidade: "popular", spoilerSensivel: true, sinopse: "Um rapaz visita a família da namorada pela primeira vez e percebe que algo ali não está certo." },
  { titulo: "A Bruxa", generos: ["Terror", "Drama"], ano: 2015, classificacao: "16+", duracao: 92, popularidade: "cult", spoilerSensivel: false, sinopse: "Uma família de colonos isolada na floresta começa a suspeitar de forças sobrenaturais à espreita." },
  { titulo: "Diário de uma Paixão", generos: ["Romance", "Drama"], ano: 2004, classificacao: "PG-13", duracao: 123, popularidade: "popular", spoilerSensivel: false, sinopse: "A história de um casal separado pela diferença de classe social é relembrada décadas depois." },
  { titulo: "Simplesmente Amor", generos: ["Romance", "Comédia"], ano: 2003, classificacao: "PG-13", duracao: 135, popularidade: "popular", spoilerSensivel: false, sinopse: "Diversas histórias de amor se cruzam em Londres nas semanas que antecedem o Natal." },
  { titulo: "Orgulho e Preconceito", generos: ["Romance", "Drama"], ano: 2005, classificacao: "PG", duracao: 129, popularidade: "cult", spoilerSensivel: false, sinopse: "Numa Inglaterra do século XIX, uma jovem de opiniões fortes revê seus julgamentos sobre um pretendente orgulhoso." },
  { titulo: "500 Dias com Ela", generos: ["Romance", "Comédia", "Drama"], ano: 2009, classificacao: "PG-13", duracao: 95, popularidade: "cult", spoilerSensivel: false, sinopse: "Um relacionamento de pouco mais de um ano é revisitado, fora de ordem, em busca do que deu errado." },
  { titulo: "Superbad", generos: ["Comédia"], ano: 2007, classificacao: "16+", duracao: 113, popularidade: "popular", spoilerSensivel: false, sinopse: "Dois amigos inseparáveis correm contra o tempo para comprar bebida antes de uma festa na véspera da formatura." },
  { titulo: "O Grande Hotel Budapeste", generos: ["Comédia", "Aventura"], ano: 2014, classificacao: "PG-13", duracao: 99, popularidade: "cult", spoilerSensivel: false, sinopse: "O concierge de um hotel de luxo e seu jovem lobista se envolvem no roubo de uma pintura valiosa." },
  { titulo: "Se Beber, Não Case!", generos: ["Comédia"], ano: 2009, classificacao: "16+", duracao: 100, popularidade: "popular", spoilerSensivel: false, sinopse: "Três amigos acordam sem memória do noivo, um dia antes do casamento, em Las Vegas." },
  { titulo: "Curtindo a Vida Adoidado", generos: ["Comédia"], ano: 1986, classificacao: "PG-13", duracao: 103, popularidade: "cult", spoilerSensivel: false, sinopse: "Um estudante decide matar aula e viver um dia inesquecível pela cidade com os melhores amigos." },
  { titulo: "Blade Runner 2049", generos: ["Ficção Científica", "Drama", "Suspense"], ano: 2017, classificacao: "16+", duracao: 164, popularidade: "cult", spoilerSensivel: false, sinopse: "Um replicante encontra um segredo capaz de mergulhar o que resta da sociedade no caos." },
  { titulo: "Matrix", generos: ["Ficção Científica", "Ação"], ano: 1999, classificacao: "14+", duracao: 136, popularidade: "popular", spoilerSensivel: false, sinopse: "Um programador descobre que a realidade que conhece é uma simulação controlada por máquinas." },
  { titulo: "Duna", generos: ["Ficção Científica", "Aventura", "Drama"], ano: 2021, classificacao: "PG-13", duracao: 155, popularidade: "popular", spoilerSensivel: false, sinopse: "O herdeiro de uma casa nobre é levado a um planeta desértico disputado por seu recurso mais precioso." },
  { titulo: "Alien, o Oitavo Passageiro", generos: ["Terror", "Ficção Científica", "Suspense"], ano: 1979, classificacao: "16+", duracao: 117, popularidade: "cult", spoilerSensivel: false, sinopse: "A tripulação de uma nave de carga espacial é caçada, uma a uma, por um organismo desconhecido." },
  { titulo: "Mad Max: Estrada da Fúria", generos: ["Ação", "Aventura", "Ficção Científica"], ano: 2015, classificacao: "16+", duracao: 120, popularidade: "popular", spoilerSensivel: false, sinopse: "Numa perseguição sem fim por um deserto pós-apocalíptico, uma guerreira ajuda um grupo de fugitivas." },
  { titulo: "John Wick", generos: ["Ação", "Suspense"], ano: 2014, classificacao: "16+", duracao: 101, popularidade: "popular", spoilerSensivel: false, sinopse: "Um ex-assassino de aluguel volta à ativa após um ato de violência atingir o que restava de sua vida pacata." },
  { titulo: "Gladiador", generos: ["Ação", "Drama", "Aventura"], ano: 2000, classificacao: "16+", duracao: 155, popularidade: "popular", spoilerSensivel: false, sinopse: "Um general romano traído é reduzido à escravidão e passa a lutar como gladiador em busca de vingança." },
  { titulo: "O Poderoso Chefão", generos: ["Drama", "Suspense"], ano: 1972, classificacao: "16+", duracao: 175, popularidade: "cult", spoilerSensivel: false, sinopse: "O filho mais novo de uma família da máfia é gradualmente arrastado para os negócios do pai." },
  { titulo: "Forrest Gump", generos: ["Drama", "Comédia", "Romance"], ano: 1994, classificacao: "14+", duracao: 142, popularidade: "popular", spoilerSensivel: false, sinopse: "Um homem simples e de bom coração atravessa, quase sem querer, décadas de história dos Estados Unidos." },
  { titulo: "A Vida é Bela", generos: ["Drama", "Comédia"], ano: 1997, classificacao: "PG-13", duracao: 116, popularidade: "cult", spoilerSensivel: false, sinopse: "Um pai usa a imaginação e o humor para proteger o filho pequeno da realidade de um campo de concentração." },
  { titulo: "O Auto da Compadecida", generos: ["Comédia", "Drama", "Fantasia"], ano: 2000, classificacao: "PG-13", duracao: 104, popularidade: "cult", spoilerSensivel: false, sinopse: "Dois amigos do sertão nordestino se metem em confusão atrás de confusão até parar diante do juízo final." },
  { titulo: "Como Treinar Seu Dragão", generos: ["Animação", "Aventura", "Fantasia"], ano: 2010, classificacao: "PG", duracao: 98, popularidade: "popular", spoilerSensivel: false, sinopse: "Um jovem viking cria um laço inesperado com o dragão que deveria caçar." },
  { titulo: "Spider-Man: Através do Aranhaverso", generos: ["Animação", "Ação", "Ficção Científica", "Aventura"], ano: 2023, classificacao: "PG", duracao: 140, popularidade: "popular", spoilerSensivel: false, sinopse: "Um jovem herói descobre um multiverso de versões do Homem-Aranha e enfrenta um dilema sobre seu próprio destino." },
  { titulo: "O Labirinto do Fauno", generos: ["Fantasia", "Drama"], ano: 2006, classificacao: "16+", duracao: 118, popularidade: "cult", spoilerSensivel: false, sinopse: "Numa Espanha marcada pela guerra, uma menina descobre um mundo mágico escondido perto de sua nova casa." },
  { titulo: "O Senhor dos Anéis: A Sociedade do Anel", generos: ["Fantasia", "Aventura"], ano: 2001, classificacao: "PG-13", duracao: 178, popularidade: "popular", spoilerSensivel: false, sinopse: "Um hobbit recebe a missão de destruir um anel capaz de dar poder absoluto a um senhor das trevas." },
  { titulo: "Harry Potter e a Pedra Filosofal", generos: ["Fantasia", "Aventura"], ano: 2001, classificacao: "PG", duracao: 152, popularidade: "popular", spoilerSensivel: false, sinopse: "Um garoto órfão descobre, ao completar onze anos, que é bruxo e foi aceito numa escola de magia." },
  { titulo: "Garota Exemplar", generos: ["Suspense", "Drama"], ano: 2014, classificacao: "16+", duracao: 149, popularidade: "popular", spoilerSensivel: true, sinopse: "O desaparecimento repentino de uma mulher, no dia do aniversário de casamento, expõe rachaduras no seu casamento." },
  { titulo: "O Sexto Sentido", generos: ["Suspense", "Drama", "Terror"], ano: 1999, classificacao: "14+", duracao: 107, popularidade: "cult", spoilerSensivel: true, sinopse: "Um psicólogo infantil tenta ajudar um menino que afirma conseguir ver pessoas mortas." },
  { titulo: "Whiplash: Em Busca da Perfeição", generos: ["Drama", "Suspense"], ano: 2014, classificacao: "14+", duracao: 106, popularidade: "cult", spoilerSensivel: false, sinopse: "Um baterista de jazz é levado ao limite pelos métodos implacáveis de um professor obcecado por excelência." },
  { titulo: "La La Land: Cantando Estações", generos: ["Romance", "Drama", "Comédia"], ano: 2016, classificacao: "PG-13", duracao: 128, popularidade: "popular", spoilerSensivel: false, sinopse: "Uma atriz em início de carreira e um pianista de jazz se apaixonam em Los Angeles enquanto perseguem seus sonhos." },
  
];

// ---------------------------------------------------------
// Estado do painel de personalização
// ---------------------------------------------------------
const estado = {
  epoca: "qualquer",
  duracao: "qualquer",
  popularidade: "qualquer",
};

// ---------------------------------------------------------
// Referências de elementos
// ---------------------------------------------------------
const ticket = document.getElementById("resultado");
const elTitulo = document.getElementById("filmeTitulo");
const elMeta = document.getElementById("filmeMeta");
const elDesc = document.getElementById("filmeDesc");
const elEyebrow = document.querySelector(".ticket__eyebrow");
const btnSortear = document.getElementById("btnSortear");
const checkboxSemSpoiler = document.getElementById("semSpoiler");

// Configura os grupos de botão de seleção única (época, duração, popularidade)
function configurarGrupoUnico(idGrupo, chaveEstado) {
  const grupo = document.getElementById(idGrupo);
  const botoes = grupo.querySelectorAll(".opcao-botao");
  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      botoes.forEach((b) => b.classList.remove("is-ativa"));
      botao.classList.add("is-ativa");
      estado[chaveEstado] = botao.dataset.valor;
    });
  });
}

configurarGrupoUnico("grupoEpoca", "epoca");
configurarGrupoUnico("grupoDuracao", "duracao");
configurarGrupoUnico("grupoPopularidade", "popularidade");

// ---------------------------------------------------------
// Leitura das preferências marcadas em checkboxes
// ---------------------------------------------------------
function lerValoresMarcados(idGrupo) {
  const grupo = document.getElementById(idGrupo);
  return Array.from(grupo.querySelectorAll("input[type='checkbox']:checked")).map((i) => i.value);
}

function filmeCombinaComEpoca(filme, epoca) {
  if (epoca === "qualquer") return true;
  if (epoca === "classico") return filme.ano < 1990;
  if (epoca === "moderno") return filme.ano >= 1990 && filme.ano <= 2009;
  if (epoca === "recente") return filme.ano >= 2010;
  return true;
}

function filmeCombinaComDuracao(filme, duracao) {
  if (duracao === "qualquer") return true;
  if (duracao === "curta") return filme.duracao <= 90;
  if (duracao === "media") return filme.duracao > 90 && filme.duracao <= 140;
  if (duracao === "longa") return filme.duracao > 140;
  return true;
}

// ---------------------------------------------------------
// Filtro principal
// ---------------------------------------------------------
function filtrarFilmes() {
  const generosSelecionados = lerValoresMarcados("grupoGeneros");
  const classificacoesSelecionadas = lerValoresMarcados("grupoClassificacao");
  const evitarSpoiler = checkboxSemSpoiler.checked;

  return FILMES.filter((filme) => {
    const combinaGenero =
      generosSelecionados.length === 0 ||
      filme.generos.some((g) => generosSelecionados.includes(g));

    const combinaClassificacao =
      classificacoesSelecionadas.length === 0 ||
      classificacoesSelecionadas.includes(filme.classificacao);

    const combinaEpoca = filmeCombinaComEpoca(filme, estado.epoca);
    const combinaDuracao = filmeCombinaComDuracao(filme, estado.duracao);
    const combinaPopularidade =
      estado.popularidade === "qualquer" || filme.popularidade === estado.popularidade;
    const combinaSpoiler = !evitarSpoiler || !filme.spoilerSensivel;

    return (
      combinaGenero &&
      combinaClassificacao &&
      combinaEpoca &&
      combinaDuracao &&
      combinaPopularidade &&
      combinaSpoiler
    );
  });
}

// ---------------------------------------------------------
// Renderização do resultado
// ---------------------------------------------------------
function mostrarFilme(filme) {
  elEyebrow.textContent = "Sua sessão está pronta";
  elTitulo.textContent = filme.titulo;
  elMeta.textContent = `${filme.generos.join(", ")} — ${filme.ano} — ${filme.classificacao} — ${filme.duracao} min`;
  elDesc.textContent = filme.sinopse;
  dispararAnimacao();
}

function mostrarMensagemVazia() {
  elEyebrow.textContent = "Nenhuma sessão encontrada";
  elTitulo.textContent = "Nenhum filme combina com esses critérios";
  elMeta.textContent = "Tente liberar alguma preferência";
  elDesc.textContent = "Solte um gênero, mude a época ou a duração — a base tem 42 filmes esperando por um critério possível.";
  dispararAnimacao();
}

function dispararAnimacao() {
  ticket.classList.remove("ticket--revelado");
  // força reflow para permitir repetir a animação em cliques seguidos
  void ticket.offsetWidth;
  ticket.classList.add("ticket--revelado");
}

// ---------------------------------------------------------
// Ação do botão
// ---------------------------------------------------------
btnSortear.addEventListener("click", () => {
  const candidatos = filtrarFilmes();
  if (candidatos.length === 0) {
    mostrarMensagemVazia();
    return;
  }
  const escolhido = candidatos[Math.floor(Math.random() * candidatos.length)];
  mostrarFilme(escolhido);
});