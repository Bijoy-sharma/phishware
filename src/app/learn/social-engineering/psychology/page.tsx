





"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Eye,
  Fingerprint,
  Lightbulb,
  LockKeyhole,
  ShieldAlert,
  ShieldCheck,
  Target,
  Users,
  Zap,
  AlertTriangle,
  RotateCcw,
  BookOpen,
} from "lucide-react";

const techniques = [
  {
    number: "01",
    title: "Authority Bias",
    subtitle: "Trusting people in positions of power",
    icon: Users,
    color: "blue",
    explanation:
      "Authority bias is the tendency to give greater importance or credibility to someone perceived as an authority figure. Attackers may impersonate managers, executives, government officials or IT administrators to make requests appear legitimate.",
    psychology:
      "People are often conditioned to respect authority and follow instructions from individuals who appear to have responsibility or expertise.",
    example:
      "An employee receives an unexpected message that appears to come from a senior executive requesting confidential business information.",
    warning: [
      "Unexpected instructions from senior management.",
      "Requests to bypass normal approval procedures.",
      "Unusual demands involving confidential information.",
    ],
    defense:
      "Verify unusual requests using an independently known communication channel. Follow the organization's normal approval process regardless of the sender's apparent position.",
  },
  {
    number: "02",
    title: "Urgency and Time Pressure",
    subtitle: "Making people act before they think",
    icon: Zap,
    color: "amber",
    explanation:
      "Urgency is a manipulation technique that creates artificial time pressure. Attackers attempt to reduce the time a person has to evaluate a request or verify its authenticity.",
    psychology:
      "When people believe they must act immediately, they may pay less attention to inconsistencies and skip normal security checks.",
    example:
      "A fictional IT notification claims that an employee must verify an account within ten minutes or lose access.",
    warning: [
      "Immediate action is demanded without a clear reason.",
      "Normal verification steps are described as unnecessary.",
      "The sender discourages the recipient from contacting others.",
    ],
    defense:
      "Pause and verify the request. Real organizational security procedures should not require employees to disclose passwords or MFA codes under time pressure.",
  },
  {
    number: "03",
    title: "Fear and Intimidation",
    subtitle: "Using negative consequences to influence decisions",
    icon: AlertTriangle,
    color: "rose",
    explanation:
      "Fear-based manipulation uses threats, alarming claims or possible negative consequences to influence a target's behavior.",
    psychology:
      "Fear can narrow attention and encourage people to prioritize immediate relief over careful evaluation.",
    example:
      "A fake banking alert claims that suspicious activity has been detected and pressures the recipient to provide sensitive information.",
    warning: [
      "Threats of account closure or legal action.",
      "Claims that immediate compliance is required to avoid punishment.",
      "Alarming language without independently verifiable evidence.",
    ],
    defense:
      "Do not respond emotionally or share sensitive information. Contact the organization through its official website, app or previously verified phone number.",
  },
  {
    number: "04",
    title: "Scarcity",
    subtitle: "Creating the fear of missing out",
    icon: Target,
    color: "violet",
    explanation:
      "Scarcity manipulation makes an opportunity, benefit or resource appear limited. The target may feel pressured to act before an opportunity disappears.",
    psychology:
      "People can place greater perceived value on something when they believe it is rare or available for only a short time.",
    example:
      "An unexpected message advertises an exclusive reward that supposedly expires within minutes and requires personal information to claim.",
    warning: [
      "Unsolicited offers with extremely short deadlines.",
      "Claims of exclusive access that cannot be verified.",
      "Pressure to provide information before checking the offer.",
    ],
    defense:
      "Verify the offer independently. Do not let artificial deadlines override normal security and purchasing procedures.",
  },
  {
    number: "05",
    title: "Reciprocity",
    subtitle: "Creating a feeling of obligation",
    icon: Fingerprint,
    color: "cyan",
    explanation:
      "Reciprocity is a social principle in which people may feel an obligation to return a favor after receiving help, a gift or a benefit.",
    psychology:
      "An apparent act of generosity can make a person feel uncomfortable refusing a later request.",
    example:
      "Someone offers unexpected technical assistance and then asks for access to an account as a supposed favor in return.",
    warning: [
      "Unexpected gifts linked to unusual requests.",
      "Offers of assistance that require confidential access.",
      "Pressure to repay a favor by breaking normal procedures.",
    ],
    defense:
      "Accepting assistance does not create an obligation to disclose credentials or provide unauthorized access. Follow standard access-control policies.",
  },
  {
    number: "06",
    title: "Social Proof and Conformity",
    subtitle: "Making an action appear normal because others do it",
    icon: Users,
    color: "emerald",
    explanation:
      "Social proof is the tendency to use the behavior of other people as evidence of what is appropriate or correct in a situation.",
    psychology:
      "When uncertain, people may follow what they believe others are doing, especially within a group or workplace.",
    example:
      "A fictional message claims that every employee has already completed an unusual account verification process.",
    warning: [
      "Claims that everyone has already completed a suspicious action.",
      "Pressure to follow a group without independent verification.",
      "Requests to ignore official organizational procedures.",
    ],
    defense:
      "Do not assume a request is legitimate because other people supposedly accepted it. Confirm through an official organizational channel.",
  },
  {
    number: "07",
    title: "Curiosity and Emotional Triggers",
    subtitle: "Encouraging impulsive investigation",
    icon: Eye,
    color: "violet",
    explanation:
      "Curiosity-based manipulation uses unexpected information, interesting claims or emotional content to encourage someone to interact with an unknown source.",
    psychology:
      "People naturally want to resolve uncertainty and discover information that appears personally relevant or surprising.",
    example:
      "An unexpected message claims that a confidential document about the recipient is available through an unfamiliar link.",
    warning: [
      "Unexpected messages about private or sensitive information.",
      "Unfamiliar links promising surprising discoveries.",
      "Emotionally charged content designed to encourage immediate interaction.",
    ],
    defense:
      "Do not open unknown attachments or links just to satisfy curiosity. Verify the source and use trusted channels to obtain the information.",
  },
];

const scenarios = [
  {
    question:
      "An employee receives a message that appears to come from the CEO. It requests an urgent confidential file and says normal approval is unnecessary. Which techniques may be involved?",
    options: [
      "Only curiosity",
      "Authority and urgency",
      "Only reciprocity",
      "Only scarcity",
    ],
    correct: 1,
    explanation:
      "The message uses apparent executive authority and time pressure. The instruction to bypass approval is another major warning sign.",
  },
  {
    question:
      "A website claims that an exclusive reward is available for only three minutes. What technique is being used?",
    options: [
      "Scarcity and urgency",
      "Social proof only",
      "Authority bias only",
      "Reciprocity only",
    ],
    correct: 0,
    explanation:
      "The limited availability creates scarcity, while the countdown creates urgency.",
  },
  {
    question:
      "A caller says that everyone in the company has already shared their verification code. What is the main manipulation technique?",
    options: [
      "Curiosity",
      "Social proof and conformity",
      "Reciprocity",
      "Scarcity",
    ],
    correct: 1,
    explanation:
      "The caller uses supposed group behavior to make the request appear normal. Verification codes must never be shared.",
  },
  {
    question:
      "An unknown person provides unsolicited assistance and later asks for access to an employee's account as a favor. Which technique is this?",
    options: [
      "Fear",
      "Authority",
      "Reciprocity",
      "Scarcity",
    ],
    correct: 2,
    explanation:
      "The apparent favor creates a feeling of obligation. It does not justify granting unauthorized access.",
  },
  {
    question:
      "An unexpected message claims that an employee will face disciplinary action unless they immediately provide confidential information. What should the employee do?",
    options: [
      "Respond immediately",
      "Share only part of the information",
      "Follow the link to resolve the issue",
      "Pause and verify through an official channel",
    ],
    correct: 3,
    explanation:
      "Fear and urgency are being used together. The safe response is to avoid interacting with the message and independently verify the claim.",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-400 border-blue-400/20",
  amber: "bg-amber-500/10 text-amber-400 border-amber-400/20",
  rose: "bg-rose-500/10 text-rose-400 border-rose-400/20",
  violet: "bg-violet-500/10 text-violet-400 border-violet-400/20",
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-400/20",
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-400/20",
};

export default function PsychologyLessonPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = scenarios.reduce(
    (total, question, index) =>
      total + (answers[index] === question.correct ? 1 : 0),
    0
  );

  const allAnswered = scenarios.every(
    (_, index) => answers[index] !== undefined
  );

  const resetQuiz = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <main className="min-h-screen bg-[#080D19] text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#080D19]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1450px] items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500">
              <ShieldCheck size={20} />
            </div>
            <span className="text-lg font-bold">
              Phish<span className="text-blue-400">Aware</span>
            </span>
          </Link>

          <Link
            href="/learn/social-engineering"
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-white sm:text-sm"
          >
            <ArrowLeft size={15} />
            Social Engineering Course
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1450px] lg:grid-cols-[260px_minmax(0,1fr)]">
        {/* Sidebar */}
        <aside className="border-b border-white/[0.08] bg-[#0D1423] p-5 lg:sticky lg:top-16 lg:h-[calc(100vh-64px)] lg:overflow-y-auto lg:border-r lg:border-b-0 lg:p-6">
          <p className="text-[10px] font-bold tracking-[0.18em] text-violet-400">
            SOCIAL ENGINEERING
          </p>

          <div className="mt-5 rounded-xl border border-violet-400/20 bg-violet-500/[0.08] p-4">
            <Brain size={23} className="text-violet-400" />
            <h2 className="mt-3 text-sm font-semibold">
              Psychology of Human Manipulation
            </h2>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              Learn how psychological triggers influence human decisions.
            </p>
          </div>

          <p className="mb-3 mt-8 text-[10px] font-bold tracking-[0.16em] text-slate-500">
            MODULE CONTENT
          </p>

          <nav className="space-y-2">
            {[
              ["#objectives", "Learning objectives"],
              ["#authority", "Authority bias"],
              ["#urgency", "Urgency and time pressure"],
              ["#fear", "Fear and intimidation"],
              ["#scarcity", "Scarcity"],
              ["#reciprocity", "Reciprocity"],
              ["#social-proof", "Social proof"],
              ["#curiosity", "Curiosity"],
              ["#combined", "Combined techniques"],
              ["#defense", "Defensive strategies"],
              ["#assessment", "Knowledge check"],
            ].map(([href, label], index) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs text-slate-400 transition hover:bg-white/[0.04] hover:text-violet-300"
              >
                <span className="text-[10px] font-bold text-violet-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {label}
              </a>
            ))}
          </nav>

          <div className="mt-8 rounded-xl border border-white/[0.08] p-4">
            <Lightbulb size={19} className="text-amber-400" />
            <h3 className="mt-3 text-xs font-semibold">Learning tip</h3>
            <p className="mt-2 text-[11px] leading-5 text-slate-500">
              Learn to recognize the psychological trigger behind a request,
              not just the words used in the message.
            </p>
          </div>
        </aside>

        {/* Main content */}
        <div className="min-w-0 px-5 py-9 sm:px-8 lg:px-12 lg:py-12">
          <div className="mx-auto max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <Link href="/" className="hover:text-blue-400">
                Home
              </Link>
              <ChevronRight size={13} />
              <Link
                href="/learn"
                className="hover:text-blue-400"
              >
                Learning Center
              </Link>
              <ChevronRight size={13} />
              <Link
                href="/learn/social-engineering"
                className="hover:text-blue-400"
              >
                Social Engineering
              </Link>
              <ChevronRight size={13} />
              <span className="text-slate-300">Module 02</span>
            </div>

            {/* Hero */}
            <section className="mt-9">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[10px] font-bold tracking-wider text-violet-300">
                <Brain size={13} />
                MODULE 02 · HUMAN PSYCHOLOGY
              </div>

              <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Psychology of
                <span className="block text-violet-400">
                  Human Manipulation
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
                Understand how attackers exploit psychological triggers,
                social behavior and human decision-making to influence
                individuals. Learn to recognize manipulation and make
                safer decisions.
              </p>

              <div className="mt-7 flex flex-wrap gap-5 border-b border-white/10 pb-8 text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <Clock3 size={15} className="text-violet-400" />
                  Approximately 25 minutes
                </span>
                <span className="flex items-center gap-2">
                  <BookOpen size={15} className="text-violet-400" />
                  Beginner to intermediate
                </span>
                <span className="flex items-center gap-2">
                  <Target size={15} className="text-violet-400" />
                  5 assessment questions
                </span>
              </div>
            </section>

            {/* Objectives */}
            <section id="objectives" className="scroll-mt-24 pt-12">
              <SectionHeading
                label="LEARNING OBJECTIVES"
                title="What will you learn?"
              />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Understand the psychology behind social engineering.",
                  "Recognize common psychological manipulation techniques.",
                  "Identify combinations of pressure tactics.",
                  "Analyze suspicious workplace scenarios.",
                  "Apply defensive decision-making techniques.",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-[#10192B] p-4"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-violet-400"
                    />
                    <p className="text-xs leading-6 text-slate-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Introduction */}
            <section className="pt-14">
              <SectionHeading
                label="01 · THE HUMAN FACTOR"
                title="Why does psychology matter in cybersecurity?"
              />
              <p className="mt-5 text-sm leading-8 text-slate-400">
                Human decisions are influenced by emotions, experience,
                social expectations and the information available at a
                particular moment. Social engineers attempt to exploit these
                influences to make an unsafe action appear reasonable.
              </p>
              <p className="mt-4 text-sm leading-8 text-slate-400">
                For example, a person may normally recognize an unfamiliar
                email as suspicious. However, if the same message appears to
                come from a manager and claims that an urgent business
                problem must be resolved, the person may feel pressure to
                respond without verification.
              </p>
              <InfoBox title="Important concept">
                Psychological manipulation does not mean that a person is
                unintelligent or careless. It exploits normal human
                tendencies that can affect anyone under the right conditions.
              </InfoBox>
            </section>

            {/* Techniques */}
            <section className="pt-14">
              <SectionHeading
                label="02 · MANIPULATION TECHNIQUES"
                title="Seven psychological techniques"
                description="Explore the common psychological principles attackers may exploit."
              />

              <div className="mt-8 space-y-5">
                {techniques.map((technique) => {
                  const Icon = technique.icon;

                  return (
                    <article
                      key={technique.number}
                      id={
                        technique.number === "01"
                          ? "authority"
                          : technique.number === "02"
                          ? "urgency"
                          : technique.number === "03"
                          ? "fear"
                          : technique.number === "04"
                          ? "scarcity"
                          : technique.number === "05"
                          ? "reciprocity"
                          : technique.number === "06"
                          ? "social-proof"
                          : "curiosity"
                      }
                      className="scroll-mt-24 rounded-2xl border border-white/[0.08] bg-[#10192B] p-5 sm:p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${colorMap[technique.color]}`}
                        >
                          <Icon size={23} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] font-bold tracking-wider text-violet-400">
                            TECHNIQUE {technique.number}
                          </p>
                          <h3 className="mt-1 text-lg font-bold">
                            {technique.title}
                          </h3>
                          <p className="mt-1 text-xs text-slate-500">
                            {technique.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 space-y-5">
                        <div>
                          <h4 className="text-xs font-semibold text-slate-200">
                            What is it?
                          </h4>
                          <p className="mt-2 text-xs leading-7 text-slate-400">
                            {technique.explanation}
                          </p>
                        </div>

                        <div className="rounded-xl border border-white/[0.06] bg-black/20 p-4">
                          <h4 className="flex items-center gap-2 text-xs font-semibold text-violet-300">
                            <Brain size={15} />
                            Psychological explanation
                          </h4>
                          <p className="mt-2 text-xs leading-7 text-slate-400">
                            {technique.psychology}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xs font-semibold text-slate-200">
                            Fictional example
                          </h4>
                          <p className="mt-2 text-xs leading-7 text-slate-400">
                            {technique.example}
                          </p>
                        </div>

                        <div>
                          <h4 className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                            <AlertTriangle size={15} />
                            Warning signs
                          </h4>
                          <ul className="mt-3 space-y-2">
                            {technique.warning.map((warning) => (
                              <li
                                key={warning}
                                className="flex items-start gap-2 text-xs leading-6 text-slate-400"
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                                {warning}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/[0.04] p-4">
                          <h4 className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                            <ShieldCheck size={15} />
                            How to defend yourself
                          </h4>
                          <p className="mt-2 text-xs leading-7 text-slate-400">
                            {technique.defense}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            {/* Combined techniques */}
            <section id="combined" className="scroll-mt-24 pt-14">
              <SectionHeading
                label="03 · ADVANCED UNDERSTANDING"
                title="When attackers combine techniques"
                description="A single suspicious request may contain several manipulation tactics."
              />

              <div className="mt-6 rounded-2xl border border-rose-400/20 bg-rose-500/[0.04] p-5 sm:p-7">
                <span className="rounded-full bg-rose-500/10 px-3 py-1 text-[9px] font-bold tracking-wider text-rose-300">
                  FICTIONAL CASE STUDY
                </span>

                <h3 className="mt-5 text-lg font-bold">
                  The urgent executive request
                </h3>

                <p className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4 text-sm leading-8 text-slate-300">
                  &quot;Hello, this is the CEO. A confidential business
                  payment must be completed immediately. The finance team
                  has already approved similar requests. Please bypass the
                  usual process so we do not miss the deadline.&quot;
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Authority", "Claims to be the CEO."],
                    ["Urgency", "Demands immediate action."],
                    ["Social proof", "Claims others have already approved."],
                    ["Pressure", "Encourages bypassing normal procedures."],
                  ].map(([name, description]) => (
                    <div
                      key={name}
                      className="rounded-xl border border-rose-400/10 bg-rose-400/[0.04] p-4"
                    >
                      <p className="text-xs font-bold text-rose-300">
                        {name}
                      </p>
                      <p className="mt-2 text-xs leading-6 text-slate-400">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>

                <InfoBox title="Correct security response">
                  Do not process the payment based on the message. Verify
                  the request through an established independent channel
                  and follow the organization's payment authorization
                  procedures.
                </InfoBox>
              </div>
            </section>

            {/* Defense */}
            <section id="defense" className="scroll-mt-24 pt-14">
              <SectionHeading
                label="04 · DEFENSIVE STRATEGIES"
                title="Building psychological resilience"
                description="Use a consistent decision-making process when faced with unexpected requests."
              />

              <div className="mt-7 space-y-3">
                {[
                  {
                    title: "Pause",
                    description:
                      "Do not let urgency, fear or excitement force an immediate decision.",
                  },
                  {
                    title: "Question",
                    description:
                      "Ask whether the request is expected, reasonable and consistent with normal procedures.",
                  },
                  {
                    title: "Verify",
                    description:
                      "Confirm the sender's identity through a trusted independent channel.",
                  },
                  {
                    title: "Protect",
                    description:
                      "Never disclose passwords, OTPs, MFA codes or confidential information to unverified sources.",
                  },
                  {
                    title: "Report",
                    description:
                      "Notify the appropriate security or management team about suspicious requests.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.03] p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-sm font-bold text-emerald-300">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-6 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quiz */}
            <section id="assessment" className="scroll-mt-24 pt-14">
              <SectionHeading
                label="05 · KNOWLEDGE ASSESSMENT"
                title="Test your understanding"
                description="Answer all five questions. Each question has one best answer."
              />

              <div className="mt-7 rounded-2xl border border-violet-400/20 bg-[#11172B] p-5 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold text-violet-300">
                      MODULE 02 QUIZ
                    </p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      {Object.keys(answers).length} of {scenarios.length} answered
                    </p>
                  </div>
                  <div className="rounded-lg bg-violet-500/10 px-3 py-2 text-xs font-bold text-violet-300">
                    {scenarios.length} Questions
                  </div>
                </div>

                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-violet-400 transition-all"
                    style={{
                      width: `${(Object.keys(answers).length / scenarios.length) * 100}%`,
                    }}
                  />
                </div>

                <div className="mt-7 space-y-7">
                  {scenarios.map((question, index) => (
                    <div
                      key={index}
                      className="border-b border-white/[0.08] pb-7 last:border-0 last:pb-0"
                    >
                      <p className="text-[10px] font-bold tracking-wider text-violet-400">
                        QUESTION {index + 1}
                      </p>

                      <h3 className="mt-3 text-sm font-semibold leading-7 text-slate-200">
                        {question.question}
                      </h3>

                      <div className="mt-4 space-y-2">
                        {question.options.map((option, optionIndex) => {
                          const selected = answers[index] === optionIndex;
                          const correct = question.correct === optionIndex;

                          let style =
                            "border-white/[0.08] bg-white/[0.02] hover:border-violet-400/30";

                          if (selected && !submitted) {
                            style =
                              "border-violet-400/50 bg-violet-500/10";
                          }

                          if (submitted && correct) {
                            style =
                              "border-emerald-400/40 bg-emerald-400/[0.08]";
                          } else if (submitted && selected && !correct) {
                            style = "border-rose-400/40 bg-rose-400/[0.08]";
                          }

                          return (
                            <button
                              type="button"
                              key={option}
                              disabled={submitted}
                              onClick={() =>
                                setAnswers((previous) => ({
                                  ...previous,
                                  [index]: optionIndex,
                                }))
                              }
                              className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left text-xs leading-6 text-slate-300 transition disabled:cursor-default ${style}`}
                            >
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/[0.06] text-[10px] font-bold">
                                {String.fromCharCode(65 + optionIndex)}
                              </span>
                              <span className="flex-1">{option}</span>

                              {submitted && correct && (
                                <CheckCircle2
                                  size={16}
                                  className="shrink-0 text-emerald-400"
                                />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {submitted && (
                        <div className="mt-4 rounded-xl border border-white/[0.08] bg-black/20 p-4">
                          <p
                            className={`text-xs font-semibold ${
                              answers[index] === question.correct
                                ? "text-emerald-400"
                                : "text-rose-400"
                            }`}
                          >
                            {answers[index] === question.correct
                              ? "Correct answer"
                              : "Incorrect answer"}
                          </p>
                          <p className="mt-2 text-xs leading-6 text-slate-400">
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
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Submit Assessment
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <div className="mt-8 rounded-xl border border-violet-400/20 bg-violet-500/[0.08] p-5 text-center">
                    <p className="text-xs font-bold tracking-wider text-violet-300">
                      YOUR RESULT
                    </p>
                    <p className="mt-3 text-4xl font-bold">
                      {score}/{scenarios.length}
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      {score === scenarios.length
                        ? "Excellent work! You answered every question correctly."
                        : score >= 3
                        ? "Good effort. Review the explanations to improve."
                        : "Review the lesson and try again to strengthen your understanding."}
                    </p>
                    <button
                      type="button"
                      onClick={resetQuiz}
                      className="mt-5 inline-flex items-center gap-2 rounded-lg border border-violet-400/30 px-4 py-2.5 text-xs font-semibold text-violet-300 transition hover:bg-violet-500/10"
                    >
                      <RotateCcw size={14} />
                      Retake Assessment
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* Navigation */}
            <section className="mt-12 grid gap-3 sm:grid-cols-2">
              <Link
                href="/learn/social-engineering"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.07] hover:text-white"
              >
                <ArrowLeft size={16} />
                Course Overview
              </Link>

              <div>
               <Link
  href="/learn/social-engineering/phishing"
  className="block rounded-xl border border-violet-400/20 bg-violet-500/[0.07] px-5 py-4 transition hover:border-violet-400/50 hover:bg-violet-500/10"
>
  <div className="flex items-center justify-center gap-2 text-sm font-semibold text-violet-300">
    Next: Phishing and Spear Phishing
    <ArrowRight size={16} />
  </div>

  <p className="mt-2 text-center text-[10px] text-slate-500">
    Module 03 · Continue learning
  </p>
</Link>
              </div>
            </section>

            <footer className="mt-12 border-t border-white/10 py-7 text-center text-xs text-slate-500">
              PhishAware — Cybersecurity Awareness &amp; Education
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="text-[10px] font-bold tracking-[0.18em] text-violet-400">
        {label}
      </p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

function InfoBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 rounded-xl border border-blue-400/20 bg-blue-500/[0.06] p-5">
      <div className="flex items-center gap-2 text-blue-300">
        <Lightbulb size={17} />
        <h3 className="text-xs font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-xs leading-7 text-slate-400">
        {children}
      </p>
    </div>
  );
}
