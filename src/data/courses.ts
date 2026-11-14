// Diretório de cursos de cobótica oferecidos por terceiros: lista com resumo curto.
// Só entram cursos cuja página do próprio fornecedor foi aberta e conferida (data em COURSES_CHECKED).
// Não colocamos preços nem datas de turma: mudam rápido. Ao atualizar, abra cada link de novo.
// O Cobotics Hub não tem vínculo com nenhum destes fornecedores.
import type { Lang } from "../i18n/ui";

export const COURSES_CHECKED = "2026-11-13";

type Text = Record<Lang, string>;
export type CourseGroup = "vendor" | "open" | "regional" | "university";
export type CourseCost = "free" | "paid" | "mixed" | "unknown";

export interface Course {
  provider: string;
  name: string;
  group: CourseGroup;
  cost: CourseCost;
  /** Idioma(s) do curso, como o fornecedor informa. */
  languages: Text;
  summary: Text;
  url: string;
}

export const coursesText: Record<
  Lang,
  { title: string; lead: string; caution: string; gapsTitle: string; gaps: string[]; checked: string; open: string; groups: Record<CourseGroup, string>; cost: Record<CourseCost, string>; langLabel: string }
> = {
  pt: {
    title: "Cursos",
    lead: "Cursos de robótica colaborativa que já existem, oferecidos por fabricantes, plataformas abertas, escolas e universidades. Uma lista curta para você saber por onde começar.",
    caution:
      "O Cobotics Hub não tem vínculo com estes fornecedores e não recebe nada por indicá-los. Entraram só cursos cuja página conseguimos abrir e conferir; preços, idiomas e turmas mudam, então confirme no site de cada um. Texto escrito com apoio de IA, ainda em revisão pela equipe.",
    gapsTitle: "O que ainda falta",
    gaps: [
      "Quase tudo é treinamento de programação de um fabricante específico, em inglês.",
      "Há pouco conteúdo independente de marca em português e em espanhol, e não encontramos nenhum curso específico para a América Latina em espanhol.",
      "Não encontramos curso que ligue cobots a IoT industrial e gêmeos digitais, nem curso para pequenas empresas decidirem se e como adotar um cobot.",
      "Fatores humanos e ergonomia aparecem só como parte de uma disciplina universitária.",
    ],
    checked: "Páginas conferidas em",
    open: "Abrir a página do curso",
    groups: {
      vendor: "Treinamento dos fabricantes",
      open: "Cursos online abertos",
      regional: "Em português e em espanhol",
      university: "Universidades",
    },
    cost: { free: "Gratuito", paid: "Pago", mixed: "Parte gratuita, parte paga", unknown: "Custo não informado" },
    langLabel: "Idioma",
  },
  en: {
    title: "Courses",
    lead: "Collaborative robotics courses that already exist, offered by manufacturers, open platforms, schools and universities. A short list so you know where to start.",
    caution:
      "Cobotics Hub has no ties to these providers and receives nothing for listing them. Only courses whose page we could open and check are included; prices, languages and schedules change, so confirm on each provider's site. Written with AI assistance and still under review by the team.",
    gapsTitle: "What is still missing",
    gaps: [
      "Almost everything is programming training from one specific manufacturer, in English.",
      "There is little vendor-neutral content in Portuguese and Spanish, and we found no course specific to Latin America in Spanish.",
      "We found no course linking cobots with industrial IoT and digital twins, and none aimed at small companies deciding whether and how to adopt a cobot.",
      "Human factors and ergonomics appear only as part of one university course.",
    ],
    checked: "Pages checked on",
    open: "Open the course page",
    groups: {
      vendor: "Manufacturer training",
      open: "Open online courses",
      regional: "In Portuguese and Spanish",
      university: "Universities",
    },
    cost: { free: "Free", paid: "Paid", mixed: "Partly free, partly paid", unknown: "Cost not stated" },
    langLabel: "Language",
  },
  es: {
    title: "Cursos",
    lead: "Cursos de robótica colaborativa que ya existen, ofrecidos por fabricantes, plataformas abiertas, escuelas y universidades. Una lista breve para saber por dónde empezar.",
    caution:
      "Cobotics Hub no tiene vínculo con estos proveedores y no recibe nada por mencionarlos. Solo se incluyen cursos cuya página pudimos abrir y comprobar; precios, idiomas y convocatorias cambian, así que confírmalo en el sitio de cada uno. Texto escrito con apoyo de IA, todavía en revisión por el equipo.",
    gapsTitle: "Lo que todavía falta",
    gaps: [
      "Casi todo es formación en programación de un fabricante concreto, en inglés.",
      "Hay poco contenido independiente de marca en portugués y en español, y no encontramos ningún curso específico para América Latina en español.",
      "No encontramos ningún curso que conecte los cobots con el IoT industrial y los gemelos digitales, ni cursos para que las pequeñas empresas decidan si adoptar un cobot y cómo.",
      "Los factores humanos y la ergonomía aparecen solo como parte de una asignatura universitaria.",
    ],
    checked: "Páginas comprobadas el",
    open: "Abrir la página del curso",
    groups: {
      vendor: "Formación de los fabricantes",
      open: "Cursos en línea abiertos",
      regional: "En portugués y en español",
      university: "Universidades",
    },
    cost: { free: "Gratuito", paid: "De pago", mixed: "Parte gratuita, parte de pago", unknown: "Coste no indicado" },
    langLabel: "Idioma",
  },
};

export const COURSE_GROUPS: CourseGroup[] = ["vendor", "open", "regional", "university"];

export const courses: Course[] = [
  // ───────── Fabricantes
  {
    provider: "Universal Robots",
    name: "UR Academy — Free e-Learning",
    group: "vendor",
    cost: "mixed",
    languages: {
      pt: "Vários idiomas; o site tem versão em português",
      en: "Several languages",
      es: "Varios idiomas; el sitio tiene versión en español",
    },
    summary: {
      pt: "Módulos online interativos, no ritmo do aluno, com simulação: programação dos cobots da marca e um módulo de avaliação de risco. É o material gratuito mais completo que encontramos. A empresa também oferece cursos presenciais pagos.",
      en: "Interactive, self-paced online modules with simulation: programming the brand's cobots and a module on risk assessment. It is the most complete free material we found. The company also offers paid in-person courses.",
      es: "Módulos en línea interactivos, a tu ritmo, con simulación: programación de los cobots de la marca y un módulo de evaluación de riesgos. Es el material gratuito más completo que encontramos. La empresa también ofrece cursos presenciales de pago.",
    },
    url: "https://academy.universal-robots.com/free-e-learning/",
  },
  {
    provider: "FANUC America",
    name: "CRX e-Learning",
    group: "vendor",
    cost: "unknown",
    languages: { pt: "Inglês", en: "English", es: "Inglés" },
    summary: {
      pt: "Trilha de vídeos curtos para iniciantes sobre os cobots da linha CRX. Na data da conferência, só parte dos vídeos estava publicada.",
      en: "A path of short videos for beginners on the CRX line of cobots. When we checked, only some of the videos had been published.",
      es: "Itinerario de vídeos cortos para principiantes sobre los cobots de la línea CRX. En la fecha de comprobación, solo parte de los vídeos estaba publicada.",
    },
    url: "https://techtransfer.fanucamerica.com/path/crx-e-learning",
  },
  {
    provider: "Doosan Robotics",
    name: "Robot Training (Levels 1–3)",
    group: "vendor",
    cost: "unknown",
    languages: { pt: "Não informado", en: "Not stated", es: "No indicado" },
    summary: {
      pt: "Três níveis (básico, intermediário e avançado) em centros de treinamento oficiais, com certificado, e um link para treinamento online.",
      en: "Three levels (elementary, intermediate and advanced) at official training centers, with a certificate, plus a link to online training.",
      es: "Tres niveles (básico, intermedio y avanzado) en centros de formación oficiales, con certificado, y un enlace a formación en línea.",
    },
    url: "https://www.doosanrobotics.com/en/training-services/training/robot/",
  },
  {
    provider: "Omron",
    name: "TMflow Programming Level 1",
    group: "vendor",
    cost: "unknown",
    languages: { pt: "Não informado; a página tem versão em português", en: "Not stated", es: "No indicado" },
    summary: {
      pt: "Curso para iniciantes sobre a programação dos cobots TM, presencial ou online sob demanda.",
      en: "A beginner course on programming TM cobots, in person or online on demand.",
      es: "Curso para principiantes sobre la programación de los cobots TM, presencial o en línea bajo demanda.",
    },
    url: "https://robotics.omron.com/pt-br/training-services/",
  },
  {
    provider: "igus (RBTX Academy)",
    name: "DOBOT Studio — Basic Training",
    group: "vendor",
    cost: "paid",
    languages: { pt: "Não informado", en: "Not stated", es: "No indicado" },
    summary: {
      pt: "Treinamento prático de cerca de um dia, em turmas pequenas, sobre robôs de baixo custo vendidos pela plataforma.",
      en: "Hands-on training of about one day, in small groups, on the low-cost robots sold through the platform.",
      es: "Formación práctica de alrededor de un día, en grupos pequeños, sobre los robots de bajo coste vendidos por la plataforma.",
    },
    url: "https://rbtx.de/en-GB/components/service/igus-robot-training/dobot-basic-training",
  },

  // ───────── Cursos online abertos
  {
    provider: "Coursera · University at Buffalo (SUNY)",
    name: "Collaborative Robot Safety: Design & Deployment",
    group: "open",
    cost: "mixed",
    languages: { pt: "Inglês, com legendas em vários idiomas", en: "English, with subtitles in several languages", es: "Inglés, con subtítulos en varios idiomas" },
    summary: {
      pt: "Curso para iniciantes, em quatro módulos e cerca de 16 horas, sobre segurança no projeto e na implantação de cobots. É o único curso aberto e independente de fabricante sobre segurança que encontramos. O certificado é pago.",
      en: "A beginner course, in four modules and about 16 hours, on safety in designing and deploying cobots. It is the only open, vendor-neutral safety course we found. The certificate is paid.",
      es: "Curso para principiantes, en cuatro módulos y unas 16 horas, sobre seguridad en el diseño y la implantación de cobots. Es el único curso abierto e independiente de fabricante sobre seguridad que encontramos. El certificado es de pago.",
    },
    url: "https://www.coursera.org/learn/collaborative-robot-safety",
  },
  {
    provider: "Coursera · L&T EduTech",
    name: "Collaborative Robotics in Industry (Specialization)",
    group: "open",
    cost: "paid",
    languages: { pt: "Inglês", en: "English", es: "Inglés" },
    summary: {
      pt: "Especialização de nível intermediário, com três cursos e cerca de 26 horas. Apesar do nome, os títulos dos cursos tratam de robótica e automação em geral.",
      en: "An intermediate specialization with three courses and about 26 hours. Despite the name, the course titles cover robotics and automation in general.",
      es: "Especialización de nivel intermedio, con tres cursos y unas 26 horas. A pesar del nombre, los títulos de los cursos tratan de robótica y automatización en general.",
    },
    url: "https://www.coursera.org/specializations/collaborative-robotics-in-industry",
  },

  // ───────── Em português e em espanhol
  {
    provider: "SENAI (Brasil)",
    name: "Robótica Colaborativa Aplicada",
    group: "regional",
    cost: "paid",
    languages: { pt: "Português", en: "Portuguese", es: "Portugués" },
    summary: {
      pt: "Curso a distância de 40 horas, de baixo custo, oferecido pelas unidades estaduais do SENAI. Faz parte de um conjunto de cursos de Indústria 4.0 lançado em 2020. O link leva à página do SENAI do Rio Grande do Norte, onde o curso foi conferido.",
      en: "A low-cost, 40-hour distance course offered by SENAI's state units. It belongs to a set of Industry 4.0 courses launched in 2020. The link goes to the page of SENAI in Rio Grande do Norte, where the course was checked.",
      es: "Curso a distancia de 40 horas, de bajo coste, ofrecido por las unidades estatales del SENAI. Forma parte de un conjunto de cursos de Industria 4.0 lanzado en 2020. El enlace lleva a la página del SENAI de Rio Grande do Norte, donde se comprobó el curso.",
    },
    url: "https://www.rn.senai.br/o-senai-tem-os-cursos-que-voce-precisa/",
  },
  {
    provider: "Universal Robots Brasil",
    name: "Curso de robótica colaborativa na UR",
    group: "regional",
    cost: "mixed",
    languages: { pt: "Português", en: "Portuguese", es: "Portugués" },
    summary: {
      pt: "Página em português que explica a formação da marca no Brasil: a academia online gratuita e os treinamentos presenciais pagos.",
      en: "A page in Portuguese explaining the brand's training in Brazil: the free online academy and the paid in-person courses.",
      es: "Página en portugués que explica la formación de la marca en Brasil: la academia en línea gratuita y los cursos presenciales de pago.",
    },
    url: "https://www.universal-robots.com/br/blog/curso-de-robotica-colaborativa-na-ur-aprenda-com-quem-e-lider-no-assunto/",
  },
  {
    provider: "IMH (Elgoibar, Espanha)",
    name: "Robótica colaborativa. Instalación y programación",
    group: "regional",
    cost: "free",
    languages: { pt: "Espanhol", en: "Spanish", es: "Español" },
    summary: {
      pt: "Curso presencial de 24 horas sobre instalação e programação de cobots, subvencionado para os participantes na edição conferida.",
      en: "A 24-hour in-person course on installing and programming cobots, subsidized for participants in the edition we checked.",
      es: "Curso presencial de 24 horas sobre instalación y programación de cobots, subvencionado para los participantes en la edición comprobada.",
    },
    url: "https://www.imh.eus/es/cursos/automatizacion-montaje/robotica-colaborativa-instalacion-y-programacion",
  },

  // ───────── Universidades
  {
    provider: "Free University of Bozen-Bolzano (Itália)",
    name: "Industrial Collaborative Robotics",
    group: "university",
    cost: "unknown",
    languages: { pt: "Inglês", en: "English", es: "Inglés" },
    summary: {
      pt: "Disciplina de 6 créditos do mestrado em Engenharia Mecânica Industrial. Um módulo trata de segurança e ergonomia na interação humano-robô e o outro, de aplicações.",
      en: "A 6-credit course in the MSc in Industrial Mechanical Engineering. One module covers safety and ergonomics in human-robot interaction and the other covers applications.",
      es: "Asignatura de 6 créditos del máster en Ingeniería Mecánica Industrial. Un módulo trata de seguridad y ergonomía en la interacción humano-robot y el otro, de aplicaciones.",
    },
    url: "https://www.unibz.it/en/faculties/engineering/course-offering/2025/34695",
  },
  {
    provider: "Arts et Métiers (França)",
    name: "Mastère Spécialisé — Expert in collaborative robotics for the industry of the future (ColRobot)",
    group: "university",
    cost: "unknown",
    languages: { pt: "Francês", en: "French", es: "Francés" },
    summary: {
      pt: "Especialização de pós-graduação dedicada à robótica colaborativa na indústria. O link leva à página da rede ParisTech, onde o programa foi conferido.",
      en: "A postgraduate specialization dedicated to collaborative robotics in industry. The link goes to the ParisTech network page, where the program was checked.",
      es: "Especialización de posgrado dedicada a la robótica colaborativa en la industria. El enlace lleva a la página de la red ParisTech, donde se comprobó el programa.",
    },
    url: "https://studywithus.paristech.fr/en/industrial-engineering/expert-collaborative-robotics-industry-future-colrobot",
  },
];
