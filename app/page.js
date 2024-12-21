import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import PopularMovies from "@/components/PopularMovies";
import TopRatedMovies from "@/components/TopRatedMovies";
import TrendingMovies from "@/components/TrendingMovies";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <NavBar/> */}
      <HeroSection />
      {/* <!-- Movie Sections --> */}
      <div className="container mx-auto px-4 py-8">
        {/* <!-- Trending Movies --> */}
        <TrendingMovies />
        {/* <!-- Popular Movies --> */}
        <PopularMovies/>
        {/* <!-- Top Rated Movies --> */}
        <TopRatedMovies/>
      </div>
    </div>
  );
}
