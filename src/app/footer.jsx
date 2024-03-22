export default function Footer(){
    const year = new Date(); 
  
    return(
        <div className="">           
            <section className="">
                <div className="bg-white border-gray-200 dark:bg-gray-800 ">
                    <div className="flex justify-center mt-8 space-x-6">
                        <a href="https://github.com/gerardodelascuevas" 
                        className="text-gray-400 hover:text-gray-500"
                        target="_blank"
                        >
                            <span className="sr-only">GitHub</span>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original.svg" alt="github" />
                            <svg className="w-6 h-6 filter grayscale" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" xmlns="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original.svg"
                                alt="github"> </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/gerardo-de-las-cuevas/" 
                        className="text-gray-400 hover:text-gray-500"
                        target="_blank"
                        >
                            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
                            <svg className="w-6 h-6 filter grayscale" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" xmlns="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/linkedin/linkedin-original.svg"      
                            >
                            </svg>
                        </a>
                    </div>
                    <p className="mt-8 text-base leading-6 text-center text-gray-400">
                        { year.getFullYear() } gerardodelascuevas © All rights reserved.
                    </p>
                </div>
            </section>
        </div>
    )
}