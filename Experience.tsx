import { motion } from "motion/react";

const experiences = [
  { title: "Project Manager", company: "Astound Digital", year: "May 2025 - Present" },
  { title: "Associate Delivery Manager", company: "Civica India", year: "April 2024 - May 2025" },
  { title: "Project Manager", company: "IndiaNIC Infotech Limited", year: "May 2021 - March 2024" },
  { title: "Client Service Head", company: "eProcurement Technologies Ltd", year: "April 2019 - May 2021" },
  { title: "Functional Lead / Project Manager", company: "eProcurement Technologies Ltd", year: "March 2014 - April 2019" },
  { title: "Executive CRM", company: "Antares Systems Limited", year: "May 2008 - July 2009" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-sm font-medium uppercase tracking-widest text-indigo-500 mb-12">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="grid md:grid-cols-3 gap-6 items-baseline border-b border-indigo-100 pb-12"
          >
            <div className="text-indigo-400 text-sm font-medium">{exp.year}</div>
            <div className="text-2xl font-medium text-indigo-950">{exp.title}</div>
            <div className="text-indigo-700">{exp.company}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
