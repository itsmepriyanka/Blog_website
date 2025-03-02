const Login = () => {
  return (
<<<<<<< HEAD
    <div className="flex box flex-col md:flex-row  shadow-md ">
=======
    <div className="flex flex-col md:flex-row box shadow-md ">
>>>>>>> 1912962c1f129bfb80e910302cc4c8f30644ba56
      {/* Left Section - Image & Slogan */}
      <div className="image md:flex w-1/2 bg-blue-600 text-white flex-col justify-center items-center p-8 bg-cover bg-center bg-no-repeat">
        <h1 className="text-3xl font-bold mt-6 text-center">
          Your Space for Thoughts and Stories
        </h1>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <div className="w-full max-w-md bg-white p-1 ">
          <h2 className="text-2xl font-semibold text-center text-gray-500 mb-6">
            Login
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="flex justify-between items-center text-sm mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don&apos;t have an account?
            <a href="#" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
