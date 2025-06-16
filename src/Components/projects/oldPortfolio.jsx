
export default function OldPortfolio() {
    return (
        <section className="project min-h-screen py-12 px-6">
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
                            alt="ransom gif"
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-3 text-right font-mono">
                        Figure 20: https://github.com/godinezsteven1/malware-ransom
                    </p>
                </div>



                <div className="mb-32">
                    <h2 className="text-3xl font-semibold mb-8 text-purple-300">High Level Overview</h2>
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex flex-col items-center">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                    <img
                                        src="/static/projectImages/ransomCom.png"
                                        alt="ransom commands to run"
                                        className="relative rounded-xl shadow-2xl w-150 h-80 object-contain"
                                    />
                                </div>
                                <p className="caption mt-4 text-sm text-purple-300 font-mono">
                                    Figure 21: Key logger commands to run
                                </p>
                            </div>
                        

                            <div className="flex-1 space-y-4">
                                <div className="mb-6 p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-purple-300 mb-2 flex items-center">
                                        <span className="mr-2">🎯</span>My Missiosn
                                    </h3>
                                    <p className="text-xl leading-relaxed font-medium text-gray-100">
                                     The project aims to make a portfolio in Three.Js
                                    </p>
                                </div>
                                <p className="text-lg leading-relaxed">
                                    This projects is for educational purposes. Using python file, instructions to run as a script for Mac, Linux, and Windows. This project 
                                    recursively encrypts all files from Desktop directory and below, including subdirectories. You are prompted to input the password to decrypt the files. All 
                                    files are encypted using cryptography Fernet library. The only files that are not locked are the Decrypt file, the ransome itself, and the key file. So do not 
                                    rename any file!


                                    <span className="inline-block bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/70 text-purple-100 font-semibold px-5 py-2.5 rounded-xl mt-4 shadow-2xl">
                                        🚧 Unauthorized use of ransomware on systems you do not own or have explicit permission to access is <strong>illegal</strong> and may result in severe consequences. Please use responsibly.
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
                                        src="/static/projectImages/ransomCode.png"
                                        alt="AI model architecture diagram"
                                        className="relative rounded-xl shadow-2xl w-145 h-120 object-contain"
                                    />
                                </div>
                                <p className="caption mt-4 text-sm text-purple-300 font-mono">
                                    Figure 22: some to add here as well 
                                </p>
                            </div>
                        <div className="flex-1 space-y-4">
                            Uses OS and Fernet libary to lock up entire machine(after Desktop directory- which is where most of a person's information is) and writes password in script's directory. The Ransomware runs in the entire machine, capturing ALL files, except those before Desktop Directory. 
                            Script converts all information into a cipher text, the same cipher in which your hard drive is encrypted! The only files that are not locked are the Decrypt file, the ransome itself, and the key file.
                            Decrypting the files with out the password is impossible, as the key is generated at random and stored in the scripts directory. Be warned, there is no way to recover the files without the password, and there is 
                            no safety implementation to prevent accidental deletion of the key file, no implementation that wont allow you to override the key file, and no implementation that will prevent you from deleting the Decrypt file.
                            My implementation is raw and does not have any safety measures, as I wanted to mimic real ransomware behavior. Use a virtual machine to run this project, My set up I am using 'UTM' with 'parrotOS' installed. 
                            At the end of the day this is still a virus, use responsibly.
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