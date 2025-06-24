import Navbar from "./Navbar";
import Template from '../Pages/Template';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async"; // Import Helmet for SEO

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Home = () => {
  return (
    <div className="bg-[#F4EBDC] text-gray-800 font-sans">
       <Helmet>
        <title>WebaSpace | Affordable Business Websites</title>
        <meta name="description" content="Launch your business online with ready-to-use responsive templates. Fast, modern & mobile-friendly." />
        <meta name="keywords" content="website templates, small business websites, WebaSpace, bakery website, fashion store website, React landing page" />
        <link rel="canonical" href="https://webaspace.netlify.app/" />
      </Helmet>
      <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 py-20 gap-10">
  {/* Text Section */}
  <div className="md:w-1/2 flex flex-col items-center text-center space-y-6">
    <motion.h1
      className="text-5xl font-bold leading-tight text-[#2D2A2A] max-w-3xl"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={1}
    >
      Responsive Websites for Every Business
    </motion.h1>
    <motion.p
      className="text-lg text-gray-700 max-w-xl"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={2}
    >
      Create sleek, high-performance, and mobile-optimized websites designed
      specifically for your industry — blending innovation with effortless user experience.
    </motion.p>
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={3}
    >
      <Link
        to="/Contact"
        className="inline-block bg-[#FF725E] text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-[#ff5d46] transition"
      >
        Get Started
      </Link>
    </motion.div>
  </div>

  {/* Image Section */}
  <motion.div
    className="md:w-1/2 flex justify-center"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <img
      src="https://static.vecteezy.com/system/resources/previews/007/240/117/non_2x/a-well-designed-flat-illustration-of-business-growth-vector.jpg"
      alt="poster"
      className="rounded-3xl shadow-lg border border-gray-300 w-full max-w-md"
    />
  </motion.div>
</section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why WebaSpace?
        </motion.h2>
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Fast Development",
              img: "https://cdn.dribbble.com/users/1233499/screenshots/3850691/web-development.gif",
              desc: "Launch your website in record time using our flexible and reusable templates.",
            },
            {
              title: "Fully Responsive",
              img: "https://i.pinimg.com/originals/61/41/ff/6141fff67cdec35bf010cd3cd5cd602b.gif",
              desc: "Every website looks perfect across all screen sizes — from phones to desktops.",
            },
            {
              title: "Easy Customization",
              img: "https://www.bing.com/th/id/OGC.0f3566436fb475c8e00b5f6022499794?pid=1.7&rurl=https%3a%2f%2fblog.sagipl.com%2fwp-content%2fuploads%2f2018%2f09%2fweb-development-gif.gif&ehk=Rc%2bjwk%2fh3oM00%2b2o%2fIs8uaSWdoIatxu6M7shHUMRWt4%3d",
              desc: "Easily update layout, branding, and content without writing complex code.",
            },
            {
              title: "Performance First",
              img: "https://www.sataware.com/wp-content/uploads/2021/01/Enterprise-app-development-1.4-sataware.gif",
              desc: "We focus on speed and performance to ensure lightning-fast user experiences.",
            },
            {
              title: "Real Support",
              img: "https://www.bing.com/th/id/OGC.7a0e334da70603bc107f1349ec180e0b?pid=1.7&rurl=https%3a%2f%2fwww.fegno.com%2fwp-content%2fuploads%2f2022%2f03%2fweb-development-company-in-kochi.gif&ehk=UhQUAJvQY3MeuSObW3ilnCfEkCW5eibcboqxcIQQ%2bK4%3d",
              desc: "Get personalized assistance and ongoing support from our expert team.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="group bg-white rounded-2xl shadow-md overflow-hidden relative hover:shadow-xl transition-shadow"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              custom={i + 1}
              viewport={{ once: true }}
            >
              <img src={card.img} alt={card.title} className="w-full h-52 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{card.title}</h3>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-white p-4 text-sm text-gray-600 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                {card.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Templates Preview */}
      <section className="bg-white py-20 px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-900"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          custom={1}
          viewport={{ once: true }}
        >
        </motion.h2>
        <Template />
      </section>

      {/* Final CTA */}
      <motion.section
        className="text-center py-20 px-6 bg-[#F4EBDC]"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        custom={1}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Build Your Website?</h2>
        <p className="mb-8 text-gray-700 text-lg">
          Let’s turn your ideas into a stunning website with WebaSpace.
        </p>
        <Link
          to="/Contact"
          className="inline-block bg-[#FF725E] text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-[#ff5d46] transition"
        >
          Start Your Project with WebaSpace
        </Link>
      </motion.section>
    </div>
  );
};

export default Home;
