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
          className="border border-purple-400 text-purple-200 px-6 py-2 rounded-md hover:bg-purple-400 hover:text-black transition duration-300 font-semibold tracking-wide"
        >
          ABOUT
        </Link>
        <Link
          to="/projects"
          className="border border-purple-400 text-purple-200 px-6 py-2 rounded-md hover:bg-purple-400 hover:text-black transition duration-300 font-semibold tracking-wide"
        >
          PROJECTS
        </Link>
        <a
          href="/contact"
          className="border border-purple-400 text-purple-200 px-6 py-2 rounded-md hover:bg-purple-400 hover:text-black transition duration-300 font-semibold tracking-wide"
        >
          CONTACT
        </a>
      </div>
    </section>
  );
}
