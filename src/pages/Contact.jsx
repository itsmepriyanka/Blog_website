import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaUser, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className=" py-22 color mx-auto ">
        <div className="text-white text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4"> Contact Us </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row py-16 px-16 sm:px-26 gap-8 sm:gap-16 items-center justify-center transition-all duration-500">
        <div className="w-full md:w-1/2 h-[600px] bg-purple-100 transition-all duration-500 shadow-2xl">
          <div className="h-16 color text-white text-center font-bold pt-4 text-2xl">
            Get in Touch with Us Now!
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-6 border-t border-gray-300 pt-4">
            {/* Phone */}
            <div className="flex flex-col items-center pt-16 pb-20">
              <FaPhoneAlt className="text-7xl bg-gray-100 p-2 rounded-full" />
              <p className="mt-2 text-md md:text-sm">Phone Number</p>
              <p className="text-md md:text-sm font-semibold">9865154876</p>
            </div>

            {/* Email */}
            <div className="flex flex-col pt-16 items-center">
              <FaEnvelope className="text-7xl bg-gray-100 p-2 rounded-full" />
              <p className="mt-2 text-md ">example56@gmail.com</p>
              <p className="text-sm">info333@gmail.com</p>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center">
              <FaMapMarkerAlt className="text-7xl bg-gray-100 p-2 rounded-full" />
              <p className="mt-2 text-md">Basantapur, Kathmandu</p>
            </div>

            {/* Social Media */}
            <div className=" flex flex-col items-center">
              <div className="flex items-center justify-center space-x-4">
                <a href="https://www.facebook.com/">
                  <FaFacebook className="text-5xl cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/">
                  <FaInstagram className="text-5xl cursor-pointer" />
                </a>
                <a href="https://www.twitter.com/">
                  <FaXTwitter className="text-5xl cursor-pointer" />
                </a>
              </div>
              <p className="mt-4 text-md">Social Media</p>
            </div>
          </div>
        </div>

        {/* contact form section */}
        <div className="w-full md:w-1/2 h-[600px] bg-purple-100 transition-all duration-500 shadow-2xl">
          <div className="h-16 color text-white text-center font-bold pt-4 text-2xl">
          Your Queries Here
          </div>
          <form className="p-8">
            {/* First & Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-500" />
                <input
                  type="text"
                  placeholder="First Name*"
                  className="border p-2 pl-10 w-full text-sm"
                />
              </div>
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-500" />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border p-2 pl-10 w-full text-sm"
                />
              </div>
            </div>

            {/* Mobile & Email */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative">
                <FaPhoneAlt className="absolute left-3 top-3 text-gray-500" />
                <input
                  type="text"
                  placeholder="Mobile NO*"
                  className="border p-2 pl-10 w-full text-sm"
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
                <input
                  type="email"
                  placeholder="Email ID*"
                  className="border p-2 pl-10 w-full text-sm"
                />
              </div>
            </div>

            {/* Message Field */}
            <textarea
              placeholder="Message"
              className="border p-2 w-full h-32 mt-4 text-sm"
            ></textarea>

            {/* Submit Button */}
            <button className="bg-gray-100 px-4 py-2 mt-4 w-full border-1 text-purple-500 font-bold border-purple-400 hover:bg-purple-400 hover:text-white text-sm">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
