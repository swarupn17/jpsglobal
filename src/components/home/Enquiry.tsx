"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Enquiry() {
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
          onSubmit={(event) => event.preventDefault()}
        >

          <label>
            <span>Your name</span>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </label>


          <label>
            <span>Business email</span>

            <input
              type="email"
              name="email"
              placeholder="you@company.com"
            />
          </label>


          <label>
            <span>What are you looking for?</span>

            <select name="interest" defaultValue="">
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

        </motion.form>

      </div>


      <div className="enquiry-bottom">

        <div className="enquiry-contact-list">

          <a href="mailto:jpsglobaltrade@gmail.com">
            <span>EMAIL</span>
            <strong>jpsglobaltrade@gmail.com</strong>
          </a>

          <a href="tel:+917588666665">
            <span>PHONE</span>
            <strong>+91 7588666665</strong>
          </a>

        </div>

      </div>

    </section>
  );
}