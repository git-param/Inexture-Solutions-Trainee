import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="bg-[#111111] border border-white/10 rounded-2xl p-10 w-full max-w-md shadow-xl">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-red-600 p-3 rounded-lg text-white text-xl mb-4">
            🍴
          </div>

          <h2 className="text-2xl font-bold text-white">
            Dine<span className="text-red-500">IQ</span>
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            Welcome back to intelligent dining
          </p>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="text-sm text-gray-400">Email Address</label>

          <input
            type="email"
            placeholder="name@company.com"
            className="w-full mt-2 bg-[#1c1c1c] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="text-sm text-gray-400">Password</label>

          <input
            type="password"
            placeholder="••••••••"
            className="w-full mt-2 bg-[#1c1c1c] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
          />

          <div className="text-right mt-2">
            <a className="text-red-500 text-sm cursor-pointer">
              Forgot Password?
            </a>
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold mt-4 transition">
          Login →
        </button>

        {/* Register */}
        <p className="text-gray-400 text-center text-sm mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-red-500">
            Register
          </Link>
        </p>

      </div>

      {/* Footer Links */}
      <div className="absolute bottom-10 flex gap-6 text-gray-500 text-sm">
        <span>Privacy</span>
        <span>Terms</span>
        <span>Help</span>
      </div>

    </div>
  );
}

export default Login;