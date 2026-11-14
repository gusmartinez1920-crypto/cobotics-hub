// Glossário trilíngue. Cada termo pode apontar para normas (pelo `code` de src/data/standards.ts)
// e é ligado automaticamente aos resumos de pesquisa que o mencionam (padrões em `match`,
// comparados sem acento e no início de palavra — ver src/lib/related.ts).
import type { Lang } from "../i18n/ui";

type Text = Record<Lang, string>;

export interface Term {
  id: string;
  term: Text;
  /** Sigla ou nome em inglês usado no setor, se houver. */
  abbr?: string;
  definition: Text;
  match: Record<Lang, string[]>;
  standards?: string[];
}

export const glossaryText: Record<Lang, { title: string; lead: string; caution: string; inSummaries: string; inStandards: string; alsoCalled: string }> = {
  pt: {
    title: "Glossário",
    lead: "Os termos que mais aparecem quando se fala de robôs colaborativos, IoT industrial e gêmeos digitais, explicados em poucas linhas e ligados aos resumos de pesquisa e às normas que os usam.",
    caution: "Definições de orientação, escritas com apoio de IA e ainda em revisão pela equipe. Para a definição formal, consulte a norma indicada.",
    inSummaries: "Resumos que tratam do termo",
    inStandards: "Normas relacionadas",
    alsoCalled: "Sigla ou termo em inglês",
  },
  en: {
    title: "Glossary",
    lead: "The terms that come up most often when talking about collaborative robots, industrial IoT and digital twins, explained in a few lines and linked to the research summaries and standards that use them.",
    caution: "Working definitions, written with AI assistance and still under review by the team. For the formal definition, see the standard indicated.",
    inSummaries: "Summaries that deal with the term",
    inStandards: "Related standards",
    alsoCalled: "Abbreviation",
  },
  es: {
    title: "Glosario",
    lead: "Los términos que más aparecen cuando se habla de robots colaborativos, IoT industrial y gemelos digitales, explicados en pocas líneas y enlazados con los resúmenes de investigación y las normas que los usan.",
    caution: "Definiciones orientativas, escritas con apoyo de IA y todavía en revisión por el equipo. Para la definición formal, consulta la norma indicada.",
    inSummaries: "Resúmenes que tratan el término",
    inStandards: "Normas relacionadas",
    alsoCalled: "Sigla o término en inglés",
  },
};

export const glossary: Term[] = [
  {
    id: "cobot",
    term: { pt: "Cobot (robô colaborativo)", en: "Cobot (collaborative robot)", es: "Cobot (robot colaborativo)" },
    definition: {
      pt: "Robô projetado para ser usado perto de pessoas, sem grade em volta, com funções de segurança como limitação de força e de velocidade. O robô sozinho não torna o posto seguro: o que é ou não colaborativo é a aplicação inteira, com garra, peça e tarefa.",
      en: "A robot designed to be used near people, without a fence around it, with safety functions such as force and speed limiting. The robot alone does not make the workstation safe: what is or is not collaborative is the whole application, with gripper, part and task.",
      es: "Robot diseñado para usarse cerca de personas, sin vallado alrededor, con funciones de seguridad como limitación de fuerza y de velocidad. El robot por sí solo no hace seguro el puesto: lo que es o no colaborativo es la aplicación completa, con pinza, pieza y tarea.",
    },
    match: { pt: ["cobot"], en: ["cobot"], es: ["cobot"] },
    standards: ["ISO 10218-1:2025", "ISO 10218-2:2025"],
  },
  {
    id: "collaborative-application",
    term: { pt: "Aplicação colaborativa", en: "Collaborative application", es: "Aplicación colaborativa" },
    definition: {
      pt: "O conjunto de robô, garra ou ferramenta, peça, posto e tarefa em que pessoa e robô dividem o mesmo espaço durante a produção. É a aplicação que passa pela avaliação de risco, e não o robô isolado.",
      en: "The combination of robot, gripper or tool, part, workstation and task in which person and robot share the same space during production. It is the application that goes through risk assessment, not the robot on its own.",
      es: "El conjunto de robot, pinza o herramienta, pieza, puesto y tarea en el que persona y robot comparten el mismo espacio durante la producción. Es la aplicación la que pasa por la evaluación de riesgos, no el robot aislado.",
    },
    match: { pt: ["aplicacao colaborativa", "aplicacoes colaborativas"], en: ["collaborative application"], es: ["aplicacion colaborativa", "aplicaciones colaborativas"] },
    standards: ["ISO 10218-2:2025", "ISO/TS 15066:2016"],
  },
  {
    id: "hrc",
    term: { pt: "Colaboração humano-robô", en: "Human-robot collaboration", es: "Colaboración humano-robot" },
    abbr: "HRC",
    definition: {
      pt: "Trabalho em que pessoa e robô atuam no mesmo espaço para um objetivo comum. A pesquisa costuma distinguir níveis: coexistência (lado a lado, sem tarefa comum), cooperação (mesma tarefa, em momentos diferentes) e colaboração (mesma peça, ao mesmo tempo).",
      en: "Work in which person and robot act in the same space toward a common goal. Research usually distinguishes levels: coexistence (side by side, no shared task), cooperation (same task, at different times) and collaboration (same part, at the same time).",
      es: "Trabajo en el que persona y robot actúan en el mismo espacio con un objetivo común. La investigación suele distinguir niveles: coexistencia (lado a lado, sin tarea común), cooperación (misma tarea, en momentos distintos) y colaboración (misma pieza, al mismo tiempo).",
    },
    match: { pt: ["colaboracao humano-robo", "coexistencia"], en: ["human-robot collaboration", "coexistence"], es: ["colaboracion humano-robot", "coexistencia"] },
  },
  {
    id: "pfl",
    term: { pt: "Limitação de potência e força", en: "Power and force limiting", es: "Limitación de potencia y fuerza" },
    abbr: "PFL",
    definition: {
      pt: "Modo de operação em que o contato entre pessoa e robô é permitido, desde que a força e a pressão fiquem abaixo de limites definidos para cada região do corpo. Exige medir ou calcular essas forças na aplicação real.",
      en: "A mode of operation in which contact between person and robot is allowed, provided force and pressure stay below limits defined for each body region. It requires measuring or calculating those forces in the real application.",
      es: "Modo de operación en el que se permite el contacto entre persona y robot, siempre que la fuerza y la presión queden por debajo de límites definidos para cada región del cuerpo. Exige medir o calcular esas fuerzas en la aplicación real.",
    },
    match: { pt: ["limitacao de potencia e forca", "limitacao de forca", "pfl", "forca de contato", "limites biomecanicos"], en: ["power and force limiting", "force limiting", "pfl", "contact force", "biomechanical limits"], es: ["limitacion de potencia y fuerza", "limitacion de fuerza", "pfl", "fuerza de contacto", "limites biomecanicos"] },
    standards: ["ISO/TS 15066:2016", "ISO/PAS 5672:2023"],
  },
  {
    id: "ssm",
    term: { pt: "Monitoramento de velocidade e separação", en: "Speed and separation monitoring", es: "Monitorización de velocidad y separación" },
    abbr: "SSM",
    definition: {
      pt: "Modo de operação em que sensores acompanham a distância entre pessoa e robô. O robô reduz a velocidade quando a pessoa se aproxima e para antes de haver contato.",
      en: "A mode of operation in which sensors track the distance between person and robot. The robot slows down as the person approaches and stops before there is contact.",
      es: "Modo de operación en el que unos sensores siguen la distancia entre persona y robot. El robot reduce la velocidad cuando la persona se acerca y se detiene antes de que haya contacto.",
    },
    match: { pt: ["velocidade e separacao", "ssm", "distancia de separacao"], en: ["speed and separation", "ssm", "separation distance"], es: ["velocidad y separacion", "ssm", "distancia de separacion"] },
    standards: ["ISO/TS 15066:2016", "ISO 13855:2024"],
  },
  {
    id: "hand-guiding",
    term: { pt: "Guiagem manual", en: "Hand guiding", es: "Guiado manual" },
    definition: {
      pt: "A pessoa conduz o braço do robô com as mãos, por meio de um dispositivo de comando, para posicioná-lo ou para ensinar um movimento.",
      en: "The person moves the robot arm by hand, through a guiding device, to position it or to teach a movement.",
      es: "La persona conduce el brazo del robot con las manos, mediante un dispositivo de mando, para posicionarlo o para enseñar un movimiento.",
    },
    match: { pt: ["guiagem manual", "movendo o braco", "conduz o braco"], en: ["hand guiding", "hand-guiding", "moving the robot arm", "moving the arm"], es: ["guiado manual", "moviendo el brazo"] },
    standards: ["ISO/TS 15066:2016"],
  },
  {
    id: "risk-assessment",
    term: { pt: "Avaliação de risco", en: "Risk assessment", es: "Evaluación de riesgos" },
    definition: {
      pt: "Processo de identificar os perigos de uma máquina ou aplicação, estimar e avaliar os riscos e decidir as medidas para reduzi-los. É obrigatória para toda aplicação com cobot e precisa ser refeita quando a tarefa, a garra ou a peça mudam.",
      en: "The process of identifying the hazards of a machine or application, estimating and evaluating the risks, and deciding on measures to reduce them. It is required for every cobot application and must be redone when the task, gripper or part changes.",
      es: "Proceso de identificar los peligros de una máquina o aplicación, estimar y evaluar los riesgos y decidir las medidas para reducirlos. Es obligatoria para toda aplicación con cobot y debe repetirse cuando cambian la tarea, la pinza o la pieza.",
    },
    match: { pt: ["avaliacao de risco", "avaliacao de riscos", "analise de risco"], en: ["risk assessment", "risk analysis"], es: ["evaluacion de riesgos", "evaluacion de riesgo", "analisis de riesgo"] },
    standards: ["ISO 12100:2010", "ISO 10218-2:2025"],
  },
  {
    id: "performance-level",
    term: { pt: "Nível de desempenho", en: "Performance level", es: "Nivel de prestaciones" },
    abbr: "PL",
    definition: {
      pt: "Medida da confiabilidade de uma função de segurança do sistema de comando, em cinco níveis, de \"a\" a \"e\". A avaliação de risco define o nível exigido de cada função.",
      en: "A measure of how reliable a safety function of the control system is, in five levels from \"a\" to \"e\". The risk assessment determines the level required of each function.",
      es: "Medida de la fiabilidad de una función de seguridad del sistema de mando, en cinco niveles, de \"a\" a \"e\". La evaluación de riesgos define el nivel exigido a cada función.",
    },
    match: { pt: ["nivel de desempenho"], en: ["performance level"], es: ["nivel de prestaciones"] },
    standards: ["ISO 13849-1:2023"],
  },
  {
    id: "sil",
    term: { pt: "Nível de integridade de segurança", en: "Safety integrity level", es: "Nivel de integridad de seguridad" },
    abbr: "SIL",
    definition: {
      pt: "Outra escala para a confiabilidade de funções de segurança, usada pela norma IEC 62061. É o caminho alternativo ao nível de desempenho (PL).",
      en: "Another scale for the reliability of safety functions, used by IEC 62061. It is the alternative route to the performance level (PL).",
      es: "Otra escala para la fiabilidad de las funciones de seguridad, usada por la norma IEC 62061. Es la vía alternativa al nivel de prestaciones (PL).",
    },
    match: { pt: ["integridade de seguranca"], en: ["safety integrity"], es: ["integridad de seguridad"] },
    standards: ["IEC 62061:2021"],
  },
  {
    id: "end-effector",
    term: { pt: "Efetuador final (garra ou ferramenta)", en: "End-effector (gripper or tool)", es: "Efector final (pinza o herramienta)" },
    definition: {
      pt: "O que vai preso na ponta do braço do robô para executar a tarefa: garra, ventosa, parafusadeira, tocha de solda. Costuma ser, junto com a peça, a parte mais perigosa de uma aplicação colaborativa.",
      en: "What is attached to the end of the robot arm to perform the task: gripper, suction cup, screwdriver, welding torch. Together with the part, it is often the most hazardous element of a collaborative application.",
      es: "Lo que se fija en el extremo del brazo del robot para ejecutar la tarea: pinza, ventosa, atornillador, antorcha de soldadura. Suele ser, junto con la pieza, la parte más peligrosa de una aplicación colaborativa.",
    },
    match: { pt: ["garra", "efetuador", "ventosa"], en: ["gripper", "end-effector", "end effector", "suction cup"], es: ["pinza", "efector", "ventosa"] },
    standards: ["ISO/TR 20218-1:2018"],
  },
  {
    id: "payload",
    term: { pt: "Carga útil", en: "Payload", es: "Carga útil" },
    definition: {
      pt: "Massa máxima que o robô consegue movimentar na ponta do braço. Inclui o peso da garra ou ferramenta, e não só o da peça.",
      en: "The maximum mass the robot can move at the end of its arm. It includes the weight of the gripper or tool, not only the part.",
      es: "Masa máxima que el robot puede mover en el extremo del brazo. Incluye el peso de la pinza o herramienta, y no solo el de la pieza.",
    },
    match: { pt: ["carga util"], en: ["payload"], es: ["carga util"] },
  },
  {
    id: "programming-by-demonstration",
    term: { pt: "Programação por demonstração", en: "Programming by demonstration", es: "Programación por demostración" },
    definition: {
      pt: "Forma de programar em que a pessoa mostra a tarefa ao robô, movendo o braço ou executando o movimento, em vez de escrever código. Reduz a necessidade de um especialista em programação.",
      en: "A way of programming in which the person shows the task to the robot, by moving the arm or performing the motion, instead of writing code. It reduces the need for a programming specialist.",
      es: "Forma de programar en la que la persona muestra la tarea al robot, moviendo el brazo o ejecutando el movimiento, en lugar de escribir código. Reduce la necesidad de un especialista en programación.",
    },
    match: { pt: ["por demonstracao"], en: ["by demonstration", "from demonstration"], es: ["por demostracion"] },
  },
  {
    id: "task-allocation",
    term: { pt: "Alocação de tarefas", en: "Task allocation", es: "Asignación de tareas" },
    definition: {
      pt: "Decisão sobre quem faz cada etapa do trabalho, a pessoa ou o robô. Pode considerar tempo de ciclo, ergonomia, habilidades de cada um e segurança.",
      en: "The decision about who does each step of the work, the person or the robot. It can take into account cycle time, ergonomics, the abilities of each and safety.",
      es: "Decisión sobre quién hace cada etapa del trabajo, la persona o el robot. Puede considerar el tiempo de ciclo, la ergonomía, las habilidades de cada uno y la seguridad.",
    },
    match: { pt: ["alocacao de tarefas", "divisao de tarefas", "dividir tarefas", "balanceamento"], en: ["task allocation", "allocating tasks", "dividing tasks", "line balancing"], es: ["asignacion de tareas", "reparto de tareas", "repartir tareas", "equilibrado", "balanceo"] },
  },
  {
    id: "digital-twin",
    term: { pt: "Gêmeo digital", en: "Digital twin", es: "Gemelo digital" },
    definition: {
      pt: "Modelo virtual de um equipamento, célula ou processo que recebe dados do sistema real e permite simular e testar mudanças antes de aplicá-las. Sem a ligação com dados reais, é só uma simulação.",
      en: "A virtual model of a piece of equipment, cell or process that receives data from the real system and lets you simulate and test changes before applying them. Without the link to real data, it is only a simulation.",
      es: "Modelo virtual de un equipo, celda o proceso que recibe datos del sistema real y permite simular y probar cambios antes de aplicarlos. Sin la conexión con datos reales, es solo una simulación.",
    },
    match: { pt: ["gemeo digital", "gemeos digitais"], en: ["digital twin"], es: ["gemelo digital", "gemelos digitales"] },
  },
  {
    id: "iiot",
    term: { pt: "IoT industrial", en: "Industrial IoT", es: "IoT industrial" },
    abbr: "IIoT",
    definition: {
      pt: "Sensores, máquinas e sistemas ligados em rede na fábrica, que coletam e trocam dados sobre o que acontece na produção. É o que alimenta o gêmeo digital e a manutenção baseada em dados.",
      en: "Sensors, machines and systems networked on the factory floor, collecting and exchanging data about what happens in production. It is what feeds the digital twin and data-based maintenance.",
      es: "Sensores, máquinas y sistemas conectados en red en la fábrica, que recogen e intercambian datos sobre lo que ocurre en la producción. Es lo que alimenta el gemelo digital y el mantenimiento basado en datos.",
    },
    match: { pt: ["iot", "internet das coisas", "sensores vestiveis"], en: ["iot", "internet of things", "wearable sensors"], es: ["iot", "internet de las cosas", "sensores vestibles", "sensores portatiles"] },
  },
  {
    id: "industry-5-0",
    term: { pt: "Indústria 5.0", en: "Industry 5.0", es: "Industria 5.0" },
    definition: {
      pt: "Visão proposta pela Comissão Europeia que completa a Indústria 4.0 com três eixos: centralidade humana, sustentabilidade e resiliência. A tecnologia serve à pessoa, e não o contrário.",
      en: "A vision proposed by the European Commission that complements Industry 4.0 with three pillars: human-centricity, sustainability and resilience. Technology serves the person, not the other way around.",
      es: "Visión propuesta por la Comisión Europea que completa la Industria 4.0 con tres ejes: centralidad humana, sostenibilidad y resiliencia. La tecnología sirve a la persona, y no al revés.",
    },
    match: { pt: ["industria 5.0"], en: ["industry 5.0"], es: ["industria 5.0"] },
  },
  {
    id: "ergonomics",
    term: { pt: "Ergonomia", en: "Ergonomics", es: "Ergonomía" },
    definition: {
      pt: "Estudo de como adaptar o trabalho às pessoas. A ergonomia física trata de posturas, forças e repetição; a cognitiva, de atenção, decisão e carga mental.",
      en: "The study of how to fit work to people. Physical ergonomics deals with postures, forces and repetition; cognitive ergonomics deals with attention, decision-making and mental workload.",
      es: "Estudio de cómo adaptar el trabajo a las personas. La ergonomía física trata de posturas, fuerzas y repetición; la cognitiva, de atención, decisión y carga mental.",
    },
    match: { pt: ["ergonomi", "ergonomic"], en: ["ergonomic"], es: ["ergonomi", "ergonomic"] },
    standards: ["ISO 11228-1:2021"],
  },
  {
    id: "mental-workload",
    term: { pt: "Carga mental", en: "Mental workload", es: "Carga mental" },
    definition: {
      pt: "Esforço de atenção e de raciocínio que uma tarefa exige. Trabalhar com um robô pode reduzi-la ou aumentá-la, conforme o ritmo, a previsibilidade do robô e quem conduz a tarefa.",
      en: "The effort of attention and reasoning a task demands. Working with a robot can lower or raise it, depending on the pace, how predictable the robot is and who leads the task.",
      es: "Esfuerzo de atención y de razonamiento que exige una tarea. Trabajar con un robot puede reducirla o aumentarla, según el ritmo, la previsibilidad del robot y quién conduce la tarea.",
    },
    match: { pt: ["carga mental", "carga cognitiva"], en: ["mental workload", "cognitive load", "cognitive workload"], es: ["carga mental", "carga cognitiva"] },
  },
  {
    id: "psychosocial-risk",
    term: { pt: "Risco psicossocial", en: "Psychosocial risk", es: "Riesgo psicosocial" },
    definition: {
      pt: "Risco à saúde ligado à organização do trabalho e às relações no trabalho: ritmo imposto, pouca autonomia, monitoramento, insegurança no emprego. A chegada de um robô pode mexer em vários desses fatores.",
      en: "A health risk linked to how work is organized and to relationships at work: imposed pace, little autonomy, monitoring, job insecurity. The arrival of a robot can affect several of these factors.",
      es: "Riesgo para la salud ligado a la organización del trabajo y a las relaciones en el trabajo: ritmo impuesto, poca autonomía, monitorización, inseguridad laboral. La llegada de un robot puede alterar varios de estos factores.",
    },
    match: { pt: ["psicossocia", "estresse"], en: ["psychosocial", "stress"], es: ["psicosocial", "estres"] },
    standards: ["ISO 45003:2021", "NR-01 (Brasil)"],
  },
  {
    id: "trust",
    term: { pt: "Confiança no robô", en: "Trust in the robot", es: "Confianza en el robot" },
    definition: {
      pt: "O quanto a pessoa conta com o robô para fazer o que se espera dele. Confiança de menos leva a não usar o robô; confiança demais, a descuidar da atenção. Não é o mesmo que o robô ser, de fato, confiável.",
      en: "How much the person relies on the robot to do what is expected of it. Too little trust leads to not using the robot; too much leads to dropping one's guard. It is not the same as the robot actually being trustworthy.",
      es: "Cuánto cuenta la persona con que el robot haga lo que se espera de él. Demasiado poca confianza lleva a no usar el robot; demasiada, a descuidar la atención. No es lo mismo que el robot sea, de hecho, fiable.",
    },
    match: { pt: ["confianca"], en: ["trust"], es: ["confianza"] },
  },
  {
    id: "amr",
    term: { pt: "Robô móvel autônomo", en: "Autonomous mobile robot", es: "Robot móvil autónomo" },
    abbr: "AMR",
    definition: {
      pt: "Veículo sem condutor que transporta materiais e escolhe o próprio caminho, desviando de obstáculos. Difere do AGV, que segue uma rota fixa. Não é um cobot, mas divide corredores com pessoas e pode levar um braço colaborativo.",
      en: "A driverless vehicle that carries materials and chooses its own path, avoiding obstacles. It differs from an AGV, which follows a fixed route. It is not a cobot, but it shares aisles with people and can carry a collaborative arm.",
      es: "Vehículo sin conductor que transporta materiales y elige su propio camino, esquivando obstáculos. Se diferencia del AGV, que sigue una ruta fija. No es un cobot, pero comparte pasillos con personas y puede llevar un brazo colaborativo.",
    },
    match: { pt: ["robo movel", "robos moveis", "amr", "agv"], en: ["mobile robot", "amr", "agv"], es: ["robot movil", "robots moviles", "amr", "agv"] },
    standards: ["ISO 3691-4:2023"],
  },
  {
    id: "roi",
    term: { pt: "Retorno sobre o investimento", en: "Return on investment", es: "Retorno de la inversión" },
    abbr: "ROI",
    definition: {
      pt: "Comparação entre o que um projeto custa e o que ele devolve, em geral expressa como tempo até o investimento se pagar. Num projeto com cobot, o custo inclui garra, integração, segurança e treinamento, e não só o robô.",
      en: "A comparison between what a project costs and what it gives back, usually expressed as the time until the investment pays for itself. In a cobot project, the cost includes gripper, integration, safety and training, not only the robot.",
      es: "Comparación entre lo que cuesta un proyecto y lo que devuelve, en general expresada como el tiempo hasta que la inversión se amortiza. En un proyecto con cobot, el coste incluye pinza, integración, seguridad y formación, y no solo el robot.",
    },
    match: { pt: ["retorno sobre", "retorno do investimento", "payback", "roi"], en: ["return on investment", "payback", "roi"], es: ["retorno de la inversion", "amortiza", "roi"] },
  },
  {
    id: "sme",
    term: { pt: "Pequenas e médias empresas", en: "Small and medium-sized enterprises", es: "Pequeñas y medianas empresas" },
    abbr: "PME · SME · pyme",
    definition: {
      pt: "Empresas de menor porte, que formam a maior parte da indústria. São o público para o qual o cobot costuma ser apresentado como solução, e também onde a adoção encontra mais barreiras.",
      en: "Smaller companies, which make up most of industry. They are the audience to which the cobot is usually presented as a solution, and also where adoption meets the most barriers.",
      es: "Empresas de menor tamaño, que forman la mayor parte de la industria. Son el público al que se suele presentar el cobot como solución, y también donde la adopción encuentra más barreras.",
    },
    match: { pt: ["pme", "pequenas e medias", "pequenas empresas"], en: ["sme", "small and medium", "small companies", "small firms"], es: ["pyme", "pequenas y medianas", "pequenas empresas"] },
  },
];
