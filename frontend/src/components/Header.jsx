import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="container mx-auto px-4 py-8 flex justify-between items-center">
      <div className="w-64">
                <Link to="/"><img src={logo} alt="APIVerse" className="w-full" /></Link>
      </div>
      <nav className="text-white font-mono text-xl flex gap-4">
        <Link to="/" className="hover:text-purple-300 transition-colors">HOME</Link>|
        <Link to="/about" className="hover:text-purple-300 transition-colors">ABOUT</Link>|
        <Link to="/contact" className="hover:text-purple-300 transition-colors">CONTACT</Link>
      </nav>
    </header>
  );
}

export default Header;
