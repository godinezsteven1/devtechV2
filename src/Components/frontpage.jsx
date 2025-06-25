import { Link } from 'react-router-dom';



export default function FrontPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="mt-[-15rem] text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#c792ea] drop-shadow-[0_0_6px_#c792ea]">
        MACHINE<br />LEARNING<br />ENGINEER 
        {/* am i craazy or do these not line up  */}
      </h1>

      <p className="mt-6 max-w-xl text-xl text-purple-300 leading-relaxed tracking-wide">
        Building the future with code, intelligence, and creativity.<span className="blinking-cursor">|</span>
      </p>

      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link
          to="/about"
          className="border border-purple-400 text-purple-200 px-6 py-2 rounded-md hover:bg-purple-400 hover:text-black transition duration-300 font-semibold tracking-wide hover:animate-pulse"
        >
          ABOUT
        </Link>
        <Link
          to="/projects"
          className="border border-purple-400 text-purple-200 px-6 py-2 rounded-md hover:bg-purple-400 hover:text-black transition duration-300 font-semibold tracking-wide hover:animate-pulse"
        >
          PROJECTS
        </Link>
        <a
          href="/contact"
          className="border border-purple-400 text-purple-200 px-6 py-2 rounded-md hover:bg-purple-400 hover:text-black transition duration-300 font-semibold tracking-wide hover:animate-pulse"
        >
          CONTACT
        </a>
      </div>
      

      <div className="mt-4 w-full flex justify-center">
        <div className="w-full max-w-md flex justify-center md:justify-center md:mr-5">
          <a
            href="/static/resume/GodinezAI2025.pdf" 
            download
            className="border border-purple-400 text-purple-200 px-6 py-2 rounded-md hover:bg-purple-400 hover:text-black transition duration-300 font-semibold tracking-wide hover:animate-pulse md:w-33 md:h-10 flex items-center justify-center gap-2"
          >
            <span>RESUME</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-10 w-10" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              >
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
              />
            </svg>
          </a>
        </div>
      </div>


    </section>
  );
}
