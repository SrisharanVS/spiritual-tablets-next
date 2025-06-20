import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.div key={router.asPath} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}
