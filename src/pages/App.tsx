import { Header } from '../components/Header';
import { Video } from '../components/Video';
import { Hero } from '../components/Hero';
import { Value } from '../components/Value';
import { Form } from '../components/Form';
import { Services } from '../components/Services';
import { About } from '../components/About'
import { Portfolio } from '../components/Portfolio'
import { Footer } from '../components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#202020]">
      <Header />
      
      <main>

        <Video/>

        <Hero />
        
        <Value/>

        <Form/>

        <Services/>

        <About/>

        <Portfolio/>

      </main>

      <Footer />
    </div>
  );
}

export default App;