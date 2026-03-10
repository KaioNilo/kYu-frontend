import { Header } from '../components/Header';
import { Form } from '../components/Form';
import { Footer } from '../components/Footer';
import { Video } from '../components/video';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#202020]">
      <Header />
      
      <main>

        <Video/>
        
        <Form/>

      </main>

      <Footer />
    </div>
  );
}

export default App;