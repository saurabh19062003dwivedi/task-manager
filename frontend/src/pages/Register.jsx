import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await api.post("/auth/register", form);
      navigate("/"); // Register ke baad login
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center
                    bg-gray-100 dark:bg-slate-900 px-4">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-sm
                   bg-white dark:bg-slate-800
                   border border-gray-200 dark:border-slate-700
                   rounded-xl shadow-md p-6"
      >
        {/* HEADING */}
        <h2 className="text-2xl font-semibold text-center
                       text-gray-900 dark:text-gray-100">
          Create Your Account
        </h2>

        {/* SUB HEADING */}
        <p className="text-sm text-center mt-2 mb-6
                      text-gray-600 dark:text-gray-400">
          Start managing your tasks efficiently and stay organized every day.
        </p>

        {/* ERROR */}
        {error && (
          <p className="mb-4 text-sm text-red-600 dark:text-red-400 text-center">
            {error}
          </p>
        )}

        {/* FORM */}
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
          className="w-full mb-3 px-3 py-2 rounded-md
                     border border-gray-300
                     bg-white text-gray-900
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     dark:bg-slate-900 dark:text-gray-100
                     dark:border-slate-600"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
          className="w-full mb-3 px-3 py-2 rounded-md
                     border border-gray-300
                     bg-white text-gray-900
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     dark:bg-slate-900 dark:text-gray-100
                     dark:border-slate-600"
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
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
                     bg-green-600 text-white
                     hover:bg-green-700 transition
                     disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>

        {/* LOGIN LINK */}
        <p className="mt-5 text-sm text-center
                      text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-blue-600 dark:text-blue-400
                       cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;

