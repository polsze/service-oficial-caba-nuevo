import { Phone, ShieldCheck, Clock3 } from "lucide-react";
import { CONTACT } from "../config/contact";


const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#0041A5] py-24">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-white/10 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
            <ShieldCheck size={16} />
            Servicio Técnico de Heladeras en Capital Federal
          </div>

          {/* Título */}
          <h2 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl">
            ¿Su Heladera Dejó de Enfriar?
          </h2>

          {/* Texto */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-100">
            Solicite asistencia técnica a domicilio en toda CABA. Diagnóstico
            profesional, repuestos originales y garantía escrita en cada
            reparación.
          </p>

          {/* Beneficios */}
          <div className="mb-10 flex flex-wrap justify-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <Clock3 size={18} />
              <span>Atención Rápida</span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck size={18} />
              <span>Garantía Escrita</span>
            </div>
          </div>

          {/* Botón principal */}
          <a
            href={`tel:${CONTACT.phone}`}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-white px-8 py-5 text-lg font-bold text-[#0041A5] shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 origin-left scale-x-0 bg-green-500 transition-transform duration-500 group-hover:scale-x-100"></span>

            <Phone
              size={22}
              className="relative z-10 transition-colors group-hover:text-white"
            />

            <span className="relative z-10 transition-colors group-hover:text-white">
              Llamar Ahora
            </span>
          </a>

          {/* Teléfono */}
          <p className="mt-8 text-2xl font-bold text-white">
          11 5636-7024
          </p>

          <p className="mt-2 text-blue-100">
            Atención en toda Capital Federal
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;