import AboutImages from "./aboutimages";
import Info from "./info";
import BackButton from "./BackButton";

export default function About() {
  return (
    <section className="px-6 pt-4">
        <BackButton />
        <Info />
        <AboutImages />
    </section>
  );
}