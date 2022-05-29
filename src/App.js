import './App.css';
import HelloSection from './components/sections/Hello_section/HelloSection';
import Navbar from './components/sections/Navbar';



function App() {
  return (
    <section className='bg-neutral-100 rounded-lg grid grid-cols-4'>
      <Navbar />
      <HelloSection />
    </section>
  );
}

export default App;
