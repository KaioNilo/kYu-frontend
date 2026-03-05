import { MultiStepForm } from '../components/MultiStepForm';

export const Form = () => {
  return (
    <section 
      id="orcamento" 
      className="w-full flex py-20 flex-col items-center bg-cover bg-top bg-no-repeat"
      style={{ 
        backgroundImage: "url('https://res.cloudinary.com/dbgkgdeex/image/upload/v1772731512/BG_Form_f7zgrq.png')" 
      }}
    >        <div className="text-center space-y-4">
            <h2 className="text-[#2322E3] text-2xl font-display uppercase mb-5">
                Solicite nossos Serviços
            </h2>
        </div>
        <MultiStepForm />
    </section>
  );
};