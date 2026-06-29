import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "milanharsha28@gmail.com",
      link: "mailto:milanharsha28@gmail.com",
      color: "text-red-400",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+94 72 4103409",
      link: "tel:+94724103409",
      color: "text-green-400",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Kelaniya, Sri Lanka",
      link: "#",
      color: "text-blue-400",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/MilanAlgama",
      link: "https://github.com/MilanAlgama",
      color: "text-white",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Coming Soon",
      link: "#",
      color: "text-[#0A66C2]",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] text-blue-400">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing Cloud Computing,
            DevOps, Full Stack Development and exciting
            opportunities. Feel free to contact me.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <div className="space-y-6">

            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.03,
                }}
                className="flex items-center gap-5 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition"
              >
                <div className={`text-3xl ${item.color}`}>
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-gray-400">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

          </div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-[1.02] transition-all duration-300 font-semibold shadow-[0_0_25px_rgba(59,130,246,0.5)]"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;