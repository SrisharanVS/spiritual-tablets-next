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

console.log(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

interface BoardMember {
  "Serial Number": number;
  "Name of the Trust Board Member": string;
  "Designation": string;
}

const TABLES = [
  {
    key: 'nityananda',
    table: 'nityananda_trust',
    heading: 'Sri Nityananda Pyramid Sahaja Dhyana Arogya Seva Trust',
  },
  {
    key: 'dhanvantari',
    table: 'dhanvantari_trust',
    heading: 'Dhanvantari Pyramid Dhayana Arogya Seva Trust',
  },
  {
    key: 'anando',
    table: 'anando_brahma_youth_trust',
    heading: 'Anando Brahma Youth Trust',
  },
  {
    key: 'spiritual',
    table: 'spiritual_tablets_research_foundation',
    heading: 'Spiritual Tablets Research Foundation',
  },
  {
    key: 'indra',
    table: 'indra_pyramidshakthi_trust',
    heading: 'Indra Pyramidshakthi Grameena Jagarana Seva Trust',
  },
  {
    key: 'divine',
    table: 'divine_parenting_trust',
    heading: 'Divine Parenting Trust',
  },
  {
    key: 'jagganadh',
    table: 'jagganadh_pyramid_trust',
    heading: 'Jagganadh Pyramid Trust',
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const TrustSection: React.FC<{
  table: string;
  heading: string;
}> = ({ table, heading }) => {
  const [members, setMembers] = useState<BoardMember[]>([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      const { data, error } = await supabase.from(table).select('*');
      if (!error && data) {
        setMembers(data);
      }
      setLoading(false);
    };
    fetchMembers();
  }, [table]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
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
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
      className="mb-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-300">{heading}</h2>
      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : members.length === 0 ? (
        <div className="text-center py-8 text-gray-300">No board members found.</div>
      ) : (
        <Table className="min-w-full border border-yellow-500 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-yellow-700 hover:bg-yellow-700">
              <TableHead className="text-yellow-200 uppercase">Serial Number</TableHead>
              <TableHead className="text-yellow-200 uppercase">Name of the Trust Board Member</TableHead>
              <TableHead className="text-yellow-200 uppercase">Designation</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map(member => (
              <TableRow key={member["Serial Number"]} className="odd:bg-[#0d2e29] even:bg-[#0f3b34] hover:bg-[#184e42] transition-colors">
                <TableCell className="px-4 py-3 text-white border-b border-yellow-500">{member["Serial Number"]}</TableCell>
                <TableCell className="px-4 py-3 text-white border-b border-yellow-500">{member["Name of the Trust Board Member"]}</TableCell>
                <TableCell className="px-4 py-3 text-white border-b border-yellow-500">{member["Designation"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </motion.section>
  );
};

const Trusts: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#142c2b] text-white flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400">Our Trusts</h1>
        {TABLES.map(({ table, heading, key }) => (
          <TrustSection key={key} table={table} heading={heading} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Trusts; 