import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';



const info = {
  name: "Steven Godinez",
  email: "Steven.godin.42@gmail.com",
  "email-school": "godinez.s@northeastern.edu",
  about:
    "Currently studying Computer Science and Mathematics at Northeastern University. Planning to graduate in 2027 and pursue a Master’s in Artificial Intelligence, specializing in Machine Learning.",
  skills: [
    "AI & Machine Learning",
    "Python",
    "Java",
    "React/Next.js",
    "Three.js",
  ],
  hobbies: ["Electronic Tinkering", "Motorcycles", "Powerlifting", "Anime"],
  currently_building:
    "A real-time 3D visualizer for machine learning models using three.js and TensorFlow.js.",
  quote: "The best way to predict the future is to invent it.",
  tech_stack_icons: ["TensorFlow.js", "three.js", "Vite", "React"],
  socials: {
    github: "https://github.com/godinezsteven1",
    linkedin: "https://www.linkedin.com/in/godinezsteven/",
  },
};

export default function Info() {
  return (
  <section className="min-h-screen bg-gradient-to-br from-[#1e1b2e] via-[#2a2139] to-[#3a2a4b] p-8 flex items-center justify-center">
  <div className="w-full max-w-4xl shadow-2xl rounded-lg overflow-hidden border border-purple-600">
    <SyntaxHighlighter language="json" style={duotoneDark} wrapLongLines>
      {JSON.stringify(info, null, 2)}
    </SyntaxHighlighter>
  </div>
  </section>

  );
}
