import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import AmbientCursor from './components/AmbientCursor.jsx';
import { AudioProvider } from './context/AudioContext.jsx';

export default function App() {
  const [ready, setReady] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 900);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <AudioProvider>
      <div className="min-h-screen overflow-x-hidden bg-[#16130b] text-[#eae1d4] transition-colors duration-500">
        <AnimatePresence>{!ready && <LoadingScreen />}</AnimatePresence>
        <AmbientCursor />
        <Navbar dark={dark} onToggleTheme={() => setDark((value) => !value)} />
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
          <Home />
        </motion.main>
        <Footer />
      </div>
    </AudioProvider>
  );
}
