 import { useState } from "react";
import { useNavigate } from "react-router-dom";
function login() {

  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!identifier.trim() || !password.trim()) {
      alert("Please enter credentials");
      return;
    }

    navigate("/");
  };
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        <div className="flex items-center justify-center bg-gradient-to-b from-green-600 to-green-500 p-10 text-white">
          <div className="text-center">
            <p className="text-sm opacity-90">hello — welcome to my page</p>
            <p className="text-xs opacity-80 mt-1">this is my store</p>

            <h1 className="mt-6 font-extrabold text-5xl tracking-tight">
              Fashion <br /> hub
            </h1>

            <p className="mt-6 mx-auto text-green-100">
              Trendy looks, bold colors and affordable style — curated just for you.
            </p>
          </div>
        </div>

        <div className="p-8 lg:p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h1 className="text-2xl font-bold text-gray-800">Sign in</h1>
            <p className="mt-2 text-sm text-gray-500">
              Enter your email or phone and password to continue.
            </p>

            <form onSubmit={handleLogin} className="mt-6 space-y-4">

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email or phone
                </label>
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="Your Email or Phone"
                  className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-300 outline-none text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                  className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-300 outline-none text-black"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded-xl bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold shadow-md hover:opacity-95"
              >
                Login
              </button>

              <div className="flex justify-between text-sm mt-2">
                <button type="button" className="text-green-600 underline">
                  Sign up
                </button>
                <button type="button" className="text-gray-500">
                  Forgot password?
                </button>
              </div>

              <div className="pt-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t" />
                  </div>
                  <div className="relative text-center">
                    <span className="bg-white px-2 text-gray-400 text-sm">
                      or continue with
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full mt-4 py-2 rounded-xl bg-blue-600 text-white font-semibold"
                >
                  Continue with Google
                </button>
              </div>
            </form>

            <p className="mt-6 text-xs text-gray-400 text-center">
              By continuing, you agree to our Terms & Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
    
export default login
