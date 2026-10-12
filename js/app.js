// Lógica de interactividad, renderizado de mapas conceptuales e integración
document.addEventListener("DOMContentLoaded", () => {
  // Inicialización de Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Estado de la aplicación
  const state = {
    currentTab: "fuerzas", // "fuerzas" | "estrategias" | "integracion"
    selectedItem: null,
    zoomLevel: { fuerzas: 1, estrategias: 1 },
    panOffset: { fuerzas: { x: 0, y: 0 }, estrategias: { x: 0, y: 0 } },
    isDragging: false,
    dragStart: { x: 0, y: 0 },
    theme: localStorage.getItem("theme") || "light"
  };

  // Inicializar tema
  if (state.theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Inicializar Mermaid
  initMermaid();

  // Renderizar vistas y mapas
  renderAllViews();

  // Registrar listeners de eventos
  setupEventListeners();

  // Seleccionar primer elemento por defecto en el panel de detalles
  selectItem("rivalidad", "fuerzas");

  function initMermaid() {
    const isDark = document.documentElement.classList.contains("dark");
    mermaid.initialize({
      startOnLoad: false,
      theme: isDark ? "dark" : "neutral",
      securityLevel: "loose",
      fontFamily: "Plus Jakarta Sans, sans-serif",
      flowchart: {
        useMaxWidth: false,
        htmlLabels: true,
        curve: "basis"
      }
    });
  }

  // Definición de sintaxis Mermaid para ambos mapas conceptuales
  function getMermaidCodeFuerzas() {
    return `
flowchart TB
  %% Estilos y Nodos
  classDef central fill:#ef4444,stroke:#b91c1c,stroke-width:3px,color:#ffffff,font-weight:bold,rx:12,ry:12;
  classDef perimeter fill:#3b82f6,stroke:#1d4ed8,stroke-width:2px,color:#ffffff,font-weight:600,rx:8,ry:8;
  classDef amberNode fill:#f59e0b,stroke:#b45309,stroke-width:2px,color:#ffffff,font-weight:600,rx:8,ry:8;
  classDef emeraldNode fill:#10b981,stroke:#047857,stroke-width:2px,color:#ffffff,font-weight:600,rx:8,ry:8;
  classDef purpleNode fill:#8b5cf6,stroke:#6d28d9,stroke-width:2px,color:#ffffff,font-weight:600,rx:8,ry:8;
  classDef tiFocus fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#38bdf8,font-style:italic,rx:6,ry:6;

  %% Estructura de las 5 Fuerzas
  TOP["<b>1. Amenaza de Nuevos Entrantes</b><br/>Startups Cloud-Native, Fintechs, APIs abiertas"]:::perimeter
  LEFT["<b>2. Poder de Proveedores</b><br/>Hiperescaladores AWS/Azure, Lock-in, SAP/Oracle"]:::amberNode
  CENTER["<b>5. RIVALIDAD ENTRE COMPETIDORES</b><br/>Guerra de precios, Velocidad DevOps, Time-to-Market"]:::central
  RIGHT["<b>3. Poder de Clientes</b><br/>Omnicanalidad, Portabilidad, Cero Switching Cost"]:::emeraldNode
  BOTTOM["<b>4. Amenaza de Sustitutos</b><br/>IA Generativa, Automatización RPA, No-Code"]:::purpleNode

  %% Nodos de impacto en Dirección de TI
  TI_TOP["Barreras reducidas por IaaS/SaaS"]:::tiFocus
  TI_LEFT["Estrategia Multicloud y Contenedores"]:::tiFocus
  TI_CENTER["Agilidad, Big Data y Plataformas Propietarias"]:::tiFocus
  TI_RIGHT["Hiperpersonalización y Retención con UX/AI"]:::tiFocus
  TI_BOTTOM["Vigilancia Tecnológica y Tech Radar"]:::tiFocus

  %% Relaciones conceptuales
  TOP -->|"Presiona precios y cuota"| CENTER
  LEFT -->|"Aumenta costos de tecnología"| CENTER
  RIGHT -->|"Exige mejor UX y menores tarifas"| CENTER
  BOTTOM -->|"Amenaza con obsolescencia del modelo"| CENTER

  %% Conexiones con TI
  TOP -.-> TI_TOP
  LEFT -.-> TI_LEFT
  CENTER -.-> TI_CENTER
  RIGHT -.-> TI_RIGHT
  BOTTOM -.-> TI_BOTTOM

  %% Eventos de clic
  click CENTER clickHandler "Rivalidad entre Competidores"
  click TOP clickHandler "Amenaza de Nuevos Entrantes"
  click LEFT clickHandler "Poder de Negociación de Proveedores"
  click RIGHT clickHandler "Poder de Negociación de Clientes"
  click BOTTOM clickHandler "Amenaza de Productos Sustitutos"
`;
  }

  function getMermaidCodeEstrategias() {
    return `
flowchart TB
  classDef root fill:#1e293b,stroke:#0284c7,stroke-width:3px,color:#38bdf8,font-weight:bold,rx:12,ry:12;
  classDef strategyBlue fill:#2563eb,stroke:#1d4ed8,stroke-width:2px,color:#ffffff,font-weight:600,rx:8,ry:8;
  classDef strategyPurple fill:#7c3aed,stroke:#5b21b6,stroke-width:2px,color:#ffffff,font-weight:600,rx:8,ry:8;
  classDef strategyAmber fill:#d97706,stroke:#92400e,stroke-width:2px,color:#ffffff,font-weight:600,rx:8,ry:8;
  classDef strategyEmerald fill:#059669,stroke:#065f46,stroke-width:2px,color:#ffffff,font-weight:600,rx:8,ry:8;
  classDef dangerNode fill:#dc2626,stroke:#991b1b,stroke-width:2px,color:#ffffff,font-weight:bold,rx:8,ry:8;
  classDef pillar fill:#f8fafc,stroke:#94a3b8,stroke-width:1px,color:#0f172a,rx:6,ry:6;

  ROOT["<b>ESTRATEGIAS GENÉRICAS DE PORTER</b><br/>Base para el Plan Estratégico de TI (PETI)"]:::root

  AMBITO_AMPLIO["<b>ÁMBITO AMPLIO</b><br/>(Todo el sector industrial)"]
  AMBITO_NICHO["<b>ÁMBITO ESTRECHO</b><br/>(Segmento o nicho específico)"]
  ATRAPADO["<b>ATRAPADO EN EL MEDIO</b><br/>Desalineación de TI, Alto costo y Bajo valor"]:::dangerNode

  ROOT --> AMBITO_AMPLIO
  ROOT --> AMBITO_NICHO
  ROOT -.->|"Riesgo por falta de foco"| ATRAPADO

  %% Estrategias de Ámbito Amplio
  COSTOS["<b>1. Liderazgo en Costos</b><br/>Operación eficiente y bajo CAPEX"]:::strategyBlue
  DIF["<b>2. Diferenciación</b><br/>Valor único y precio Premium"]:::strategyPurple

  AMBITO_AMPLIO --> COSTOS
  AMBITO_AMPLIO --> DIF

  %% Estrategias de Ámbito Estrecho
  ENF_COSTO["<b>3A. Enfoque en Costos</b><br/>TI ligera para microsegmento"]:::strategyAmber
  ENF_DIF["<b>3B. Enfoque en Diferenciación</b><br/>Sistemas hiperespecializados"]:::strategyEmerald

  AMBITO_NICHO --> ENF_COSTO
  AMBITO_NICHO --> ENF_DIF

  %% Pilares de TI
  PILAR_C["FinOps, Automatización RPA y ERPs estándar"]:::pillar
  PILAR_D["Algoritmos de IA, UX Superior y Software Propietario"]:::pillar
  PILAR_EC["Plantillas No-Code y cloud dimensionado al nicho"]:::pillar
  PILAR_ED["Cumplimiento estricto (HIPAA, etc.) y Hardware IoT"]:::pillar

  COSTOS -.-> PILAR_C
  DIF -.-> PILAR_D
  ENF_COSTO -.-> PILAR_EC
  ENF_DIF -.-> PILAR_ED

  %% Clics
  click COSTOS clickHandler "Liderazgo en Costos"
  click DIF clickHandler "Diferenciación"
  click ENF_COSTO clickHandler "Enfoque en Costos"
  click ENF_DIF clickHandler "Enfoque en Diferenciación"
  click ATRAPADO clickHandler "Atrapado en el Medio"
`;
  }

  // Función global para manejar clicks en nodos de Mermaid
  window.clickHandler = function (nodeText) {
    if (nodeText.includes("Rivalidad")) selectItem("rivalidad", "fuerzas");
    else if (nodeText.includes("Entrantes")) selectItem("entrantes", "fuerzas");
    else if (nodeText.includes("Proveedores")) selectItem("proveedores", "fuerzas");
    else if (nodeText.includes("Clientes")) selectItem("clientes", "fuerzas");
    else if (nodeText.includes("Sustitutos")) selectItem("sustitutos", "fuerzas");
    else if (nodeText.includes("Liderazgo")) selectItem("costos", "estrategias");
    else if (nodeText.includes("Diferenciación") && !nodeText.includes("Enfoque")) selectItem("diferenciacion", "estrategias");
    else if (nodeText.includes("Enfoque en Costos")) selectItem("enfoque_costo", "estrategias");
    else if (nodeText.includes("Enfoque en Diferenciación")) selectItem("enfoque_diferenciacion", "estrategias");
    else if (nodeText.includes("Atrapado")) selectItem("atrapado", "estrategias");
  };

  async function renderAllViews() {
    await renderMermaidDiagram("mermaid-fuerzas", getMermaidCodeFuerzas());
    await renderMermaidDiagram("mermaid-estrategias", getMermaidCodeEstrategias());
    renderCardsFuerzas();
    renderCardsEstrategias();
    renderMatrizIntegracion();
    setupPanAndZoom("fuerzas");
    setupPanAndZoom("estrategias");
  }

  async function renderMermaidDiagram(elementId, code) {
    const container = document.getElementById(elementId);
    if (!container) return;
    try {
      const id = "svg-" + elementId + "-" + Math.floor(Math.random() * 10000);
      const { svg } = await mermaid.render(id, code);
      container.innerHTML = svg;
    } catch (err) {
      console.error("Error al renderizar Mermaid:", err);
      container.innerHTML = `<div class="p-4 text-red-500">Error al compilar el mapa conceptual.</div>`;
    }
  }

  // Renderizar tarjetas interactivas de las 5 Fuerzas
  function renderCardsFuerzas() {
    const container = document.getElementById("cards-fuerzas-list");
    if (!container) return;
    container.innerHTML = PORTER_DATA.fuerzas.elementos.map(item => {
      return `
        <button onclick="window.selectItem('${item.id}', 'fuerzas')" 
          class="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500 dark:hover:border-blue-500 transition-all shadow-sm hover:shadow-md group flex items-start gap-3">
          <div class="p-2.5 rounded-lg bg-${item.color}-100 dark:bg-${item.color}-900/40 text-${item.color}-600 dark:text-${item.color}-400 shrink-0">
            <i data-lucide="${item.icono}" class="w-5 h-5"></i>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between mb-1">
              <span class="text-xs font-semibold uppercase tracking-wider text-${item.color}-600 dark:text-${item.color}-400">${item.categoria}</span>
              <span class="text-xs text-slate-400 group-hover:text-blue-500 flex items-center gap-1">Ver detalles <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i></span>
            </div>
            <h4 class="font-bold text-slate-800 dark:text-slate-100 text-sm leading-snug truncate">${item.nombre}</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">${item.resumen}</p>
          </div>
        </button>
      `;
    }).join("");
    if (window.lucide) lucide.createIcons();
  }

  // Renderizar tarjetas de las Estrategias Genéricas
  function renderCardsEstrategias() {
    const container = document.getElementById("cards-estrategias-list");
    if (!container) return;
    container.innerHTML = PORTER_DATA.estrategias.elementos.map(item => {
      const isDanger = item.id === "atrapado";
      return `
        <div onclick="window.selectItem('${item.id}', 'estrategias')"
          class="matrix-card card-${item.color} p-5 rounded-xl bg-white dark:bg-slate-900 cursor-pointer shadow-sm">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold px-2 py-0.5 rounded-full ${isDanger ? 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'}">
              ${item.ambito}
            </span>
            <span class="text-xs font-medium text-slate-500 dark:text-slate-400">${item.ventaja}</span>
          </div>
          <h4 class="font-bold text-slate-800 dark:text-slate-100 text-base mb-1.5 flex items-center gap-2">
            <i data-lucide="${item.icono}" class="w-5 h-5 text-${item.color}-500 shrink-0"></i>
            ${item.nombre}
          </h4>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">${item.resumen}</p>
          <div class="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-blue-600 dark:text-blue-400 font-medium">
            <span>Enfoque en PETI</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </div>
        </div>
      `;
    }).join("");
    if (window.lucide) lucide.createIcons();
  }

  // Renderizar Matriz de Integración (Fuerzas vs Estrategias)
  function renderMatrizIntegracion() {
    const tableBody = document.getElementById("tabla-integracion-body");
    if (!tableBody) return;
    tableBody.innerHTML = PORTER_DATA.integracion.map(row => {
      return `
        <tr class="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors">
          <td class="p-4 font-bold text-slate-800 dark:text-slate-200 text-sm align-top bg-slate-50/50 dark:bg-slate-900/50">
            ${row.fuerza}
          </td>
          <td class="p-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed align-top">
            <span class="inline-block px-1.5 py-0.5 mb-1 text-[10px] font-semibold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded">Liderazgo en Costos</span><br/>
            ${row.contraCostos}
          </td>
          <td class="p-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed align-top">
            <span class="inline-block px-1.5 py-0.5 mb-1 text-[10px] font-semibold bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded">Diferenciación</span><br/>
            ${row.contraDiferenciacion}
          </td>
          <td class="p-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed align-top">
            <span class="inline-block px-1.5 py-0.5 mb-1 text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded">Enfoque (Nicho)</span><br/>
            ${row.contraEnfoque}
          </td>
        </tr>
      `;
    }).join("");
  }

  // Seleccionar ítem y mostrar su ficha técnica completa
  window.selectItem = function (id, category) {
    let item = null;
    if (category === "fuerzas") {
      item = PORTER_DATA.fuerzas.elementos.find(x => x.id === id);
    } else {
      item = PORTER_DATA.estrategias.elementos.find(x => x.id === id);
    }
    if (!item) return;

    state.selectedItem = item;
    const panel = document.getElementById("details-panel");
    const mirrorPanel = document.getElementById("details-panel-estrategias-mirror");
    if (!panel && !mirrorPanel) return;

    const isFuerza = category === "fuerzas";
    const headerBadge = isFuerza ? item.categoria : `${item.ambito} • ${item.ventaja}`;
    const mainActionTitle = isFuerza ? "Estrategias de Mitigación en TI (PETI)" : "Iniciativas Clave en la Dirección de TI";
    const mainActionList = isFuerza ? item.estrategiasTI : item.iniciativasTI;
    const secondSectionTitle = isFuerza ? "Factores Clave en el Análisis del Sector" : "Riesgos Tecnológicos y Estratégicos";
    const secondSectionList = isFuerza ? item.factoresClave : item.riesgosTI;

    const contentHtml = `
      <div class="p-6">
        <div class="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div class="flex items-center gap-3">
            <div class="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <i data-lucide="${item.icono}" class="w-6 h-6"></i>
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">${headerBadge}</span>
              <h3 class="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">${item.nombre}</h3>
            </div>
          </div>
        </div>

        <div class="mt-5 space-y-6">
          <!-- Resumen ejecutivo -->
          <div>
            <h5 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Definición Estratégica</h5>
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${item.resumen}</p>
          </div>

          <!-- Impacto TI -->
          <div class="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/50">
            <h5 class="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-1 flex items-center gap-1.5">
              <i data-lucide="cpu" class="w-4 h-4"></i>
              ${isFuerza ? "Impacto en Infraestructura y Sistemas de TI" : "Rol de la Dirección de TI (CIO / CTO)"}
            </h5>
            <p class="text-xs text-blue-950 dark:text-blue-200 leading-relaxed font-medium">
              ${isFuerza ? item.impactoTI : item.rolTI}
            </p>
          </div>

          <!-- Iniciativas / Estrategias TI -->
          <div>
            <h5 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 flex items-center gap-1.5">
              <i data-lucide="check-circle" class="w-4 h-4 text-emerald-500"></i>
              ${mainActionTitle}
            </h5>
            <ul class="space-y-2">
              ${mainActionList.map(itemText => `
                <li class="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
                  <span class="text-blue-500 font-bold shrink-0">•</span>
                  <span>${itemText}</span>
                </li>
              `).join("")}
            </ul>
          </div>

          <!-- Factores / Riesgos -->
          <div>
            <h5 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 flex items-center gap-1.5">
              <i data-lucide="alert-circle" class="w-4 h-4 text-amber-500"></i>
              ${secondSectionTitle}
            </h5>
            <ul class="space-y-1.5">
              ${secondSectionList.map(itemText => `
                <li class="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                  <span class="text-amber-500 shrink-0">→</span>
                  <span>${itemText}</span>
                </li>
              `).join("")}
            </ul>
          </div>

          <!-- Caso real -->
          <div class="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">Caso de Aplicación Real en la Industria</span>
            <p class="text-xs text-slate-800 dark:text-slate-200 font-semibold italic">
              "${isFuerza ? item.casoReal : item.ejemplo}"
            </p>
          </div>
        </div>
      </div>
    `;

    if (panel) panel.innerHTML = contentHtml;
    if (mirrorPanel) mirrorPanel.innerHTML = contentHtml;

    if (window.lucide) lucide.createIcons();
  };

  // Zoom y Pan en los contenedores de diagramas
  function setupPanAndZoom(tab) {
    const viewport = document.getElementById(`viewport-${tab}`);
    const svgContainer = document.getElementById(`mermaid-${tab}`);
    if (!viewport || !svgContainer) return;

    let isPanning = false;
    let startPoint = { x: 0, y: 0 };

    viewport.addEventListener("mousedown", (e) => {
      // Ignorar clicks directos en nodos interactivos
      if (e.target.closest(".node")) return;
      isPanning = true;
      startPoint = { x: e.clientX - state.panOffset[tab].x, y: e.clientY - state.panOffset[tab].y };
      viewport.style.cursor = "grabbing";
    });

    window.addEventListener("mousemove", (e) => {
      if (!isPanning) return;
      state.panOffset[tab].x = e.clientX - startPoint.x;
      state.panOffset[tab].y = e.clientY - startPoint.y;
      updateTransform(tab);
    });

    window.addEventListener("mouseup", () => {
      if (isPanning) {
        isPanning = false;
        viewport.style.cursor = "grab";
      }
    });

    // Zoom con rueda de ratón (con tecla Ctrl o directamente en viewport)
    viewport.addEventListener("wheel", (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
      state.zoomLevel[tab] = Math.min(Math.max(state.zoomLevel[tab] * zoomFactor, 0.4), 2.5);
      updateTransform(tab);
    });
  }

  function updateTransform(tab) {
    const svgContainer = document.getElementById(`mermaid-${tab}`);
    if (!svgContainer) return;
    const zoom = state.zoomLevel[tab];
    const { x, y } = state.panOffset[tab];
    svgContainer.style.transform = `translate(${x}px, ${y}px) scale(${zoom})`;
    svgContainer.style.transformOrigin = "center center";
  }

  // Controles de zoom
  window.zoomIn = function (tab) {
    state.zoomLevel[tab] = Math.min(state.zoomLevel[tab] + 0.15, 2.5);
    updateTransform(tab);
  };

  window.zoomOut = function (tab) {
    state.zoomLevel[tab] = Math.max(state.zoomLevel[tab] - 0.15, 0.4);
    updateTransform(tab);
  };

  window.resetZoom = function (tab) {
    state.zoomLevel[tab] = 1;
    state.panOffset[tab] = { x: 0, y: 0 };
    updateTransform(tab);
  };

  // Eventos de interfaz (Pestañas, Tema, Presentación)
  function setupEventListeners() {
    // Cambio de pestañas
    const tabButtons = document.querySelectorAll("[data-tab-target]");
    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-tab-target");
        switchTab(target);
      });
    });

    // Modo Oscuro / Claro
    const themeToggle = document.getElementById("btn-theme-toggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const isDark = document.documentElement.classList.toggle("dark");
        state.theme = isDark ? "dark" : "light";
        localStorage.setItem("theme", state.theme);
        initMermaid();
        renderAllViews();
      });
    }

    // Modo Presentación
    const btnPresentation = document.getElementById("btn-presentation");
    if (btnPresentation) {
      btnPresentation.addEventListener("click", togglePresentationMode);
    }

    // Exportar a imagen
    const btnExportFuerzas = document.getElementById("btn-export-fuerzas");
    if (btnExportFuerzas) {
      btnExportFuerzas.addEventListener("click", () => exportSvgToPng("mermaid-fuerzas", "mapa-5-fuerzas-porter-ti.png"));
    }

    const btnExportEstrategias = document.getElementById("btn-export-estrategias");
    if (btnExportEstrategias) {
      btnExportEstrategias.addEventListener("click", () => exportSvgToPng("mermaid-estrategias", "mapa-estrategias-genericas-porter-ti.png"));
    }
  }

  function switchTab(tabId) {
    state.currentTab = tabId;
    document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.add("hidden"));
    document.querySelectorAll("[data-tab-target]").forEach(btn => {
      btn.classList.remove("text-blue-600", "dark:text-blue-400", "border-blue-600", "dark:border-blue-400", "font-bold");
      btn.classList.add("text-slate-500", "dark:text-slate-400");
    });

    const activePane = document.getElementById(`tab-content-${tabId}`);
    if (activePane) activePane.classList.remove("hidden");

    const activeBtn = document.querySelector(`[data-tab-target="${tabId}"]`);
    if (activeBtn) {
      activeBtn.classList.remove("text-slate-500", "dark:text-slate-400");
      activeBtn.classList.add("text-blue-600", "dark:text-blue-400", "border-blue-600", "dark:border-blue-400", "font-bold");
    }

    // Si cambiamos de pestaña, seleccionar el primer elemento relevante
    if (tabId === "fuerzas") selectItem("rivalidad", "fuerzas");
    else if (tabId === "estrategias") selectItem("costos", "estrategias");
  }

  function togglePresentationMode() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        document.body.classList.add("presentation-mode");
      }).catch(err => {
        console.warn("Pantalla completa no disponible:", err);
      });
    } else {
      document.exitFullscreen().then(() => {
        document.body.classList.remove("presentation-mode");
      });
    }
  }

  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
      document.body.classList.remove("presentation-mode");
    }
  });

  // Exportar mapa conceptual SVG a imagen PNG
  function exportSvgToPng(containerId, fileName) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const svgElement = container.querySelector("svg");
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const URL = window.URL || window.webkitURL || window;
    const blobURL = URL.createObjectURL(svgBlob);

    img.onload = function () {
      canvas.width = img.width * 2;
      canvas.height = img.height * 2;
      ctx.fillStyle = document.documentElement.classList.contains("dark") ? "#0f172a" : "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const pngURL = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngURL;
      downloadLink.download = fileName;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(blobURL);
    };

    img.src = blobURL;
  }
});
