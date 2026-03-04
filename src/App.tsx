import './App.css';
import { MultiStepForm } from './components/MultiStepForm';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#121212] flex items-center justify-center p-4">
      <main className="w-full max-w-lg flex justify-center">
        <MultiStepForm />
      </main>
    </div>
  );
}

export default App;