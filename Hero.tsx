import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-8xl font-medium tracking-tighter mb-8 text-indigo-950">
          Salesforce<br />
          <span className="text-indigo-500">Project Manager</span>
        </h1>
        <p className="text-xl text-indigo-700 max-w-2xl mb-12">
          Satya Narayan Behera. Based in Ahmedabad, Gujarat, India.
          Coordinating cross-functional teams to deliver cutting-edge IT solutions.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-medium hover:bg-indigo-700 transition-colors"
        >
          Get in Touch <ArrowRight size={18} />
        </motion.a>
      </motion.div>
    </section>
  );
}
