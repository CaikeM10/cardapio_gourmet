export default function Localizacao() {
  return (
    <main className="px-4 pt-6 pb-10">
      {/* Título */}
      <h1 className="mb-4 text-center text-xl font-bold">Localização</h1>

      {/* Mapa */}
      <div className="overflow-hidden rounded-xl border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.17058123541!2d-40.9235244!3d-4.7404034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x79423ccc486070d%3A0x4efd524a3cf02efe!2sEspa%C3%A7o%20gourmet!5e0!3m2!1spt-BR!2sbr!4v1770128262775!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Informações */}
      <div className="mt-6 text-center">
        <h2 className="text-lg font-semibold">Espaço Gourmet</h2>

        <p className="mt-2 text-sm text-gray-600">
          R. Santa Teresinha, 1-263
          <br />
          Aeroporto, Poranga - CE
          <br />
          62220-000
        </p>

        {/* Botão Google Maps */}
        <a
          href="https://www.google.com/maps/place/Espa%C3%A7o+gourmet/@-4.7404034,-40.9235244,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white"
        >
          📍 Abrir no Google Maps
        </a>
      </div>
    </main>
  );
}
