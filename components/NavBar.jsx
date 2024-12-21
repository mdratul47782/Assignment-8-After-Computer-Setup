"use client";
import { useUser } from "@/app/context/UserContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import NavSearchBar from "./NavSearchBar";
import { useState, useEffect } from "react";

function NavBar() {
  const { user } = useUser();
  const pathname = usePathname(); // Get current path
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true); // State to control NavBar visibility

  // Handle Protected Routes
  const handleProtectedRoute = (route) => {
    if (user && user.id) {
      router.push(route); // Navigate to the route if user is logged in
    } else {
      router.push("/login"); // Redirect to login if no user is found
    }
  };

  // Handle Login Click
  const handleLoginClick = () => {
    setIsVisible(false); // Hide the NavBar
    router.push("/login"); // Navigate to login page
  };

  // Monitor pathname changes and update NavBar visibility
  useEffect(() => {
    setIsVisible(pathname !== "/login"); // Show NavBar unless on the login page
  }, [pathname]);

  // If NavBar is hidden, return null
  if (!isVisible) return null;

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-black to-transparent shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo and Navigation Links */}
        <div className="flex items-center">
          <Link href="/" className="text-red-600 text-4xl font-bold">
            MOVIE DB
          </Link>
          <div className="ml-8 space-x-4 hidden sm:block">
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <button
              onClick={() => handleProtectedRoute(`/CompareMovies/${user?.id}`)}
              className="text-white hover:text-gray-300"
            >
              Compare Movies
            </button>
            <button
              onClick={() => handleProtectedRoute(`/WatchList/${user?.id}`)}
              className="text-white hover:text-gray-300"
            >
              Watch Later
            </button>
            <button
              onClick={handleLoginClick} // Use the login click handler
              className="text-white hover:text-gray-300"
            >
              Login
            </button>
          </div>
        </div>

        {/* Search Bar and User Name */}
        <div className="flex items-center space-x-4">
          <NavSearchBar />
          <div className="flex items-center text-white px-4 py-2 rounded-lg bg-red-600">
            <span className="text-sm font-medium">
              {user ? `${user.name || "User"}` : "Guest"}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
