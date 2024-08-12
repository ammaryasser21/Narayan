import Navbar from "../Navbar";
import Footer from "../Footer";
import { JetBrains_Mono, Righteous } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section
      className={`${jetBrainsMono.variable} ${righteous.variable} bg-[#0f0f0f] text-white grid place-items-center`}
    >
      <Navbar />
      <div className="container px-[24px] sm:p-0 xl:max-w-[1200px] pt-[5rem]">
        {children}
      </div>
      <Footer />
    </section>
  );
}
