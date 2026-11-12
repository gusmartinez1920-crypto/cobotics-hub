// Objetivos de Desenvolvimento Sustentável (ODS / SDGs) tratados pelo Cobotics Hub.
// Usamos número, nome e cor oficial — NÃO os ícones oficiais da ONU — e sempre com o aviso
// de que o conteúdo não foi aprovado pela ONU (ver página /<idioma>/sdgs/).
// Regra editorial: um conteúdo só recebe um ODS se explicar o vínculo (campo `why`).
import type { Lang } from "../i18n/ui";

export const SDG_GOALS = [4, 8, 9, 12, 13, 17] as const;
export type SdgGoal = (typeof SDG_GOALS)[number];

export const sdgColor: Record<SdgGoal, string> = {
  4: "#C5192D",
  8: "#A21942",
  9: "#FD6925",
  12: "#BF8B2E",
  13: "#3F7E44",
  17: "#19486A",
};

export const sdgName: Record<SdgGoal, Record<Lang, string>> = {
  4: { en: "Quality education", pt: "Educação de qualidade", es: "Educación de calidad" },
  8: { en: "Decent work and economic growth", pt: "Trabalho decente e crescimento econômico", es: "Trabajo decente y crecimiento económico" },
  9: { en: "Industry, innovation and infrastructure", pt: "Indústria, inovação e infraestrutura", es: "Industria, innovación e infraestructura" },
  12: { en: "Responsible consumption and production", pt: "Consumo e produção responsáveis", es: "Producción y consumo responsables" },
  13: { en: "Climate action", pt: "Ação contra a mudança global do clima", es: "Acción por el clima" },
  17: { en: "Partnerships for the goals", pt: "Parcerias e meios de implementação", es: "Alianzas para lograr los objetivos" },
};

export const sdgShort: Record<Lang, string> = { en: "SDG", pt: "ODS", es: "ODS" };

/** Texto da página "ODS": como cada objetivo se liga a cobótica, IoT e gêmeos digitais. */
type GoalText = { body: string[]; caution?: string };
export const sdgPage: Record<Lang, { intro: string[]; goals: Record<SdgGoal, GoalText>; rule: string; tradeoffTitle: string; tradeoff: string[] }> = {
  pt: {
    intro: [
      "A Indústria 5.0 é definida por três eixos: centralidade humana, sustentabilidade e resiliência. Os Objetivos de Desenvolvimento Sustentável (ODS) da ONU são a linguagem comum, em todo o mundo, para falar desses temas.",
      "Nesta página explicamos onde cobótica, IoT industrial e gêmeos digitais podem contribuir para seis ODS — e onde é preciso cuidado para não prometer mais do que a tecnologia entrega.",
    ],
    goals: {
      4: {
        body: [
          "O próprio Cobotics Hub é uma iniciativa de educação aberta: conteúdo técnico gratuito, em três idiomas, produzido com estudantes e pesquisadores.",
          "A automação muda as competências exigidas no chão de fábrica. Programar, supervisionar e manter cobots, sensores e gêmeos digitais são habilidades que precisam ser ensinadas — e é isso que torna possível a transição descrita no ODS 8.",
        ],
      },
      8: {
        body: [
          "Cobots podem assumir tarefas repetitivas, insalubres ou fisicamente desgastantes, reduzindo a exposição a lesões por esforço repetitivo (LER/DORT) e a acidentes.",
          "Com isso, a pessoa pode deixar de operar a máquina e passar a supervisionar o processo e resolver problemas, valorizando o raciocínio e a criatividade em vez do esforço físico.",
        ],
        caution:
          "Essa mudança não acontece sozinha: ela depende de requalificação (ODS 4). Sem ela, automação também pode significar perda de postos de trabalho. Tratamos esse lado abertamente.",
      },
      9: {
        body: [
          "IoT e gêmeos digitais permitem manutenção preditiva: acompanhar o estado real dos equipamentos e intervir antes da falha. Isso reduz paradas não planejadas e pode prolongar a vida útil dos ativos.",
          "Componentes acessíveis — microcontroladores, sensores compactos, software aberto — permitem que pequenas oficinas, startups, makers e universidades também inovem.",
        ],
        caution: "Manutenção preditiva reduz paradas não planejadas; não as elimina. O ganho depende da qualidade dos dados e dos modelos.",
      },
      12: {
        body: [
          "Gêmeos digitais permitem testar processos no ambiente virtual antes de executá-los, reduzindo testes físicos e o desperdício de material e energia que eles causam.",
          "Sensores IoT medem consumo de energia, vazamentos de insumos e emissões em tempo real, o que permite ajustes rápidos para uma produção mais limpa.",
        ],
        caution: "A simulação reduz testes físicos, mas não os substitui totalmente: o modelo precisa ser validado no mundo real.",
      },
      13: {
        body: [
          "Otimizar a logística interna, a eficiência energética dos motores e reduzir o refugo pode diminuir a pegada de carbono da produção.",
        ],
        caution:
          "Essa redução só existe se for medida. Equipamentos e servidores também consomem energia e recursos para serem fabricados e operados; o balanço precisa considerar os dois lados.",
      },
      17: {
        body: [
          "O hub reúne pesquisadores, estudantes, makers e indústria em um espaço aberto. Resumos de pesquisa enviados por pesquisadores de qualquer país aproximam a ciência de quem aplica a tecnologia.",
        ],
      },
    },
    rule: "Regra editorial: um conteúdo do Cobotics Hub só recebe a marca de um ODS quando o próprio texto explica a ligação. A justificativa aparece junto do conteúdo.",
    tradeoffTitle: "O que não prometemos",
    tradeoff: [
      "Tecnologia não cumpre ODS sozinha. Os efeitos dependem de como cada empresa implanta, mede e distribui os ganhos.",
      "Quando um texto do hub fala em impacto, procuramos citar dados ou estudos. Se você encontrar uma afirmação sem fundamento, avise pela página Contribua.",
    ],
  },
  en: {
    intro: [
      "Industry 5.0 is defined by three pillars: human-centricity, sustainability and resilience. The United Nations Sustainable Development Goals (SDGs) are the shared, worldwide language for these topics.",
      "This page explains where cobotics, industrial IoT and digital twins can contribute to six SDGs — and where care is needed not to promise more than the technology delivers.",
    ],
    goals: {
      4: {
        body: [
          "Cobotics Hub itself is an open-education initiative: free technical content, in three languages, produced with students and researchers.",
          "Automation changes the skills needed on the shop floor. Programming, supervising and maintaining cobots, sensors and digital twins must be taught — and that is what makes the transition described in SDG 8 possible.",
        ],
      },
      8: {
        body: [
          "Cobots can take over repetitive, unhealthy or physically demanding tasks, reducing exposure to repetitive strain injuries and accidents.",
          "People can then move from operating the machine to supervising the process and solving problems, putting reasoning and creativity ahead of physical effort.",
        ],
        caution:
          "This shift does not happen by itself: it depends on reskilling (SDG 4). Without it, automation can also mean job losses. We address that side openly.",
      },
      9: {
        body: [
          "IoT and digital twins enable predictive maintenance: tracking the real condition of equipment and acting before it fails. This reduces unplanned downtime and can extend asset life.",
          "Affordable components — microcontrollers, compact sensors, open-source software — let small workshops, startups, makers and universities innovate too.",
        ],
        caution: "Predictive maintenance reduces unplanned downtime; it does not eliminate it. The gain depends on the quality of data and models.",
      },
      12: {
        body: [
          "Digital twins let teams test processes virtually before running them, reducing physical trials and the material and energy they waste.",
          "IoT sensors measure energy use, leaks and emissions in real time, enabling quick adjustments toward cleaner production.",
        ],
        caution: "Simulation reduces physical testing but does not fully replace it: the model must be validated in the real world.",
      },
      13: {
        body: [
          "Optimizing internal logistics and motor energy efficiency, and cutting scrap, can lower the carbon footprint of production.",
        ],
        caution:
          "That reduction only exists if it is measured. Equipment and servers also use energy and resources to be built and run; the balance must account for both sides.",
      },
      17: {
        body: [
          "The hub brings researchers, students, makers and industry together in an open space. Research summaries contributed by researchers from any country bring science closer to the people who apply it.",
        ],
      },
    },
    rule: "Editorial rule: Cobotics Hub content is tagged with an SDG only when the text itself explains the link. The justification is shown next to the content.",
    tradeoffTitle: "What we do not promise",
    tradeoff: [
      "Technology does not achieve the SDGs on its own. The effects depend on how each company deploys, measures and shares the gains.",
      "When a text on the hub talks about impact, we try to cite data or studies. If you find an unsupported claim, tell us through the Contribute page.",
    ],
  },
  es: {
    intro: [
      "La Industria 5.0 se define por tres ejes: centralidad humana, sostenibilidad y resiliencia. Los Objetivos de Desarrollo Sostenible (ODS) de la ONU son el lenguaje común, en todo el mundo, para hablar de estos temas.",
      "En esta página explicamos dónde la cobótica, el IoT industrial y los gemelos digitales pueden contribuir a seis ODS — y dónde hay que tener cuidado para no prometer más de lo que la tecnología ofrece.",
    ],
    goals: {
      4: {
        body: [
          "Cobotics Hub es en sí una iniciativa de educación abierta: contenido técnico gratuito, en tres idiomas, elaborado con estudiantes e investigadores.",
          "La automatización cambia las competencias que se necesitan en planta. Programar, supervisar y mantener cobots, sensores y gemelos digitales son habilidades que hay que enseñar — y es lo que hace posible la transición descrita en el ODS 8.",
        ],
      },
      8: {
        body: [
          "Los cobots pueden asumir tareas repetitivas, insalubres o físicamente exigentes, reduciendo la exposición a lesiones por esfuerzo repetitivo y a accidentes.",
          "Así, la persona puede pasar de operar la máquina a supervisar el proceso y resolver problemas, valorando el razonamiento y la creatividad por encima del esfuerzo físico.",
        ],
        caution:
          "Este cambio no ocurre solo: depende de la recualificación (ODS 4). Sin ella, la automatización también puede significar pérdida de empleos. Tratamos ese lado abiertamente.",
      },
      9: {
        body: [
          "El IoT y los gemelos digitales permiten el mantenimiento predictivo: seguir el estado real de los equipos e intervenir antes del fallo. Esto reduce las paradas no planificadas y puede alargar la vida útil de los activos.",
          "Los componentes asequibles — microcontroladores, sensores compactos, software abierto — permiten innovar también a pequeños talleres, startups, makers y universidades.",
        ],
        caution: "El mantenimiento predictivo reduce las paradas no planificadas; no las elimina. El beneficio depende de la calidad de los datos y de los modelos.",
      },
      12: {
        body: [
          "Los gemelos digitales permiten probar procesos en el entorno virtual antes de ejecutarlos, reduciendo las pruebas físicas y el desperdicio de material y energía que causan.",
          "Los sensores IoT miden el consumo de energía, las fugas de insumos y las emisiones en tiempo real, lo que permite ajustes rápidos hacia una producción más limpia.",
        ],
        caution: "La simulación reduce las pruebas físicas, pero no las sustituye del todo: el modelo debe validarse en el mundo real.",
      },
      13: {
        body: [
          "Optimizar la logística interna y la eficiencia energética de los motores, y reducir el desperdicio, puede disminuir la huella de carbono de la producción.",
        ],
        caution:
          "Esa reducción solo existe si se mide. Los equipos y servidores también consumen energía y recursos para fabricarse y funcionar; el balance debe considerar ambos lados.",
      },
      17: {
        body: [
          "El hub reúne a investigadores, estudiantes, makers e industria en un espacio abierto. Los resúmenes de investigación enviados por investigadores de cualquier país acercan la ciencia a quienes aplican la tecnología.",
        ],
      },
    },
    rule: "Regla editorial: un contenido de Cobotics Hub solo recibe la marca de un ODS cuando el propio texto explica la relación. La justificación aparece junto al contenido.",
    tradeoffTitle: "Lo que no prometemos",
    tradeoff: [
      "La tecnología no cumple los ODS por sí sola. Los efectos dependen de cómo cada empresa implanta, mide y reparte los beneficios.",
      "Cuando un texto del hub habla de impacto, intentamos citar datos o estudios. Si encuentras una afirmación sin fundamento, avísanos desde la página Contribuye.",
    ],
  },
};
