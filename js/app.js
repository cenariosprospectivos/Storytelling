const modules = [
  {
    number: "01",
    phase: "Diagnóstico inicial",
    title: "Análise de Riscos",
    repository: "riscos",
    url: "https://cenariosprospectivos.github.io/riscos/",
    image: "assets/cards/01-riscos.jpg",
    description: "Primeira etapa do percurso. A atividade organiza riscos, consequências e medidas, permitindo transformar preocupações gerais em objetos analisáveis.",
    done: "Estruturamos uma base inicial de riscos relacionados ao estudo MD 2036.",
    use: "Serve para registrar ameaças, impactos e respostas possíveis antes da construção dos cenários."
  },
  {
    number: "02",
    phase: "Estruturação dos eventos",
    title: "Eventos",
    repository: "Evento",
    url: "https://cenariosprospectivos.github.io/Evento/",
    image: "assets/cards/02-eventos.jpg",
    description: "Área de trabalho para organizar os eventos prospectivos que serão usados nas etapas posteriores da análise.",
    done: "Consolidamos eventos centrais para o estudo, criando a base do raciocínio prospectivo.",
    use: "Serve para transformar temas amplos em eventos observáveis e combináveis."
  },
  {
    number: "03",
    phase: "Consulta a especialistas",
    title: "Delphi",
    repository: "Delphi",
    url: "https://cenariosprospectivos.github.io/Delphi/entrevista.html",
    secondaryUrl: "https://cenariosprospectivos.github.io/Delphi/resultados.html",
    image: "assets/cards/03-delphi.jpg",
    description: "Ferramenta de consulta a especialistas para estimar probabilidade, importância, autoavaliação e justificativas dos eventos.",
    done: "Criamos formulário de entrevista, painel do moderador, resultados agregados e resposta individual.",
    use: "Serve para coletar julgamento especializado e transformar percepções qualitativas em dados comparáveis."
  },
  {
    number: "04",
    phase: "Relações estruturais",
    title: "Motricidade × Dependência",
    repository: "Motricidade",
    url: "https://cenariosprospectivos.github.io/Motricidade/",
    image: "assets/cards/04-motricidade.jpg",
    description: "Etapa que mostra quais eventos movem o sistema e quais dependem mais dos demais.",
    done: "Criamos gráfico de motricidade e dependência, matriz editável e classificação automática dos eventos.",
    use: "Serve para identificar eventos motores, dependentes, autônomos e de ligação."
  },
  {
    number: "05",
    phase: "Combinação de futuros",
    title: "Geração e Cruzamento de Cenários",
    repository: "Cenarios",
    url: "https://cenariosprospectivos.github.io/Cenarios/",
    image: "assets/cards/05-cenarios.jpg",
    description: "Ferramenta que cruza eventos que ocorrem e não ocorrem para estimar cenários possíveis.",
    done: "Criamos ranking automático, simulador manual, cenários salvos e exportação de dados.",
    use: "Serve para visualizar combinações prováveis de futuro e testar hipóteses específicas."
  },
  {
    number: "06",
    phase: "Leitura estratégica",
    title: "Interpretação de Cenários",
    repository: "Interpretacao",
    url: "https://cenariosprospectivos.github.io/Interpretacao/",
    image: "assets/cards/06-interpretacao.jpg",
    description: "Módulo que traduz cenários em consequências estratégicas e medidas de resposta.",
    done: "Criamos seleção de cenários, consequências, medidas e síntese interpretativa.",
    use: "Serve para transformar cenários em implicações práticas para a missão e capacidades institucionais."
  },
  {
    number: "07",
    phase: "Formulação estratégica",
    title: "Estratégia",
    repository: "Estrategia",
    url: "https://cenariosprospectivos.github.io/Estrategia/",
    image: "assets/cards/07-estrategia.jpg",
    description: "Último módulo técnico produzido até agora. Ele organiza a passagem da análise para uma trilha estratégica.",
    done: "Criamos a sequência Missão → Objetivo → Processo → Estratégia → Iniciativa → Medida.",
    use: "Serve para mostrar como a análise prospectiva pode orientar uma agenda de ação."
  }
];

function renderTimeline() {
  const container = document.getElementById("timelineItems");
  container.innerHTML = modules.map(item => `
    <article class="timeline-card">
      <div class="card-media" data-placeholder="Imagem do módulo: ${item.image}">
        <span class="card-number">${item.number}</span>
        <img src="${item.image}" alt="Imagem representativa de ${item.title}" onerror="this.classList.add('missing-image')" />
      </div>
      <div class="card-content">
        <span class="card-kicker">${item.phase}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="card-meta">
          <div class="meta-box">
            <strong>O que foi feito</strong>
            <span>${item.done}</span>
          </div>
          <div class="meta-box">
            <strong>Para que serve</strong>
            <span>${item.use}</span>
          </div>
        </div>
        <div class="card-actions">
          <a class="card-link" href="${item.url}" target="_blank" rel="noopener">Acessar módulo</a>
          ${item.secondaryUrl ? `<a class="card-link secondary" href="${item.secondaryUrl}" target="_blank" rel="noopener">Ver resultados</a>` : ""}
        </div>
      </div>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderTimeline);
