import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    await api.post("/auth/register", form);

    // ✅ Register ke baad Login page
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={submitHandler}
        className="bg-white p-6 rounded shadow w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        <input
          className="w-full p-2 mb-3 border rounded"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          className="w-full p-2 mb-3 border rounded"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          type="password"
          className="w-full p-2 mb-4 border rounded"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
