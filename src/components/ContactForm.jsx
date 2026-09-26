import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      console.warn(
        "EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY to your .env file."
      );
      return;
    }

    setStatus("sending");
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setStatus("success");
        formRef.current.reset();
      },
      (err) => {
        console.error(err);
        setStatus("error");
      }
    );
  };

  const inputClass =
    "w-full bg-canvas-soft border border-hairline rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-violet-glow transition-colors";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      {/* Fixed recipient — set your EmailJS template's "To Email" field to {{to_email}} */}
      <input type="hidden" name="to_email" value="shivamhirwani069@gmail.com" />
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-xs font-semibold text-ink-mute mb-1.5 block">Full name</label>
          <input name="user_name" required className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label className="text-xs font-semibold text-ink-mute mb-1.5 block">Email</label>
          <input type="email" name="user_email" required className={inputClass} placeholder="you@email.com" />
        </div>
      </div>
      <div>
        <label className="text-xs font-semibold text-ink-mute mb-1.5 block">Phone</label>
        <input name="user_phone" className={inputClass} placeholder="+91 00000 00000" />
      </div>
      <div>
        <label className="text-xs font-semibold text-ink-mute mb-1.5 block">Message</label>
        <textarea name="message" required rows={5} className={inputClass} placeholder="How can we help?" />
      </div>

      <motion.button
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary w-full sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </motion.button>

      {status === "success" && (
        <p className="text-sm text-teal-deep font-medium">Thanks! We'll get back to you shortly.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 font-medium">
          Couldn't send — check your EmailJS keys in .env (see .env.example).
        </p>
      )}
    </form>
  );
}
