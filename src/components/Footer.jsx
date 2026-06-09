import logo from "../assets/images/Logo Service Oficial Caba - Reparacion de heladeras a domicilio.webp";
import { CONTACT } from "../config/contact";

import { Clock3, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0F172A] text-white">
        <div className="grid gap-12 p-4 md:grid-cols-3 md:gap-2">
          {/* Columna 1 - Logo + descripción */}
          <div>
            <img
              src={logo}
              alt="Service Oficial CABA"
              className="mb-6 h-12 w-auto"
            />

            <p className="max-w-md text-slate-300">
              Servicio técnico de heladeras a domicilio en toda Capital Federal.
              Atención profesional, repuestos originales y garantía escrita para
              cada reparación.
            </p>
          </div>

          {/* Columna 2 - Horarios */}
          <div>
            <div className="flex items-start gap-3">
              <Clock3 size={20} className="mt-1 text-[#0041A5]" />

              <div>
                <h3 className="mb-4 text-xl font-semibold">
                  Horarios de Atención
                </h3>

                <ul className="space-y-2 text-slate-300">
                  <li>Lunes a Sábados: 9:00 a 20:00 hs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Columna 3 - Contacto */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Contacto</h3>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-[#0041A5]" />

                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-slate-300 transition hover:text-white"
                >
                  11 5636-7024
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} className="text-[#0041A5]" />

                <a
                  href="mailto:serviceoficialcaba@gmail.com"
                  className="text-slate-300 transition hover:text-white"
                >
                  serviceoficialcaba@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-[#0041A5]" />

                <span className="text-slate-300">
                  Cobertura en toda Capital Federal
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Aviso de marcas */}
      <div className="border-t border-white/10 bg-slate-900 px-4 py-4 text-center text-sm text-slate-400">
        Todos los logos y marcas representadas en la página son propiedad
        exclusiva de sus respectivos fabricantes.
      </div>

      {/* Créditos */}
      <div className="bg-black px-4 py-4 text-center text-sm text-slate-500">
        Developed by{" "}
        <a
          href="https://pbxdigital.com.ar"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white transition hover:text-[#0041A5]"
        >
          PBX DIGITAL
        </a>
      </div>
    </>
  );
};

export default Footer;
