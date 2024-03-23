// page.tsx
import { useRef, useEffect } from 'react';
import About from "@/Pages/About/About";
import Couse from "@/Pages/Couse/Couse";
import Donation from "@/Pages/Donation/Donation";
import Hero from "@/Pages/Hero/Hero";
import Support from "@/Pages/Support/Support";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const couseRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);
  const donationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Detect scroll direction
      const scrollDirection = window.scrollY > 0 ? 'down' : 'up';

      // Determine which page to navigate to based on scroll direction
      let nextPageRef;
      if (scrollDirection === 'down') {
        nextPageRef = aboutRef.current || couseRef.current || supportRef.current || donationRef.current;
      } else {
        nextPageRef = donationRef.current || supportRef.current || couseRef.current || aboutRef.current;
      }

      // Scroll to the next page
      if (nextPageRef) {
        nextPageRef.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Hero/>
      <About ref={aboutRef}/>
      <Couse ref={couseRef}/>
      <Support ref={supportRef}/>
      <Donation ref={donationRef}/>
    </div>
  );
}
