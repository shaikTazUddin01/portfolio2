"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const WelcomeMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  // Check if the message has been shown before
  useEffect(() => {
    const hasSeenMessage = localStorage.getItem("welcomeMessageSeen");
    if (!hasSeenMessage) {
      setShowMessage(true);
      localStorage.setItem("welcomeMessageSeen", "true");
    }
  }, []);

  // Animation variants
  const messageVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <>
      {showMessage && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 bg-black text-white p-4 text-center"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={messageVariants}
          transition={{ duration: 0.5 }}
        >
          <p>Welcome to Our Website!</p>
        </motion.div>
      )}
    </>
  );
};
