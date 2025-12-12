"use client";
import { motion } from "framer-motion";
export default function ResultScreen({ score, total, onRestart }: { score: number; total: number; onRestart: () => void; }) {
  const percent = Math.round((score / total) * 100);
  return (
    <div className="result-wrapper">
      <div className="subtitle-pill">Keep Learning!</div>
      <h2 style={{ color: "#15313D" }} className="h1-title" aria-hidden> Your Final score is</h2>
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
        <div style={{ color: "#15313D" }} className="text-[120px] font-[400] leading-none text-center font-dmserif">{percent}<span style={{ fontSize: 44, marginLeft: 8 }}>%</span></div>
        <div className="mt-12" style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={onRestart} className="px-8 py-3 rounded-md" style={{ background: "linear-gradient(90deg, #D6EEF9, #C8E7F5)", color: "#15313D" }}>Start Again</button>
        </div>
      </motion.div>
    </div>
  );
}
