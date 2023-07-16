
import './App.css';
import { Skills } from './components/skill';
import { Banner } from './components/Banner';
import Navbar from './components/Navbar';
import { Projects } from './components/Projects';
import { Contact }  from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Skills />  
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
