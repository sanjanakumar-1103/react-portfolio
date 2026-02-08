function Contact() {
  return (
    <footer
      id="contact"
      className="bg-black text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h3 className="text-2xl font-semibold mb-4">
          Connect with me
        </h3>

        <p className="text-gray-400 mb-8">
          Let’s collaborate or talk about opportunities
        </p>

        <div className="flex justify-center gap-6 text-gray-300">
          <a
            href="https://github.com/sanjanakumar-1103"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <span className="text-gray-600">•</span>

          <a
            href="https://www.linkedin.com/in/sanjanas03"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <span className="text-gray-600">•</span>

          <a
            href="mailto:sanjanakumar0330@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          © {new Date().getFullYear()} Sanjana. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Contact;
