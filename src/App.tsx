import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer";

const App = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useContext must be used within a ThemeProvider");
  }

  const [{ themeName }] = context;

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
