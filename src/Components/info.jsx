import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';



const info = {
  NAME: "Steven Godinez",
  EMAIL: "Steven.godin.42@gmail.com",
  "email-school": "godinez.s@northeastern.edu",
  ABOUT: [
    "Currently studying Computer Science and Mathematics at Northeastern University.",
    "Planning to graduate in 2027 and pursue a Master’s in Artificial Intelligence,", 
    "specializing in Machine Learning."
  ],
  SKILLS: [
    "AI & Machine Learning",
    "Python",
    "Java",
    "React/Next.js",
    "Three.js",
  ],
  HOBBIES: ["Electronic Tinkering", "Motorcycles", "Powerlifting", "Anime"],
  socials: {
    github: "github.com/godinezsteven1",
    linkedin: "linkedin.com/in/godinezsteven/",
  },
};

export default function Info() {
  return (
  <section className="min-h-screen p-8 flex items-center justify-center">
  <div className="w-full max-w-4xl shadow-2xl rounded-lg overflow-hidden">
    <SyntaxHighlighter language="json" style={duotoneDark} wrapLongLines>
      {JSON.stringify(info, null, 2)}
    </SyntaxHighlighter>
  </div>
  </section>

  );
}
