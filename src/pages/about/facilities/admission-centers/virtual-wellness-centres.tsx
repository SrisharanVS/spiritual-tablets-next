import React, { useEffect, useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { createClient } from '@supabase/supabase-js';
import { motion, useAnimation } from 'framer-motion';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error("Missing Supabase environment variables");
  }
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
interface VirtualCenter {
  Name: string;
  "Phone Number": string;
  "Languages Known": string;
  "Village/Town/City": string;
  District: string;
  State: string;
  Country: string;
}

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const VirtualWellnessCentres: React.FC = () => {
  const [centers, setCenters] = useState<VirtualCenter[]>([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const fetchCenters = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('virtual_centers').select('*');
      if (!error && data) {
        setCenters(data as VirtualCenter[]);
      }
      setLoading(false);
    };
    fetchCenters();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <motion.main
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
        className="flex-1 max-w-7xl mx-auto px-4 py-16"
      >
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Virtual Wellness Centres</h1>
        <p className="mb-8 text-gray-600 leading-relaxed">
          Virtual wellness centres offering online meditation sessions and guidance through certified local mentors.
        </p>
        {loading ? (
          <div className="text-center py-8 text-gray-600">Loading...</div>
        ) : centers.length === 0 ? (
          <div className="text-center py-8 text-gray-400">No virtual wellness centres found.</div>
        ) : (
          <Table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead className="text-gray-700">Name</TableHead>
                <TableHead className="text-gray-700">Phone Number</TableHead>
                <TableHead className="text-gray-700">Languages Known</TableHead>
                <TableHead className="text-gray-700">Village/Town/City</TableHead>
                <TableHead className="text-gray-700">District</TableHead>
                <TableHead className="text-gray-700">State</TableHead>
                <TableHead className="text-gray-700">Country</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {centers.map((center, idx) => (
                <TableRow key={idx} className="hover:bg-gray-50">
                  <TableCell>{center.Name}</TableCell>
                  <TableCell>{center['Phone Number']}</TableCell>
                  <TableCell>{center['Languages Known']}</TableCell>
                  <TableCell>{center['Village/Town/City']}</TableCell>
                  <TableCell>{center.District}</TableCell>
                  <TableCell>{center.State}</TableCell>
                  <TableCell>{center.Country}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </motion.main>
      <Footer />
    </div>
  );
};

export default VirtualWellnessCentres; 