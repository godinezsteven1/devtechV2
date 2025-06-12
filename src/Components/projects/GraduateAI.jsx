
export default function GraduateAI() {
    return (
        <section className="project min-h-screen py-12 px-6">
            <div className="max-w-6xl mx-auto">

                <h1 className="text-5xl font-bold text-center mb-12">
                    <a
                        href="https://github.com/godinezsteven1/Graduate-AI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                    <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all duration-300">
                        Graduate AI Projects
                    </span>
                    </a>
                </h1>

                <div className="mb-20">
                    <div className="relative w-full h-[70vh] rounded-xl overflow-hidden shadow-2xl bg-gray-900">
                        <img
                            src="https://preview.redd.it/theonlyreasonnottoshare-v0-nit2203hpwxb1.jpg?width=640&crop=smart&auto=webp&s=d617a3ba461d6a7cb5e90bc04e42c9d8aff5b5c9"
                            alt="real time detection of tumors"
                            // className="w-full h-full object-contain"
                            className="w-full h-full fit items-center justify-center"
                             
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-3 text-right font-mono">
                        Figure 13: https://preview.redd.it/theonlyreasonnottoshare-v0-nit2203hpwxb1.jpg?width=640&crop=smart&auto=webp&s=d617a3ba461d6a7cb5e90bc04e42c9d8aff5b5c9 <br />
                        https://github.com/godinezsteven1/Graduate-AI
                    </p>
                </div>

                <div className="mb-32">
                    <h2 className="text-3xl font-semibold mb-8 text-purple-300">Path Search Agent</h2>
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex flex-col items-center">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                    <img
                                        src="/static/projectImages/path.png"
                                        alt="AI model architecture diagram"
                                        className="relative rounded-xl shadow-2xl w-100 h-105 object-contain"
                                    />
                                </div>
                                <p className="caption mt-4 text-sm text-purple-300 font-mono">
                                    Figure 14: Graduate Path Search Agent
                                </p>
                            </div>




                            <div className="flex-1 space-y-4">
                                <div className="mb-6 p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-purple-300 mb-2 flex items-center">
                                        <span className="mr-2">🎯</span>My Mission
                                    </h3>
                                    <p className="text-xl leading-relaxed font-medium text-gray-100">
                                    These project aim to professionally showcase course work for my Graduate Artificial Intelligence(CS5100) class at Northeastern University, Developed as a Second Year undergrad
                                    </p>
                                </div>
                                <p className="text-lg leading-relaxed">
                                    PathFinding-AI is a PyGame-based constraint-satisfaction framework that drives an agent
                                    exclusively through a locked-down execute() API to color a dynamic grid under strict adjacency 
                                    rules. The agent selects among nine parameterized brush primitives and four discrete color 
                                    channels, using NumPy state representations to manage shape rotation and translation. 
                                    A hybrid local-search pipeline uses simulated annealing for global exploration and
                                    hill-climbing for local refinement, evaluating each candidate placement to
                                    avoid same-color neighbors. Real-time PyGame rendering previews brushes on hover and
                                    animates every stroke, culminating in a conflict-free solution with just 17 placements
                                    in about 3.07 seconds. Developed entirely from scratch with clear academic citations, 
                                    this project highlights the power of combining local search heuristics with interactive visualization.
                                    <span className="inline-block bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/70 text-purple-100 font-semibold px-5 py-2.5 rounded-xl mt-4 shadow-2xl">
                                        🚧 This repository exists for professional visibility only. Per university policy, sharing assignment solutions publicly is prohibited. Code access is restricted and can only be provided to authorized individuals, such as employers.
                                    </span>
                                </p>
                            </div>
                        </div>
                </div>

                <div className="mb-20">
                    <h2 className="text-3xl font-semibold mb-8 text-purple-300">Reinforcement Learning</h2>
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="flex flex-col items-center">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                    <img
                                        src="/static/projectImages/rl.png"
                                        alt="AI model architecture diagram"
                                        className="relative rounded-xl shadow-2xl w-90 h-120 object-contain"
                                    />
                                </div>
                                <p className="caption mt-4 text-sm text-purple-300 font-mono">
                                    Figure 15: Graduate Reinforcement Learning Agent
                                </p>
                            </div>
                        
                        <div className="flex-1 space-y-4 text-lg">
                            Escape the Castle is a reinforcement learning project implemented
                            in Python with NumPy, a custom OpenAI Gym environment, and optional 
                            PyGame visualization, where an agent learns to navigate a randomly generated 5×5 castle grid, 
                            evade or defeat guards, and reach the goal without hand-coded paths. It combines 
                            Model-Based Monte Carlo (MBMC) to estimate guard win probabilities with Model-Free 
                            Monte Carlo (Q-learning) driven by Markov Decision Processes, epsilon-greedy 
                            exploration, decaying learning rates, and experience replay to iteratively refine 
                            its policy. After one million training episodes, the agent averages over 8,600 reward 
                            per game -surpassing the 8,600 class point benchmark—while demonstrating effective 
                            health management and strategic decision-making.

                            <span className="inline-block bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/70 text-purple-100 font-semibold px-5 py-2.5 rounded-xl mt-4 shadow-2xl">
                                🚧 This repository exists for professional visibility only. Per university policy, sharing assignment solutions publicly is prohibited. Code access is restricted and can only be provided to authorized individuals, such as employers.
                            </span>
                        </div>
                    </div>
                </div>



                <div className="mb-32">
                    <h2 className="text-3xl font-semibold mb-8 text-purple-300">Neural Networks</h2>
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex flex-col items-center">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                    <img
                                        src="/static/projectImages/nn.png"
                                        alt="AI model architecture diagram"
                                        className="relative rounded-xl shadow-2xl w-160 h-85 object-contain"
                                    />
                                </div>
                                <p className="caption mt-4 text-sm text-purple-300 font-mono">
                                    Figure 16: Grad Neural Network
                                </p>
                            </div>




                            <div className="flex-1 space-y-4">

                                <p className="text-lg leading-relaxed">
                                    This project compares two PyTorch models on the Fashion-MNIST dataset—an 
                                    FFN and a CNN—using NumPy for data handling and Matplotlib/OpenCV/SciPy 
                                    for visualization. The Feedforward Neural Network (two hidden ReLU layers + 
                                    20% dropout, trained 35 epochs) reached 88.16% test accuracy, while the 
                                    Convolutional Neural Network (two conv+max-pool layers, two dense ReLU 
                                    layers + 20% dropout, trained 10 epochs) achieved 91.28%, both exceeding the 80% 
                                    requirement. Training used Adam optimization with categorical cross-entropy loss, 
                                    and interpretability was enhanced via loss curves, learned-kernel grids, and sample prediction plots
                                    <span className="inline-block bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/70 text-purple-100 font-semibold px-5 py-2.5 rounded-xl mt-4 shadow-2xl">
                                        🚧 This repository exists for professional visibility only. Per university policy, sharing assignment solutions publicly is prohibited. Code access is restricted and can only be provided to authorized individuals, such as employers.
                                    </span>
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