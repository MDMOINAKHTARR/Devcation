import HeroSection from './components/HeroSection';
import MarqueeTicker from './components/MarqueeTicker';
import CountdownSection from './components/CountdownSection';
import TimelineSection from './components/TimelineSection';
import TrackExplorer from './components/TrackExplorer';
import MissionControl from './components/MissionControl';
import PrizeSection from './components/PrizeSection';
import FAQSection from './components/FAQSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueeTicker />
      <CountdownSection />
      <TimelineSection />
      <TrackExplorer />
      <MissionControl />
      <PrizeSection />
      <FAQSection />
    </main>
  );
}
