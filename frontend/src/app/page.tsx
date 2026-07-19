import Contact from "@/ui-components/contact/Contact";
import Features from "@/ui-components/features/Features";
import Footer from "@/ui-components/footer/Footer";
import Hero from "@/ui-components/hero/Hero";
import Stats from "@/ui-components/stats/Stats";
import Testimonials from "@/ui-components/testimonials/Testimonials";
import TrustedCompanies from "@/ui-components/trusted/TrustedCompanies";



export default function Home() {
  return (
    <main>
      <Hero />
       <TrustedCompanies />
       <Features />
       <Stats />
     <Testimonials />
     <Contact />
     <Footer/>
    </main>
  );
}