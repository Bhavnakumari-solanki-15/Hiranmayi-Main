import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Mission } from '@/components/mission';
import { Portfolio } from '@/components/portfolio';
import { Services } from '@/components/services';
import { CTA } from '@/components/cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Portfolio />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
