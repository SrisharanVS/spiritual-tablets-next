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

interface Counsellor {
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

const Counsellors: React.FC = () => {
  const [counsellors, setCounsellors] = useState<Counsellor[]>([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const fetchCounsellors = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('counsellors').select('*');
      if (!error && data) {
        setCounsellors(data as Counsellor[]);
      }
      setLoading(false);
    };
    fetchCounsellors();
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
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Counsellors</h1>
        <p className="mb-8 text-gray-600 leading-relaxed">
          Meet our certified counsellors offering spiritual guidance through meditation and personal sessions.
        </p>
        {loading ? (
          <div className="text-center py-8 text-gray-600">Loading...</div>
        ) : counsellors.length === 0 ? (
          <div className="text-center py-8 text-gray-400">No counsellors found.</div>
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
              {counsellors.map((c, idx) => (
                <TableRow key={idx} className="hover:bg-gray-50">
                  <TableCell>{c.Name}</TableCell>
                  <TableCell>{c['Phone Number']}</TableCell>
                  <TableCell>{c['Languages Known']}</TableCell>
                  <TableCell>{c['Village/Town/City']}</TableCell>
                  <TableCell>{c.District}</TableCell>
                  <TableCell>{c.State}</TableCell>
                  <TableCell>{c.Country}</TableCell>
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

export default Counsellors; 