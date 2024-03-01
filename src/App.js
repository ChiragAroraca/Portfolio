import "./App.css";
import Navbar from "./components/Navbar";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
