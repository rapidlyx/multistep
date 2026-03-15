import React from "react";
import { animation } from "../constant/animation";
import { motion } from "framer-motion";

export const Success = () => {
  return (
    <motion.div
      key="d"
      animate="active"
      exit="exit"
      initial="enter"
      variants={animation}
      className="bg-white p-8 rounded-2xl"
    >
      <img src="Main.svg" />
      <p className="font-semibold text-[26px]">You're All Set 🔥</p>
      <p className="font-normal text-[18px] text-gray-400">
        We have received your submission. Thank you!
      </p>
    </motion.div>
  );
};
