// Página "Comece por aqui": roteiro curto para quem avalia o primeiro cobot (pensado para pequenas empresas).
// `to` é o caminho interno, sem o idioma (ex.: "roi" → /pt/roi/); pode ter âncora ("research/#safety").
import type { Lang } from "../i18n/ui";

interface Step {
  title: string;
  text: string;
  links: { label: string; to: string }[];
}

export const startText: Record<Lang, { title: string; lead: string; caution: string; steps: Step[] }> = {
  pt: {
    title: "Comece por aqui",
    lead: "Um roteiro em seis passos para quem está avaliando o primeiro robô colaborativo, pensado para pequenas e médias empresas. Cada passo aponta para o que já existe no site.",
    caution: "Este roteiro é uma orientação geral, escrita com apoio de IA e ainda em revisão pela equipe. Não substitui a avaliação de risco feita por profissional habilitado.",
    steps: [
      {
        title: "Entenda o que é (e o que não é) um cobot",
        text: "Um cobot é um robô feito para trabalhar perto de pessoas, mas ele sozinho não torna o posto seguro nem colaborativo: isso depende da tarefa, da garra e da peça. Vale conhecer o vocabulário antes de conversar com fornecedores.",
        links: [
          { label: "Glossário", to: "glossary" },
          { label: "Aprenda: conceitos básicos", to: "learn" },
          { label: "Pesquisa: fundamentos e tecnologia", to: "research/#fundamentals" },
        ],
      },
      {
        title: "Escolha a tarefa certa",
        text: "Os primeiros projetos que dão certo costumam ser tarefas repetitivas, cansativas ou de postura ruim, com peças leves e pouca variação. Olhe como o seu setor usa cobots e onde a pesquisa encontrou limites.",
        links: [
          { label: "Setores", to: "sectors" },
          { label: "Pesquisa: aplicações por setor", to: "research/#applications" },
        ],
      },
      {
        title: "Faça a conta inteira",
        text: "O robô é só parte do custo: entram garra, integração, proteções, treinamento e o tempo de parada para instalar. Estime o retorno com números seus e veja o que os estudos dizem sobre por que tantas empresas pequenas hesitam.",
        links: [
          { label: "Calculadora de ROI", to: "roi" },
          { label: "Pesquisa: adoção, economia e ética", to: "research/#implementation" },
          { label: "Vitrine técnica", to: "catalog" },
        ],
      },
      {
        title: "Trate a segurança como parte do projeto",
        text: "Toda aplicação com cobot precisa de avaliação de risco, refeita quando a tarefa, a garra ou a peça mudam. Conheça as normas que se aplicam antes de comprar, não depois de instalar.",
        links: [
          { label: "Normas", to: "standards" },
          { label: "Pesquisa: segurança e normas", to: "research/#safety" },
        ],
      },
      {
        title: "Inclua as pessoas desde o início",
        text: "Quem vai trabalhar ao lado do robô sabe onde a tarefa aperta. Ritmo, autonomia, carga mental e confiança mudam com a chegada do cobot, e os estudos mostram que envolver o operador cedo pesa na aceitação.",
        links: [
          { label: "Pesquisa: fatores humanos e ergonomia", to: "research/#human-factors" },
          { label: "Pesquisa: Indústria 5.0 e trabalho", to: "research/#industry-5-0" },
          { label: "ODS: trabalho decente", to: "sdgs" },
        ],
      },
      {
        title: "Aprenda e treine a equipe",
        text: "Há treinamento gratuito de fabricantes e alguns cursos independentes. Comece pelo material aberto, e deixe o treinamento pago para quando a escolha do equipamento estiver feita.",
        links: [
          { label: "Cursos", to: "courses" },
          { label: "Tutoriais", to: "tutorials" },
          { label: "Pesquisa: cobots na sala de aula", to: "research/#education" },
        ],
      },
    ],
  },
  en: {
    title: "Start here",
    lead: "A six-step path for anyone evaluating their first collaborative robot, written with small and medium-sized companies in mind. Each step points to what is already on the site.",
    caution: "This path is general guidance, written with AI assistance and still under review by the team. It does not replace a risk assessment by a qualified professional.",
    steps: [
      {
        title: "Understand what a cobot is (and is not)",
        text: "A cobot is a robot made to work near people, but on its own it does not make the workstation safe or collaborative: that depends on the task, the gripper and the part. It pays to learn the vocabulary before talking to suppliers.",
        links: [
          { label: "Glossary", to: "glossary" },
          { label: "Learn: basic concepts", to: "learn" },
          { label: "Research: fundamentals and technology", to: "research/#fundamentals" },
        ],
      },
      {
        title: "Pick the right task",
        text: "The first projects that work out are usually repetitive, tiring or awkward-posture tasks, with light parts and little variation. Look at how your sector uses cobots and where research has found limits.",
        links: [
          { label: "Sectors", to: "sectors" },
          { label: "Research: applications by sector", to: "research/#applications" },
        ],
      },
      {
        title: "Do the whole calculation",
        text: "The robot is only part of the cost: add gripper, integration, safeguards, training and the downtime for installation. Estimate the return with your own numbers and see what studies say about why so many small companies hesitate.",
        links: [
          { label: "ROI calculator", to: "roi" },
          { label: "Research: adoption, economics and ethics", to: "research/#implementation" },
          { label: "Technical catalog", to: "catalog" },
        ],
      },
      {
        title: "Treat safety as part of the project",
        text: "Every cobot application needs a risk assessment, redone whenever the task, gripper or part changes. Get to know the standards that apply before you buy, not after you install.",
        links: [
          { label: "Standards", to: "standards" },
          { label: "Research: safety and standards", to: "research/#safety" },
        ],
      },
      {
        title: "Involve people from the start",
        text: "Whoever will work next to the robot knows where the task hurts. Pace, autonomy, mental workload and trust change when a cobot arrives, and studies show that involving the operator early matters for acceptance.",
        links: [
          { label: "Research: human factors and ergonomics", to: "research/#human-factors" },
          { label: "Research: Industry 5.0 and work", to: "research/#industry-5-0" },
          { label: "SDGs: decent work", to: "sdgs" },
        ],
      },
      {
        title: "Learn and train the team",
        text: "There is free training from manufacturers and a few independent courses. Start with the open material, and leave paid training for when the equipment has been chosen.",
        links: [
          { label: "Courses", to: "courses" },
          { label: "Tutorials", to: "tutorials" },
          { label: "Research: cobots in the classroom", to: "research/#education" },
        ],
      },
    ],
  },
  es: {
    title: "Empieza aquí",
    lead: "Un recorrido en seis pasos para quien está evaluando su primer robot colaborativo, pensado para pequeñas y medianas empresas. Cada paso remite a lo que ya existe en el sitio.",
    caution: "Este recorrido es una orientación general, escrita con apoyo de IA y todavía en revisión por el equipo. No sustituye la evaluación de riesgos hecha por un profesional cualificado.",
    steps: [
      {
        title: "Entiende qué es (y qué no es) un cobot",
        text: "Un cobot es un robot hecho para trabajar cerca de personas, pero por sí solo no hace que el puesto sea seguro ni colaborativo: eso depende de la tarea, la pinza y la pieza. Conviene conocer el vocabulario antes de hablar con proveedores.",
        links: [
          { label: "Glosario", to: "glossary" },
          { label: "Aprende: conceptos básicos", to: "learn" },
          { label: "Investigación: fundamentos y tecnología", to: "research/#fundamentals" },
        ],
      },
      {
        title: "Elige la tarea adecuada",
        text: "Los primeros proyectos que salen bien suelen ser tareas repetitivas, cansadas o de mala postura, con piezas ligeras y poca variación. Mira cómo usa cobots tu sector y dónde la investigación ha encontrado límites.",
        links: [
          { label: "Sectores", to: "sectors" },
          { label: "Investigación: aplicaciones por sector", to: "research/#applications" },
        ],
      },
      {
        title: "Haz la cuenta completa",
        text: "El robot es solo parte del coste: hay que sumar pinza, integración, protecciones, formación y el tiempo de parada para instalar. Estima el retorno con tus propios números y mira qué dicen los estudios sobre por qué tantas empresas pequeñas dudan.",
        links: [
          { label: "Calculadora de ROI", to: "roi" },
          { label: "Investigación: adopción, economía y ética", to: "research/#implementation" },
          { label: "Catálogo técnico", to: "catalog" },
        ],
      },
      {
        title: "Trata la seguridad como parte del proyecto",
        text: "Toda aplicación con cobot necesita una evaluación de riesgos, que se repite cuando cambian la tarea, la pinza o la pieza. Conoce las normas aplicables antes de comprar, no después de instalar.",
        links: [
          { label: "Normas", to: "standards" },
          { label: "Investigación: seguridad y normas", to: "research/#safety" },
        ],
      },
      {
        title: "Incluye a las personas desde el principio",
        text: "Quien va a trabajar junto al robot sabe dónde aprieta la tarea. El ritmo, la autonomía, la carga mental y la confianza cambian con la llegada del cobot, y los estudios muestran que implicar pronto al operador pesa en la aceptación.",
        links: [
          { label: "Investigación: factores humanos y ergonomía", to: "research/#human-factors" },
          { label: "Investigación: Industria 5.0 y trabajo", to: "research/#industry-5-0" },
          { label: "ODS: trabajo decente", to: "sdgs" },
        ],
      },
      {
        title: "Aprende y forma al equipo",
        text: "Hay formación gratuita de fabricantes y algunos cursos independientes. Empieza por el material abierto y deja la formación de pago para cuando el equipo ya esté elegido.",
        links: [
          { label: "Cursos", to: "courses" },
          { label: "Tutoriales", to: "tutorials" },
          { label: "Investigación: cobots en el aula", to: "research/#education" },
        ],
      },
    ],
  },
};
