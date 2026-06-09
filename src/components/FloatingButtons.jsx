const FloatingButtons = () => {
  return (
    <>
      <div className="fixed bottom-5 right-5 z-[999]">
        {/* Burbuja */}
        <div className="absolute bottom-20 right-0 hidden whitespace-nowrap rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-xl lg:block">
          👋 ¿Tu heladera no enfría?
        </div>

        <a
          href="https://wa.me/5491156367024?text=Hola,%20vi%20la%20web%20de%20Service%20Oficial%20CABA%20y%20necesito%20un%20técnico%20para%20revisar%20mi%20heladera."
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition hover:scale-110"
          aria-label="WhatsApp"
          title="Escribinos por WhatsApp"
        >
          {/* Notificación */}
          <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center">
            <span className="absolute h-full w-full animate-ping rounded-full bg-red-500 opacity-40"></span>

            <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
              1
            </span>
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="white"
            className="h-8 w-8"
          >
            <path d="M16.01 3C8.84 3 3 8.74 3 15.82c0 2.51.74 4.95 2.14 7.04L3 29l6.32-2.06a13.1 13.1 0 0 0 6.69 1.82h.01c7.17 0 13-5.74 13-12.82C29.02 8.74 23.18 3 16.01 3zm7.58 18.13c-.32.89-1.86 1.71-2.58 1.82-.67.1-1.52.15-2.45-.15-.57-.18-1.3-.43-2.24-.83-3.94-1.68-6.51-5.61-6.71-5.88-.2-.27-1.6-2.13-1.6-4.07 0-1.94 1.02-2.89 1.38-3.29.36-.4.79-.5 1.06-.5.27 0 .53 0 .76.01.24.01.56-.09.88.67.32.76 1.08 2.64 1.17 2.83.09.19.15.41.03.67-.12.26-.18.42-.35.64-.18.22-.37.49-.53.66-.18.18-.36.38-.15.74.21.36.95 1.56 2.04 2.52 1.4 1.25 2.58 1.64 2.94 1.82.36.18.57.15.79-.09.22-.24.93-1.08 1.18-1.45.25-.37.5-.31.85-.18.35.13 2.21 1.04 2.59 1.23.38.19.63.28.72.43.09.15.09.86-.23 1.75z" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;