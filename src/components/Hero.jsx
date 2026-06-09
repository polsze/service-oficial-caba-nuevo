import heroImage from "../assets/images/Service-oficial-caba-hero.webp";
import { Phone } from "lucide-react";
import { CONTACT } from "../config/contact";

const Hero = () => {
  return (
    <section
      className="relative min-h-[80vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto flex min-h-[80vh] items-center px-4">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            Reparación de Heladeras a Domicilio en Capital Federal
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
            Servicio técnico especializado en heladeras. Atención rápida en toda
            CABA, repuestos originales, garantía escrita y diagnóstico
            profesional a domicilio.
          </p>

          {/* CTA */}
          <a
            href={`tel:${CONTACT.phone}`}
            className="
group relative inline-flex items-center gap-2 overflow-hidden
rounded-xl
px-5 py-3
font-semibold text-white
shadow-lg
bg-green-600
xl:bg-[#0041A5]

animate-pulse
xl:animate-none

transition-all duration-500
hover:shadow-[0_0_40px_rgba(34,197,94,0.65)]
"
          >
            {/* Fondo inicial */}
            <span
              className="absolute inset-0 bg-green-600
xl:bg-[#0041A5]"
            ></span>

            {/* Fill verde */}
            <span className="absolute inset-0 origin-left scale-x-0 bg-green-600 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>

            {/* Brillo */}
            <span className="absolute -left-20 top-0 h-full w-12 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[120%]"></span>

            <Phone size={18} className="relative z-10" />

            <span className="relative z-10 sm:inline">1156367024</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
