import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import './App.css';

const App = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Services />
      <Projects />
      <Pricing />
      <Contact />
    </main>
  </>
);

export default App;
