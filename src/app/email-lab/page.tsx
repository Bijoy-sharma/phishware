
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  CircleHelp,
  Clock3,
  Eye,
  Fingerprint,
  Globe,
  Mail,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  XCircle,
} from "lucide-react";

import DashboardLayout from "@/components/layout/DashboardLayout";

// --------------------------------------------------
// 1. EMAIL INSPECTION DATA
// --------------------------------------------------

const warningSigns = [
  {
    id: "sender",
    suspicious: true,
    title: "Suspicious sender address",
    description:
      'The domain rneridianbank-support... uses "rn", which looks like "m". It imitates a trusted bank.',
  },
  {
    id: "time",
    suspicious: false,
    title: "Message arrived at 09:42 UTC",
    description:
      "Delivery time is not a phishing indicator. Attackers send at all hours.",
  },
  {
    id: "urgency",
    suspicious: true,
    title: "Urgent or threatening language",
    description:
      "The email threatens account suspension to pressure the recipient.",
  },
  {
    id: "greeting",
    suspicious: true,
    title: "Generic greeting",
    description:
      '"Dear Customer" suggests a mass mailing, not a company that knows your name.',
  },
  {
    id: "link",
    suspicious: true,
    title: "Suspicious destination link",
    description:
      "The displayed destination uses an unfamiliar domain.",
  },
  {
    id: "signature",
    suspicious: false,
    title: "Ends with a team signature",
    description:
      "Signatures are normal and easy to copy, so they prove nothing either way.",
  },
  {
    id: "reply",
    suspicious: true,
    title: "Different reply-to address",
    description:
      "The reply-to address does not match the sender's apparent identity.",
  },
  {
    id: "credentials",
    suspicious: true,
    title: "Request for sensitive information",
    description:
      "The message pushes the recipient to verify account information.",
  },
];

const emailHeaders = [
  {
    label: "From",
    value:
      "Meridian Bank Security <security@rneridianbank-support.example.invalid>",
  },
  {
    label: "Reply-To",
    value: "support@secure-check.example.invalid",
  },
  {
    label: "To",
    value: "user@example.com",
  },
  {
    label: "Subject",
    value: "URGENT: Your account will be suspended!",
  },
  {
    label: "Received",
    value: "20 November 2026, 09:42 UTC",
  },
];

const authenticationResults = [
  {
    name: "SPF",
    result: "FAIL",
    description:
      "The sending server did not pass the simulated SPF check for the sender domain.",
  },
  {
    name: "DKIM",
    result: "NONE",
    description:
      "No valid DKIM signature was found in this fictional example.",
  },
  {
    name: "DMARC",
    result: "FAIL",
    description:
      "The simulated DMARC policy check failed.",
  },
];

// --------------------------------------------------
// 2. MAIN PAGE
// --------------------------------------------------

export default function EmailLabPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [showHeaders, setShowHeaders] = useState(false);
  const [showAuthentication, setShowAuthentication] = useState(false);

  // Scoring calculations
  const real = warningSigns.filter((warning) => warning.suspicious);

  const hits = selected.filter((id) =>
    real.some((warning) => warning.id === id)
  ).length;

  const falseAlarms = selected.length - hits;

  const score = Math.max(0, hits - falseAlarms);

  const percent = Math.round((score / real.length) * 100);

  // Select or deselect warning signs
  const toggleWarning = (id: string) => {
    if (submitted) return;

    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  // Submit inspection and save progress
  const handleSubmit = () => {
    const correct = warningSigns.filter((warning) => warning.suspicious);

    const currentHits = selected.filter((id) =>
      correct.some((warning) => warning.id === id)
    ).length;

    const currentFalseAlarms = selected.length - currentHits;

    const currentScore = Math.max(
      0,
      currentHits - currentFalseAlarms
    );

    const currentPercent = Math.round(
      (currentScore / correct.length) * 100
    );

    try {
      localStorage.setItem(
        "phishaware:email-lab",
        JSON.stringify({
          percent: currentPercent,
          at: Date.now(),
        })
      );
    } catch {
      // Continue even if browser storage is unavailable.
    }

    setSubmitted(true);
  };

  // Reset exercise
  const handleReset = () => {
    setSelected([]);
    setSubmitted(false);
    setShowHeaders(false);
    setShowAuthentication(false);
  };

  return (
    <DashboardLayout
      title="Email Inspection Lab"
      description="Analyze suspicious emails and identify phishing indicators"
    >
      <div className="space-y-7">

        {/* PAGE INTRODUCTION */}

        <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700">
              <ShieldCheck size={14} />
              PRACTICAL SECURITY LAB
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-[#17263b] sm:text-3xl">
              Email Inspection Lab
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
              Learn how to inspect suspicious emails, recognize social
              engineering tactics, and identify common phishing indicators.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-xs font-medium text-slate-500">
            <Clock3 size={15} />
            Estimated time: 10 minutes
          </div>
        </section>

        {/* SAFETY NOTICE */}

        <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <AlertTriangle
            size={20}
            className="mt-0.5 shrink-0 text-amber-600"
          />

          <div>
            <h3 className="text-sm font-bold text-amber-900">
              Safe training simulation
            </h3>

            <p className="mt-1 text-xs leading-6 text-amber-800">
              This email is fictional. All domains use reserved example
              addresses. Do not visit suspicious links or provide personal
              information during security exercises.
            </p>
          </div>
        </div>

        {/* EXERCISE INSTRUCTIONS */}

        <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
              <CircleHelp size={20} />
            </div>

            <div>
              <h3 className="font-bold text-[#17263b]">
                Your mission
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Act as a security analyst and inspect the email below.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <InstructionStep
              number="01"
              title="Inspect"
              description="Read the email and examine its details."
            />

            <InstructionStep
              number="02"
              title="Identify"
              description="Select suspicious and normal indicators."
            />

            <InstructionStep
              number="03"
              title="Analyze"
              description="Submit your findings and review feedback."
            />
          </div>
        </section>

        {/* EMAIL INSPECTION AREA */}

        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="flex flex-col justify-between gap-3 border-b border-slate-200 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <Mail size={20} />
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#17263b]">
                  Suspicious Email Sample
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Training scenario #001
                </p>
              </div>
            </div>

            <span className="w-fit rounded-full bg-red-50 px-3 py-1.5 text-[11px] font-semibold text-red-700">
              UNVERIFIED MESSAGE
            </span>
          </div>

          {/* EMAIL DETAILS */}

          <div className="space-y-4 p-5 sm:p-6">
            <div className="space-y-3">
              {emailHeaders.map((header) => (
                <div
                  key={header.label}
                  className="grid gap-1 sm:grid-cols-[100px_1fr] sm:gap-4"
                >
                  <span className="text-xs font-semibold text-slate-400">
                    {header.label}
                  </span>

                  <span className="break-all text-sm text-slate-700">
                    {header.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-5">
              <p className="text-sm font-bold text-[#17263b]">
                Dear Customer,
              </p>

              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <p>
                  We detected unusual activity on your account. Your
                  account access may be restricted unless you complete
                  an immediate security verification.
                </p>

                <p className="font-semibold text-red-700">
                  WARNING: Your account will be suspended within 24 hours!
                </p>

                <p>
                  To avoid losing access, please verify your account
                  information using the link below.
                </p>
              </div>

              <div className="mt-5 rounded-lg border border-red-200 bg-red-50 p-4">
                <p className="text-xs font-semibold text-red-700">
                  DISPLAYED LINK — DO NOT OPEN
                </p>

                <div className="mt-2 flex items-start gap-2">
                  <Globe
                    size={16}
                    className="mt-0.5 shrink-0 text-red-500"
                  />

                  <span className="break-all text-sm font-medium text-red-700">
                    https://rneridianbank-support.example.invalid/verify
                  </span>
                </div>

                <p className="mt-2 text-[11px] text-red-500">
                  This is a fictional training address, not a real website.
                </p>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                Thank you,
                <br />
                Meridian Bank Security Team
              </p>
            </div>
          </div>
        </section>

        {/* WARNING SIGN SELECTION */}

        <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold tracking-wider text-teal-700">
                ANALYST TASK
              </p>

              <h3 className="mt-2 text-lg font-bold text-[#17263b]">
                Identify the warning signs
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Select every indicator you believe is suspicious.
                Remember, some observations are normal.
              </p>
            </div>

            <span className="w-fit rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
              {selected.length} / {warningSigns.length} selected
            </span>
          </div>

          <div className="mt-5 space-y-3">
            {warningSigns.map((warning) => {
              const isSelected = selected.includes(warning.id);

              return (
                <button
                  key={warning.id}
                  type="button"
                  onClick={() => toggleWarning(warning.id)}
                  disabled={submitted}
                  aria-pressed={isSelected}
                  className={`flex w-full items-start gap-3 rounded-lg border p-4 text-left transition ${
                    isSelected
                      ? "border-teal-400 bg-teal-50"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                  } ${
                    submitted ? "cursor-default" : "cursor-pointer"
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                      isSelected
                        ? "border-teal-600 bg-teal-600 text-white"
                        : "border-slate-300 bg-white"
                    }`}
                  >
                    {isSelected && <CheckCircle2 size={14} />}
                  </span>

                  <span>
                    <span className="block text-sm font-semibold text-[#17263b]">
                      {warning.title}
                    </span>

                    <span className="mt-1 block text-xs leading-5 text-slate-500">
                      {warning.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* SUBMIT BUTTON */}

          {!submitted ? (
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-slate-400">
                {real.length} suspicious indicators and{" "}
                {warningSigns.length - real.length} normal observations.
              </p>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={selected.length === 0}
                className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Submit Findings
                <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            /* RESULTS */

            <div className="mt-6 space-y-5">
              {/* SCORE CARD */}

              <div className="rounded-xl border border-teal-200 bg-teal-50 p-5">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-teal-700" size={24} />

                  <div>
                    <h4 className="font-bold text-teal-900">
                      Inspection completed
                    </h4>

                    <p className="mt-1 text-xs text-teal-800">
                      Your results are based on correct detections
                      and false alarms.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-end gap-2">
                  <span className="text-4xl font-bold text-teal-900">
                    {percent}%
                  </span>

                  <span className="pb-1 text-xs text-teal-700">
                    Detection score
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <ResultMetric
                    label="Correct detections"
                    value={`${hits} / ${real.length}`}
                    color="green"
                  />

                  <ResultMetric
                    label="False alarms"
                    value={String(falseAlarms)}
                    color="amber"
                  />

                  <ResultMetric
                    label="Net score"
                    value={`${score} / ${real.length}`}
                    color="blue"
                  />
                </div>
              </div>

              {/* ANALYST FEEDBACK */}

              <div>
                <h4 className="font-bold text-[#17263b]">
                  Analyst feedback
                </h4>

                <p className="mt-1 text-xs text-slate-500">
                  Review every observation to understand your decisions.
                </p>

                <div className="mt-4 space-y-3">
                  {warningSigns.map((warning) => {
                    const wasSelected = selected.includes(warning.id);

                    const state = warning.suspicious
                      ? wasSelected
                        ? "hit"
                        : "missed"
                      : wasSelected
                        ? "false"
                        : "ignored";

                    return (
                      <div
                        key={warning.id}
                        className="flex items-start gap-3 rounded-lg border border-slate-200 p-4"
                      >
                        {state === "hit" && (
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-emerald-600"
                          />
                        )}

                        {state === "missed" && (
                          <XCircle
                            size={18}
                            className="mt-0.5 shrink-0 text-red-500"
                          />
                        )}

                        {state === "false" && (
                          <AlertTriangle
                            size={18}
                            className="mt-0.5 shrink-0 text-amber-500"
                          />
                        )}

                        {state === "ignored" && (
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-emerald-600"
                          />
                        )}

                        <div>
                          <p className="text-sm font-semibold text-[#17263b]">
                            {warning.title}
                          </p>

                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {warning.description}
                          </p>

                          <p
                            className={`mt-2 text-[11px] font-semibold ${
                              state === "hit" || state === "ignored"
                                ? "text-emerald-700"
                                : state === "missed"
                                  ? "text-red-600"
                                  : "text-amber-700"
                            }`}
                          >
                            {state === "hit" &&
                              "Correctly identified"}

                            {state === "missed" &&
                              "Missed warning sign"}

                            {state === "false" &&
                              "False alarm: this is not a reliable indicator"}

                            {state === "ignored" &&
                              "Correctly ignored"}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* RESET */}

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <RotateCcw size={16} />
                Try Again
              </button>
            </div>
          )}
        </section>

        {/* TECHNICAL ANALYSIS */}

        <section className="grid gap-5 lg:grid-cols-2">

          {/* EMAIL HEADERS */}

          <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <Eye size={20} />
              </div>

              <div>
                <h3 className="font-bold text-[#17263b]">
                  Email Header Analysis
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Inspect message metadata
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Email headers contain technical information about the sender,
              routing, and message delivery.
            </p>

            <button
              type="button"
              onClick={() => setShowHeaders(!showHeaders)}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              {showHeaders
                ? "Hide header details"
                : "Inspect header details"}

              <ArrowRight size={15} />
            </button>

            {showHeaders && (
              <div className="mt-4 space-y-3 rounded-lg bg-slate-50 p-4">
                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    Sender identity
                  </p>

                  <p className="mt-1 break-all text-xs text-red-700">
                    security@rneridianbank-support.example.invalid
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    Reply-to mismatch
                  </p>

                  <p className="mt-1 break-all text-xs text-red-700">
                    support@secure-check.example.invalid
                  </p>
                </div>

                <p className="text-xs leading-5 text-slate-600">
                  The sender domain uses the characters "rn" in place
                  of "m". This is a lookalike-domain technique.
                  The different reply-to address is another warning
                  sign that deserves investigation.
                </p>
              </div>
            )}
          </div>

          {/* EMAIL AUTHENTICATION */}

          <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-700">
                <Fingerprint size={20} />
              </div>

              <div>
                <h3 className="font-bold text-[#17263b]">
                  Email Authentication
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Simulated SPF, DKIM and DMARC results
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Authentication mechanisms help receiving mail systems
              evaluate whether a message is authorized and aligned
              with its claimed sender domain.
            </p>

            <button
              type="button"
              onClick={() =>
                setShowAuthentication(!showAuthentication)
              }
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              {showAuthentication
                ? "Hide results"
                : "View authentication results"}

              <ArrowRight size={15} />
            </button>

            {showAuthentication && (
              <div className="mt-4 space-y-3">
                {authenticationResults.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-lg border border-slate-200 p-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#17263b]">
                        {item.name}
                      </span>

                      <span className="rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-bold text-red-700">
                        {item.result}
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                ))}

                <p className="text-[11px] leading-5 text-slate-500">
                  These are fictional training results, not live email
                  authentication checks. A failed authentication result
                  is a warning indicator, not proof of phishing by itself.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* SECURITY TAKEAWAY */}

        <section className="rounded-xl border border-teal-200 bg-teal-50/70 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert
              size={21}
              className="mt-0.5 shrink-0 text-teal-700"
            />

            <div>
              <h3 className="text-sm font-bold text-teal-900">
                Security analyst takeaway
              </h3>

              <p className="mt-2 text-sm leading-7 text-teal-900/80">
                Never rely on a single indicator to classify an email.
                Examine the sender, reply-to address, message content,
                links, and authentication results together. A normal
                characteristic does not prove an email is safe, and a
                suspicious characteristic should be investigated in context.
              </p>
            </div>
          </div>
        </section>

        {/* NAVIGATION */}

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-teal-700"
          >
            <ArrowLeft size={16} />
            Back to Learn the Threat
          </Link>

          <Link
            href="/web-lab"
            className="inline-flex items-center gap-2 rounded-lg bg-[#101d32] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1b304c]"
          >
            Next: Fake Website Lab
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </DashboardLayout>
  );
}

// --------------------------------------------------
// 3. REUSABLE COMPONENTS
// --------------------------------------------------

function InstructionStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg bg-slate-50 p-4">
      <p className="text-xs font-bold tracking-wider text-teal-700">
        STEP {number}
      </p>

      <h4 className="mt-2 text-sm font-bold text-[#17263b]">
        {title}
      </h4>

      <p className="mt-1 text-xs leading-5 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function ResultMetric({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: "green" | "amber" | "blue";
}) {
  const styles = {
    green: "bg-emerald-100 text-emerald-800",
    amber: "bg-amber-100 text-amber-800",
    blue: "bg-blue-100 text-blue-800",
  };

  return (
    <div className={`rounded-lg p-3 ${styles[color]}`}>
      <p className="text-[11px] font-medium opacity-80">
        {label}
      </p>

      <p className="mt-1 text-xl font-bold">
        {value}
      </p>
    </div>
  );
}
