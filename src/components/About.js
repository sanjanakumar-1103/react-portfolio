import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-24 bg-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left side */}
        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            I’m an MCA student with a strong foundation in AI and NLP, currently
            expanding into Cloud and Frontend engineering. I enjoy transforming
            complex ideas into clean, usable systems.
          </p>
        </div>

        {/* Right side */}
        <div className="grid grid-cols-2 gap-6">
          {[
            ["AI & NLP", "Research-driven ML projects"],
            ["Cloud", "AWS deployment & hosting"],
            ["Frontend", "React + Tailwind UI"],
            ["Tools", "Git, GitHub, Python"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="p-5 rounded-xl bg-gray-50 hover:shadow-md transition"
            >
              <h4 className="font-semibold mb-1">{title}</h4>
              <p className="text-sm text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
