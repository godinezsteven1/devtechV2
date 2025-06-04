
export default function Info() {


  const jsonData = `{
  "name": "Steven Godinez",
  "email": "Steven.godin.42@gmail.com",
  "email-school": "godinez.s@northeastern.edu",
  "About": "Currently studying Computer Science
  and Mathematics at Northeastern University, planning
   to graduate in 2027 and pursue a Master’s in 
   Artificial Intelligence, specializing in Machine Learning.",
  "skills": [
    "AI & Machine Learning",
    "Python",
    "Java",
    "React/Next.js",
    "Three.js"
  ],
  "hobbies": [\
    "Electronic Tinker ",
    "Motorcycles",
    "Powerlifting",
    "Anime"
  ],
  "socials": {
    "github": ""
}`

  return (
    <section className="min-h-screen bg-gray-900 p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <pre className="bg-gray-800 text-gray-300 p-6 rounded-lg overflow-x-auto font-mono text-sm leading-relaxed shadow-2xl border border-gray-700">
          {jsonData}
        </pre>
      </div>
    </section>
  );
}
