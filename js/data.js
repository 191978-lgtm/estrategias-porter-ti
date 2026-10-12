// Datos académicos y estratégicos para los mapas conceptuales de Porter en TI
const PORTER_DATA = {
  fuerzas: {
    id: "fuerzas",
    titulo: "Las 5 Fuerzas Competitivas de Michael Porter en TI",
    subtitulo: "Análisis del entorno competitivo y tecnológico para el Plan Estratégico de TI (PETI)",
    descripcion: "Modelo que evalúa el atractivo y la rentabilidad de una industria mediante 5 vectores competitivos, analizados desde la perspectiva de la infraestructura, arquitectura y dirección estratégica de tecnologías de la información.",
    elementos: [
      {
        id: "rivalidad",
        nombre: "Rivalidad entre Competidores Existentes",
        categoria: "Fuerza Central",
        icono: "swords",
        color: "red",
        resumen: "Intensidad de la competencia directa en el mercado por cuota de clientes, velocidad de innovación y márgenes comerciales.",
        impactoTI: "La tecnología se convierte en el campo de batalla primordial: velocidad de lanzamiento de software (Time-to-Market), agilidad DevOps y analítica de datos en tiempo real.",
        factoresClave: [
          "Número y balance de poder de competidores en la industria.",
          "Crecimiento relativo de la industria y saturación del mercado digital.",
          "Nivel de diferenciación en plataformas y canales digitales.",
          "Barreras de salida derivadas de activos tecnológicos amortizados."
        ],
        estrategiasTI: [
          "Implantación de arquitecturas Cloud-Native y metodologías CI/CD para iterar productos en semanas en lugar de meses.",
          "Adopción de Big Data y Business Intelligence para toma de decisiones y pricing dinámico.",
          "Automatización de procesos (RPA y BPM) para mejorar la eficiencia operativa ante guerras de precios."
        ],
        casoReal: "Banca tradicional vs Neobancos (Nubank, Revolut): la velocidad del core bancario digital y la UX en la app definen la cuota de mercado."
      },
      {
        id: "entrantes",
        nombre: "Amenaza de Nuevos Entrantes",
        categoria: "Fuerza Perimetral",
        icono: "user-plus",
        color: "blue",
        resumen: "Facilidad con la que nuevas empresas, startups o competidores tecnológicos pueden entrar al sector y capturar cuota de mercado.",
        impactoTI: "Las barreras de entrada de capital (CAPEX) se han desplomado gracias a la nube (IaaS/PaaS) y el software como servicio (SaaS), permitiendo a startups competir con gigantes.",
        factoresClave: [
          "Economías de escala en computación y costos de infraestructura.",
          "Requisitos de capital inicial (drásticamente reducidos por el modelo Pay-as-you-go).",
          "Acceso a canales de distribución (App Stores, Marketplaces globales).",
          "Regulaciones y ciberseguridad (GDPR, ISO 27001, compliance que aún actúa como barrera)."
        ],
        estrategiasTI: [
          "Creación de efectos de red en la plataforma digital (a más usuarios, mayor valor inexpugnable).",
          "Protección de algoritmos clave y patentes de software/datos propietarios.",
          "Integración profunda en el ecosistema del cliente mediante APIs propietarias y portales corporativos."
        ],
        casoReal: "Fintechs ingresando al mercado financiero sin infraestructura física de sucursales, apalancándose 100% en AWS o Google Cloud."
      },
      {
        id: "proveedores",
        nombre: "Poder de Negociación de los Proveedores",
        categoria: "Fuerza Perimetral",
        icono: "truck",
        color: "amber",
        resumen: "Capacidad de los proveedores de fijar precios, imponer condiciones contractuales, limitar características o alterar plazos de entrega.",
        impactoTI: "En TI, los proveedores son hiperescaladores de nube (AWS, Azure, GCP), suites ERP monopólicas (SAP, Oracle) y gigantes SaaS (Salesforce, Microsoft). El riesgo de Vendor Lock-in es crítico.",
        factoresClave: [
          "Concentración extrema de proveedores tecnológicos clave a nivel mundial.",
          "Altísimos costos de migración y cambio de plataforma tecnológica (Switching Costs).",
          "Inexistencia de sustitutos viables para ciertos motores de base de datos o chips (ej. NVIDIA para IA).",
          "Amenaza de integración vertical hacia adelante por parte del proveedor."
        ],
        estrategiasTI: [
          "Estrategia Multicloud o Híbrida para evitar dependencia absoluta de un único hiperescalador.",
          "Uso intensivo de contenedores (Docker, Kubernetes) y estándares abiertos para portabilidad del código.",
          "Adopción de software Open Source empresarial con soporte flexible.",
          "Gobernanza contractual estricta y auditorías FinOps periódicas de consumo en la nube."
        ],
        casoReal: "Incrementos unilaterales de precios de licencias en Oracle o VMware (Broadcom), forzando migraciones complejas o pagos millonarios."
      },
      {
        id: "clientes",
        nombre: "Poder de Negociación de los Clientes",
        categoria: "Fuerza Perimetral",
        icono: "users",
        color: "emerald",
        resumen: "Capacidad de los compradores para forzar reducciones de precios, exigir mejor calidad o cambiar rápidamente de proveedor.",
        impactoTI: "Los consumidores cuentan hoy con comparadores en línea, portabilidad de datos por ley y cientos de alternativas digitales a un clic de distancia.",
        factoresClave: [
          "Bajos costos de cambio (switching costs) para usuarios en apps y suscripciones estándar.",
          "Disponibilidad de información transparente sobre características y precios en internet.",
          "Sensibilidad al precio y demanda de personalización inmediata.",
          "Volumen de compra concentrado en clientes B2B clave."
        ],
        estrategiasTI: [
          "Sistemas de CRM analítico e hiperpersonalización con IA predictiva para elevar la retención (Churn reduction).",
          "Experiencia de Usuario (UX/UI) y omnicanalidad sin fisuras que generen apego emocional y operativo.",
          "Ecosistemas de servicios complementarios que eleven el costo de cambio para el usuario."
        ],
        casoReal: "El ecosistema Apple / Google Workspace: salir del ecosistema implica un costo de cambio personal y de aprendizaje muy alto."
      },
      {
        id: "sustitutos",
        nombre: "Amenaza de Productos y Servicios Sustitutos",
        categoria: "Fuerza Perimetral",
        icono: "sparkles",
        color: "purple",
        resumen: "Alternativas que cubren la misma necesidad de negocio pero mediante tecnologías, modelos o paradigmas radicalmente distintos.",
        impactoTI: "La disrupción tecnológica constante (IA Generativa, Low-Code/No-Code, SaaS colaborativo, Automatización) vuelve obsoletos modelos de TI tradicionales.",
        factoresClave: [
          "Relación precio/desempeño de la tecnología sustituta emergente.",
          "Propensión de los clientes a cambiar hacia nuevas soluciones disruptivas.",
          "Rápida evolución de la Inteligencia Artificial y la computación periférica.",
          "Aparición de modelos descentralizados y autoservicio."
        ],
        estrategiasTI: [
          "Creación de un radar tecnológico (Tech Radar) y comités de vigilancia tecnológica e innovación.",
          "Programas de modernización de legado (Legacy Modernization) antes de que el core quede obsoleto.",
          "Canibalización controlada: lanzar la propia solución digital sustituta antes de que un competidor lo haga."
        ],
        casoReal: "Herramientas de IA Generativa (ChatGPT, Claude, Copilot) sustituyendo buscadores tradicionales, software de soporte al cliente o plataformas de traducción."
      }
    ]
  },

  estrategias: {
    id: "estrategias",
    titulo: "Las Tres Estrategias Genéricas de Michael Porter en TI",
    subtitulo: "Alineación de las capacidades y presupuesto de TI con la ventaja competitiva corporativa",
    descripcion: "Estrategias fundamentales que una organización puede adoptar para superar a sus rivales en el sector: Liderazgo en Costos, Diferenciación y Enfoque (Segmentación). En TI, definen las prioridades del PETI.",
    matriz: {
      ejeX: "Ventaja Estratégica Buscada (Bajo Costo vs Singularidad/Valor)",
      ejeY: "Ámbito Competitivo (Todo el Sector vs Nicho/Segmento Específico)"
    },
    elementos: [
      {
        id: "costos",
        nombre: "Liderazgo Global en Costos",
        ambito: "Todo el Sector",
        ventaja: "Costos Mínimos",
        icono: "trending-down",
        color: "blue",
        resumen: "Lograr la estructura de costos operativos y de entrega más baja de la industria, manteniendo una calidad aceptable.",
        rolTI: "TI actúa como motor de optimización, eficiencia extrema, automatización de procesos y reducción de CAPEX/OPEX.",
        iniciativasTI: [
          "Consolidación de centros de datos y adopción de arquitecturas Serverless optimizadas por FinOps.",
          "Automatización Robótica de Procesos (RPA) en backoffice para erradicar tareas manuales redundantes.",
          "Adopción de software comercial estándar (COTS / SaaS estándar) evitando personalizaciones costosas.",
          "Portales de autoservicio para clientes y proveedores (Self-Service) para reducir costos laborales."
        ],
        riesgosTI: [
          "Subinversión en innovación y ciberseguridad por reducir gastos al extremo.",
          "Facilidad de que los competidores copien las tecnologías de automatización disponibles en el mercado.",
          "Pérdida de flexibilidad operativa ante cambios rápidos de la demanda."
        ],
        ejemplo: "Ryanair o Walmart: sistemas logísticos y de TI milimétricamente optimizados para reducir cada céntimo de costo operativo."
      },
      {
        id: "diferenciacion",
        nombre: "Diferenciación",
        ambito: "Todo el Sector",
        ventaja: "Singularidad / Alto Valor",
        icono: "award",
        color: "purple",
        resumen: "Crear productos, servicios o experiencias percibidos en toda la industria como únicos, justificando un precio superior (Premium).",
        rolTI: "TI actúa como habilitador de innovación, creador de valor exclusivo, experiencias digitales superiores y algoritmos propietarios.",
        iniciativasTI: [
          "Desarrollo de software y plataformas digitales propietarias con diseño y experiencia de usuario (UX/UI) líder.",
          "Implementación de Inteligencia Artificial y Machine Learning para personalización hiperindividualizada de productos.",
          "Arquitecturas de datos en tiempo real para soporte VIP y resolución instantánea de incidencias.",
          "Ecosistema integrado de APIs que conectan partners exclusivos."
        ],
        riesgosTI: [
          "El sobrecosto de TI puede exceder la disposición a pagar del cliente por esa singularidad.",
          "Erosión de la diferenciación: competidores que clonan las funcionalidades digitales rápidamente.",
          "Complejidad arquitectónica desmedida y dificultad para mantener sistemas hiperpersonalizados."
        ],
        ejemplo: "Tesla (actualizaciones Over-The-Air de software y piloto automático) o Netflix (algoritmo propietario de recomendación ultrapreciso)."
      },
      {
        id: "enfoque_costo",
        nombre: "Enfoque en Costos (Segmentación)",
        ambito: "Segmento / Nicho Específico",
        ventaja: "Bajo Costo en el Nicho",
        icono: "target",
        color: "amber",
        resumen: "Buscar una ventaja en costos atendiendo de forma exclusiva y austera a uno o pocos segmentos específicos del mercado.",
        rolTI: "TI ligera, enfocada y ultraespecífica, evitando funcionalidades innecesarias que encarezcan el servicio al nicho.",
        iniciativasTI: [
          "Implementación de sistemas Low-Code o plantillas especializadas para el nicho específico sin pagar por grandes ERPs.",
          "Uso de canales digitales directos y comunitarios específicos del microsegmento sin gastos masivos de marketing.",
          "Infraestructura cloud mínima dimensionada exactamente para el volumen del nicho."
        ],
        riesgosTI: [
          "Que competidores de bajo costo globales desarrollen submarcas dirigidas al mismo nicho.",
          "Falta de escalabilidad técnica si el nicho crece repentinamente."
        ],
        ejemplo: "Software ERP especializado de bajo costo exclusivamente para talleres mecánicos locales o pequeñas farmacias de barrio."
      },
      {
        id: "enfoque_diferenciacion",
        nombre: "Enfoque en Diferenciación (Segmentación)",
        ambito: "Segmento / Nicho Específico",
        ventaja: "Singularidad en el Nicho",
        icono: "gem",
        color: "emerald",
        resumen: "Ofrecer soluciones altamente especializadas, a medida y exclusivas para las necesidades estrictas de un nicho muy concreto.",
        rolTI: "Desarrollo de herramientas de alta precisión, cumplimiento normativo estricto o flujos de trabajo hiperespecializados.",
        iniciativasTI: [
          "Plataformas de TI con cumplimiento regulatorio de grado militar o sanitario (ej. HIPAA, FDA compliance integrado).",
          "Integración de hardware especializado y sensores IoT para industrias verticales (minería, cirugía robótica).",
          "Canales de comunicación encriptada y atención técnica especializada 24/7."
        ],
        riesgosTI: [
          "Tamaño del nicho demasiado reducido para amortizar la inversión en desarrollo de software especializado.",
          "Aparición de soluciones generalistas que agregan módulos para ese nicho."
        ],
        ejemplo: "Epic Systems (software de salud especializado y exclusivo para hospitales de alta complejidad) o Bloomberg Terminal para traders de élite."
      },
      {
        id: "atrapado",
        nombre: "Peligro: 'Atrapado en el Medio' (Stuck in the Middle)",
        ambito: "Sin Definición Clara",
        ventaja: "Sin Ventaja Competitiva",
        icono: "alert-triangle",
        color: "red",
        resumen: "Situación crítica de organizaciones que no logran ni los costos más bajos ni una diferenciación apreciada por el mercado.",
        rolTI: "TI en desalineación total: presupuestos inflados por proyectos a medias, arquitectura espagueti, múltiples sistemas duplicados y nulo retorno sobre la inversión (ROI).",
        iniciativasTI: [
          "Auditoría urgente del portafolio de proyectos de TI para cancelar iniciativas no alineadas.",
          "Alineación formal entre el Comité Ejecutivo y la Dirección de TI para definir una única estrategia matriz.",
          "Racionalización de aplicaciones para eliminar redundancias y reducir deuda técnica."
        ],
        riesgosTI: [
          "Destrucción de valor, rotación alta de talento en TI y obsolescencia acelerada.",
          "Pérdida continua de clientes frente a competidores con estrategia pura."
        ],
        ejemplo: "Grandes almacenes tradicionales que ni tienen los precios de Amazon ni la experiencia de lujo personalizada de marcas de alta gama."
      }
    ]
  },

  integracion: [
    {
      fuerza: "Amenaza de Nuevos Entrantes",
      contraCostos: "Crea barreras mediante economías de escala insuperables en infraestructura cloud y costos marginales cercanos a cero.",
      contraDiferenciacion: "Construye lealtad a la marca y costos de cambio cognitivos a través de plataformas digitales exclusivas y patentes de datos.",
      contraEnfoque: "Domina el microsegmento creando una solución tecnológica tan a medida que a un generalista no le compensa desarrollar."
    },
    {
      fuerza: "Poder de los Proveedores",
      contraCostos: "Estandariza compras de TI, utiliza software open source y presiona mediante grandes volúmenes o arquitecturas desacopladas.",
      contraDiferenciacion: "Puede trasladar incrementos de costo de proveedores a los clientes finales debido a los altos márgenes que su diferenciación le permite.",
      contraEnfoque: "Usa herramientas especializadas de nicho o proveedores alternativos locales donde no rigen los grandes monopolios de TI."
    },
    {
      fuerza: "Poder de los Clientes",
      contraCostos: "Ofrece el precio digital más bajo del mercado, neutralizando el interés del cliente por buscar alternativas.",
      contraDiferenciacion: "Reduce el poder de negociación porque el cliente no encuentra sustitutos con la misma calidad de experiencia y características.",
      contraEnfoque: "El cliente de nicho tiene pocas o nulas opciones alternativas que atiendan sus requerimientos técnicos particulares."
    },
    {
      fuerza: "Amenaza de Sustitutos",
      contraCostos: "Mantiene costos y precios tan eficientes que los sustitutos emergentes no logran competir económicamente.",
      contraDiferenciacion: "Genera un producto con atributos tecnológicos y de servicio tan distintivos que el sustituto no logra emular.",
      contraEnfoque: "La ultraespecialización tecnológica protege al nicho de productos genéricos sustitutos."
    },
    {
      fuerza: "Rivalidad Competitiva",
      contraCostos: "Sobrevive con holgura en guerras de precios gracias al bajo costo por transacción de sus sistemas optimizados.",
      contraDiferenciacion: "Aísla a la empresa de la guerra de precios al competir en dimensiones de valor, soporte e innovación continua.",
      contraEnfoque: "Compite solo contra un puñado de competidores en el segmento escogido, evitando las grandes batallas frontales del sector."
    }
  ]
};
