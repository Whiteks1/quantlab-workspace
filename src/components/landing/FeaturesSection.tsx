import {
  BadgeCheck,
  BarChart3,
  LayoutTemplate,
  LineChart,
  Megaphone,
  PenTool,
  Rocket,
  Target,
} from "lucide-react";

const features = [
  { icon: Target, title: "Posicionamiento", desc: "Aterrizamos qué vendes, a quién y por qué debería importarle en segundos." },
  { icon: LayoutTemplate, title: "Landing pages", desc: "Diseñamos páginas enfocadas a una sola acción, con jerarquía clara y ruta de conversión." },
  { icon: PenTool, title: "Copy de venta", desc: "Mensajes, titulares y bloques de apoyo que explican valor sin ruido innecesario." },
  { icon: BarChart3, title: "Prueba social", desc: "Casos de muestra, demos y evidencia para reducir fricción comercial." },
  { icon: Megaphone, title: "Lanzamientos", desc: "Piezas listas para campañas, presentaciones y activaciones con foco comercial." },
  { icon: LineChart, title: "Analítica", desc: "Medición simple para entender qué páginas y mensajes están funcionando." },
  { icon: BadgeCheck, title: "Sistema reutilizable", desc: "Componentes y estructura preparados para añadir más demos o campañas sin rehacerlo todo." },
  { icon: Rocket, title: "Iteración rápida", desc: "Ajustes cortos, entregas limpias y mejoras continuas sobre una base ya sólida." },
];

const FeaturesSection = () => (
  <section className="border-t border-border py-24" id="services">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Servicios</p>
        <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
          Una base comercial hecha para convertir
        </h2>
        <p className="mt-4 text-muted-foreground">
          Cada bloque resuelve una parte del recorrido comercial y deja la web lista para escalar con nuevos casos de muestra.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-lg border border-border bg-card p-5 card-hover">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 border border-primary/20">
              <f.icon size={18} className="text-primary" />
            </div>
            <h3 className="text-sm font-semibold text-heading">{f.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
