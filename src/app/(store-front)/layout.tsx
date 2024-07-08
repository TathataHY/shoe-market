import { Footer } from "@/components/store-front/footer";
import { Navbar } from "@/components/store-front/navbar";

export default function StoreFrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </body>
  );
}
