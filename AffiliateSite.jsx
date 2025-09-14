import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AffiliateSite() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = () => {
    if (password === "Saman") {
      setUnlocked(true);
    } else {
      alert("Wrong password! Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex flex-col items-center justify-center p-6">
      {!unlocked ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm"
        >
          <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
            Enter Password
          </h1>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full p-2 border rounded-lg mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleUnlock}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Unlock
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl font-bold mb-6">Welcome to My Affiliate Site</h1>
          <p className="mb-4">Yahan aap apna affiliate product dal sakte ho!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white text-black p-4 rounded-xl shadow">
              <h2 className="font-bold">Product 1</h2>
              <p>Affiliate product description here...</p>
            </div>
            <div className="bg-white text-black p-4 rounded-xl shadow">
              <h2 className="font-bold">Product 2</h2>
              <p>Affiliate product description here...</p>
            </div>
            <div className="bg-white text-black p-4 rounded-xl shadow">
              <h2 className="font-bold">Product 3</h2>
              <p>Affiliate product description here...</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}