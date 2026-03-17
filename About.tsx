import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-sm font-medium uppercase tracking-widest text-indigo-500 mb-8">Summary</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <p className="text-3xl font-light leading-relaxed text-indigo-950">
            As a Project Manager, I thrive on coordinating cross-functional teams, ensuring the quality of deliverables, and maintaining clear communication with stakeholders.
          </p>
          <div className="space-y-6 text-indigo-800">
            <p>
              Our team's efforts in integrating cutting-edge technologies and best practices have significantly uplifted service delivery, positioning us to lead in the dynamic landscape of IT innovations.
            </p>
            <p>
              Top Skills: Salesforce.com Implementation, Handle Multiple Projects, Agile Coaching.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
