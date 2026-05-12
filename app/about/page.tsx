import { Header } from '@/components/header';
import { AboutUs } from '@/components/about-us';
import { Footer } from '@/components/footer';

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="pt-20">
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}
