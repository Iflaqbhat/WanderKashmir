import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full flex justify-center bg-transparent mt-auto">
      <div className="w-full max-w-4xl mx-2 mb-4 px-6 py-4 rounded-full border-t-4 border-t-gradient-to-r from-cyan-200 via-blue-100 to-teal-100 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4" style={{background: 'transparent', backdropFilter: 'none'}}>
        <div className="flex items-center gap-2">
          <span className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-500 to-teal-500 drop-shadow">WanderKashmir</span>
          <span className="text-gray-400 font-medium">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex gap-6 text-2xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 text-cyan-600 transition-all duration-200 hover:scale-125"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-cyan-600 transition-all duration-200 hover:scale-125"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 text-cyan-600 transition-all duration-200 hover:scale-125"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
}
