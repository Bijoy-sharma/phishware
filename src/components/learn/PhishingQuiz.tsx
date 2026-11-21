
"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, RotateCcw, Award } from "lucide-react";

const questions = [
  {
    question: "What is the main difference between phishing and spear phishing?",
    options: [
      "Phishing only targets companies",
      "Spear phishing targets specific individuals using personalized information",
      "Phishing always uses phone calls",
      "There is no difference",
    ],
    answer: 1,
    explanation:
      "Spear phishing is personalized and directed at specific targets, while traditional phishing often targets many people with similar messages.",
  },
  {
    question: "An email claims your account will be suspended in 10 minutes. What is the warning sign?",
    options: [
      "Professional formatting",
      "Urgency and pressure to act quickly",
      "A familiar company name",
      "A normal greeting",
    ],
    answer: 1,
    explanation:
      "Attackers frequently use urgency to prevent people from thinking carefully or verifying a request.",
  },
  {
    question: "What is whaling?",
    options: [
      "A phishing attack targeting senior executives or high-value individuals",
      "A mass email campaign targeting everyone",
      "A type of antivirus software",
      "A network monitoring technique",
    ],
    answer: 0,
    explanation:
      "Whaling is a targeted form of phishing aimed at senior executives and other high-value individuals.",
  },
  {
    question: "Which situation is an example of Business Email Compromise (BEC)?",
    options: [
      "Receiving a normal company newsletter",
      "A fake supplier requests payment to a new bank account",
      "Installing an approved software update",
      "Receiving an expected meeting invitation",
    ],
    answer: 1,
    explanation:
      "BEC commonly involves impersonating a trusted business contact to manipulate someone into transferring money or sharing sensitive information.",
  },
  {
    question: "An unexpected message threatens disciplinary action unless confidential information is provided immediately. What should the employee do?",
    options: [
      "Respond immediately",
      "Share only part of the information",
      "Follow the link to resolve the issue",
      "Pause and verify through an official channel",
    ],
    answer: 3,
    explanation:
      "Threats and urgency are common manipulation techniques. Pause and verify the request using a separate, trusted communication channel.",
  },
];

export default function PhishingQuiz() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

const score = questions.reduce(
  (total, question, index) =>
    total + (answers[index] === question.answer ? 1 : 0),
  0
);

const answeredCount = answers.filter(
  (answer) => typeof answer === "number"
).length;

const allAnswered = answeredCount === questions.length;

const progressPercentage =
  (answeredCount / questions.length) * 100;

const scorePercentage = Math.round(
  (score / questions.length) * 100
);

const performanceLevel =
  score === questions.length
    ? "Excellent"
    : score >= 4
      ? "Very Good"
      : score === 3
        ? "Good"
        : "Needs Improvement";

const performanceMessage =
  score === questions.length
    ? "Outstanding! You have mastered this topic."
    : score >= 4
      ? "Great work! You understand most phishing concepts."
      : score === 3
        ? "Good effort! Review the explanations to improve."
        : "Keep learning! Review this module and try again.";

  function selectAnswer(questionIndex: number, optionIndex: number) {
    if (submitted) return;

    setAnswers((previous) => {
      const updated = [...previous];
      updated[questionIndex] = optionIndex;
      return updated;
    });
  }

  function resetQuiz() {
    setAnswers([]);
    setSubmitted(false);
  }

  return (
    <section className="mt-8 rounded-2xl border border-violet-400/20 bg-[#101728] p-6 sm:p-8">
      <div className="mb-7">
        <p className="text-xs font-bold tracking-widest text-violet-400">
          KNOWLEDGE ASSESSMENT
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white">
          Test Your Knowledge
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Answer all five questions to check your understanding of phishing
          and spear phishing.
        </p>
      </div>

      <div className="mb-7">
  <div className="mb-2 flex justify-between text-xs">
    <span className="text-slate-400">
      Questions completed
    </span>
    <span className="font-semibold text-violet-300">
      {answeredCount}/{questions.length}
    </span>
  </div>

  <div className="h-2 overflow-hidden rounded-full bg-white/10">
    <div
      className="h-full rounded-full bg-violet-500 transition-all duration-300"
      style={{ width: `${progressPercentage}%` }}
    />
  </div>
</div>

      <div className="space-y-8">
        {questions.map((question, questionIndex) => (
          <div key={questionIndex}>
            <p className="mb-4 text-xs font-bold text-violet-400">
              QUESTION {questionIndex + 1}
            </p>

            <h3 className="mb-4 text-sm font-semibold leading-6 text-white">
              {question.question}
            </h3>

            <div className="space-y-2">
              {question.options.map((option, optionIndex) => {
                const selected = answers[questionIndex] === optionIndex;
                const correct = question.answer === optionIndex;

                let optionStyle =
                  "border-white/[0.08] bg-white/[0.02] hover:border-violet-400/40";

                if (selected && !submitted) {
                  optionStyle =
                    "border-violet-400 bg-violet-500/10";
                }

                if (submitted && correct) {
                  optionStyle =
                    "border-emerald-400/50 bg-emerald-500/10";
                } else if (submitted && selected && !correct) {
                  optionStyle =
                    "border-red-400/50 bg-red-500/10";
                }

                return (
                  <button
                    key={optionIndex}
                    type="button"
                    disabled={submitted}
                    onClick={() =>
                      selectAnswer(questionIndex, optionIndex)
                    }
                    className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left text-sm transition ${optionStyle}`}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/[0.08] text-[10px] font-bold text-slate-300">
                      {String.fromCharCode(65 + optionIndex)}
                    </span>

                    <span className="flex-1 text-slate-200">
                      {option}
                    </span>

                    {submitted && correct && (
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-emerald-400"
                      />
                    )}

                    {submitted && selected && !correct && (
                      <XCircle
                        size={17}
                        className="shrink-0 text-red-400"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {submitted && (
              <div className="mt-3 rounded-lg border border-white/[0.06] bg-white/[0.03] p-4">
                <p
                  className={`mb-2 text-xs font-bold ${
                    answers[questionIndex] === question.answer
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >
                  {answers[questionIndex] === question.answer
                    ? "Correct answer"
                    : "Incorrect answer"}
                </p>
                <p className="text-sm leading-6 text-slate-400">
                  {question.explanation}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted ? (
        <button
          type="button"
          disabled={!allAnswered}
          onClick={() => setSubmitted(true)}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-4 text-sm font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Submit Assessment
        </button>
      ) : (
        <div className="mt-8 rounded-xl border border-violet-400/20 bg-violet-500/[0.07] p-6 text-center">
  <Award size={34} className="mx-auto text-violet-300" />

  <h3 className="mt-3 text-xl font-bold text-white">
    Assessment Complete
  </h3>

  <div className="mt-5">
    <p className="text-4xl font-bold text-violet-300">
      {score}/{questions.length}
    </p>

    <p className="mt-2 text-sm font-semibold text-slate-300">
      {scorePercentage}% Score
    </p>
  </div>

  <div className="mx-auto mt-5 inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2">
    <span className="text-sm font-bold text-violet-300">
      {performanceLevel}
    </span>
  </div>

  <p className="mt-4 text-sm leading-6 text-slate-400">
    {performanceMessage}
  </p>

  <button
    type="button"
    onClick={resetQuiz}
    className="mt-6 inline-flex items-center gap-2 rounded-lg border border-violet-400/30 px-5 py-3 text-sm font-semibold text-violet-300 transition hover:bg-violet-500/10"
  >
    <RotateCcw size={15} />
    Retake Quiz
  </button>
</div>
      )}
    </section>
  );
}
