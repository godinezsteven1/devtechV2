
export default function SignLang() {
    return (
        <section className="project min-h-screen py-12 px-6">
            <div className="max-w-6xl mx-auto">

                <h1 className="text-5xl font-bold text-center mb-12">
                    <a
                        href="https://github.com/godinezsteven1/AI-SignLanguage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                    <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all duration-300">
                    Sign Language Recognition
                    </span>
                    </a>
                </h1>

                <div className="mb-20">
                    <div className="relative w-full h-[95vh] rounded-xl overflow-hidden shadow-2xl">
                        <img
                            src="https://raw.githubusercontent.com/godinezsteven1/AI-SignLanguage/main/assets/demo.gif"
                            alt="Real-time sign language detection"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-3 text-right font-mono">
                        https://github.com/godinezsteven1/AI-SignLanguage
                    </p>
                </div>

                <div className="mb-32">
                    <h2 className="text-3xl font-semibold mb-8 text-purple-300">High Level Overview</h2>
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex flex-col items-center">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                    <img
                                        src="/static/projectImages/SignLang1.png"
                                        alt="AI model architecture diagram"
                                        className="relative rounded-xl shadow-2xl w-130 h-60 object-contain"
                                    />
                                </div>
                                <p className="caption mt-4 text-sm text-purple-300 font-mono">
                                    Figure 1: System Pipeline Flowchart
                                </p>
                            </div>
                        

                            <div className="flex-1 space-y-4">
                                <div className="mb-6 p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-purple-300 mb-2 flex items-center">
                                        <span className="mr-2">🎯</span>Our Mission
                                    </h3>
                                    <p className="text-xl leading-relaxed font-medium text-gray-100">
                                    The project aims to create adaptive accesability technology for the deaf and hard of hearing communities.
                                    </p>
                                </div>
                                <p className="text-lg leading-relaxed">
                                    This project utilizes a Convolutional Neural Network (CNN) to store datasets of American Sign Language (ASL),
                                    German Sign Language (DGS), and Spanish Sign Language (LSE). using a unified deep learning pipeline.
                                    Leveraging a convolutional neural network (CNN) trained on a custom-curated and standardized dataset,
                                    the system integrates MediaPipe for real-time hand tracking, TensorFlow for gesture classification, and
                                    natural language processing (NLP) for output refinement and translation. By accommodating overlapping 
                                    visual gestures across languages and correcting for class imbalances, the model offers robust, multilingual recognition.
                                </p>
                            </div>
                        </div>
                </div>

                {/* Low Level Overview*/}
                <div className="mb-20">
                    <h2 className="text-3xl font-semibold mb-8 text-purple-300">Technical Implementation</h2>
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="flex flex-col items-center">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <img
                                    src="/static/signlang/technical-details.jpg"
                                    alt="Neural network architecture"
                                    className="relative rounded-xl shadow-2xl w-150 h-150 object-cover"
                                />
                            </div>
                            <p className="caption mt-4 text-sm text-purple-300 font-mono">
                                Figure 2: ????
                            </p>
                        </div>
                        
                        {/* Text content */}
                        <div className="flex-1 space-y-4">
                            <p className="text-lg leading-relaxed">
                                ???
                            </p>
                            ????
                            <p className="text-lg leading-relaxed">
                                ????
                            </p>
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