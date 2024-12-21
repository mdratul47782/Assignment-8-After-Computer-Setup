"use client";
import Link from "next/link";
import NavSearchBar from "./NavSearchBar";
import { useUser } from "@/app/context/UserContext";

function NavBar() {
  const { user } = useUser();

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
            <Link
              href="/CompareMovies"
              className="text-white hover:text-gray-300"
            >
              Compare Movies
            </Link>
            <Link href="/WatchList" className="text-white hover:text-gray-300">
              Watch Later
            </Link>
            <Link href="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
          </div>
        </div>

        {/* Search Bar and User Name */}
        <div className="flex items-center space-x-4">
          <NavSearchBar />
          <div className="flex items-center  text-white px-4 py-2 rounded-lg bg-red-600">
            <span className="text-sm font-medium ">
              {user ? `Welcome, ${user.name || "User"}` : "Welcome, Guest"}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
