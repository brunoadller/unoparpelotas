import Cta from "./components/Cta/Cta";
import Cursos from "./components/Cursos/Cursos";
import Depoimentos from "./components/Depoimentos/Depoimentos";
import Faq from "./components/Faq/Faq";
import FloatingWa from "./components/FloatingWa/FloatingWa";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/Marque/Marquee";
import { ModeCard } from "./components/ModeCard/ModeCard";
import Nav from "./components/Nav/Nav";
import OfferStrip from "./components/OfferStrip/OfferStrip";
import PosGraduacao from "./components/PosGraduacao/PosGraduacao";
import Vocacional from "./components/Vocacional/Vocacional";
import Why from "./components/Why/Why";
import { cursos } from "./data/cursos";
import { modalidades } from "./data/modalidades";

const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee items={cursos} />
        <ModeCard modalidade={modalidades} />
        <OfferStrip />
        <Why />
        <Vocacional />
        <Cursos />
        <PosGraduacao />
        <Gallery />
        <Depoimentos />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <FloatingWa />
    </>
  );
};

export default App;
