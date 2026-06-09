import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Cuáles son las fallas más comunes en una heladera?",
    answer:
      "Las fallas más frecuentes incluyen pérdida de frío, exceso de hielo, problemas en el termostato, fallas del motor compresor, pérdidas de gas refrigerante y desperfectos eléctricos. Un diagnóstico profesional permite identificar la causa exacta y realizar una reparación segura.",
  },
  {
    question:
      "¿Realizan reparación de heladeras a domicilio en Capital Federal?",
    answer:
      "Sí. Brindamos servicio técnico de heladeras a domicilio en todos los barrios de Capital Federal, permitiendo resolver la mayoría de las averías sin necesidad de trasladar el equipo.",
  },
  {
    question: "¿Trabajan con repuestos originales?",
    answer:
      "Utilizamos repuestos originales y componentes de calidad para garantizar el correcto funcionamiento de la heladera y prolongar su vida útil.",
  },
  {
    question: "¿Las reparaciones tienen garantía?",
    answer:
      "Sí. Todas las reparaciones realizadas por nuestros técnicos cuentan con garantía escrita, brindando mayor seguridad y confianza al cliente.",
  },
  {
    question: "¿Por qué una heladera deja de enfriar correctamente?",
    answer:
      "Una heladera puede dejar de enfriar por múltiples motivos, como pérdida de gas refrigerante, fallas en el compresor, problemas eléctricos o componentes defectuosos. Nuestros técnicos realizan un diagnóstico preciso para detectar el origen del problema.",
  },
  {
    question: "¿Cuánto demora una reparación de heladera?",
    answer:
      "Muchas reparaciones pueden resolverse durante la misma visita técnica. El tiempo final dependerá del tipo de avería y de la disponibilidad de los repuestos necesarios.",
  },
  {
    question: "¿Qué marcas de heladeras reparan?",
    answer:
      "Trabajamos con una amplia variedad de marcas de heladeras. Si tiene dudas sobre su modelo o fabricante, puede comunicarse con nosotros para verificar la cobertura disponible.",
  },
  {
    question:
      "¿Cuándo conviene reparar una heladera en lugar de reemplazarla?",
    answer:
      "En muchos casos una reparación resulta considerablemente más económica que adquirir una heladera nueva. Nuestros técnicos pueden evaluar el estado general del equipo y recomendar la alternativa más conveniente.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
            Preguntas Frecuentes sobre Reparación de Heladeras
          </h2>

          <p className="text-lg text-gray-600">
            Respondemos las consultas más habituales sobre reparación de
            heladeras a domicilio en Capital Federal para que pueda tomar una
            decisión informada y con confianza.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="pr-4 text-lg font-semibold text-black">
                  {faq.question}
                </span>

                <ChevronDown
                  size={22}
                  className={`shrink-0 text-[#0041A5] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl bg-[#0041A5] p-8 text-center text-white">
          <h3 className="mb-3 text-2xl font-bold">
            ¿Necesita reparar su heladera?
          </h3>

          <p className="mx-auto max-w-2xl text-blue-100">
            Ofrecemos servicio técnico de heladeras a domicilio en toda Capital
            Federal, con diagnóstico profesional, repuestos originales y
            garantía escrita.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;