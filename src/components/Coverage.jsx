import coverageMap from "../assets/images/mapa-caba-service-oficial-caba-web.jpg";

const neighborhoods = [
  "Agronomía",
  "Almagro",
  "Balvanera",
  "Barracas",
  "Belgrano",
  "Boedo",
  "Caballito",
  "Chacarita",
  "Coghlan",
  "Colegiales",
  "Constitución",
  "Flores",
  "Floresta",
  "La Boca",
  "La Paternal",
  "Liniers",
  "Mataderos",
  "Monserrat",
  "Monte Castro",
  "Nueva Pompeya",
  "Núñez",
  "Palermo",
  "Parque Avellaneda",
  "Parque Chacabuco",
  "Parque Chas",
  "Parque Patricios",
  "Puerto Madero",
  "Recoleta",
  "Retiro",
  "Saavedra",
  "San Cristóbal",
  "San Nicolás",
  "San Telmo",
  "Vélez Sarsfield",
  "Versalles",
  "Villa Crespo",
  "Villa del Parque",
  "Villa Devoto",
  "Villa General Mitre",
  "Villa Lugano",
  "Villa Luro",
  "Villa Ortúzar",
  "Villa Pueyrredón",
  "Villa Real",
  "Villa Riachuelo",
  "Villa Santa Rita",
  "Villa Soldati",
  "Villa Urquiza",
];

const Coverage = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
            Servicio de Reparación de Heladeras en Toda Capital Federal
          </h2>

          <p className="text-gray-600">
            Brindamos servicio técnico de heladeras a domicilio en
            todos los barrios de la Ciudad Autónoma de Buenos Aires. Nuestro
            equipo técnico ofrece atención rápida, diagnóstico profesional y
            reparación con garantía escrita.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <img
              src={coverageMap}
              alt="Cobertura de reparación de heladeras en Capital Federal"
              className="w-auto h-auto"
              loading="lazy"
            />
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-semibold text-black">
              Barrios donde prestamos servicio
            </h3>

            <div className="flex flex-wrap gap-3">
              {neighborhoods.map((neighborhood) => (
                <span
                  key={neighborhood}
                  className="rounded-full bg-[#0041A5]/10 px-4 py-2 text-sm font-medium text-[#0041A5]"
                >
                  {neighborhood}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;