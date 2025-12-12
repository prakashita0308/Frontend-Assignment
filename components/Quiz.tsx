"use client";
import React, { useState } from "react";
import questions from "../data/questions";
import { motion, useReducedMotion } from "framer-motion";
import { NavigateBefore, NavigateNext } from "./icons";
import ResultScreen from "./ResultScreen";
import Mascot from "./Mascot";
export default function Quiz() {
  const prefersReduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [finished, setFinished] = useState(false);
  function choose(i: number) {
    const next = [...answers];
    next[index] = i;
    setAnswers(next);
  }
  function next() {
    if (index < questions.length - 1) setIndex(index + 1);
    else setFinished(true);
  }
  function prev() {
    if (index > 0) setIndex(index - 1);
  }
  if (finished) {
    const score = answers.filter((ans, i) => ans === questions[i].correctIndex).length;
    return <ResultScreen score={score} total={questions.length} onRestart={() => { setAnswers(Array(questions.length).fill(-1)); setIndex(0); setFinished(false); }} />;
  }
  const q = questions[index];
  return (
    <div style={{ position: "relative" }}>
      {index === 0 && (
        <>
          <div className="speech">
            <img src="/assets/speech-bubble.png" alt="Best of luck" width={140} />
          </div>
          <Mascot />
        </>
      )}
      <header className="flex flex-col items-center mb-10">
  <div className="title-outline exact-title-box">
    <h1 className="h1-title">Test Your Knowledge</h1>
  </div>

  <div className="subtitle-pill mt-3">
    Answer all questions to see your results
  </div>
      </header>

      <section style={{ marginTop: 28, marginBottom: 28 }}>
        <div className="progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(((index + 1) / questions.length) * 100)}>
          <div className="progress-fill" style={{ width: `${((index + 1) / questions.length) * 100}%` }} />
        </div>
      </section>
      <main>
        <motion.div key={index} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: prefersReduced ? 0 : 0.35 }}>
          <div className="question-card" style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ textAlign: "center", fontWeight: 600, color: "#15313D" }}>{q.question}</div>
          </div>
          <div className="options-list" role="list">
            {q.options.map((opt, i) => {
              const selected = answers[index] === i;
              return (
                <button key={i} onClick={() => choose(i)} role="listitem" aria-pressed={selected} className={`option ${selected ? "option-selected" : ""}`}>
                  <span style={{ color: "#15313D", fontWeight: 600 }}>{opt}</span>
                </button>
              );
            })}
          </div>
          <div className="nav-group" role="group" aria-label="Navigation">
            <button aria-label="Previous" onClick={prev} className="icon-btn" disabled={index === 0}>
              <NavigateBefore />
            </button>
            <button aria-label={index === questions.length - 1 ? "Submit" : "Next"} onClick={next} className="icon-btn">
              <NavigateNext />
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
