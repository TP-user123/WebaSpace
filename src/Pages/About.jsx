import React from "react";
import logo from "../../public/webaspace.jpg"; // Adjust the path as necessary

function About() {
  return (
    <div className="bg-[#F4EBDC] text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <img
          src={logo}
          alt="WebaSpace Logo"
          className="w-28 h-28 mx-auto rounded-full mb-6 shadow-lg border border-gray-300"
        />
        <h1 className="text-5xl font-bold mb-3">About WebaSpace</h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          We build elegant websites tailored for businesses like yours —
          fast, modern, and mobile-friendly.
        </p>
      </section>

      {/* Who We Are */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto bg-[#fdfaf3] p-10 rounded-3xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-center mb-6">🚀 Who We Are</h2>
          <p className="text-lg leading-relaxed text-gray-700 text-center">
            At <span className="font-semibold text-[#FF725E]">WebaSpace</span>, we’re a team of creative designers,
            developers, and digital thinkers, committed to making the web better. We
            specialize in building <span className="font-medium">industry-specific website templates</span> that help
            businesses get online quickly — without compromising on design or quality.
            Whether you're a startup, small shop, or brand, we create professional sites
            that reflect your personality and power your presence online.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-md border border-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-4">🎯 Our Mission</h2>
          <p className="text-lg text-gray-700">
            To <span className="font-semibold">empower businesses of all sizes</span> with a powerful online presence —
            fast, affordable, and beautifully designed to help you grow in the digital era.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6">
        <p className="text-center text-sm text-gray-500 px-4">
          📸 <span className="italic">Disclaimer:</span> Images and GIFs used on this website are sourced from free image
          platforms across the internet. All rights belong to their respective owners.
        </p>
      </section>
    </div>
  );
}

export default About;
