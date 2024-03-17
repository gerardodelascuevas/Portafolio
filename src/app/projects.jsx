export default function Projects() {
  return (
    <div className="text-center" id='projects'>
      <h1 className="text-3xl p-4">Proyectos</h1>
  
      <div className="flex flex-wrap justify-center gap-4">
        {/* Proyectos Web */}        
        <div>
          <h2 className="text-center">Proyectos Web</h2>

          {/* SPORTS MARKET */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="max-w-xs rounded overflow-hidden shadow-lg transition-all duration-300 hover:scale-110 m-4">
              <img className="w-full h-64" src="/img/sportsMarket.jpg" alt="Sports Market" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">SportsMarket</div>
                <p className="text-gray-700 text-base">
                  Tienda virtual que cuenta con panel de catálogo de productos, panel de administración, ventana de favoritos
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {/* Tecnologías */}
              </div>
              <a href="https://github.com/e-commercePF/Client" className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded">
                Ver el Repositorio
              </a>
            </div>
          </div>

          
          {/* SPORTS MARKET */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="max-w-xs rounded overflow-hidden shadow-lg transition-all duration-300 hover:scale-110 m-4">
              <img className="w-full h-64" src="/img/cattlemarketimage.png" alt="Cattle Market" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">CattleMarket</div>
                <p className="text-gray-700 text-base">
                  Software de administración de hatos ganaderos que permite la medición de los parametros 
                  productivos del rancho asi como tambien brinda trazabilidad al ganado
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {/* Tecnologías */}
              </div>
              <a href="https://cattle-market.vercel.app" className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded">
                Ver el Proyecto
              </a>
            </div>
          </div>
        </div>
  
        {/* Proyectos Desktop */}
        <div>
          <h2 className="text-center">Proyectos Desktop</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="max-w-xs rounded overflow-hidden shadow-lg transition-all duration-300 hover:scale-110 m-4">
              <img className="w-full h-100" src="/img/businesscontrol.jpg" alt="Business Control" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">BusinessControl</div>
                <p className="text-gray-700 text-base">
                  Sistemas Punto de ventas que permite administrar inventarios de negocios minoristas.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {/* Tecnologías */}
              </div>
              <a href="https://github.com/gerardodelascuevas/businesscontrolpos" className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded">
                Ver el Repositorio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  }
  