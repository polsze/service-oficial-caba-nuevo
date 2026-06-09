import {
  PackageCheck,
  ShieldCheck,
  ClipboardCheck,
  House,
} from "lucide-react";

const benefits = [
  {
    icon: PackageCheck,
    title: "Repuestos Originales",
    description: "Piezas de calidad garantizada",
  },
  {
    icon: ShieldCheck,
    title: "Garantía Escrita",
    description: "Respaldo en cada reparación",
  },
  {
    icon: ClipboardCheck,
    title: "Diagnóstico Profesional",
    description: "Evaluación técnica precisa",
  },
  {
    icon: House,
    title: "Atención a Domicilio",
    description: "Cobertura en toda CABA",
  },
];

const BenefitsBanner = () => {
  return (
    <section className="bg-[#0041A5]">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                  <Icon
                    size={24}
                    className="text-white"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-blue-100">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsBanner;