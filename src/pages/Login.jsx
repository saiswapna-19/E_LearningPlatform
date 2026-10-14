import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import { saveUser } from "../utils/localStorage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.trim() || !password) return;
    saveUser({ email });
    navigate("/");
  };

  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-12">
      <form onSubmit={handleLogin} className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
          <LogIn size={28} />
        </div>
        <h1 className="text-center text-3xl font-bold text-gray-900">Welcome Back</h1>
        <p className="mb-7 mt-2 text-center text-gray-500">Sign in to continue learning.</p>

        <label className="mb-2 block text-sm font-medium">Email Address</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required className="mb-5 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />

        <label className="mb-2 block text-sm font-medium">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required className="mb-6 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />

        <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">Login</button>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account? <Link to="/register" className="font-semibold text-blue-600 hover:underline">Register</Link>
        </p>
      </form>
    </main>
  );
}