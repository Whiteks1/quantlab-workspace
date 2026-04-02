export type PortfolioProject = {
  name: string;
  description: string;
  projectType: string;
  ctaLabel: string;
  demoUrl: string;
  tags: string[];
  highlights: string[];
};

const quantLabDemoUrl = import.meta.env.VITE_QUANTLAB_DEMO_URL?.trim();

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "QuantLab",
    description:
      "Demo de workspace cuantitativo para investigar, comparar y validar estrategias con trazabilidad completa.",
    projectType: "Demo de producto",
    ctaLabel: "Ver demo",
    demoUrl: quantLabDemoUrl && quantLabDemoUrl.length > 0 ? quantLabDemoUrl : "#contact",
    tags: ["Quant research", "Portfolio", "Demo real"],
    highlights: [
      "Caso de muestra comercial",
      "Enlace externo configurable",
      "Base lista para sumar más demos",
    ],
  },
];
