import "./app.scss";
import Lingxi from "./components/lingxi/Lingxi";
import Navbar from "./components/navbar/Navbar";
import Experience from "./components/Experience/Experience";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div>
      <section id="Lingxi">
        <Navbar />
        <Lingxi />
      </section>

      <section id="Experience">
        <Experience />
      </section>

      <section id="Skills">
        <Skills />
      </section>

      <section id="Projects">
        <Projects />
      </section>

      <section id="Contact">
        Contact
      </section>
    </div>
  );
};

export default App;
