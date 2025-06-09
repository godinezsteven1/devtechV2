export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <section className="mb-20">
          <div className="relative">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light italic pl-8">
              I have always been fascinated by the movies where the protagonist is an 'Elite hacker'.
              The idea of manipulating systems intrigued me, and I wanted to be that person.
              Today, I am. <span className="text-purple-400 text-base">(Well, not exactly like the movies, but you get the point.)</span>
            </p>
          </div>
          
          <div className="flex flex-col items-center my-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="https://avatars.githubusercontent.com/u/169615840?v=4"
                alt="todler pics"
                className="relative rounded-xl shadow-2xl w-80 h-80 object-cover"
              />
            </div>
            <p className="caption mt-4 text-sm text-purple-300 font-mono">Figure 1: Baby Me</p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="text-purple-400 mr-3">01.</span> Education
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <p className="text-lg text-gray-300 leading-relaxed">
              In <span className="text-purple-400 font-semibold">2023</span>, I started studying Computer Science and Mathematics at 
              <span className="text-pink-400 font-semibold"> Northeastern University</span>. I didn't start taking my first Graduate course until 
              Fall semester of Sophomore year when I decided to pursue my Master's in 
              <span className="text-purple-400 font-semibold"> Artificial Intelligence</span>.
            </p>
          </div>
          
          <div className="flex flex-col items-center my-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="https://avatars.githubusercontent.com/u/169615840?v=4"
                alt="headshot"
                className="relative rounded-xl shadow-2xl w-80 h-80 object-cover"
              />
            </div>
            <p className="caption mt-4 text-sm text-purple-300 font-mono">Figure 2: 2024</p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="text-purple-400 mr-3">02.</span> Beyond the Code
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Outside of code, I spend time tinkering with electronics, lifting weights, riding motorcycles, 
              and watching anime. Whether it's binge watching 3 seasons in 2 days <span className="text-purple-400 text-sm">(it has been done...)</span> or 
              hitting a new PR and seeing stars, I like pushing limits.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-pink-400 mb-4">Personal Records </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-900/50 rounded-lg p-4 text-center border border-purple-500/30">
                  <p className="text-2xl font-bold text-purple-400">405</p>
                  <p className="text-sm text-gray-400">DL (lbs)</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 text-center border border-purple-500/30">
                  <p className="text-2xl font-bold text-purple-400">405</p>
                  <p className="text-sm text-gray-400">Squat (lbs)</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 text-center border border-purple-500/30">
                  <p className="text-2xl font-bold text-purple-400">260*</p>
                  <p className="text-sm text-gray-400">Bench (lbs)</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 text-center border border-purple-500/30">
                  <p className="text-2xl font-bold text-purple-400">185</p>
                  <p className="text-sm text-gray-400">Standing MP (lbs)</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-right font-mono">Last Updated: 06/06/2025</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center my-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/static/aboutImages/pl.png"
                alt="PL"
                className="relative rounded-xl shadow-2xl w-80 h-80 object-cover"
              />
            </div>
            <p className="caption mt-4 text-sm text-purple-300 font-mono">Figure 3: PL</p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="text-purple-400 mr-3">03.</span> My Family
          </h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              I have <span className="text-pink-400 font-bold text-xl">Two</span> daughters and <span className="text-pink-400 font-bold text-xl">a</span> son, 
              1 of which is a cat. His name according to my mom: <span className="text-purple-400 font-bold">Maya</span>, 
              but if you ask me, <span className="text-purple-400 font-bold">Pepper</span>. 
              He is a black domestic long hair cat, he is a lap cat, and he loves to cuddle.
            </p>
          </div>
          
          <div className="flex flex-col items-center my-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/static/aboutImages/pepper.png"
                alt="Pepper"
                className="relative rounded-xl shadow-2xl w-80 h-80 object-cover"
              />
            </div>
            <p className="caption mt-4 text-sm text-purple-300 font-mono">Figure 4: Pepper</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              The other two are my motorcycles, <span className="text-purple-400 font-bold">Marceline</span> and 
              <span className="text-purple-400 font-bold"> Mavis</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Marceline is a <span className="text-pink-400 font-semibold">2013 Harley-Davidson Dyna Fat Bob</span>, 
              and Mavis is a <span className="text-pink-400 font-semibold">2024 Harley-Davidson Sportster S</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              And <span className="text-purple-400 font-bold">no</span>, I'm not a stereotypical Harley biker, 
              I just love the bikes. They are my pride and joy. I take care of them like they are my children.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 my-16">
            <div className="flex flex-col items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src="/static/aboutImages/marceline.png"
                  alt="Marceline"
                  className="relative rounded-xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
              <p className="caption mt-4 text-sm text-purple-300 font-mono">Marceline</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src="/static/aboutImages/mavis.png"
                  alt="Mavis"
                  className="relative rounded-xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
              <p className="caption mt-4 text-sm text-purple-300 font-mono">Mavis</p>
            </div>
          </div>
        </section>
        
        {/* i dont know how i feel about this line  */}
        <div className="text-center mt-20">
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>
      </div>
    </main>
  );
}