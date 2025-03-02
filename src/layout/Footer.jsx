const Footer = () => {
  return (
    <footer className="color py-8 mt-20 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <a href="/" className="text-xl font-bold text-black">
            Blog
            <span className="secColor">Sphere</span>
          </a>
        </div>

        {/* Navigation Links */}
        {[...Array(3)].map((_, index) => (
          <div key={index}>
            <h3 className="font-bold secColor">Explore</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="hover:text-purple-500">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500">
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
      <div className="text-center secColor mt-4">
        <p>&copy;2025, BlogSphere . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
