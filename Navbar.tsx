import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-indigo-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-xl tracking-tight text-indigo-900">Satya Narayan Behera</span>
        <div className="flex gap-6 text-sm font-medium text-indigo-600">
          <a href="#about" className="hover:text-indigo-900 transition-colors">About</a>
          <a href="#experience" className="hover:text-indigo-900 transition-colors">Experience</a>
          <a href="#certifications" className="hover:text-indigo-900 transition-colors">Certifications</a>
          <a href="#contact" className="hover:text-indigo-900 transition-colors">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}
