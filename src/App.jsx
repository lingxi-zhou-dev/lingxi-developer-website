import "./app.scss";
import "./app.scss";
import Lingxi from "./components/lingxi/Lingxi";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <div>

      <section id="Lingxi">
        <Navbar />
        <Lingxi />
      </section>
      <section id="Education">
        Education
      </section>
      <section id="Experience">
        Experience
      </section>
      <section id="Projects">
        Projects
      </section>
      <section id="Contact">
        Contact
      </section>

    </div>
  );
};

export default App;