import { motion, useScroll } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import Navbar from "./components/Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      {/* HERO */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Saicharan
              </span>{" "}
              👋
            </h1>

            <div className="mt-4 text-2xl text-blue-400 font-medium">
              <TypeAnimation
                sequence={[
                  "Oracle Certified Java SE 17 Developer",
                  1500,
                  "AI & Backend Engineer",
                  1500,
                  "Product-Focused Software Engineer",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="mt-6 text-gray-400 max-w-lg">
              Strong in DSA, backend systems, REST APIs and AI applications.
              Passionate about building scalable and high-performance systems.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a href="#projects">
                <button className="px-6 py-3 bg-blue-600 rounded-lg shadow-lg hover:scale-105 transition">
                  View Projects
                </button>
              </a>

              <a href="/Saicharan_Resume.pdf" download>
                <button className="px-6 py-3 border border-blue-500 rounded-lg hover:bg-blue-500/10 hover:scale-105 transition">
                  Download Resume
                </button>
              </a>
            </div>

            <div className="mt-6 flex gap-6 text-2xl text-gray-400">
              <a href="https://github.com/Saicharan345" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-blue-400 hover:scale-110 transition" />
              </a>
              <a href="https://www.linkedin.com/in/bagadi-sai-charan-33a81a312" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-blue-400 hover:scale-110 transition" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative flex justify-center">
            <div className="absolute w-80 h-80 bg-blue-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>

            <div className="relative w-72 h-72 rounded-full border-4 border-blue-500 shadow-2xl shadow-blue-500/30 overflow-hidden hover:scale-105 transition">
              <img src="/profile.jpg" alt="Saicharan" className="w-full h-full object-cover object-top" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["MindArena", "GenTrip", "E-Commerce"].map((title, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:shadow-blue-500/30 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-400 text-sm">
                High-performance deployed full-stack application with authentication.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* SKILLS */}
<section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
  <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">
    Technical Skills
  </h2>

  <div className="grid md:grid-cols-3 gap-12">

    {/* Languages */}
    <div>
      <h3 className="text-xl font-semibold mb-6 text-white">Languages</h3>
      <div className="flex flex-wrap gap-3">
        {["Java", "Python", "C++", "C", "JavaScript"].map(skill => (
          <span
            key={skill}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-blue-500/20 hover:border-blue-400 hover:scale-105 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Frameworks */}
    <div>
      <h3 className="text-xl font-semibold mb-6 text-white">Frameworks</h3>
      <div className="flex flex-wrap gap-3">
        {["Flask", "ReactJS", "SQLAlchemy", "Firebase"].map(skill => (
          <span
            key={skill}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-blue-500/20 hover:border-blue-400 hover:scale-105 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Core Concepts */}
    <div>
      <h3 className="text-xl font-semibold mb-6 text-white">Core Concepts</h3>
      <div className="flex flex-wrap gap-3">
        {[
          "DSA",
          "OOP",
          "Recursion",
          "Time Complexity",
          "Space Complexity",
          "DBMS",
          "REST APIs",
          "Authentication"
        ].map(skill => (
          <span
            key={skill}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-blue-500/20 hover:border-blue-400 hover:scale-105 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          Contact Me
        </h2>

        <div className="space-y-6 text-center text-gray-300">
          <div className="flex justify-center gap-3 items-center">
            <FaEnvelope className="text-blue-400" />
            <span>saicharanbagadi@gmail.com</span>
          </div>

          <div className="flex justify-center gap-3 items-center">
            <FaPhone className="text-blue-400" />
            <span>+91 8143332006</span>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-500 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Saicharan | Ultra Portfolio v4
      </footer>
    </>
  );
}

export default App;