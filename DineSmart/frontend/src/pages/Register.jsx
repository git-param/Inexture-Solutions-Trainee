import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-6">
          <div className="bg-red-600 text-white w-12 h-12 flex items-center justify-center rounded-lg mx-auto mb-4">
            🍴
          </div>

          <h2 className="text-2xl font-bold text-gray-800">
            Dine<span className="text-red-600">IQ</span>
          </h2>

          <h3 className="text-xl font-semibold mt-2">
            Create your account
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            Join the future of AI-powered food ordering.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email Address</label>
            <input
              type="email"
              placeholder="john@company.com"
              className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-gray-600">Phone Number</label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Password Row */}
          <div className="grid grid-cols-2 gap-3">

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Confirm Password</label>
              <input
                type="password"
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
              />
            </div>

          </div>

          {/* Terms */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <input type="checkbox" />
            <span>
              I agree to the
              <span className="text-red-600"> Terms of Service </span>
              and
              <span className="text-red-600"> Privacy Policy</span>
            </span>
          </div>

          {/* Button */}
          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition">
            Register Account
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-red-600 font-medium">
            Log in
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;