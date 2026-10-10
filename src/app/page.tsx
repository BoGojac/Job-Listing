import Navbar from "@/component/landing/Navbar";
import Hero from "@/component/landing/Hero";
import Features from "@/component/landing/Features";
import Footer from "@/component/landing/Footer";


export default function Home() {
  return (
    <div className="font-sans text-zinc-900">
      <Navbar />
      <main className="">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
