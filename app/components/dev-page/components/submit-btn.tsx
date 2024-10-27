import React from "react";
import { FaPaperPlane } from "react-icons/fa";

interface SubmitBtnProps {
  loading: boolean;
}

export default function SubmitBtn({ loading }: SubmitBtnProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="flex flex-row items-center justify-center gap-2 h-[3rem] w-[10rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
    >
      {loading ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <div className="flex flex-row items-center gap-2">
          Send Message
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      )}
    </button>
  );
}
