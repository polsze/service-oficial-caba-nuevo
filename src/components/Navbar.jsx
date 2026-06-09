import { Clock3, Phone } from "lucide-react";
import logo from "../assets/images/Logo Service Oficial Caba - Reparacion de heladeras a domicilio.webp";
import { CONTACT } from "../config/contact";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="Service Oficial CABA"
              className="h-8 sm:h-14 md:h-16 lg:h-16 w-auto"
            />
          </div>

          {/* Horarios */}
          <div className="hidden md:flex items-center gap-3">
            <Clock3 size={18} />
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Horarios de Atención
              </p>
              <p className="text-sm text-slate-500">
                Lun a Sáb · 8:00 a 20:00 hs
              </p>
            </div>
          </div>

           {/* CTA */}
           <a
            href={`tel:${CONTACT.phone}`}
            className="
group relative inline-flex items-center gap-2 overflow-hidden
rounded-xl
px-2 py-3
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
    </header>
  );
};

export default Navbar;
