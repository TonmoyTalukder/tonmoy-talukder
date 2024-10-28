"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { toast, Toaster } from "sonner";
import SubmitBtn from "./submit-btn";
import { useSectionInView } from "../lib/hooks";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Form validation schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  subject: yup
    .string()
    .min(5, "Subject must be at least 5 characters")
    .required("Subject is required"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [loading, setLoading] = useState(false);
  const [showToaster, setShowToaster] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    setShowToaster(true);

    console.log(data);

    // const response2 = await fetch("https://portfolio-email-server.vercel.app/");
    // const data2 = await response2.json();
    // console.log(data2);

    try {
        const response = await fetch("https://portfolio-email-server.vercel.app/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          mode: "cors", // explicitly enable CORS mode
        });

      if (response.ok) {
        toast.success("Message sent successfully!");
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        window.location.hash = "";
        reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.log("Error => ", error);
    } finally {
      setLoading(false);
      setTimeout(() => setShowToaster(false), 3000);
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
      {showToaster && <Toaster />}
      <SectionHeading>Contact Me</SectionHeading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 mt-6 p-6 bg-transparent rounded-lg shadow-lg"
      >
        <div>
          <input
            type="email"
            placeholder="Your email"
            {...register("email")}
            className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-slate-500 transition-all"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            {...register("subject")}
            className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-slate-500 transition-all"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject.message}</p>
          )}
        </div>
        <div>
          <textarea
            placeholder="Your message"
            {...register("message")}
            className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-slate-500 transition-all h-32"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>
        <div className="w-full flex items-center justify-center mt-4">
          <SubmitBtn loading={loading} />
        </div>
      </form>
    </motion.section>
  );
}
