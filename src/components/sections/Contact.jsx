import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);
  
    const formDataObj = new FormData(e.target);
    const userEmail = formDataObj.get("email");
  
    try {
      // Send email to YOU (krishshyara25@gmail.com)
      await emailjs.sendForm(
        "service_1z2ebhq", // Service ID
        "template_2ezu7nq", // Template ID (for you)
        e.target,
        "hO7eHMyCuC10Tmryw" // Public key
      );
  
      // Send email to the User
      await emailjs.send(
        "service_1z2ebhq", // Service ID
        "template_i35ocbq", // Template ID (for the user)
        {
          name: formDataObj.get("name"),
          email: userEmail,
          message: formDataObj.get("message"),
        },
        "hO7eHMyCuC10Tmryw" // Public key
      );
  
      setFeedback({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setFeedback({
        type: "error",
        message: "Oops! Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden ${
                loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {feedback && (
            <div
              className={`mt-4 text-center ${feedback.type === "success" ? "text-green-400" : "text-red-400"}`}
            >
              {feedback.message}
            </div>
          )}

          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://www.linkedin.com/in/krish-shyara/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition text-2xl"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/krishshyara25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition text-2xl"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:krishshyara25@gmail.com?subject=Hello&body=How%20are%20you?"
              className="text-white hover:text-red-400 transition text-2xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
