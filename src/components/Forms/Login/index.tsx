import { api } from "@/api";
import { useAuth } from "@/hooks/auth";
import { useState } from "react";

type FormData = {
  username: string;
  password: string;
};

export function Form() {
  const [form, setForm] = useState<FormData>({ username: "", password: "" });

  const { login, isAuthenticating } = useAuth();

  const handleSubmit = async () => {
    if (!form.username.trim() || !form.password.trim()) return;
    try {
      await login(form.username, form.password);
      await api.auth.fetch();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              value={form.username}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  username: e.target.value,
                }))
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={form.password}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isAuthenticating}
            className="w-full bg-blue-400 hover:bg-blue-500 text-white font-medium py-2 rounded-lg transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
