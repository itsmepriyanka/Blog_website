const Register = () => {
  return (
    <div className="flex flex-col md:flex-row box shadow-md">
      {/* Left Section - Image & Slogan */}
      <div className="image md:flex w-1/2 bg-blue-600 text-white flex-col justify-center items-center p-8 bg-cover bg-center bg-no-repeat">
        <h1 className="text-3xl font-bold mt-6 text-center">
          Your Space For Thoughts And Stories
        </h1>
      </div>

      {/* Right Section - Registration Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <div className="w-full max-w-md bg-white ">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Create an Account
          </h2>
          <form>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            {/* Confirm Password Field */}
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center text-sm mb-4">
              <input type="checkbox" className="mr-2" required />
              <span className="text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Terms & Conditions
                </a>
              </span>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="color w-full text-white py-2 rounded-lg hover: transition duration-200"
            >
              Sign Up
            </button>
          </form>

          {/* Already have an account? */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
