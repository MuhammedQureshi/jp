import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { BeforeAfter } from './components/BeforeAfter';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #E0F2FE 0%, #BAE6FD 25%, #7DD3FC 50%, #38BDF8 75%, #0EA5E9 100%)' }}>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <BeforeAfter />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
