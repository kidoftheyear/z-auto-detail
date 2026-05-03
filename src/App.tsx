import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import ComparisonSlider from './components/ComparisonSlider';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm, { Footer } from './components/ContactForm';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <ComparisonSlider />
        <Gallery />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
