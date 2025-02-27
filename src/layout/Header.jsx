import{ useState } from "react";
import { FaBars, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // navitems
  return (
    <header className="bg-blue-500 text-white fixed top-0 left-0 right-0">
      <nav className="px-4 py-4 max-w-7xl flex mx-auto justify-between items-center">
        <a href="/" className="text-xl font-bold text-black">
          Blog
          <span className="text-orange-400">Sphere</span>
        </a>

        {/* navritems for lg devices */}

        <ul className="md:flex gap-12 text-lg hidden">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-400 font-bold underline" : "text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-orange-400 font-bold underline" : "text-white"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-orange-400 font-bold underline" : "text-white"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "text-orange-400 font-bold underline" : "text-white"
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-orange-400 font-bold underline" : "text-white"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* menu icons */}
        <div className="text-white lg:flex gap-4 items-center hidden ">
          <a href="/" className="hover:text-orange-500 hover:">
            <FaFacebookF />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaInstagram />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaXTwitter />
          </a>
          <button className="btn border-2 font-bold bg-white text-blue-500 hover:bg-orange-400 hover:text-white px-3 py-1 rounded-xl">
            Login
          </button>
          <button className="btn border-2 font-bold bg-white text-blue-500 hover:bg-orange-400 hover:text-white px-3 py-1 rounded-xl">
            Signup
          </button>
        </div>

        {/* mobile menu btn, display mobile screen */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* menu items only for mobile */}
      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
              : "hidden"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-400 font-bold underline" : "text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-orange-400 font-bold underline" : "text-black"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-orange-400 font-bold underline" : "text-black"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "text-orange-400 font-bold underline" : "text-black"
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-orange-400 font-bold underline" : "text-black"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="">
              <button className="btn border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-3 py-1 rounded-xl mr-10">
                Login
              </button>
              <button className="btn border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-3 py-1 rounded-xl mr-10">
                Signup
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
