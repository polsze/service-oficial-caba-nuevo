import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  FileText,
} from "lucide-react";
import toast from "react-hot-toast";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          asunto: formData.asunto,
          mensaje: formData.mensaje,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success(
        "Solicitud enviada correctamente. Nos comunicaremos a la brevedad."
      );
     

      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: "",
      });
    } catch (error) {
      console.error(error);
      toast.error(
        "No pudimos enviar la solicitud. Intente nuevamente."
      );
    }

    setLoading(false);
  };

  return (
    <section
      id="contacto"
      className="bg-slate-50 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Información */}
          <div>
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 mb-4">
              Contacto
            </span>

            <h2 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Reparación de Heladeras en CABA
            </h2>

            <p className="mb-8 text-lg text-slate-600">
              Complete el formulario y uno de nuestros técnicos se comunicará a
              la brevedad para coordinar la visita.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3">
                  <Phone
                    className="text-blue-700"
                    size={20}
                  />
                </div>

                <span className="text-slate-700">
                  Atención rápida y personalizada
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3">
                  <FileText
                    className="text-blue-700"
                    size={20}
                  />
                </div>

                <span className="text-slate-700">
                  Garantía por escrito
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3">
                  <User
                    className="text-blue-700"
                    size={20}
                  />
                </div>

                <span className="text-slate-700">
                  Técnicos especializados
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3">
                  <Mail
                    className="text-blue-700"
                    size={20}
                  />
                </div>

                <span className="text-slate-700">
                  serviceoficialcaba@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Nombre y Apellido *
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Ej: Juan Pérez"
                    className="w-full rounded-xl border border-slate-300 py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Correo Electrónico *
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Ej: juan@email.com"
                    className="w-full rounded-xl border border-slate-300 py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  WhatsApp *
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    placeholder="Ej: 11 1234-5678"
                    className="w-full rounded-xl border border-slate-300 py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Asunto *
                </label>

                <div className="relative">
                  <FileText
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                    placeholder="Ej: Heladera no enfría"
                    className="w-full rounded-xl border border-slate-300 py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Descripción del problema *
                </label>

                <div className="relative">
                  <MessageSquare
                    size={18}
                    className="absolute left-4 top-5 text-slate-400"
                  />

                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Describa brevemente el problema de su heladera..."
                    className="w-full resize-none rounded-xl border border-slate-300 py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-blue-700 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading
                  ? "ENVIANDO SOLICITUD..."
                  : "SOLICITAR VISITA TÉCNICA"}
              </button>

              <p className="text-center text-xs text-slate-500">
                Al enviar el formulario acepta ser contactado por nuestro
                equipo para coordinar el servicio técnico.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}