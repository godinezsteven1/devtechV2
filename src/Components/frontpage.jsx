export default function FrontPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#1b132b] to-[#221435] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#c792ea] drop-shadow-[0_0_6px_#c792ea]">
        MACHINE<br />LEARNING<br />ENGINEER
      </h1>

      <p className="mt-6 max-w-xl text-md sm:text-lg text-purple-300 leading-relaxed tracking-wide">
        {/* Building the future with code, intelligence, and creativity. */}
        chatgpt a message here 
      </p>

      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        {["About", "Projects", "Contact"].map((label) => (
          <button
            key={label}
            className="border border-purple-400 text-purple-200 px-6 py-2 rounded-md hover:bg-purple-400 hover:text-black transition duration-300 font-semibold tracking-wide"
          >
            {label.toUpperCase()}
          </button>
        ))}
      </div>
    </section>
  );
}
