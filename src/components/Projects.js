import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects" className="py-28 bg-indigo-50 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* ⭐ Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl p-10
                       border-2 border-indigo-500
                       scale-[1.03] hover:-translate-y-2 transition"
          >
            <div className="text-xs text-indigo-600 font-semibold mb-2">
              ⭐ Featured Project
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Language Bridge (OCR Translation)
            </h3>

            <p className="text-sm text-gray-500 mb-4">
              AI • OCR • NLP
            </p>

            <p className="text-gray-600 mb-6">
              Built a system to translate educational content for regional
              students using OCR and NLP pipelines, improving accessibility of
              learning materials for non-English speakers.
            </p>

            <div className="flex gap-3 items-center">
              <span className="px-4 py-2 bg-gray-200 text-gray-500 rounded-lg text-sm cursor-not-allowed">
                Code Updating
              </span>
            </div>
          </motion.div>

          {/* In-Progress Project */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-2 transition"
          >
            <div className="text-xs text-amber-600 font-semibold mb-2">
              🔄 In Progress
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Bengali Hate Speech Detection
            </h3>

            <p className="text-sm text-gray-500 mb-4">
              NLP • Transfer Learning
            </p>

            <p className="text-gray-600 mb-6">
              Transfer learning–based system for detecting hate speech in Bengali
              text using contextual signals and language-specific patterns.
            </p>

            <span className="text-sm text-gray-400">
              Repository will be published soon
            </span>
          </motion.div>

          {/* Certified Project */}
          {/* Project 3 */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-2 transition"
>
   <div className="text-xs text-emerald-600 font-semibold mb-2">
              🎓 Certified Project
            </div>

  <h3 className="text-xl font-semibold mb-2">
    Twitter Sentiment Analysis
  </h3>

  <p className="text-sm text-gray-500 mb-4">
    NLP • Machine Learning
  </p>

  <p className="text-gray-600 mb-6">
    Sentiment analysis project completed as part of AI certification.
    Focused on NLP pipelines and classification techniques.
  </p>
<span className="text-sm text-gray-400">
              Code unavailable • Certification verified</span>
  <div className="flex gap-3">
    <a
      href="/Certificate.pdf"
      target="_blank"
      rel="noreferrer"
      className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition"
    >
      View Certificate
    </a>
  </div>
</motion.div>


            
            
         
        </div>
      </div>
    </section>
  );
}

export default Projects;
