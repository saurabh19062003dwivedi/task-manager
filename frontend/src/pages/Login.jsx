import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userName", res.data.user.name);

      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center
                    bg-gray-100 dark:bg-slate-900 px-4">
      <div
        className="w-full max-w-sm
                   bg-white dark:bg-slate-800
                   border border-gray-200 dark:border-slate-700
                   rounded-xl shadow-md p-6"
      >
        {/* HEADING */}
        <h2 className="text-2xl font-semibold text-center
                       text-gray-900 dark:text-gray-100">
          Welcome Back
        </h2>

        {/* SUB HEADING */}
        <p className="text-sm text-center mt-2 mb-6
                      text-gray-600 dark:text-gray-400">
          Login to manage your tasks efficiently.
        </p>

        {/* ERROR */}
        {error && (
          <p className="mb-4 text-sm text-red-600 dark:text-red-400 text-center">
            {error}
          </p>
        )}

        {/* FORM */}
        <form onSubmit={submitHandler}>
          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mb-3 px-3 py-2 rounded-md
                       border border-gray-300
                       bg-white text-gray-900
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       dark:bg-slate-900 dark:text-gray-100
                       dark:border-slate-600"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mb-5 px-3 py-2 rounded-md
                       border border-gray-300
                       bg-white text-gray-900
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       dark:bg-slate-900 dark:text-gray-100
                       dark:border-slate-600"
          />

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-md font-medium
                       bg-indigo-600 text-white
                       hover:bg-indigo-700 transition
                       disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* REGISTER LINK */}
        <p className="mt-5 text-sm text-center
                      text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 dark:text-blue-400
                       font-medium hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
