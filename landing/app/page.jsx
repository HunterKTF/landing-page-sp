import Navigation from "@/components/app/navigation";
import Hero from "@/components/app/hero";
import Stats from "@/components/app/stats";
import Features from "@/components/app/features";
import Benefits from "@/components/app/benefits";
import Quotes from "@/components/app/quotes";
import TryNow from "@/components/app/tryNow";
import FAQ from "@/components/app/faq";
import Contact from "@/components/app/contact";
import Footer from "@/components/app/footer";

export default function Home() {
  return (
    <main className="mt-[10vh]">
      <nav className="flex w-full fixed top-0 justify-center items-center px-[30px] xl:px-[90px] py-[20px] z-50" id="navigation">
        <Navigation />
      </nav>
      <section className="flex w-full py-10 px-[30px] xl:px-[90px] z-10" id="hero-section">
        <Hero />
      </section>
      <section className="flex w-full py-5 px-[30px] xl:px-[90px]" id="stats">
        <Stats />
      </section>
      <section className="flex w-full px-[30px] xl:px-[90px] bg-slate-100" id="features">
        <Features />
      </section>
      <section className="flex w-full h-[30vh] px-[30px] xl:px-[90px]" id="benefits">
        <Benefits />
      </section>
      <section className="flex w-full px-[30px] xl:px-[90px] bg-slate-100" id="quotes">
        <Quotes />
      </section>
      <section className="flex w-full h-[30vh] px-[30px] xl:px-[90px]" id="try-now">
        <TryNow />
      </section>
      <section className="flex w-full px-[30px] xl:px-[90px] bg-slate-100" id="faq">
        <FAQ />
      </section>
      <section className="flex w-full px-[30px] xl:px-[90px]" id="contact">
        <Contact />
      </section>
      <section className="flex w-full px-[30px] xl:px-[90px]" id="footer">
        <Footer />
      </section>
    </main>
  )
}