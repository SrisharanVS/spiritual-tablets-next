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

interface AdmissionCenter {
  "Serial Number": number;
  "Pyramid Name": string;
  "Village/City/State": string;
  "Main Incharge": string;
  "Incharge Phone Number": number;
}

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const AdmissionCenters: React.FC = () => {
  const [centers, setCenters] = useState<AdmissionCenter[]>([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const fetchCenters = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('admission_centers').select('*');
      if (!error && data) {
        setCenters(data);
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
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Admission Centers</h1>
        <p className="mb-8 text-gray-600 leading-relaxed">
          Patient Gods are advised to stay at pyramids for a said duration ranging from 3 days to 3 months as necessary for their treatment. So, admission centers are places having Pyramids, with boarding and lodging facilities where food is provided free. This is for the entire duration of the stay.
        </p>
        {loading ? (
          <div className="text-center py-8 text-gray-600">Loading...</div>
        ) : centers.length === 0 ? (
          <div className="text-center py-8 text-gray-400">No admission centers found.</div>
        ) : (
          <Table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead className="text-gray-700">#</TableHead>
                <TableHead className="text-gray-700">Pyramid Name</TableHead>
                <TableHead className="text-gray-700">Village/City/State</TableHead>
                <TableHead className="text-gray-700">Main Incharge</TableHead>
                <TableHead className="text-gray-700">Incharge Phone Number</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {centers.map(center => (
                <TableRow key={center["Serial Number"]} className="hover:bg-gray-50">
                  <TableCell>{center["Serial Number"]}</TableCell>
                  <TableCell>{center["Pyramid Name"]}</TableCell>
                  <TableCell>{center["Village/City/State"]}</TableCell>
                  <TableCell>{center["Main Incharge"]}</TableCell>
                  <TableCell>{center["Incharge Phone Number"]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </motion.main>
    </div>
  );
};

export default AdmissionCenters; 