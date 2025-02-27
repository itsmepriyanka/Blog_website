const Footer = () => {
  return (
    <footer className="bg-blue-400 py-8 mt-20 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <a href="/" className="text-xl font-bold text-black">
            Blog
            <span className="text-orange-400">Sphere</span>
          </a>
        </div>

        {/* Navigation Links */}
        {[...Array(3)].map((_, index) => (
          <div key={index}>
            <h3 className="font-bold text-orange-400">Explore</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="hover:text-orange-400">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  HR Consulting
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-black mt-6 mx-6"></div>

      {/* Copyright */}
      <div className="text-center text-orange-400 mt-4">
        <p>&copy;2025, BlogSphere . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
