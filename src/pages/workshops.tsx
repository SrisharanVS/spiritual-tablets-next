"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Supabase setup
if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const Workshops: React.FC = () => {
  const [upcomingImages, setUpcomingImages] = useState<string[]>([]);
  const [completedImages, setCompletedImages] = useState<string[]>([]);
  const [loadingUpcoming, setLoadingUpcoming] = useState(true);
  const [loadingCompleted, setLoadingCompleted] = useState(true);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const { data, error } = await supabase.storage
        .from("upcoming-workshops")
        .list("", { limit: 100 });

      if (error) {
        console.error("Error fetching upcoming workshops:", error);
        setLoadingUpcoming(false);
        return;
      }

      const urls = data.map((file) =>
        supabase.storage.from("upcoming-workshops").getPublicUrl(file.name).data.publicUrl
      );
      setUpcomingImages(urls);
      setLoadingUpcoming(false);
    };

    const fetchCompleted = async () => {
      const { data, error } = await supabase.storage
        .from("completed-workshops")
        .list("", { limit: 100 });

      if (error) {
        console.error("Error fetching completed workshops:", error);
        setLoadingCompleted(false);
        return;
      }

      const urls = data.map((file) =>
        supabase.storage.from("completed-workshops").getPublicUrl(file.name).data.publicUrl
      );
      setCompletedImages(urls);
      setLoadingCompleted(false);
    };

    fetchUpcoming();
    fetchCompleted();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4 text-left">
          Workshops
        </h1>

        {/* --- Upcoming Workshops --- */}
        <p className="text-white bg-green-600 inline-block px-4 py-2 rounded text-sm md:text-base mb-8">
          Upcoming Workshops
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {loadingUpcoming ? (
            <p className="text-gray-500 col-span-2">Loading upcoming workshops...</p>
          ) : upcomingImages.length > 0 ? (
            upcomingImages.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`Upcoming Workshop ${idx + 1}`}
                className="w-full h-auto object-contain border border-gray-300"
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-2">No upcoming workshops found.</p>
          )}
        </div>

        {/* --- Completed Workshops --- */}
        <p className="text-white bg-blue-500 inline-block px-4 py-2 rounded text-sm md:text-base mb-8">
          Completed Workshops
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {loadingCompleted ? (
            <p className="text-gray-500 col-span-3">Loading completed workshops...</p>
          ) : completedImages.length > 0 ? (
            completedImages.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`Completed Workshop ${idx + 1}`}
                className="w-full h-auto object-contain border border-black"
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-3">No completed workshops found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Workshops;
