import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500">
      <nav className="px-4 py-4">
        <a href="/" className="text-xl font-bold text-black">
          Blog
          <span className="text-orange-400">Sphere</span>
        </a>

        {/* navritems for lg devices */}
        <ul className="md:flex gap-12 text-lg hidden">
          <li className="text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="text-white">
            <Link to="/services">Services</Link>
          </li>
          <li className="text-white">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="text-white">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* menu icons */}
        <div className="text-white">
          <a href="/" className="hover:text-orange-500">
            <FaFacebook />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaInstagramSquare />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaXTwitter />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
