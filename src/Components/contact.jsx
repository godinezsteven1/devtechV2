import ContactCard from './contactCard.jsx' 




export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-3xl font-bold text-purple-300 mb-4">Contact Me</h2>
      <p className="text-lg text-purple-200 mb-8">
        Interested in working together or have a question? :D<br />
        Email me at{" "}
        <a
          href="mailto:Steven.godin.42@gmail.com"
          className="underline text-purple-400 hover:text-purple-300"
        >
          Steven.godin.42@gmail.com
        </a>
      </p>
      <ContactCard />
    </section>
  );
}