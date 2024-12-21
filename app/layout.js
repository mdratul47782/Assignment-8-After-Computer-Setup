import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "MOVIE DB",
  description: "Find Your Favourite Movie Here",
};

export default async function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className="bg-black text-white">
        
          <NavBar/>
          {children}
          
      </body>
    </html>
  );
}
