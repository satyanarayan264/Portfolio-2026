import { motion } from "motion/react";

const certs = [
  { name: "Salesforce Certified Administrator", issuer: "Salesforce" },
  { name: "Salesforce certified Agentforce specialist", issuer: "Salesforce" },
  { name: "Salesforce Certified Platform Foundations", issuer: "Salesforce" },
  { name: "Agile Metrics for Success", issuer: "Project Management Institute" },
  { name: "Generative AI Overview for Project Managers", issuer: "Project Management Institute" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-sm font-medium uppercase tracking-widest text-indigo-500 mb-12">Certifications</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 bg-indigo-50 rounded-2xl border border-indigo-100"
          >
            <h3 className="text-lg font-medium mb-2 text-indigo-950">{cert.name}</h3>
            <p className="text-indigo-600 text-sm">{cert.issuer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
