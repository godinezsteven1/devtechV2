
export default function Keylogger() {
    return (
        <section className="project min-h-screen py-12 px-6">
            <div className="max-w-6xl mx-auto">

                <h1 className="text-5xl font-bold text-center mb-12">
                    <a
                        href="https://github.com/godinezsteven1/malware-keyLogger"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                    <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all duration-300">
                    KeyLogger
                    </span>
                    </a>
                </h1>

                <div className="mb-20">
                    <div className="relative mx-auto rounded-xl overflow-hidden shadow-2xl">
                        <img
                            src="/static/projectImages/logger.gif"
                            alt="logger gif"
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-3 text-right font-mono">
                        Figure 17: https://github.com/godinezsteven1/malware-keyLogger
                    </p>
                </div>



                <div className="mb-32">
                    <h2 className="text-3xl font-semibold mb-8 text-purple-300">High Level Overview</h2>
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex flex-col items-center">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                    <img
                                        src="/static/projectImages/logger.png"
                                        alt="Key logger commands to run"
                                        className="relative rounded-xl shadow-2xl w-140 h-90 object-contain"
                                    />
                                </div>
                                <p className="caption mt-4 text-sm text-purple-300 font-mono">
                                    Figure 18: Key logger commands to run
                                </p>
                            </div>
                        

                            <div className="flex-1 space-y-4">
                                <div className="mb-6 p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-purple-300 mb-2 flex items-center">
                                        <span className="mr-2">🎯</span>My Mission
                                    </h3>
                                    <p className="text-xl leading-relaxed font-medium text-gray-100">
                                     The project aims to help users understand how key logging works for ethical cybersecurity learning.
                                    </p>
                                </div>
                                <p className="text-lg leading-relaxed">
                                    This projects is for educational purposes. Using python file, instructions to run as an executable in Linux and Windows. Instructions to 
                                    bypass Mac antivirus software and run on MacOs systems are included as well. This project records all keystrokes made on the target 
                                    system. Captures inputs continously and stores them in a local text file. Runs in the background with no GUI, mimiking real malware behavior.

                                    <span className="inline-block bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/70 text-purple-100 font-semibold px-5 py-2.5 rounded-xl mt-4 shadow-2xl">
                                        🚧 Unauthorized use of keyloggers on systems you do not own or have explicit permission to access is <strong>illegal</strong> and may result in severe consequences. Please use responsibly.
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
                                        src="/static/projectImages/codeLogger.png"
                                        alt="AI model architecture diagram"
                                        className="relative rounded-xl shadow-2xl w-145 h-120 object-contain"
                                    />
                                </div>
                                <p className="caption mt-4 text-sm text-purple-300 font-mono">
                                    Figure 19: some to add here as well 
                                </p>
                            </div>
                        <div className="flex-1 space-y-4">
                            Uses OS libary to capture keystroke and writes them to a text file. The keylogger runs in the background, capturing all keystrokes made by the user. 
                            Script converts special keys into human readable labels while removing unecessary characters like " ' " and [BACKSPACE]. I am recommending you use a virtual machine 
                            to run this project, as it is a keylogger and can be considered malware. My set up I am using 'UTM' with 'parrotOS' installed. At the end of the day this is still a virus, use responsibly.
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