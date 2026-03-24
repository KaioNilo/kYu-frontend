import logoKyu from '../assets/logo.svg';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#F2F9FF] py-3 flex justify-center items-center border-t border-gray-200">
      <div className="flex items-center hover:scale-110 transition-transform duration-300 cursor-pointer">
        <img src={logoKyu} alt="Logo K&U" className="h-9 w-auto" />
      </div>
    </footer>
  );
};