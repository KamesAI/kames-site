import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { ContactSection } from '@/components/sections/contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <ContactSection />
    </main>
  );
};

export default Home;
