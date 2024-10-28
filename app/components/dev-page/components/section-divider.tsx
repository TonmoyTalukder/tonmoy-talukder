"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="block"  //hidden sm:
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}

      style={{
        marginBottom: '20vh'
      }}
    >
      {/* Arrow Icon with Bouncing Animation */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 mx-auto text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        initial={{ y: 0 }}
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v16m0 0l-4-4m4 4l4-4"
        />
      </motion.svg>

      {/* Drop Effect */}
      <motion.div
        className="w-3 h-3 bg-gray-400 rounded-full mx-auto mt-1"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0.5, 0, 0.5],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
