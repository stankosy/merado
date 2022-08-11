import { MainSection } from './MainSection';
import { Footer } from './Footer';

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <MainSection />
        <Footer />
      </div>
    </div>
  );
}
