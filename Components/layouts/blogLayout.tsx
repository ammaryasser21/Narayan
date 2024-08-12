import BlogNavbar from "@/Components/BlogPages/BlogNavbar";
import BlogFooter from "@/Components/BlogPages/BlogFooter";
import { IBM_Plex_Mono } from 'next/font/google';

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ["100","200","300","400","500","600","700"]
});


export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <section className={`${ibmPlexMono.className} text-white grid place-items-center`}>
        <BlogNavbar />
        <div className="container px-[24px] sm:p-0 xl:max-w-[1120px]">
        {children}
      </div>
        <BlogFooter />
      </section>
  );
}
