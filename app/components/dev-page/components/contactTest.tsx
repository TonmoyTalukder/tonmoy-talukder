"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SubmitBtn from "./submit-btn";
import { useSectionInView } from "../lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const senderEmail = formData.get("senderEmail") as string;
    const message = formData.get("message") as string;

    try {
      // const response = await fetch("/api/sendEmail", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ senderEmail, message }),
      // });

      // if (response.ok) {
      //   toast.success("Email sent successfully!");
      //   e.currentTarget.reset(); // Clears the form after successful submission
      // } else {
      //   toast.error("Failed to send email");
      // }
      console.log(JSON.stringify({ senderEmail, message }));
    } catch (error) {
      toast.error("An error occurred while sending the email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <form className="mt-10 flex flex-col" onSubmit={handleSubmit}>
        <input
          className="h-14 px-4 rounded-lg borderBlack transition-all"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 transition-all"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn loading={loading} />
      </form>
    </motion.section>
  );
}
