import PhishingQuiz from "@/components/learn/PhishingQuiz";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Mail,
  Target,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  Clock3,
  Search,
  Building2,
} from "lucide-react";

const sections = [
  {
    title: "1. What is phishing?",
    content:
      "Phishing is a social engineering technique in which an attacker impersonates a trusted person or organization to manipulate someone into revealing sensitive information, opening an unsafe attachment, or taking an unsafe action.",
    points: [
      "Attackers commonly impersonate banks, companies, delivery services, or colleagues.",
      "Messages may arrive through email, SMS, social media, or messaging platforms.",
      "The main objective is to exploit trust rather than directly break technical security.",
    ],
  },
  {
    title: "2. Phishing vs. spear phishing",
    content:
      "Traditional phishing often targets many people with similar messages. Spear phishing is more targeted: the attacker tailors a message to a particular individual or organization using contextual information.",
    points: [
      "Phishing: broad targeting and often generic messages.",
      "Spear phishing: personalized messages aimed at specific targets.",
      "Both can use impersonation, urgency, misleading links, or fake documents.",
    ],
  },
  {
    title: "3. Mass phishing campaigns",
    content:
      "Mass phishing campaigns distribute similar deceptive messages to a large number of recipients. Attackers rely on volume because even a small percentage of successful attempts can be useful to them.",
    points: [
      "Generic greetings such as 'Dear Customer'.",
      "Unexpected account warnings or delivery notifications.",
      "Messages claiming that immediate verification is required.",
      "Links that do not match the organization's official domain.",
    ],
  },
  {
    title: "4. Spear phishing and personalization",
    content:
      "Spear phishing uses information about a target to make a deceptive message appear relevant. Public profiles, company websites, job titles, and organizational relationships can provide context that attackers may misuse.",
    points: [
      "Using the recipient's name or job title.",
      "Mentioning a real project, colleague, or department.",
      "Imitating the writing style of a known contact.",
      "Creating a believable reason to request a document or payment.",
    ],
  },
  {
    title: "5. Whaling and executive targeting",
    content:
      "Whaling is a form of targeted phishing aimed at senior executives or other high-value individuals. These targets may have access to sensitive business information, financial approvals, or important systems.",
    points: [
      "Fake messages appearing to come from a CEO or director.",
      "Urgent requests for confidential documents.",
      "Unexpected financial approval requests.",
      "Attempts to bypass normal organizational procedures.",
    ],
  },
  {
    title: "6. Business Email Compromise (BEC)",
    content:
      "Business Email Compromise is a type of fraud in which attackers impersonate or compromise business email accounts to manipulate employees, suppliers, or customers into transferring money or sharing sensitive information.",
    points: [
      "Fake invoice or bank-account change requests.",
      "Messages impersonating company leadership.",
      "Requests to keep a transaction confidential.",
      "Unexpected payment instructions that bypass normal verification.",
    ],
  },
];

const warningSigns = [
  "The sender's address contains unusual spelling or a misleading domain.",
  "The message creates pressure to act immediately.",
  "A link points to a domain different from the claimed organization.",
  "The message requests passwords, verification codes, or sensitive data.",
  "An unexpected attachment or payment request appears.",
  "The sender asks you to bypass normal approval procedures.",
];

const defenses = [
  "Verify unusual requests through a separate, trusted communication channel.",
  "Inspect the sender's complete email address, not just the display name.",
  "Check a link's destination without opening it.",
  "Never share passwords or one-time verification codes through email.",
  "Use multi-factor authentication wherever possible.",
  "Report suspicious messages to the appropriate security team.",
];

export default function PhishingLessonPage() {
  return (
    <main className="min-h-screen bg-[#090F1E] text-slate-100">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <Link
          href="/learn/social-engineering/psychology"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-violet-300"
        >
          <ArrowLeft size={16} />
          Previous: Psychology of Human Manipulation
        </Link>

        <header className="mb-10 rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/10 to-blue-500/5 p-7 sm:p-10">
          <div className="mb-5 flex items-center gap-2 text-xs font-bold tracking-wider text-violet-300">
            <Mail size={16} />
            SOCIAL ENGINEERING · MODULE 03
          </div>

          <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
            Phishing and Spear Phishing
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Understand how attackers use deceptive messages, impersonation,
            and personalized manipulation to target individuals and
            organizations.
          </p>

          <div className="mt-6 flex flex-wrap gap-5 text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <Clock3 size={14} /> 10 min
            </span>
            <span className="flex items-center gap-2">
              <BookOpen size={14} /> Beginner to intermediate
            </span>
          </div>
        </header>

        <section className="mb-8 rounded-xl border border-white/[0.08] bg-[#101728] p-6">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <Target size={19} className="text-violet-400" />
            Learning objectives
          </h2>
          <p className="mb-4 text-sm leading-7 text-slate-400">
            By the end of this lesson, you should be able to:
          </p>
          <ul className="space-y-3">
            {[
              "Explain phishing and spear phishing.",
              "Differentiate mass phishing from targeted attacks.",
              "Understand whaling and Business Email Compromise.",
              "Identify common warning signs in suspicious messages.",
              "Apply practical defensive techniques.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-violet-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {sections.map((section) => (
          <section
            key={section.title}
            className="mb-5 rounded-xl border border-white/[0.08] bg-[#101728] p-6 sm:p-7"
          >
            <h2 className="mb-3 text-lg font-semibold text-white">
              {section.title}
            </h2>
            <p className="text-sm leading-7 text-slate-400">
              {section.content}
            </p>
            <ul className="mt-5 space-y-3">
              {section.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  {point}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="mb-5 rounded-xl border border-amber-400/20 bg-amber-500/[0.05] p-6 sm:p-7">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-amber-300">
            <AlertTriangle size={20} />
            Fictional example: Suspicious payment request
          </h2>

          <div className="rounded-lg border border-white/[0.08] bg-[#0B1220] p-5">
            <p className="text-xs text-slate-500">SIMULATED EMAIL · FOR TRAINING ONLY</p>
            <div className="mt-4 space-y-2 text-sm">
              <p className="text-slate-300">
                <strong className="text-slate-500">From:</strong>{" "}
                finance-team@example.invalid
              </p>
              <p className="text-slate-300">
                <strong className="text-slate-500">Subject:</strong>{" "}
                Urgent: Verify the updated supplier payment details
              </p>
              <div className="my-4 border-t border-white/[0.08]" />
              <p className="leading-7 text-slate-400">
                Hello Team Member,
                <br /><br />
                Please review the updated supplier payment information
                immediately. This request is confidential and should be
                completed before the end of the day.
                <br /><br />
                Regards,
                <br />
                Finance Team
              </p>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="mb-3 text-sm font-semibold text-amber-200">
              What should make you suspicious?
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>• Urgency and pressure to act quickly.</li>
              <li>• An unexpected change to supplier payment details.</li>
              <li>• A request for confidentiality.</li>
              <li>• No independent verification or approval process.</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-500">
            The .invalid domain is reserved for examples. This message is
            fictional and does not direct to a real service.
          </p>
        </section>

        <section className="mb-5 rounded-xl border border-white/[0.08] bg-[#101728] p-6 sm:p-7">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <Search size={19} className="text-violet-400" />
            Common warning signs
          </h2>
          <ul className="space-y-3">
            {warningSigns.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                <AlertTriangle size={16} className="mt-1 shrink-0 text-amber-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-5 rounded-xl border border-emerald-400/20 bg-emerald-500/[0.04] p-6 sm:p-7">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-emerald-300">
            <ShieldCheck size={20} />
            How to defend yourself
          </h2>
          <ul className="space-y-3">
            {defenses.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8 rounded-xl border border-white/[0.08] bg-[#101728] p-6 sm:p-7">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <Building2 size={19} className="text-violet-400" />
            Key takeaway
          </h2>
          
          <p className="text-sm leading-7 text-slate-400">
            Phishing is not always easy to recognize. A message can look
            professional, use familiar names, and contain realistic business
            context. Never rely only on appearance. Verify unusual requests
            independently and follow your organization's security procedures.
          </p>
        </section>
        <PhishingQuiz />
       

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/learn/social-engineering/psychology"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-4 text-sm font-semibold text-slate-300 transition hover:bg-white/5"
          >
            <ArrowLeft size={16} />
            Previous Module
          </Link>

          <Link
            href="/learn"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-violet-400/20 bg-violet-500/[0.08] px-5 py-4 text-sm font-semibold text-violet-300 transition hover:bg-violet-500/15"
          >
            Back to Curriculum
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
