"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Award,
  CheckCircle2,
  CircleAlert,
  ClipboardCheck,
  PhoneCall,
  RotateCcw,
  ShieldCheck,
  Siren,
  XCircle,
} from "lucide-react";

type Category = "Fundamentals" | "Social Engineering" | "Detection" | "Response";
type Difficulty = "Easy" | "Medium" | "Hard";

type Question = {
  id: number;
  category: Category;
  difficulty: Difficulty;
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
    difficulty: "Easy",
    question: "What is the primary characteristic of a vishing attack?",
    options: [
      "Sending malicious email attachments",
      "Manipulating victims through voice communication",
      "Exploiting a website vulnerability",
      "Intercepting encrypted network traffic",
    ],
    correctAnswer: 1,
    explanation:
      "Vishing (voice phishing) uses phone calls or other voice communication to manipulate victims into revealing sensitive information, transferring money, or performing unsafe actions.",
    socTip:
      "Vishing is often one stage of a larger intrusion: the call may be used to obtain credentials or MFA codes that are then used against your VPN, SSO, or email.",
    mitre: "T1566.004 – Phishing: Spearphishing Voice",
  },
  {
    id: 2,
    category: "Social Engineering",
    difficulty: "Easy",
    question:
      "You receive an unexpected call from someone claiming to be your bank's security officer.",
    scenario:
      '"Your account will be blocked in five minutes. Tell me the OTP sent to your phone so I can secure it."',
    options: [
      "Share the OTP because the caller knows your bank details",
      "Ask the caller to repeat the OTP request",
      "End the call and independently contact the bank",
      "Install the application recommended by the caller",
    ],
    correctAnswer: 2,
    explanation:
      "The safest response is to disconnect and contact the bank through an independently verified channel, such as the number printed on your card or the official app. Never disclose OTPs, PINs, passwords, or recovery codes to callers. A genuine bank will never ask for them.",
    socTip:
      "Knowing your personal details proves nothing. Attackers buy leaked data and combine it with open-source research to sound convincing.",
    mitre: "T1598.004 – Phishing for Information: Spearphishing Voice",
  },
  {
    id: 3,
    category: "Social Engineering",
    difficulty: "Easy",
    question:
      "Which psychological manipulation technique is demonstrated when a caller demands immediate action to prevent an account from being blocked?",
    options: ["Reciprocity", "Scarcity", "Urgency and fear", "Social proof"],
    correctAnswer: 2,
    explanation:
      "Urgency and fear are core social engineering techniques. Attackers create artificial deadlines or threatening consequences so victims act before thinking or verifying.",
    socTip:
      "Artificial time pressure is itself an indicator. Any legitimate process can survive a pause for verification.",
  },
  {
    id: 4,
    category: "Detection",
    difficulty: "Medium",
    question:
      "A caller sounds exactly like your manager and urgently requests a confidential financial transfer. What should you do?",
    options: [
      "Approve the transfer because the voice is familiar",
      "Verify the request using a previously trusted independent channel",
      "Ask the caller to send another voice recording",
      "Transfer a small amount first to test the request",
    ],
    correctAnswer: 1,
    explanation:
      "AI voice cloning can imitate familiar voices from a few seconds of public audio. Voice recognition alone is not identity verification. Follow your organization's approved payment verification and dual-authorization procedures.",
    socTip:
      "Finance teams should use out-of-band callbacks to known numbers and never approve payment changes based on a single call.",
    mitre: "T1656 – Impersonation",
  },
  {
    id: 5,
    category: "Social Engineering",
    difficulty: "Medium",
    question:
      "An unknown caller says they are from the IT helpdesk and asks you to approve the MFA push notification that just appeared on your phone. What is the correct response?",
    scenario:
      '"We are fixing a sync issue on your account. Just tap Approve on the notification so I can finish the ticket."',
    options: [
      "Approve it, since helpdesk staff are trusted",
      "Approve it only if the caller gives your employee ID",
      "Deny the prompt, end the call, and report it to the security team",
      "Approve it and change your password afterwards",
    ],
    correctAnswer: 2,
    explanation:
      "An unexpected MFA prompt is a sign that someone already has your password and is trying to get past MFA. Deny it, hang up, and report it. Verify any real helpdesk request through the internal directory or ticketing system.",
    socTip:
      "Treat this as a likely compromised credential: force a password reset, revoke active sessions, and review sign-in logs for the account.",
    mitre: "T1621 – MFA Request Generation",
  },
  {
    id: 6,
    category: "Detection",
    difficulty: "Medium",
    question:
      "You receive an email saying a $499 subscription renewal was charged to you, with a support number to call if the charge is unauthorized. What is the best action?",
    options: [
      "Call the number to dispute the charge quickly",
      "Reply to the email asking for an invoice",
      "Do not call the number; check your account through the official site or app and report the email",
      "Forward the email to colleagues to see if they got it too",
    ],
    correctAnswer: 2,
    explanation:
      "This is callback phishing (also called TOAD, telephone-oriented attack delivery). The email contains no malicious link, so it often bypasses filters, and the victim is lured into calling the attacker. Verify charges only through official channels you reach yourself.",
    socTip:
      "Search mail logs for the same phone number across other mailboxes, then block and report it. Share the number with your threat intelligence team as an IOC.",
    mitre: "T1566 – Phishing",
  },
  {
    id: 7,
    category: "Detection",
    difficulty: "Hard",
    question:
      "A call shows your bank's real phone number on the caller ID, but the caller asks for your card PIN. What does this tell you?",
    options: [
      "The call is genuine because the number matches the bank",
      "Caller ID can be spoofed, so it is not proof of identity",
      "Only mobile numbers can be spoofed, not landlines",
      "The call is safe if the caller knows your name",
    ],
    correctAnswer: 1,
    explanation:
      "Caller ID is trivially spoofed and must never be used as proof of identity. Any request for a PIN, password, or OTP is a red flag regardless of the number shown.",
    socTip:
      "Do not build detection or approval workflows that trust caller ID. Verify through a callback to a number you already know to be valid.",
    mitre: "T1656 – Impersonation",
  },
  {
    id: 8,
    category: "Response",
    difficulty: "Hard",
    question:
      "An employee reports that during a suspicious call they shared an OTP and installed a remote support tool at the caller's request. What is the most appropriate immediate response?",
    options: [
      "Uninstall the tool and continue working normally",
      "Restart the computer to clear any malicious session",
      "Isolate the device from the network, secure the affected accounts, preserve evidence, and escalate to the security team",
      "Call the suspected attacker back to find out what they did",
    ],
    correctAnswer: 2,
    explanation:
      "Treat this as a security incident. Isolate the device (disconnect it from the network but do not wipe it), reset credentials and revoke sessions for the affected accounts, preserve call records and screenshots, and escalate. Remote access tools give the attacker hands-on control.",
    socTip:
      "Collect the caller's number, call time, claimed identity, the remote tool used, and any session ID. Hunt for the same tool and indicators on other endpoints.",
    mitre: "T1219 – Remote Access Software",
  },
];

const categories: Category[] = [
  "Fundamentals",
  "Social Engineering",
  "Detection",
  "Response",
];

const responseChecklist = [
  "End the call. Do not argue or try to investigate the caller yourself.",
  "Never call back a number given by the caller. Use an official number you look up yourself.",
  "Write down the caller number, time, claimed identity, and what was requested.",
  "If you shared any code or password, change it immediately and report it to the security team.",
  "If you installed software or gave remote access, disconnect the device from the network and report it.",
];

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildOrder(): number[][] {
  return questions.map((q) => shuffle(q.options.map((_, index) => index)));
}

const identityOrder = (): number[][] =>
  questions.map((q) => q.options.map((_, index) => index));

const difficultyStyle: Record<Difficulty, string> = {
  Easy: "bg-emerald-400/10 text-emerald-300",
  Medium: "bg-amber-400/10 text-amber-300",
  Hard: "bg-red-400/10 text-red-300",
};

export default function VishingQuiz() {
  // Answers store the ORIGINAL option index, so shuffling never affects scoring.
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);
  const [showUnanswered, setShowUnanswered] = useState(false);

  // Start unshuffled to avoid a hydration mismatch, then shuffle on the client.
  const [order, setOrder] = useState<number[][]>(identityOrder);

  useEffect(() => {
    setOrder(buildOrder());
  }, []);

  useEffect(() => {
    if (submitted) {
      document
        .getElementById("vishing-results")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [submitted]);

  const answeredCount = answers.filter((a) => a !== null).length;
  const allAnswered = answeredCount === questions.length;
  const progressPercentage = Math.round(
    (answeredCount / questions.length) * 100
  );

  const score = useMemo(
    () =>
      questions.reduce(
        (total, q, index) =>
          total + (answers[index] === q.correctAnswer ? 1 : 0),
        0
      ),
    [answers]
  );

  const scorePercentage = Math.round((score / questions.length) * 100);

  const categoryResults = useMemo(
    () =>
      categories
        .map((category) => {
          const items = questions
            .map((q, index) => ({ q, index }))
            .filter(({ q }) => q.category === category);
          const correct = items.filter(
            ({ q, index }) => answers[index] === q.correctAnswer
          ).length;
          return { category, correct, total: items.length };
        })
        .filter((result) => result.total > 0),
    [answers]
  );

  const missedQuestions = questions.filter(
    (q, index) => answers[index] !== q.correctAnswer
  );

  const performanceLevel =
    scorePercentage >= 80
      ? "Excellent"
      : scorePercentage >= 60
        ? "Good"
        : scorePercentage >= 40
          ? "Fair"
          : "Needs Improvement";

  const performanceMessage =
    scorePercentage >= 80
      ? "Strong awareness. You recognize key vishing indicators and know how to respond safely."
      : scorePercentage >= 60
        ? "Good progress. Review the explanations and SOC tips to close the remaining gaps."
        : scorePercentage >= 40
          ? "You have a basic understanding, but some important warning signs need more attention."
          : "Review this module carefully and try again. Focus on verification and reporting steps.";

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    if (submitted) return;
    setAnswers((previous) =>
      previous.map((answer, index) =>
        index === questionIndex ? optionIndex : answer
      )
    );
  };

  const handleSubmit = () => {
    if (submitted) return;

    if (!allAnswered) {
      setShowUnanswered(true);
      const firstUnanswered = answers.findIndex((a) => a === null);
      if (firstUnanswered >= 0) {
        document
          .getElementById(`question-${questions[firstUnanswered].id}`)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setSubmitted(true);
  };

  const handleRetake = () => {
    setAnswers(Array(questions.length).fill(null));
    setSubmitted(false);
    setShowUnanswered(false);
    setOrder(buildOrder());
    document
      .getElementById("vishing-assessment")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="vishing-assessment"
      className="mt-10 overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#10182a]"
    >
      {/* Header */}
      <div className="border-b border-white/10 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
              <ClipboardCheck size={16} />
              Knowledge Assessment
            </div>

            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Test Your Vishing Awareness
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Evaluate your ability to recognize voice phishing, callback
              phishing, MFA fatigue, and voice-cloning attempts, and to respond
              the way a SOC would expect.
            </p>
          </div>

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
            <ShieldCheck size={27} />
          </div>
        </div>

        {/* Progress */}
        <div className="mt-7">
          <div className="mb-3 flex items-center justify-between text-xs">
            <span className="font-medium text-slate-300">
              Assessment Progress
            </span>
            <span
              className="font-semibold tabular-nums text-cyan-300"
              aria-live="polite"
            >
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
        {questions.map((question, questionIndex) => {
          const selectedAnswer = answers[questionIndex];
          const isCorrect = selectedAnswer === question.correctAnswer;
          const isUnanswered =
            showUnanswered && !submitted && selectedAnswer === null;

          return (
            <article
              id={`question-${question.id}`}
              key={question.id}
              className={`rounded-xl border bg-white/[0.025] p-5 sm:p-6 ${
                isUnanswered ? "border-amber-400/50" : "border-white/10"
              }`}
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-cyan-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                    Question {String(question.id).padStart(2, "0")}
                  </span>
                  <span
                    className={`rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                      difficultyStyle[question.difficulty]
                    }`}
                  >
                    {question.difficulty}
                  </span>
                </div>

                <span className="text-xs text-slate-500">
                  {question.category}
                  {question.scenario ? " · Scenario" : ""}
                </span>
              </div>

              <h3
                id={`question-title-${question.id}`}
                className="text-sm font-semibold leading-7 text-white sm:text-base"
              >
                {question.question}
              </h3>

              {question.scenario && (
                <div className="mt-4 rounded-lg border border-amber-400/15 bg-amber-400/5 p-4">
                  <p className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-300">
                    <PhoneCall size={12} />
                    Caller says
                  </p>
                  <p className="text-sm leading-7 text-slate-300">
                    {question.scenario}
                  </p>
                </div>
              )}

              <div
                className="mt-5 space-y-3"
                role="radiogroup"
                aria-labelledby={`question-title-${question.id}`}
              >
                {order[questionIndex].map((originalIndex, displayIndex) => {
                  const option = question.options[originalIndex];
                  const isSelected = selectedAnswer === originalIndex;
                  const isCorrectOption =
                    question.correctAnswer === originalIndex;

                  let optionStyle =
                    "border-white/10 bg-white/[0.02] hover:border-cyan-400/40 hover:bg-cyan-400/5";

                  if (!submitted && isSelected) {
                    optionStyle = "border-cyan-400/50 bg-cyan-400/10";
                  }

                  if (submitted && isCorrectOption) {
                    optionStyle = "border-emerald-400/40 bg-emerald-400/10";
                  } else if (submitted && isSelected && !isCorrectOption) {
                    optionStyle = "border-red-400/40 bg-red-400/10";
                  }

                  return (
                    <button
                      key={originalIndex}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      disabled={submitted}
                      onClick={() =>
                        handleAnswer(questionIndex, originalIndex)
                      }
                      className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 ${optionStyle} ${
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
                        {String.fromCharCode(65 + displayIndex)}
                      </span>

                      <span className="flex-1 pt-0.5 text-sm leading-6 text-slate-300">
                        {option}
                      </span>

                      {submitted && isCorrectOption && (
                        <CheckCircle2
                          size={18}
                          className="mt-1 shrink-0 text-emerald-400"
                          aria-label="Correct answer"
                        />
                      )}

                      {submitted && isSelected && !isCorrectOption && (
                        <XCircle
                          size={18}
                          className="mt-1 shrink-0 text-red-400"
                          aria-label="Your incorrect answer"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {isUnanswered && (
                <p className="mt-3 text-xs text-amber-300">
                  Please answer this question.
                </p>
              )}

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
                      <CheckCircle2 size={18} className="text-emerald-400" />
                    ) : (
                      <CircleAlert size={18} className="text-amber-400" />
                    )}

                    <p
                      className={`text-sm font-semibold ${
                        isCorrect ? "text-emerald-300" : "text-amber-300"
                      }`}
                    >
                      {isCorrect ? "Correct Answer" : "Incorrect Answer"}
                    </p>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {question.explanation}
                  </p>

                  <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.03] p-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                      SOC Analyst Tip
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {question.socTip}
                    </p>
                  </div>

                  {question.mitre && (
                    <p className="mt-3 text-xs text-slate-500">
                      MITRE ATT&amp;CK: {question.mitre}
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
                {questions.length - answeredCount} of {questions.length}{" "}
                questions still unanswered.
              </p>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-400 sm:w-auto ${
                allAnswered ? "" : "opacity-70"
              }`}
            >
              <ClipboardCheck size={18} />
              Submit Assessment
            </button>
          </div>
        )}

        {/* Results */}
        {submitted && (
          <div
            id="vishing-results"
            className="border-t border-white/10 pt-7"
            role="status"
            aria-live="polite"
          >
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
                    {performanceLevel}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {performanceMessage}
                  </p>

                  <p className="mt-3 text-sm font-semibold text-cyan-300">
                    {scorePercentage}% Accuracy
                  </p>
                </div>
              </div>

              <div className="mt-7">
                <div className="mb-2 flex justify-between text-xs text-slate-400">
                  <span>Assessment Score</span>
                  <span>{scorePercentage}%</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-cyan-400 transition-all duration-500"
                    style={{ width: `${scorePercentage}%` }}
                  />
                </div>
              </div>

              {/* Category breakdown */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {categoryResults.map(({ category, correct, total }) => (
                  <div
                    key={category}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="mb-2 flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-300">
                        {category}
                      </span>
                      <span className="tabular-nums text-slate-400">
                        {correct}/{total}
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className={`h-full rounded-full ${
                          correct === total ? "bg-emerald-400" : "bg-amber-400"
                        }`}
                        style={{ width: `${(correct / total) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Areas to review */}
              {missedQuestions.length > 0 && (
                <p className="mt-5 text-xs leading-6 text-slate-400">
                  Review:{" "}
                  {missedQuestions
                    .map((q) => `Q${String(q.id).padStart(2, "0")}`)
                    .join(", ")}
                  . The explanations and SOC tips above cover each of these.
                </p>
              )}

              {/* Response checklist */}
              <div className="mt-6 rounded-xl border border-amber-400/15 bg-amber-400/5 p-5">
                <div className="mb-3 flex items-center gap-2 text-amber-300">
                  <Siren size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    If You Suspect a Vishing Call
                  </span>
                </div>
                <ol className="space-y-2 text-sm leading-6 text-slate-300">
                  {responseChecklist.map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-amber-400/15 text-[11px] font-bold text-amber-300">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-6 text-slate-400">
                  Answer order is shuffled on every attempt, so retaking tests
                  understanding rather than memory.
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
