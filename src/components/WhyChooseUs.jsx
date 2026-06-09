import {
  ShieldCheck,
  PackageCheck,
  Building2,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Garantía Escrita",
    description:
      "Todas nuestras reparaciones cuentan con garantía para brindarle mayor tranquilidad y confianza.",
  },
  {
    icon: PackageCheck,
    title: "Repuestos Originales",
    description:
      "Utilizamos repuestos originales y componentes de calidad para asegurar el correcto funcionamiento de su heladera.",
  },
  {
    icon: Building2,
    title: "Servicio Residencial y Comercial",
    description:
      "Atendemos hogares, comercios y empresas en toda Capital Federal con cobertura rápida a domicilio.",
  },
  {
    icon: BadgeCheck,
    title: "Técnicos Especializados",
    description:
      "Personal capacitado en reparación de heladeras con actualización constante en nuevas tecnologías.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
            ¿Por Qué Elegir Nuestro Servicio Técnico de Heladeras?
          </h2>

          <p className="text-gray-600">
            Brindamos soluciones rápidas y profesionales para la reparación de
            heladeras en toda Capital Federal.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0041A5]/10">
                  <Icon
                    size={32}
                    className="text-[#0041A5]"
                  />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-black">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;