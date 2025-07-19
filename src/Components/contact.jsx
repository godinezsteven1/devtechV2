import ContactCard from './contactCard.jsx' 
import BackButton from './BackButton'

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
      <div className="absolute top-4 left-6">
        <BackButton />
      </div>
      <h2 className="text-3xl font-bold text-purple-300 mb-4">Contact Me</h2>
      <p className="text-lg text-purple-200 mb-8">
        Interested in working together or have a question? :D<br />
      </p>
      <ContactCard />
    </section>
  );
}