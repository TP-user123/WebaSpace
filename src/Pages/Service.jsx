import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO

const services = [
  {
    title: 'Custom Website Design & Development',
    description: 'Professionally designed websites tailored to your brand — responsive, fast, and optimized for all devices.',
    icon: '💻',
  },
  {
    title: 'Industry-Specific Website Packages',
    description: 'Ready-made templates adapted for businesses like gyms, salons, clinics, and startups. Delivered fast with full customization.',
    icon: '🏢',
  },
  {
    title: 'Complete Branding Kit',
    description: 'From logo design to color schemes and typography — we help you build a consistent and professional identity.',
    icon: '🎨',
  },
  {
    title: 'Website Content ',
    description: 'Engaging, SEO-friendly content tailored for your audience to help convert visitors into customers.',
    icon: '✍️',
  },
  {
    title: 'Maintenance & Support Plans',
    description: 'Ongoing updates, bug fixes, content edits, and technical support to keep your website running smoothly.',
    icon: '🔧',
  }
];

export default function ServicesPage() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
       <Helmet>
        <title>WebaSpace | Affordable Business Websites</title>
        <meta name="description" content="Launch your business online with ready-to-use responsive templates. Fast, modern & mobile-friendly." />
        <meta name="keywords" content="website templates, small business websites, WebaSpace, bakery website, fashion store website, React landing page" />
        <link rel="canonical" href="https://webaspace.netlify.app/" />
      </Helmet>
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-start"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-700 text-lg">
          Need something more specific?{' '}
          <Link to="/Contact" className="text-blue-600 font-medium underline">
            Contact us for a custom plan.
          </Link>
        </p>
      </div>
    </section>
  );
}
