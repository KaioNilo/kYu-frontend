import { Header } from '../components/Header';
import { Form } from '../components/Form';
import { Footer } from '../components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#202020]">
      <Header />
      
      <main className="grow flex flex-col items-center py-20">
        
        <Form/>

      </main>

      <Footer />
    </div>
  );
}

export default App;