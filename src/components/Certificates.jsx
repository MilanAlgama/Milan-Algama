import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";
import CertificateCard from "./CertificateCard";

function Certificates() {
  return (
    <section
      id="certificates"
      className="min-h-screen bg-[#050816] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-blue-400">
            Continuous Learning
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Certificates
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Certifications and courses that support my journey toward becoming a Cloud & DevOps Engineer.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {portfolioData.certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              {...certificate}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;