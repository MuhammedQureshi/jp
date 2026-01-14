import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesList } from './components/ServicesList';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { BeforeAfter } from './components/BeforeAfter';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhoWeAre } from './components/About';
import CleaningServiceFeatures from './components/stats';
import ServiceBenefits from './components/ServiceBenefits';


export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #E0F2FE 0%, #BAE6FD 25%, #7DD3FC 50%, #38BDF8 75%, #0EA5E9 100%)' }}>
      <Header />
      <Hero />
      <ServicesList />
      <Services />
      <ServiceBenefits />
      <BeforeAfter />
      <CleaningServiceFeatures />
      <WhoWeAre />
      <Contact />
      <Footer />
    </div>
  );
}
