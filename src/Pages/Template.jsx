import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO
const templates = [
  {
    title: "Bakery Website Template",
    description: "A sweet and modern layout tailored for bakeries and cafes.",
    videoSrc: "https://res.cloudinary.com/dwwozqlzs/video/upload/iyws8de8ulkvuuqs637j.mp4",   
  },
  {
    title: "Clothing Store Template",
    description: "A stylish and responsive fashion store homepage design.",
    videoSrc: "https://res.cloudinary.com/dwwozqlzs/video/upload/ozcwt2fpnxporktjwmze.mp4", 
  },
  {
    title: "Gifts & Crafts Template",
    description: "Perfect for handmade gift shops or local creative businesses.",
    videoSrc: "https://res.cloudinary.com/dwwozqlzs/video/upload/yuexsusu5woqtmloxeei.mp4", 
  },
];


export default function Template() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-12">
         <Helmet>
        <title>WebaSpace | Affordable Business Websites</title>
        <meta name="description" content="Launch your business online with ready-to-use responsive templates. Fast, modern & mobile-friendly." />
        <meta name="keywords" content="website templates, small business websites, WebaSpace, bakery website, fashion store website, React landing page" />
        <link rel="canonical" href="https://webaspace.netlify.app/" />
      </Helmet>
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Templates Preview</h2>

        {/* FIXED: flex-wrap layout for side-by-side display on large screens */}
        <div className="flex flex-wrap justify-center gap-8">
          {templates.map((template, index) => (
        <motion.div
  key={index}
  className="relative group w-full sm:w-[90%] md:w-[45%] lg:w-[30%] max-w-[500px] rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white cursor-pointer"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.2 }}
  viewport={{ once: true }}
  onClick={() => setSelectedVideo(template.videoSrc)}
>
  {/* Video with zoom-in on hover */}
  <video
    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
    autoPlay
    muted
    loop
    playsInline
    controls={false}
    title={template.title}
  >
    <source src={template.videoSrc} type="video/mp4" />
  </video>

  {/* Overlay with hover text */}
  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
    <p className="text-white text-lg font-semibold">▶ Watch Preview</p>
  </div>

  <div className="p-4 text-center bg-white">
    <h3 className="text-xl font-semibold text-gray-800">{template.title}</h3>
    <p className="text-sm text-gray-600 mt-2">{template.description}</p>
  </div>
</motion.div>

          ))}
        </div>
      </section>

      {/* Video modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-[90vw] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className="w-full rounded-lg shadow-xl"
              src={selectedVideo}
              controls
              autoPlay
            />
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full p-1 hover:bg-red-500 hover:text-white transition"
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
