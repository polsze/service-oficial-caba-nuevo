import { useEffect, useState } from "react";

import logos from "../assets/brands/logos.webp";
import logos1 from "../assets/brands/logos1.webp";
import logos2 from "../assets/brands/logos2.webp";
import logos3 from "../assets/brands/logos3.webp";
import logos4 from "../assets/brands/logos4.webp";
import logos5 from "../assets/brands/logos5.webp";
import logos6 from "../assets/brands/logos6.webp";

const slides = [
  logos,
  logos1,
  logos2,
  logos3,
  logos4,
  logos5,
  logos6,
];

const BrandsCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white">
      <div className="container mx-auto xl:pt-5">
        
      <div className="w-full overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt="Reparación de heladeras a domicilio en Capital Federal"
                className="w-full shrink-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                current === index
                  ? "bg-[#0041A5] w-8"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <h2 className="mb-3 text-center text-3xl font-bold text-black">
          Marcas con las que Trabajamos
        </h2>

        <p className="mb-10 text-center text-gray-600">
          Servicio técnico especializado para las principales marcas del mercado.
        </p>

      </div>
    </section>
  );
};

export default BrandsCarousel;