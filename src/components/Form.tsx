import { MultiStepForm } from '../components/MultiStepForm';

export const Form = () => {
  return (
    <section id="orcamento" className="bg-[#1DEA4C] w-full flex p-15 flex-col items-center">
        <div className="text-center space-y-4">
            <h2 className="text-[#2322E3] text-2xl font-display uppercase mb-5">
                Solicite nossos Serviços
            </h2>
        </div>
        <MultiStepForm />
    </section>
  );
};