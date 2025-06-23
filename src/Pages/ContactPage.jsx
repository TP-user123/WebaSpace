import React from 'react';
import { Mail, Instagram } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
          Get in Touch with <span className="text-primary">WebaSpace</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Whether you need a website for your business or have a question, we’re just a message away!
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
        {/* Email Card */}
        <a
          href="mailto:webaspace001@gmail.com"
          className="w-full md:w-1/2 bg-white bg-opacity-80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300 flex flex-col items-center gap-3 hover:scale-105"
        >
          <Mail className="text-blue-600 w-8 h-8" />
          <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
          <p className="text-gray-500">webaspace001@gmail.com</p>
        </a>

        {/* Instagram Card */}
        <a
          href="https://www.instagram.com/_webaspace/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-1/2 bg-white bg-opacity-80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300 flex flex-col items-center gap-3 hover:scale-105"
        >
          <Instagram className="text-pink-500 w-8 h-8" />
          <h3 className="text-xl font-semibold text-gray-800">Follow on Instagram</h3>
          <p className="text-gray-500">_webaspace</p>
        </a>
      </div>

      <p className="mt-12 text-sm text-gray-500 text-center">
        💬 We'll get back to you within 24 hours!
      </p>
    </section>
  );
}
