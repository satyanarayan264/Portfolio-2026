import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-sm font-medium uppercase tracking-widest text-indigo-500 mb-8">Contact</h2>
        <p className="text-4xl font-light mb-12 text-indigo-950">Let's work together.</p>
        <a
          href="mailto:satyanarayan264@gmail.com"
          className="text-2xl font-medium border-b-2 border-indigo-600 text-indigo-900 hover:text-indigo-600 hover:border-indigo-500 transition-colors"
        >
          satyanarayan264@gmail.com
        </a>
        <p className="mt-6 text-indigo-700">9558167782</p>
      </motion.div>
    </section>
  );
}
