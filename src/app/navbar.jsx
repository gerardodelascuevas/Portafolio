'use client'
import React from "react";
import { useState } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState('about');
  const handleLinkClick = (component) => {
    setIsActive(component);
  };
  return (
        <React.Fragment>
           <img src="./img/code.svg" className="h-8 mr-3 md:hidden mt-4" alt="gdlcp" />
            <nav className="fixed w-4/5 bg-white border-gray-200 dark:bg-gray-900 z-auto hidden md:block" style={{ marginTop: "-4rem" }}>
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <img src="./img/code.svg" className="h-8 mr-3" alt="gdlcp" />
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                      <a href="#about" name='about'className= { isActive == 'about' ? "text-lime-400" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "} 
                      onClick={()=> handleLinkClick('about')}
                      > Hola </a>
                    </li>
                    <li>
                      <a href="#tech" name= 'techskills'className= { isActive == 'techskills' ? "text-lime-400" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "}  
                      onClick={()=> handleLinkClick('techskills')}
                      >Habilidades Técnicas</a>
                    </li>
                    <li>
                      <a href="#certifications" name= 'certifications'className= { isActive == 'certifications' ? "text-lime-400" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "}  
                      onClick={()=> handleLinkClick('certifications')}
                      >Certificaciones</a>
                    </li>
                    <li>
                      <a href="#projects" name='projects'className= { isActive== 'projects' ? "text-lime-400": "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "}
                      onClick={()=> handleLinkClick('projects')}
                      >Proyectos</a>
                    </li>
                    <li>
                      <a href="#contact" name='contact' className= { isActive == 'contact' ? "text-lime-400" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "}
                      onClick={()=> handleLinkClick('contact')}
                      >Contacto</a>
                    </li>
                  </ul>     
                </div>
              </div>
            </nav>
      </React.Fragment>
  );
}
