import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-[90vh] flex items-center justify-center overflow-hidden
                 bg-gradient-to-br from-indigo-900 via-slate-900 to-black
                 text-white px-6"
    >
      {/* Background glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl text-center z-10">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-block mb-6 px-4 py-1 rounded-full
                     bg-indigo-500/20 text-indigo-300 text-sm tracking-wide"
        >
          👋 Hello, I’m Sanjana
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          Building intelligent systems <br />
          <span className="text-indigo-400">with clean user experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12"
        >
          MCA student with strong experience in AI & NLP, now expanding into
          Cloud and Modern Frontend Engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="/resume_SANJANA.pdf"
            download
            className="px-8 py-3 bg-indigo-500 text-white rounded-xl font-medium
                       hover:bg-indigo-600 hover:scale-[1.03] transition"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="px-8 py-3 border border-white/30 rounded-xl
                       hover:bg-white/10 transition"
          >
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Fade into next section */}
     <div className="absolute bottom-0 left-0 w-full h-16
                bg-gradient-to-b from-transparent to-white" />

    </section>
  );
}

export default Hero;
