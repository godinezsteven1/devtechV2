
export default function TumorNet() {
    return (
        <section className="project min-h-screen py-12 px-6">
            <div className="max-w-6xl mx-auto">

                <h1 className="text-5xl font-bold text-center mb-12">
                    <a
                        href="https://github.com/godinezsteven1/TumorNet-CNN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                    <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all duration-300">
                    Tumor Net <span>{`{In Progress}`}</span>
                    </span>
                    </a>
                </h1>

                <div className="mb-20">
                    <div className="relative w-full h-[95vh] rounded-xl overflow-hidden shadow-2xl">
                        <img
                            // need new one 
                            src=""
                            alt="real time detection of tumors"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-3 text-right font-mono">
                        Figure 10: https://github.com/godinezsteven1/TumorNet-CNN
                    </p>
                </div>

                <div className="mb-32">
                    <h2 className="text-3xl font-semibold mb-8 text-purple-300">High Level Overview</h2>
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex flex-col items-center">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                    <img
                                        src=""
                                        alt="AI model architecture diagram"
                                        className="relative rounded-xl shadow-2xl w-130 h-60 object-contain"
                                    />
                                </div>
                                <p className="caption mt-4 text-sm text-purple-300 font-mono">
                                    Figure 11: Neural Network Architecture
                                </p>
                            </div>
                        

                            <div className="flex-1 space-y-4">
                                <div className="mb-6 p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-purple-300 mb-2 flex items-center">
                                        <span className="mr-2">🎯</span>My Mission
                                    </h3>
                                    <p className="text-xl leading-relaxed font-medium text-gray-100">
                                    The project aims to create a robust and efficient Convolutional Neural Network (CNN) for tumor detection in medical imaging.
                                    </p>
                                </div>
                                <p className="text-lg leading-relaxed">
                                    This project utilizes a Convolutional Neural Network (CNN) to process and analyze MRI images. These images range from Glioma Tumor,
                                    Meningioma Tumor, Pituitary Tumor, and No Tumor. The CNN is designed to classify these images into their respective categories, enabling accurate tumor detection and diagnosis.
                                    The architecture includes multiple convolutional layers, pooling layers, and fully connected layers to extract features and make predictions.
                                    The model will have a fully implemented UI that allows a user to see prediction confidence, visualizations to explain model decisions, all while being 
                                    user-friendly and lightweight for real-time applications.
                                    <span className="inline-block bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/70 text-purple-100 font-semibold px-5 py-2.5 rounded-xl mt-4 shadow-2xl">
                                        🚧 The project is currently in progress, with ongoing work on the model architecture, training process, and user interface development.
                                    </span>
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
                                    src="/static/signlang/technical-details.jpg"
                                    alt="Neural network architecture"
                                    className="relative rounded-xl shadow-2xl w-150 h-150 object-cover"
                                />
                            </div>
                            <p className="caption mt-4 text-sm text-purple-300 font-mono">
                                Figure 9: ????
                            </p>
                        </div>
                        
                        <div className="flex-1 space-y-4">
                            <p className="text-lg leading-relaxed">
                                Click me for detailed report!
                            </p>
                            NLP stuff 
                            <p className="text-lg leading-relaxed">
                            ???
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