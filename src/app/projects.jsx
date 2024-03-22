'use client'

import { useState } from "react";

export default function Projects() {
  
  const proyectos = [
    {
      nombre: 'CattleMarket',
      imagen: '/img/cattlemarketimage.png',
      descripcion: 'Software de administración de hatos ganaderos que permite la medición de los parametros productivos del rancho asi como tambien brinda trazabilidad al ganado, con rutas públicas para venta de animales y privadas para su administración',
      link: 'https://cattle-market.vercel.app',
    },
    {
      nombre: 'SportsMarket',
      imagen: '/img/sportsMarket.jpg',
      descripcion: 'Tienda virtual que cuenta con panel de catálogo de productos, panel de administración, ventana de favoritos, entre otras funcionalidades',
      link: 'https://github.com/e-commercePF/Client',
    },   
  ];

  const [indiceActual, setIndiceActual] = useState(0);

  const proyectoActual = proyectos[indiceActual];

  const siguienteProyecto = () => {
    setIndiceActual((indiceActual + 1) % proyectos.length); // Cicla al primer proyecto después del último
  };

  const proyectoAnterior = () => {
    setIndiceActual((indiceActual - 1 + proyectos.length) % proyectos.length); // Va al último proyecto si está en el primero
  };

  return (
    <div className="text-center" id='projects'>
      <h1 className="text-3xl p-4">Proyectos</h1>
  
      <div className="flex flex-wrap justify-center gap-4">     
        
         {/* Proyectos Web */} 
         <div className="flex flex-col items-center">
      <h1 className="text-xl text-center mb-4">Proyectos Web</h1>
      <div className="relative ">
        <div className="max-w-xs rounded overflow-hidden shadow-lg transition-all duration-300 hover:scale-110 m-4">
          <img className="w-full h-64" src={proyectoActual.imagen} alt={proyectoActual.nombre} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{proyectoActual.nombre}</div>
            <p className="text-gray-700 text-base">{proyectoActual.descripcion}</p>
          </div>
          <a href={proyectoActual.link} className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded mb-4 block text-center"
          target="_blank"
          >
            Ver el Proyecto
          </a>
        </div>
        <button onClick={proyectoAnterior} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
          &lt;
        </button>
        <button onClick={siguienteProyecto} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
          &gt;
        </button>
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
                  Sistema Punto de ventas que permite administrar 
                  inventarios, cuentas por cobrar, cuentas por pagar, 
                  facturación electronica en México con posibilidad de conexión 
                  a base de datos local o conexión con API 
                   enfocado en negocios minoristas y mayoristas
            
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {/* Tecnologías */}
              </div>
              <a href="https://github.com/gerardodelascuevas/businesscontrolpos" 
              className="bg-blue-500 hover:bg-blue-700 
              cursor-pointer text-white font-bold py-2 px-4 rounded"
              target="_blank"
              >
                Ver el Repositorio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  }
  