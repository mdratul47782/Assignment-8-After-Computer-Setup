// app/components/LoginForm.js

"use client"; // This tells Next.js that this component is client-side
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm({ users }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter(); // To redirect on success
  console.log(users);
  const handleSubmit = (event) => {
    event.preventDefault();

    // Find the user matching the email and password
    const user = users.find(
      (user) => user.email === email && user.pass === pass
    );

    if (user) {
      // Redirect to the home page on successful login
      router.push("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <form id="loginForm" onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="Email or phone number"
        className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
        required
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        name="pass"
      />
      <button
        type="submit"
        className="w-full bg-moviedb-red text-white py-3 rounded hover:bg-red-700 transition duration-300"
      >
        Sign In
      </button>
    </form>
  );
}
