import './App.css';
import HelloSection from './components/sections/Hello_section/HelloSection';
import Navbar from './components/sections/Navbar';
import Strategy from './components/sections/Strategy/Strategy';
import Analytics from './components/sections/Analytics/Analytics';



function App() {
  return (
    <section className='bg-white rounded-lg flex '>
      <Navbar />
      <HelloSection />
      <Analytics />
      <Strategy />

    </section>
  );
}

export default App;
