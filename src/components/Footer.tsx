import logoKyu from '../assets/logo.svg';
export const Footer = () => {
  return (
    <footer className="w-full bg-[#F2F9FF] py-3 flex justify-center items-center border-t border-gray-200">
      <div className="text-[#2322E3] font-black text-5xl tracking-tighter">
        <img src={logoKyu} alt="Logo K&U" className="h-10 w-auto" />
      </div>
    </footer>
  );
};