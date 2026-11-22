"use client";

import { useState } from "react";

const questions = [
  "Does your business appear on Google Maps when you search your main service + “Delhi”?",
  "Have you received a new Google review in the last 30 days?",
  "Does your website open in under 3 seconds on mobile data?",
  "Can a visitor call or WhatsApp you in one tap from every page?",
  "Do you know how many enquiries came from Google last month?",
];

const verdicts = [
  { min: 5, title: "You’re in great shape", text: "Strong foundations. The next step is usually expanding into more keywords and nearby cities." },
  { min: 3, title: "Good start, clear gaps", text: "You’re visible, but some easy fixes are leaving enquiries on the table for competitors." },
  { min: 0, title: "Customers are struggling to find you", text: "Good news: these are some of the quickest problems to fix, and results often show within weeks." },
];

export function VisibilityQuiz({ whatsapp }: { whatsapp: string }) {
  const [answers, setAnswers] = useState<(boolean | null)[]>(Array(questions.length).fill(null));
  const done = answers.every((a) => a !== null);
  const score = answers.filter(Boolean).length;
  const verdict = verdicts.find((v) => score >= v.min)!;

  const set = (i: number, v: boolean) => setAnswers((prev) => prev.map((a, j) => (j === i ? v : a)));

  const msg = `Hi, I took the visibility check on your site and scored ${score}/5. Can you help me improve it?`;

  return (
    <div className="quiz">
      <ol className="quiz-list">
        {questions.map((q, i) => (
          <li key={q}>
            <span>{q}</span>
            <span className="quiz-btns" role="group" aria-label={`Answer question ${i + 1}`}>
              <button type="button" aria-pressed={answers[i] === true} onClick={() => set(i, true)}>
                Yes
              </button>
              <button type="button" aria-pressed={answers[i] === false} onClick={() => set(i, false)}>
                No
              </button>
            </span>
          </li>
        ))}
      </ol>
      <div className={`quiz-result${done ? " is-done" : ""}`} aria-live="polite">
        {done ? (
          <>
            <div className="quiz-score">
              <strong>{score}</strong>/5
            </div>
            <div>
              <p className="quiz-verdict">{verdict.title}</p>
              <p>{verdict.text}</p>
              <a
                className="btn btn-primary"
                href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`}
                target="_blank"
                rel="noopener"
              >
                Send my score &amp; get free tips
              </a>
            </div>
          </>
        ) : (
          <p>
            Answer all five to see your score — {answers.filter((a) => a !== null).length}/5 done.
          </p>
        )}
      </div>
    </div>
  );
}
