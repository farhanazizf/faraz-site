import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-dark-100">
      <Header />
      <main className="flex flex-col gap-16 lg:gap-20">
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
