// Normas e regulamentos que se aplicam à cobótica: lista com resumo curto, nos três idiomas.
// Designação, edição, situação e link foram conferidos em fontes oficiais em 13/11/2026
// (catálogo da ISO, IEC, Comissão Europeia, gov.br). Ao atualizar, confira de novo na fonte
// e troque STANDARDS_CHECKED. `title` é o título oficial (em inglês ou no idioma da norma).
import type { Lang } from "../i18n/ui";

export const STANDARDS_CHECKED = "2026-11-13";

type Text = Record<Lang, string>;
export type StandardGroup = "cobot" | "machinery" | "people" | "mobile" | "law";

export interface Standard {
  code: string;
  title: string;
  group: StandardGroup;
  url: string;
  summary: Text;
  /** Situação que o leitor precisa saber (em revisão, data de aplicação...). */
  note?: Text;
}

export const standardsText: Record<Lang, { title: string; lead: string; caution: string; checked: string; source: string; groups: Record<StandardGroup, string> }> = {
  pt: {
    title: "Normas",
    lead: "As normas técnicas e os regulamentos que mais aparecem em projetos com robôs colaborativos, com um resumo curto de cada um e o link para a fonte oficial.",
    caution:
      "Esta lista é um guia de orientação, não substitui a leitura das normas nem a avaliação de um profissional habilitado. Normas mudam: confira sempre a edição vigente na fonte oficial. Texto escrito com apoio de IA, ainda em revisão pela equipe.",
    checked: "Edições e situação conferidas em",
    source: "Fonte oficial",
    groups: {
      cobot: "Robôs e aplicações colaborativas",
      machinery: "Segurança de máquinas (base)",
      people: "Pessoas: ergonomia e riscos psicossociais",
      mobile: "Robôs móveis",
      law: "Leis e regulamentos",
    },
  },
  en: {
    title: "Standards",
    lead: "The technical standards and regulations that come up most often in collaborative robot projects, each with a short summary and a link to the official source.",
    caution:
      "This list is a guide. It does not replace reading the standards or the judgment of a qualified professional. Standards change: always check the current edition at the official source. Written with AI assistance and still under review by the team.",
    checked: "Editions and status checked on",
    source: "Official source",
    groups: {
      cobot: "Robots and collaborative applications",
      machinery: "Machinery safety (foundation)",
      people: "People: ergonomics and psychosocial risks",
      mobile: "Mobile robots",
      law: "Laws and regulations",
    },
  },
  es: {
    title: "Normas",
    lead: "Las normas técnicas y los reglamentos que más aparecen en proyectos con robots colaborativos, con un resumen breve de cada uno y el enlace a la fuente oficial.",
    caution:
      "Esta lista es una guía de orientación; no sustituye la lectura de las normas ni la evaluación de un profesional cualificado. Las normas cambian: comprueba siempre la edición vigente en la fuente oficial. Texto escrito con apoyo de IA, todavía en revisión por el equipo.",
    checked: "Ediciones y estado comprobados el",
    source: "Fuente oficial",
    groups: {
      cobot: "Robots y aplicaciones colaborativas",
      machinery: "Seguridad de máquinas (base)",
      people: "Personas: ergonomía y riesgos psicosociales",
      mobile: "Robots móviles",
      law: "Leyes y reglamentos",
    },
  },
};

export const STANDARD_GROUPS: StandardGroup[] = ["cobot", "machinery", "people", "mobile", "law"];

export const standards: Standard[] = [
  // ───────── Robôs e aplicações colaborativas
  {
    code: "ISO 10218-1:2025",
    title: "Robotics — Safety requirements — Part 1: Industrial robots",
    group: "cobot",
    url: "https://www.iso.org/standard/73933.html",
    summary: {
      pt: "Requisitos de segurança para o robô industrial em si, como o fabricante o entrega: projeto seguro, medidas de proteção e informações de uso. A integração do robô numa aplicação fica para a parte 2.",
      en: "Safety requirements for the industrial robot itself, as the manufacturer delivers it: safe design, protective measures and information for use. Integrating the robot into an application is left to Part 2.",
      es: "Requisitos de seguridad para el robot industrial en sí, tal como lo entrega el fabricante: diseño seguro, medidas de protección e información de uso. La integración del robot en una aplicación queda para la parte 2.",
    },
    note: {
      pt: "Edição de 2025; substitui a de 2011.",
      en: "2025 edition; replaces the 2011 edition.",
      es: "Edición de 2025; sustituye a la de 2011.",
    },
  },
  {
    code: "ISO 10218-2:2025",
    title: "Robotics — Safety requirements — Part 2: Industrial robot applications and robot cells",
    group: "cobot",
    url: "https://www.iso.org/standard/73934.html",
    summary: {
      pt: "Segurança da aplicação e da célula robótica: integração, comissionamento, operação, manutenção e desativação. É a norma central para quem monta um posto com cobot, porque o que é ou não colaborativo é a aplicação, e não o robô.",
      en: "Safety of the robot application and the robot cell: integration, commissioning, operation, maintenance and decommissioning. It is the central standard for anyone setting up a cobot workstation, because what is or is not collaborative is the application, not the robot.",
      es: "Seguridad de la aplicación y de la celda robótica: integración, puesta en marcha, operación, mantenimiento y desmantelamiento. Es la norma central para quien monta un puesto con cobot, porque lo que es o no colaborativo es la aplicación, no el robot.",
    },
    note: {
      pt: "Edição de 2025; substitui a de 2011. Segundo fontes do setor, passou a trazer requisitos de aplicações colaborativas que antes estavam na ISO/TS 15066.",
      en: "2025 edition; replaces the 2011 edition. According to industry sources, it now carries requirements for collaborative applications that used to be in ISO/TS 15066.",
      es: "Edición de 2025; sustituye a la de 2011. Según fuentes del sector, ahora incluye requisitos de aplicaciones colaborativas que antes estaban en la ISO/TS 15066.",
    },
  },
  {
    code: "ISO/TS 15066:2016",
    title: "Robots and robotic devices — Collaborative robots",
    group: "cobot",
    url: "https://www.iso.org/standard/62996.html",
    summary: {
      pt: "Especificação técnica que complementa a ISO 10218 para sistemas colaborativos. É conhecida pelos limites de força e pressão no contato entre pessoa e robô e pelo cálculo da distância de separação.",
      en: "Technical specification that supplements ISO 10218 for collaborative systems. It is known for the force and pressure limits for contact between person and robot and for the calculation of the separation distance.",
      es: "Especificación técnica que complementa la ISO 10218 para sistemas colaborativos. Es conocida por los límites de fuerza y presión en el contacto entre persona y robot y por el cálculo de la distancia de separación.",
    },
    note: {
      pt: "Continua vigente no catálogo da ISO, mas está em revisão: será substituída por um novo documento em elaboração (ISO 15066-1, limites biomecânicos).",
      en: "Still current in the ISO catalogue, but under revision: it will be replaced by a new document in preparation (ISO 15066-1, biomechanical thresholds).",
      es: "Sigue vigente en el catálogo de ISO, pero está en revisión: será sustituida por un nuevo documento en elaboración (ISO 15066-1, límites biomecánicos).",
    },
  },
  {
    code: "ISO/PAS 5672:2023",
    title: "Robotics — Collaborative applications — Test methods for measuring forces and pressures in human-robot contacts",
    group: "cobot",
    url: "https://www.iso.org/standard/82488.html",
    summary: {
      pt: "Descreve como medir e analisar forças e pressões no contato físico entre pessoa e robô, e o que se exige do equipamento de medição. Serve para validar na prática uma aplicação com limitação de força.",
      en: "Describes how to measure and analyze forces and pressures in physical contact between person and robot, and what is required of the measuring device. It is used to validate a force-limited application in practice.",
      es: "Describe cómo medir y analizar fuerzas y presiones en el contacto físico entre persona y robot, y qué se exige del equipo de medición. Sirve para validar en la práctica una aplicación con limitación de fuerza.",
    },
  },
  {
    code: "ISO/TR 20218-1:2018",
    title: "Robotics — Safety design for industrial robot systems — Part 1: End-effectors",
    group: "cobot",
    url: "https://www.iso.org/standard/69488.html",
    summary: {
      pt: "Orientações de segurança para projetar e integrar garras e ferramentas na ponta do robô. Importa porque a garra e a peça costumam ser a parte mais perigosa de uma aplicação colaborativa.",
      en: "Safety guidance for designing and integrating grippers and tools at the end of the robot arm. It matters because the gripper and the part are often the most hazardous element of a collaborative application.",
      es: "Orientaciones de seguridad para diseñar e integrar pinzas y herramientas en el extremo del robot. Importa porque la pinza y la pieza suelen ser la parte más peligrosa de una aplicación colaborativa.",
    },
    note: {
      pt: "Relatório técnico (orientação, não requisito); ainda se refere à ISO 10218-2 de 2011.",
      en: "Technical report (guidance, not requirements); it still refers to the 2011 edition of ISO 10218-2.",
      es: "Informe técnico (orientación, no requisito); todavía se refiere a la ISO 10218-2 de 2011.",
    },
  },
  {
    code: "ISO/TR 20218-2:2017",
    title: "Robotics — Safety design for industrial robot systems — Part 2: Manual load/unload stations",
    group: "cobot",
    url: "https://www.iso.org/standard/70584.html",
    summary: {
      pt: "Orientações para estações em que a pessoa carrega e descarrega peças à mão num sistema robótico: como restringir o acesso à zona de perigo e manter o posto ergonômico.",
      en: "Guidance for stations where a person loads and unloads parts by hand in a robot system: how to restrict access to the hazard zone and keep the workstation ergonomic.",
      es: "Orientaciones para estaciones en las que la persona carga y descarga piezas a mano en un sistema robótico: cómo restringir el acceso a la zona de peligro y mantener el puesto ergonómico.",
    },
    note: {
      pt: "Relatório técnico (orientação, não requisito); ainda se refere à ISO 10218-2 de 2011.",
      en: "Technical report (guidance, not requirements); it still refers to the 2011 edition of ISO 10218-2.",
      es: "Informe técnico (orientación, no requisito); todavía se refiere a la ISO 10218-2 de 2011.",
    },
  },
  {
    code: "ISO 8373:2021",
    title: "Robotics — Vocabulary",
    group: "cobot",
    url: "https://www.iso.org/standard/75539.html",
    summary: {
      pt: "Define os termos usados em robótica. É a referência para usar as palavras com o mesmo sentido em projetos, contratos e textos técnicos.",
      en: "Defines the terms used in robotics. It is the reference for using words with the same meaning in projects, contracts and technical texts.",
      es: "Define los términos usados en robótica. Es la referencia para usar las palabras con el mismo sentido en proyectos, contratos y textos técnicos.",
    },
    note: { pt: "Em revisão na ISO.", en: "Under revision at ISO.", es: "En revisión en ISO." },
  },

  // ───────── Segurança de máquinas (base)
  {
    code: "ISO 12100:2010",
    title: "Safety of machinery — General principles for design — Risk assessment and risk reduction",
    group: "machinery",
    url: "https://www.iso.org/standard/51528.html",
    summary: {
      pt: "A base de toda a segurança de máquinas: como identificar perigos, estimar e avaliar riscos e reduzi-los, ao longo da vida da máquina. A avaliação de risco de uma célula com cobot segue este método.",
      en: "The foundation of machinery safety: how to identify hazards, estimate and evaluate risks, and reduce them over the life of the machine. The risk assessment of a cobot cell follows this method.",
      es: "La base de toda la seguridad de máquinas: cómo identificar peligros, estimar y evaluar riesgos y reducirlos a lo largo de la vida de la máquina. La evaluación de riesgos de una celda con cobot sigue este método.",
    },
    note: { pt: "Em revisão na ISO.", en: "Under revision at ISO.", es: "En revisión en ISO." },
  },
  {
    code: "ISO 13849-1:2023",
    title: "Safety of machinery — Safety-related parts of control systems — Part 1: General principles for design",
    group: "machinery",
    url: "https://www.iso.org/standard/73481.html",
    summary: {
      pt: "Método e requisitos para projetar as partes do sistema de comando que cumprem funções de segurança, incluindo software. É de onde vem o \"nível de desempenho\" (PL) exigido das funções de segurança do robô.",
      en: "Method and requirements for designing the parts of the control system that perform safety functions, including software. It is the source of the \"performance level\" (PL) required of the robot's safety functions.",
      es: "Método y requisitos para diseñar las partes del sistema de mando que cumplen funciones de seguridad, incluido el software. De aquí viene el \"nivel de prestaciones\" (PL) exigido a las funciones de seguridad del robot.",
    },
  },
  {
    code: "IEC 62061:2021",
    title: "Safety of machinery — Functional safety of safety-related control systems",
    group: "machinery",
    url: "https://webstore.iec.ch/en/publication/93654",
    summary: {
      pt: "Requisitos para projetar, integrar e validar sistemas de comando relacionados à segurança de máquinas. É o caminho alternativo à ISO 13849-1, com o nível de integridade de segurança (SIL).",
      en: "Requirements for designing, integrating and validating safety-related control systems for machines. It is the alternative route to ISO 13849-1, using the safety integrity level (SIL).",
      es: "Requisitos para diseñar, integrar y validar sistemas de mando relacionados con la seguridad de máquinas. Es la vía alternativa a la ISO 13849-1, con el nivel de integridad de seguridad (SIL).",
    },
    note: { pt: "Com a emenda 1, de 2024.", en: "With Amendment 1, from 2024.", es: "Con la enmienda 1, de 2024." },
  },
  {
    code: "ISO 13855:2024",
    title: "Safety of machinery — Positioning of safeguards with respect to the approach of the human body",
    group: "machinery",
    url: "https://www.iso.org/standard/80590.html",
    summary: {
      pt: "Como posicionar e dimensionar proteções (cortinas de luz, scanners, tapetes sensíveis, comandos bimanuais) em relação à aproximação da pessoa. É usada para calcular distâncias quando o robô desacelera ou para ao detectar alguém.",
      en: "How to position and size safeguards (light curtains, scanners, pressure-sensitive mats, two-hand controls) with respect to a person approaching. It is used to calculate distances when the robot slows or stops on detecting someone.",
      es: "Cómo posicionar y dimensionar protecciones (cortinas de luz, escáneres, alfombras sensibles, mandos a dos manos) respecto a la aproximación de la persona. Se usa para calcular distancias cuando el robot desacelera o se detiene al detectar a alguien.",
    },
    note: {
      pt: "Edição de 2024; substitui a de 2010, que tinha outro título.",
      en: "2024 edition; replaces the 2010 edition, which had a different title.",
      es: "Edición de 2024; sustituye a la de 2010, que tenía otro título.",
    },
  },
  {
    code: "ISO 13850:2015",
    title: "Safety of machinery — Emergency stop function — Principles for design",
    group: "machinery",
    url: "https://www.iso.org/standard/59970.html",
    summary: {
      pt: "Requisitos e princípios de projeto da função de parada de emergência em máquinas, qualquer que seja o tipo de energia.",
      en: "Requirements and design principles for the emergency stop function on machinery, whatever the type of energy.",
      es: "Requisitos y principios de diseño de la función de parada de emergencia en máquinas, sea cual sea el tipo de energía.",
    },
    note: { pt: "Em revisão na ISO.", en: "Under revision at ISO.", es: "En revisión en ISO." },
  },

  // ───────── Pessoas
  {
    code: "ISO 11228-1:2021",
    title: "Ergonomics — Manual handling — Part 1: Lifting, lowering and carrying",
    group: "people",
    url: "https://www.iso.org/standard/76820.html",
    summary: {
      pt: "Limites recomendados para levantar, abaixar e carregar objetos de 3 kg ou mais à mão, conforme intensidade, frequência e duração. Ajuda a decidir quais tarefas vale passar para o cobot.",
      en: "Recommended limits for lifting, lowering and carrying objects of 3 kg or more by hand, according to intensity, frequency and duration. It helps decide which tasks are worth handing over to the cobot.",
      es: "Límites recomendados para levantar, bajar y transportar a mano objetos de 3 kg o más, según intensidad, frecuencia y duración. Ayuda a decidir qué tareas conviene pasar al cobot.",
    },
  },
  {
    code: "ISO 45003:2021",
    title: "Occupational health and safety management — Psychological health and safety at work — Guidelines for managing psychosocial risks",
    group: "people",
    url: "https://www.iso.org/standard/64283.html",
    summary: {
      pt: "Diretrizes para gerir riscos psicossociais dentro de um sistema de gestão de saúde e segurança (ISO 45001). Não fala de robôs, mas cobre o que a chegada de um cobot pode mexer: ritmo, autonomia, carga mental e monitoramento.",
      en: "Guidelines for managing psychosocial risks within an occupational health and safety management system (ISO 45001). It does not mention robots, but it covers what the arrival of a cobot can affect: pace, autonomy, mental workload and monitoring.",
      es: "Directrices para gestionar riesgos psicosociales dentro de un sistema de gestión de seguridad y salud (ISO 45001). No habla de robots, pero cubre lo que la llegada de un cobot puede alterar: ritmo, autonomía, carga mental y monitorización.",
    },
    note: {
      pt: "É orientação: não é norma certificável.",
      en: "It is guidance, not a certifiable standard.",
      es: "Es una guía: no es una norma certificable.",
    },
  },

  // ───────── Robôs móveis
  {
    code: "ISO 3691-4:2023",
    title: "Industrial trucks — Safety requirements and verification — Part 4: Driverless industrial trucks and their systems",
    group: "mobile",
    url: "https://www.iso.org/standard/83545.html",
    summary: {
      pt: "Requisitos de segurança e de verificação para veículos industriais sem condutor (AGVs e robôs móveis autônomos) e seus sistemas. Aplica-se quando o cobot vai montado numa base móvel ou divide o corredor com esses veículos.",
      en: "Safety requirements and verification for driverless industrial trucks (AGVs and autonomous mobile robots) and their systems. It applies when the cobot is mounted on a mobile base or shares the aisle with these vehicles.",
      es: "Requisitos de seguridad y de verificación para vehículos industriales sin conductor (AGV y robots móviles autónomos) y sus sistemas. Se aplica cuando el cobot va montado en una base móvil o comparte el pasillo con estos vehículos.",
    },
    note: { pt: "Em revisão na ISO.", en: "Under revision at ISO.", es: "En revisión en ISO." },
  },

  // ───────── Leis e regulamentos
  {
    code: "NR-12 (Brasil)",
    title: "Segurança no Trabalho em Máquinas e Equipamentos",
    group: "law",
    url: "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-12-nr-12",
    summary: {
      pt: "Norma regulamentadora brasileira, de cumprimento obrigatório, sobre segurança em máquinas. O item 12.1.12 considera em conformidade os sistemas robóticos que seguem a ABNT ISO 10218-1, a ABNT ISO 10218-2 e a ISO/TS 15066.",
      en: "Brazilian regulatory standard, legally binding, on machinery safety. Item 12.1.12 treats robotic systems that follow ABNT ISO 10218-1, ABNT ISO 10218-2 and ISO/TS 15066 as compliant.",
      es: "Norma reglamentaria brasileña, de cumplimiento obligatorio, sobre seguridad en máquinas. El ítem 12.1.12 considera conformes los sistemas robóticos que siguen la ABNT ISO 10218-1, la ABNT ISO 10218-2 y la ISO/TS 15066.",
    },
    note: {
      pt: "O texto fala em \"sistemas robóticos\" (não usa a palavra \"colaborativo\") e cita as normas sem ano.",
      en: "The text says \"robotic systems\" (it does not use the word \"collaborative\") and cites the standards without a year.",
      es: "El texto habla de \"sistemas robóticos\" (no usa la palabra \"colaborativo\") y cita las normas sin año.",
    },
  },
  {
    code: "NR-01 (Brasil)",
    title: "Disposições Gerais e Gerenciamento de Riscos Ocupacionais",
    group: "law",
    url: "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-1",
    summary: {
      pt: "Norma regulamentadora brasileira que organiza o gerenciamento de riscos ocupacionais das empresas. O capítulo 1.5 passou a incluir expressamente os fatores de risco psicossociais relacionados ao trabalho.",
      en: "Brazilian regulatory standard that organizes how companies manage occupational risks. Chapter 1.5 now expressly includes work-related psychosocial risk factors.",
      es: "Norma reglamentaria brasileña que organiza la gestión de riesgos laborales de las empresas. El capítulo 1.5 pasó a incluir expresamente los factores de riesgo psicosociales relacionados con el trabajo.",
    },
    note: {
      pt: "Novo capítulo 1.5 em vigor desde 26 de maio de 2026 (Portaria MTE nº 1.419/2024, adiada pela Portaria nº 765/2025).",
      en: "New chapter 1.5 in force since May 26, 2026 (Ordinance MTE 1.419/2024, postponed by Ordinance 765/2025).",
      es: "Nuevo capítulo 1.5 en vigor desde el 26 de mayo de 2026 (Portaria MTE n.º 1.419/2024, aplazada por la Portaria n.º 765/2025).",
    },
  },
  {
    code: "Regulamento (UE) 2023/1230",
    title: "Regulation (EU) 2023/1230 on machinery",
    group: "law",
    url: "https://single-market-economy.ec.europa.eu/sectors/mechanical-engineering/machinery_en",
    summary: {
      pt: "Novo regulamento europeu de máquinas: define os requisitos de saúde e segurança para máquinas colocadas no mercado da União Europeia e substitui a Diretiva 2006/42/CE. Interessa a quem exporta máquinas ou células para a Europa.",
      en: "The new European machinery regulation: it sets the health and safety requirements for machinery placed on the European Union market and replaces Directive 2006/42/EC. It matters to anyone exporting machines or cells to Europe.",
      es: "Nuevo reglamento europeo de máquinas: fija los requisitos de salud y seguridad para las máquinas comercializadas en la Unión Europea y sustituye a la Directiva 2006/42/CE. Interesa a quien exporta máquinas o celdas a Europa.",
    },
    note: {
      pt: "Aplicação obrigatória a partir de 20 de janeiro de 2027; até lá vale a Diretiva.",
      en: "Mandatory from January 20, 2027; until then the Directive applies.",
      es: "Aplicación obligatoria a partir del 20 de enero de 2027; hasta entonces rige la Directiva.",
    },
  },
  {
    code: "Regulamento (UE) 2024/1689 — AI Act",
    title: "Regulation (EU) 2024/1689 — Artificial Intelligence Act",
    group: "law",
    url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
    summary: {
      pt: "Regulamento europeu de inteligência artificial, aplicado por etapas. Um sistema de IA pode ser classificado como de alto risco quando é componente de segurança de um produto regulado, como a visão que detecta a pessoa e para o robô.",
      en: "The European regulation on artificial intelligence, applied in stages. An AI system can be classified as high-risk when it is a safety component of a regulated product, such as vision that detects a person and stops the robot.",
      es: "Reglamento europeo de inteligencia artificial, aplicado por etapas. Un sistema de IA puede clasificarse como de alto riesgo cuando es componente de seguridad de un producto regulado, como la visión que detecta a la persona y detiene el robot.",
    },
    note: {
      pt: "O calendário foi alterado em 2026: segundo a Comissão Europeia, as regras de alto risco para IA embutida em produtos regulados valem a partir de 2 de agosto de 2028. Confira o calendário atual na fonte.",
      en: "The timeline was changed in 2026: according to the European Commission, the high-risk rules for AI embedded in regulated products apply from August 2, 2028. Check the current timeline at the source.",
      es: "El calendario se modificó en 2026: según la Comisión Europea, las reglas de alto riesgo para la IA integrada en productos regulados se aplican desde el 2 de agosto de 2028. Comprueba el calendario actual en la fuente.",
    },
  },
];
