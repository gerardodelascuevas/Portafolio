export default function Projects() {
    return (
      <div className="text-center" id='projects'>
        <h1 className="text-3xl">Proyectos</h1>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="max-w-xs rounded overflow-hidden shadow-lg transition-all duration-300 hover:scale-110 m-4">
            <img className="w-full" src="/img/sportsMarket.jpg" alt="Sports Market" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">SportsMarket</div>
              <p className="text-gray-700 text-base">
                Tienda virtual que cuenta con panel de catálogo de productos, panel de administración, ventana de favoritos
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Redux</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MongoDB</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Node.JS</span>
            </div>
            <a href="https://github.com/e-commercePF/Client" className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded">
              Ver el Repositorio
            </a>
          </div>
          <div className="max-w-xs rounded overflow-hidden shadow-lg transition-all duration-300 hover:scale-110 m-4">
            <img className="w-full" src="/img/sportsMarket.jpg" alt="Sports Market" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">BusinessControl</div>
              <p className="text-gray-700 text-base">
                Sistemas Punto de ventas que permite administrar inventarios de negocios minoristas.
                Permite gestionar compras, ventas, cuentas por pagar y cuentas por cobrar.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Electron</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MySQL</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Node.JS</span>
            </div>
            <a href="https://github.com/gerardodelascuevas/businessControl" className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded">
              Ver el Repositorio
            </a>
          </div>
        </div>
      </div>
    );
  }
  