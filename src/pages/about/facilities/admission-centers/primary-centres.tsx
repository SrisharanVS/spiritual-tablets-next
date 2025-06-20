import React, { useEffect, useState, useRef } from 'react';
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

interface PrimaryCenter {
  Contact: string;
  "Center Name": string;
  "Contact Number": string;
  Language: string;
  "Village/Town/City": string;
  District: string;
  State: string;
  Country: string;
}

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const PrimaryCentres: React.FC = () => {
  const [centers, setCenters] = useState<PrimaryCenter[]>([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const fetchCenters = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('primary_centers').select('*');
      if (!error && data) {
        setCenters(data as PrimaryCenter[]);
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
      <motion.main
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
        className="flex-1 max-w-7xl mx-auto px-4 py-16"
      >
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Primary Centres</h1>
        <p className="mb-8 text-gray-600 leading-relaxed">
          Centres having pyramids where people can come and meditate for some time as per their wish. Full moon / no moon meditations will be conducted here regularly. Some centres also have libraries.
        </p>
        {loading ? (
          <div className="text-center py-8 text-gray-600">Loading...</div>
        ) : centers.length === 0 ? (
          <div className="text-center py-8 text-gray-400">No primary centres found.</div>
        ) : (
          <Table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead className="text-gray-700">Contact</TableHead>
                <TableHead className="text-gray-700">Center Name</TableHead>
                <TableHead className="text-gray-700">Contact Number</TableHead>
                <TableHead className="text-gray-700">Language</TableHead>
                <TableHead className="text-gray-700">Village/Town/City</TableHead>
                <TableHead className="text-gray-700">District</TableHead>
                <TableHead className="text-gray-700">State</TableHead>
                <TableHead className="text-gray-700">Country</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {centers.map((center, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell>{center.Contact}</TableCell>
                  <TableCell>{center["Center Name"]}</TableCell>
                  <TableCell>{center["Contact Number"]}</TableCell>
                  <TableCell>{center.Language}</TableCell>
                  <TableCell>{center["Village/Town/City"]}</TableCell>
                  <TableCell>{center.District}</TableCell>
                  <TableCell>{center.State}</TableCell>
                  <TableCell>{center.Country}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </motion.main>
    </div>
  );
};

export default PrimaryCentres; 