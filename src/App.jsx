import "./app.scss";
import { Analytics } from "@vercel/analytics/react";
import Lingxi from "./components/lingxi/Lingxi";
import Navbar from "./components/navbar/Navbar";
import Timeline from "./components/timeline/Timeline";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <section id="Lingxi">
        <Navbar />
        <Lingxi />
      </section>

      <section id="Timeline">
        <Timeline />
      </section>

      <section id="Skills">
        <Skills />
      </section>

      <section id="Projects">
        <Projects />
      </section>

      <section id="Contact">
        <Contact />
      </section>
      <Analytics />
    </div>
  );
};

export default App;
