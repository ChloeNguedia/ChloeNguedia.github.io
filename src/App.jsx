import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WelcomeDialog from "./components/WelcomeDialog";
import { usePreferences } from "./context/usePreferences";

function App() {
  const { t } = usePreferences();
  return (
    <>
      <a className="skip-link" href="#contenu">
        {t("Aller au contenu")}
      </a>
      <Navbar />
      <main id="contenu">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <WelcomeDialog />
    </>
  );
}

export default App;
