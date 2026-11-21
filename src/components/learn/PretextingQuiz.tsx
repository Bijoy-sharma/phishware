
"use client";

import { useState } from "react";
import {
  Award,
  BadgeAlert,
  CheckCircle2,
  CircleAlert,
  ClipboardCheck,
  RotateCcw,
  ShieldCheck,
  XCircle,
} from "lucide-react";

type Category =
  | "Fundamentals"
  | "Social Engineering"
  | "Detection"
  | "Response";

type Question = {
  id: number;
  category: Category;
  difficulty: "MEDIUM" | "HARD";
  question: string;
  scenario?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  socTip: string;
  mitre?: string;
};

const questions: Question[] = [
  {
    id: 1,
    category: "Fundamentals",
    difficulty: "MEDIUM",
    question: "Which statement best describes pretexting?",
    options: [
      "Exploiting a software vulnerability to gain access",
      "Creating a fabricated identity or situation to manipulate a target",
      "Sending unsolicited advertisements to employees",
      "Intercepting network traffic between two systems",
    ],
    correctAnswer: 1,
    explanation:
      "Pretexting involves constructing a believable but fabricated story, identity, or situation to influence a target into revealing information or performing an action.",
    socTip:
      "Examine the claimed identity, reason for contact, requested action, and whether the request follows established business procedures.",
    mitre: "MITRE ATT&CK: T1656 — Impersonation",
  },
  {
    id: 2,
    category: "Social Engineering",
    difficulty: "MEDIUM",
    question:
      "An attacker claims to be a newly appointed IT administrator and asks an employee for account recovery information. Which technique is being demonstrated?",
    scenario:
      "The employee has never met this administrator, but the caller uses internal department names and technical terminology.",
    options: [
      "Credential stuffing",
      "Pretexting combined with impersonation",
      "Denial-of-service attack",
      "Network reconnaissance only",
    ],
    correctAnswer: 1,
    explanation:
      "The attacker combines a fabricated professional identity with a believable story to gain trust and request sensitive information.",
    socTip:
      "Verify the person's employment and role through an official internal directory. Never disclose passwords or recovery codes to someone claiming to be IT support.",
    mitre: "MITRE ATT&CK: T1656 — Impersonation",
  },
  {
    id: 3,
    category: "Social Engineering",
    difficulty: "HARD",
    question:
      "A finance employee receives an urgent payment request that appears to come from the CEO. The sender requests secrecy and bypassing normal approval. What is the strongest warning sign?",
    scenario:
      "The message claims that a confidential acquisition is underway and that the payment must be completed before the end of the day.",
    options: [
      "The message contains a professional signature",
      "The request involves secrecy, urgency, and bypassing authorization",
      "The sender uses the CEO's job title",
      "The email arrives during business hours",
    ],
    correctAnswer: 1,
    explanation:
      "Urgency, secrecy, and attempts to bypass established financial authorization are strong indicators of possible executive impersonation or business email compromise.",
    socTip:
      "Do not process the payment based on the message. Verify the request using a known independent channel and follow dual-authorization controls.",
    mitre: "MITRE ATT&CK: T1656 — Impersonation",
  },
  {
    id: 4,
    category: "Detection",
    difficulty: "HARD",
    question:
      "A vendor emails the finance department with new banking details. Which action provides the strongest verification?",
    scenario:
      "The email appears familiar and includes the vendor's usual business signature.",
    options: [
      "Accept the new details because the email signature is familiar",
      "Reply to the same email asking for confirmation",
      "Call the vendor using a previously verified contact number and follow payment-change procedures",
      "Ask another employee whether the email looks legitimate",
    ],
    correctAnswer: 2,
    explanation:
      "A familiar signature or email conversation does not prove authenticity. Independent verification through a previously trusted contact method is a stronger control.",
    socTip:
      "Review the original request, relevant email headers, sender authentication results, and payment-change history. Coordinate with finance to validate the change.",
    mitre: "MITRE ATT&CK: T1656 — Impersonation",
  },
  {
    id: 5,
    category: "Detection",
    difficulty: "HARD",
    question:
      "During an email investigation, which combination of evidence is most useful for evaluating a suspected impersonation attempt?",
    options: [
      "Email color, font size, and signature design",
      "Sender address, email authentication results, message headers, and request context",
      "Only the display name and subject line",
      "Only the recipient's opinion about the sender",
    ],
    correctAnswer: 1,
    explanation:
      "A reliable investigation considers technical email evidence alongside the business context. Display names and signatures can be easily imitated.",
    socTip:
      "Review SPF, DKIM, and DMARC results where available, inspect Return-Path and Received headers, and correlate the message with known organizational activity.",
    mitre: "MITRE ATT&CK: T1566 — Phishing",
  },
  {
    id: 6,
    category: "Detection",
    difficulty: "HARD",
    question:
      "A suspicious email references an employee's department, manager, and current project. What should a SOC analyst conclude?",
    options: [
      "The email must be legitimate because the details are accurate",
      "The attacker may have gathered organizational information, but further verification is required",
      "The employee's account is definitely compromised",
      "The email can be ignored because it contains no attachment",
    ],
    correctAnswer: 1,
    explanation:
      "Accurate organizational details may have been obtained from public sources, previous exposure, or compromised accounts. They increase the need for investigation but do not independently prove compromise.",
    socTip:
      "Review available threat intelligence, exposed organizational information, relevant email history, and any suspicious account activity.",
    mitre: "MITRE ATT&CK: T1591 — Gather Victim Org Information",
  },
  {
    id: 7,
    category: "Response",
    difficulty: "HARD",
    question:
      "An employee reports that they approved an unauthorized access request after being contacted by someone impersonating IT support. What should the SOC prioritize?",
    scenario:
      "The request may have granted an attacker access to an internal account.",
    options: [
      "Delete the reported message and close the ticket",
      "Ask the employee to contact the suspected attacker",
      "Review the affected account, revoke unauthorized access, secure credentials, preserve evidence, and escalate",
      "Wait until the attacker performs another action",
    ],
    correctAnswer: 2,
    explanation:
      "Treat the event as a potential security incident. Investigate account activity, revoke unauthorized sessions or permissions, secure affected credentials, and preserve evidence.",
    socTip:
      "Build a timeline covering the initial contact, approval event, authentication activity, permission changes, and subsequent access attempts.",
    mitre: "MITRE ATT&CK: T1078 — Valid Accounts",
  },
  {
    id: 8,
    category: "Response",
    difficulty: "HARD",
    question:
      "An employee reports that a fraudulent executive payment was completed. What is the most appropriate immediate response?",
    scenario:
      "The employee followed a payment instruction from a suspected impersonation email.",
    options: [
      "Delete the email and wait for the next bank statement",
      "Contact the bank and finance team immediately, preserve evidence, and escalate the incident",
      "Send another payment to verify the transaction",
      "Contact the suspected sender to request a refund",
    ],
    correctAnswer: 1,
    explanation:
      "The organization should immediately contact its bank and finance team to attempt to stop or recover the transaction. Evidence must be preserved and the incident escalated.",
    socTip:
      "Capture the payment details, timestamps, beneficiary information, original email, headers, and relevant approval records. Follow the organization's incident response procedure.",
    mitre: "MITRE ATT&CK: T1657 — Financial Theft",
  },
];

const categories: Category[] = [
  "Fundamentals",
  "Social Engineering",
  "Detection",
  "Response",
];

const shuffleOptions = (items: Question[]): Question[] =>
  items.map((question) => {
    const shuffled = question.options.map((option, index) => ({
      option,
      isCorrect: index === question.correctAnswer,
    }));

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return {
      ...question,
      options: shuffled.map((item) => item.option),
      correctAnswer: shuffled.findIndex((item) => item.isCorrect),
    };
  });

const getPerformance = (percentage: number) => {
  if (percentage >= 90) return "Excellent";
  if (percentage >= 75) return "Very Good";
  if (percentage >= 60) return "Good";
  if (percentage >= 40) return "Fair";
  return "Needs Improvement";
};

const getFeedback = (percentage: number) => {
  if (percentage >= 90)
    return "Excellent security awareness. You demonstrated strong understanding of impersonation risks and defensive procedures.";

  if (percentage >= 75)
    return "Very good performance. You understand most attack indicators and response practices.";

  if (percentage >= 60)
    return "Good progress. Review the explanations and strengthen your investigation knowledge.";

  if (percentage >= 40)
    return "You have a basic understanding, but important detection and response concepts need more attention.";

  return "Review this module carefully and retry the assessment to strengthen your security awareness.";
};

export default function PretextingQuiz() {
 const [attemptQuestions, setAttemptQuestions] = useState<Question[]>(
  questions
);

  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );

  const [submitted, setSubmitted] = useState(false);

  const answeredCount = answers.filter(
    (answer) => answer !== null
  ).length;

  const allAnswered = answeredCount === questions.length;

  const progressPercentage = Math.round(
    (answeredCount / questions.length) * 100
  );

  const score = attemptQuestions.reduce(
    (total, question, index) =>
      total + (answers[index] === question.correctAnswer ? 1 : 0),
    0
  );

  const scorePercentage = Math.round(
    (score / questions.length) * 100
  );

  const categoryScores = categories.map((category) => {
    const categoryQuestions = attemptQuestions
      .map((question, index) => ({ question, index }))
      .filter((item) => item.question.category === category);

    const correct = categoryQuestions.filter(
      (item) =>
        answers[item.index] === item.question.correctAnswer
    ).length;

    const total = categoryQuestions.length;

    return {
      category,
      correct,
      total,
      percentage: total ? Math.round((correct / total) * 100) : 0,
    };
  });

  const handleAnswer = (
    questionIndex: number,
    optionIndex: number
  ) => {
    if (submitted) return;

    setAnswers((previous) =>
      previous.map((answer, index) =>
        index === questionIndex ? optionIndex : answer
      )
    );
  };

  const handleSubmit = () => {
    if (!allAnswered || submitted) return;
    setSubmitted(true);
  };

  const handleRetake = () => {
    setAttemptQuestions(shuffleOptions(questions));
    setAnswers(Array(questions.length).fill(null));
    setSubmitted(false);
  };

  return (
    <section
      id="pretexting-assessment"
      className="mt-10 overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#10182a]"
    >
      {/* Header */}
      <div className="border-b border-white/10 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
              <ClipboardCheck size={16} />
              SOC Knowledge Assessment
            </div>

            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Test Your Pretexting Awareness
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Analyze realistic enterprise scenarios and evaluate your
              ability to identify impersonation, investigate suspicious
              communication, and respond to security incidents.
            </p>
          </div>

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
            <ShieldCheck size={27} />
          </div>
        </div>

        <div className="mt-7">
          <div className="mb-3 flex items-center justify-between text-xs">
            <span className="font-medium text-slate-300">
              Assessment Progress
            </span>

            <span className="font-semibold tabular-nums text-cyan-300">
              {answeredCount}/{questions.length} Completed
            </span>
          </div>

          <div
            className="h-2 overflow-hidden rounded-full bg-white/10"
            role="progressbar"
            aria-label="Assessment progress"
            aria-valuemin={0}
            aria-valuemax={questions.length}
            aria-valuenow={answeredCount}
          >
            <div
              className="h-full rounded-full bg-cyan-400 transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-6 p-6 sm:p-8">
        {attemptQuestions.map((question, questionIndex) => {
          const selectedAnswer = answers[questionIndex];
          const isCorrect =
            selectedAnswer === question.correctAnswer;

          return (
            <article
              key={question.id}
              className="rounded-xl border border-white/10 bg-white/[0.025] p-5 sm:p-6"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-cyan-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                    Question {String(question.id).padStart(2, "0")}
                  </span>

                  <span
                    className={`rounded-md px-2.5 py-1 text-[10px] font-bold ${
                      question.difficulty === "HARD"
                        ? "bg-red-400/10 text-red-300"
                        : "bg-amber-400/10 text-amber-300"
                    }`}
                  >
                    {question.difficulty}
                  </span>
                </div>

                <span className="text-xs text-slate-500">
                  {question.category}
                </span>
              </div>

              <h3 className="text-sm font-semibold leading-7 text-white sm:text-base">
                {question.question}
              </h3>

              {question.scenario && (
                <div className="mt-4 rounded-lg border border-amber-400/15 bg-amber-400/5 p-4">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-amber-300">
                    Case Scenario
                  </p>

                  <p className="text-sm leading-7 text-slate-300">
                    {question.scenario}
                  </p>
                </div>
              )}

              <div className="mt-5 space-y-3">
                {question.options.map((option, optionIndex) => {
                  const isSelected = selectedAnswer === optionIndex;
                  const isCorrectOption =
                    question.correctAnswer === optionIndex;

                  let optionStyle =
                    "border-white/10 bg-white/[0.02] hover:border-cyan-400/40 hover:bg-cyan-400/5";

                  if (!submitted && isSelected) {
                    optionStyle =
                      "border-cyan-400/50 bg-cyan-400/10";
                  }

                  if (submitted && isCorrectOption) {
                    optionStyle =
                      "border-emerald-400/40 bg-emerald-400/10";
                  } else if (submitted && isSelected && !isCorrectOption) {
                    optionStyle =
                      "border-red-400/40 bg-red-400/10";
                  }

                  return (
                    <button
                      key={optionIndex}
                      type="button"
                      disabled={submitted}
                      onClick={() =>
                        handleAnswer(questionIndex, optionIndex)
                      }
                      aria-pressed={isSelected}
                      className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition ${optionStyle} ${
                        submitted ? "cursor-default" : "cursor-pointer"
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                          submitted && isCorrectOption
                            ? "bg-emerald-400/15 text-emerald-300"
                            : submitted && isSelected
                              ? "bg-red-400/15 text-red-300"
                              : isSelected
                                ? "bg-cyan-400/15 text-cyan-300"
                                : "bg-white/5 text-slate-400"
                        }`}
                      >
                        {String.fromCharCode(65 + optionIndex)}
                      </span>

                      <span className="flex-1 pt-0.5 text-sm leading-6 text-slate-300">
                        {option}
                      </span>

                      {submitted && isCorrectOption && (
                        <CheckCircle2
                          size={18}
                          className="mt-1 shrink-0 text-emerald-400"
                        />
                      )}

                      {submitted && isSelected && !isCorrectOption && (
                        <XCircle
                          size={18}
                          className="mt-1 shrink-0 text-red-400"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div
                  className={`mt-5 rounded-xl border p-4 ${
                    isCorrect
                      ? "border-emerald-400/20 bg-emerald-400/5"
                      : "border-amber-400/20 bg-amber-400/5"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {isCorrect ? (
                      <CheckCircle2
                        size={18}
                        className="text-emerald-400"
                      />
                    ) : (
                      <CircleAlert
                        size={18}
                        className="text-amber-400"
                      />
                    )}

                    <p
                      className={`text-sm font-semibold ${
                        isCorrect
                          ? "text-emerald-300"
                          : "text-amber-300"
                      }`}
                    >
                      {isCorrect ? "Correct Answer" : "Incorrect Answer"}
                    </p>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {question.explanation}
                  </p>

                  <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                      SOC Analyst Tip
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {question.socTip}
                    </p>
                  </div>

                  {question.mitre && (
                    <p className="mt-3 text-[11px] leading-5 text-slate-500">
                      {question.mitre}
                    </p>
                  )}
                </div>
              )}
            </article>
          );
        })}

        {/* Submit */}
        {!submitted && (
          <div className="border-t border-white/10 pt-6">
            {!allAnswered && (
              <p className="mb-4 flex items-center gap-2 text-xs text-slate-400">
                <CircleAlert size={15} className="text-amber-400" />
                Answer all {questions.length} questions to submit your assessment.
              </p>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={!allAnswered}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
            >
              <ClipboardCheck size={18} />
              Submit Assessment
            </button>
          </div>
        )}

        {/* Results */}
        {submitted && (
          <div className="border-t border-white/10 pt-7">
            <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-transparent p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                  <span className="text-3xl font-bold tabular-nums text-cyan-300">
                    {score}/{questions.length}
                  </span>

                  <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Your Score
                  </span>
                </div>

                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2 text-cyan-300">
                    <Award size={20} />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Assessment Completed
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {getPerformance(scorePercentage)}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {getFeedback(scorePercentage)}
                  </p>

                  <p className="mt-3 text-sm font-semibold text-cyan-300">
                    {scorePercentage}% Accuracy
                  </p>
                </div>
              </div>

              {/* Overall score */}
              <div className="mt-7">
                <div className="mb-2 flex justify-between text-xs text-slate-400">
                  <span>Overall Assessment Score</span>
                  <span>{scorePercentage}%</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-cyan-400 transition-all duration-500"
                    style={{ width: `${scorePercentage}%` }}
                  />
                </div>
              </div>

              {/* Category scores */}
              <div className="mt-7">
                <h4 className="mb-4 text-sm font-semibold text-white">
                  Performance by Category
                </h4>

                <div className="grid gap-3 sm:grid-cols-2">
                  {categoryScores.map((item) => (
                    <div
                      key={item.category}
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <span className="text-xs font-medium text-slate-300">
                          {item.category}
                        </span>

                        <span className="text-xs tabular-nums text-slate-400">
                          {item.correct}/{item.total}
                        </span>
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            item.percentage >= 75
                              ? "bg-emerald-400"
                              : item.percentage >= 50
                                ? "bg-amber-400"
                                : "bg-red-400"
                          }`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review */}
              <div className="mt-6 rounded-xl border border-amber-400/15 bg-amber-400/5 p-4">
                <div className="flex items-center gap-2 text-amber-300">
                  <BadgeAlert size={17} />
                  <p className="text-xs font-bold uppercase tracking-wider">
                    Investigation Review
                  </p>
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Review the explanations and SOC Analyst Tips above. Pay
                  particular attention to the categories where you scored
                  below 75%.
                </p>
              </div>

              {/* Retake */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-6 text-slate-400">
                  Answer order is shuffled on every attempt to encourage
                  understanding rather than memorization.
                </p>

                <button
                  type="button"
                  onClick={handleRetake}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/20"
                >
                  <RotateCcw size={16} />
                  Retake Assessment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
