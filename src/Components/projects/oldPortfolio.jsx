
import BackButton from '../BackButton';

export default function OldPortfolio() {
    return (
        <section className="project min-h-screen py-12 px-6">
            <BackButton />
            <div className="max-w-6xl mx-auto">

                <h1 className="text-5xl font-bold text-center mb-12">
                    <a
                        href="https://github.com/godinezsteven1/Godinez-devtech.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                    <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all duration-300">
                    Previous Portfolio: Three.js Portfolio
                    </span>
                    </a>
                </h1>

                <div className="mb-20">
                    <div className="relative mx-auto rounded-xl overflow-hidden shadow-2xl">
                        <img
                            src="/static/projectImages/oldPort.gif"
                            alt="Three.js portfolio demo"
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-3 text-right font-mono">
                        Figure 20: https://github.com/godinezsteven1/Godinez-devtech.com
                    </p>
                </div>



                <div className="mb-32">
                    <h2 className="text-3xl font-semibold mb-8 text-purple-300">High Level Overview</h2>
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex flex-col items-center">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                    <img
                                        src="/static/projectImages/oldPortpt3.png"
                                        alt="Three.js portfolio project overview"
                                        className="relative rounded-xl shadow-2xl w-160 h-100 object-contain"
                                    />
                                </div>
                                <p className="caption mt-4 text-sm text-purple-300 font-mono">
                                    Figure 21: Three.js portfolio CSS renderer
                                </p>
                            </div>
                        

                            <div className="flex-1 space-y-4">
                                <div className="mb-6 p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-purple-300 mb-2 flex items-center">
                                        <span className="mr-2">🎯</span>My Mission
                                    </h3>
                                    <p className="text-xl leading-relaxed font-medium text-gray-100">
                                        The project aims to make a portfolio in Three.js
                                    </p>
                                </div>
                                <p className="text-lg leading-relaxed">
                                    Using Blender, CC BY licensed 3D assets from sketchfab.com (authors credited in old portfolio repo's README), and Three.js, I created a portfolio to showcase my work in an engaging,
                                    creative way. The portfolio has a custom CSS renderer overlay that displays a normal website view—apart from that, the entire project is built in Three.js, with a custom camera and lighting
                                    setup to enhance the 3D effect. Optimizations for user experience have been implemented to make the portfolio run and feel smooth.
                                </p>
                            </div>
                        </div>
                </div>

                <div className="mb-20">
                    <h2 className="text-3xl font-semibold mb-8 text-purple-300">Technical Implementation</h2>
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        
                        <div className="flex flex-col items-center">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                    <img
                                        src="/static/projectImages/oldPortpt2.png"
                                        alt="Three.js portfolio optimization techniques"
                                        className="relative rounded-xl shadow-2xl w-130 h-120 object-contain"
                                    />
                                </div>
                                <p className="caption mt-4 text-sm text-purple-300 font-mono">
                                    Figure 22: Optimization techniques used in the project.
                                </p>
                            </div>
                        <div className="flex-1 space-y-4">
                            Blender-based 3D assets are heavy. Most, if not all, engineers using some sort of 3D assets in their projects with Three.js will run into performance issues. 
                            Optimizations are key to making the experience smooth, and several techniques can be used to achieve this. The easiest approach is to use a loading screen. A loading 
                            screen allows your models and assets to load in the background while the site builds and renders. Other than this, the biggest challenge is to position your screen 
                            in a 3D space; positioning, scaling vectors for lighting, camera, objects all behave differently and are a pain to deal with. 
                        </div>
                    </div>
                </div>

                <div className="text-center mt-20">
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
                </div>
            </div>
        </section>
    );
}