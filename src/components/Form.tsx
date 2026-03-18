import { MultiStepForm } from '../components/MultiStepForm';

export const Form = () => {
  return (
    <section 
      id="orcamento" 
      className="w-full flex py-20 px-5 flex-col items-center bg-cover bg-top bg-no-repeat"
      style={{ 
        backgroundImage: "url('https://res.cloudinary.com/dbgkgdeex/image/upload/v1772731512/BG_Form_f7zgrq.png')" 
      }}
    >        <div className="text-center space-y-4">
            <h1 className="text-[#202020] text-4xl uppercase mb-9 xl:text-7xl">
                Solicite nossos Serviços
            </h1>
        </div>
        <MultiStepForm />
    </section>
  );
};