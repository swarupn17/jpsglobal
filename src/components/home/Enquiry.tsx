"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Enquiry() {
  const [formFeedback, setFormFeedback] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const fields = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Website enquiry: ${fields.get("interest")}`);
    const body = encodeURIComponent(
      `Name: ${fields.get("name")}\nEmail: ${fields.get("email")}\nInterest: ${fields.get("interest")}\n\nRequirement:\n${fields.get("message")}`
    );

    window.location.href = `mailto:info@jpsglobaltrade.com?subject=${subject}&body=${body}`;
    setFormFeedback("Your email app is opening with the enquiry prepared.");
  }

  return (
    <section id="contact" className="enquiry">

      <div className="enquiry-main">

        <motion.div
          className="enquiry-heading"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span className="enquiry-label">
            START A CONVERSATION
          </span>

          <h2>
            Let&apos;s work
            <br />
            together.
          </h2>

          <p>
            Tell us what you are looking for.
            Whether it is spices, medical devices,
            sourcing, or an import-export requirement,
            we would be happy to understand your needs.
          </p>
        </motion.div>


        <motion.form
          className="enquiry-form"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          onSubmit={handleSubmit}
        >

          <label>
            <span>Your name</span>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </label>


          <label>
            <span>Business email</span>

            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              required
            />
          </label>


          <label>
            <span>What are you looking for?</span>

            <select name="interest" defaultValue="" required>
              <option value="" disabled>
                Select an area
              </option>

              <option value="spices">
                Spices
              </option>

              <option value="medical-devices">
                Medical Devices
              </option>

              <option value="import-export">
                Import / Export
              </option>

              <option value="other">
                Other
              </option>
            </select>
          </label>


          <label>
            <span>Message</span>

            <textarea
              name="message"
              rows={3}
              placeholder="Tell us about your requirement..."
              required
            />
          </label>


          <button
            type="submit"
            className="enquiry-submit"
          >
            <span>Send enquiry</span>

            <span className="enquiry-submit-icon">
              <ArrowUpRight size={21} />
            </span>
          </button>

          {formFeedback && (
            <p className="enquiry-form-feedback" role="status">
              {formFeedback}
            </p>
          )}

        </motion.form>

      </div>


      <div className="enquiry-bottom">

        <div className="enquiry-contact-list">

          <a href="mailto:info@jpsglobaltrade.com">
            <span>EMAIL</span>
            <strong>info@jpsglobaltrade.com</strong>
          </a>

          <a href="tel:+917588665655">
            <span>PHONE</span>
            <strong>+91 7588665655</strong>
          </a>

        </div>

      </div>

    </section>
  );
}
