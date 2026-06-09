import {
  Cog,
  Zap,
  Thermometer,
  Wind,
  Fan,
  DoorClosed,
  Snowflake,
  Droplets,
  Waves,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: Cog,
    title: "Compresor Defectuoso",
    description:
      "Diagnóstico y reparación de compresores con fallas de arranque, pérdida de rendimiento o problemas de refrigeración.",
  },
  {
    icon: Zap,
    title: "Problemas Eléctricos",
    description:
      "Solución de fallas eléctricas, cortocircuitos y componentes defectuosos que afectan el funcionamiento de la heladera.",
  },
  {
    icon: Thermometer,
    title: "Termostato Averiado",
    description:
      "Reemplazo y calibración de termostatos para recuperar el control adecuado de la temperatura.",
  },
  {
    icon: Wind,
    title: "Bobinas del Condensador Obstruidas",
    description:
      "Limpieza y mantenimiento de condensadores para mejorar la eficiencia y el rendimiento del equipo.",
  },
  {
    icon: Fan,
    title: "Fallo en el Ventilador del Evaporador",
    description:
      "Reparación de ventiladores que afectan la circulación del aire frío dentro de la heladera.",
  },
  {
    icon: DoorClosed,
    title: "Burlete o Sello de Puerta Dañado",
    description:
      "Cambio de burletes deteriorados que provocan pérdida de frío y un mayor consumo energético.",
  },
  {
    icon: Snowflake,
    title: "Acumulación de Hielo",
    description:
      "Solución de problemas de congelamiento excesivo en evaporadores y sistemas No Frost.",
  },
  {
    icon: Droplets,
    title: "Filtro de Agua Obstruido",
    description:
      "Limpieza o reemplazo de filtros para garantizar el correcto funcionamiento del sistema.",
  },
  {
    icon: Waves,
    title: "Pérdidas de Agua",
    description:
      "Detección y reparación de fugas producidas por válvulas, conductos o sistemas de drenaje.",
  },
  {
    icon: Settings,
    title: "Sistema de Descongelación",
    description:
      "Diagnóstico y reparación de sensores, resistencias y componentes del sistema de descongelación.",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
            Fallas Comunes que Reparamos en Heladeras
          </h2>

          <p className="text-lg text-gray-600">
            Nuestro servicio técnico de heladeras a domicilio en Capital
            Federal está preparado para diagnosticar y reparar las averías más
            frecuentes, utilizando repuestos de calidad y ofreciendo garantía
            escrita en cada intervención.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#0041A5]/20 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0041A5]/10 transition-all duration-300 group-hover:bg-[#0041A5]">
                  <Icon
                    size={28}
                    className="text-[#0041A5] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mb-3 text-lg font-bold text-black">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Texto SEO */}
        <div className="mx-auto mt-16 max-w-4xl text-center">
          <p className="text-gray-600">
            Si su heladera presenta pérdida de frío, acumulación de hielo,
            problemas eléctricos, fallas en el compresor o cualquier otro
            desperfecto, nuestro equipo técnico puede asistirlo con servicio a
            domicilio en toda la Ciudad Autónoma de Buenos Aires.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;