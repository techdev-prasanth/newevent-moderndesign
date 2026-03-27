import { Header } from './components/Header';
import { HeroMandapam } from './components/sections/HeroMandapam';
import { CulturalImmersion } from './components/sections/CulturalImmersion';
import { WeddingTimeline } from './components/sections/WeddingTimeline';
import { ClientStories } from './components/sections/ClientStories';
import { PremiumContact } from './components/sections/PremiumContact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-luxury-black text-white overflow-x-hidden">
      <Header />
      <main className="pt-20">
        <HeroMandapam />
        <CulturalImmersion />
        <WeddingTimeline />
        <ClientStories />
        <PremiumContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
