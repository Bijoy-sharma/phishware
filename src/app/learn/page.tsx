
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Globe,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Users,
} from "lucide-react";

const lessons = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction to Phishing",
    duration: "5 min",
  },
  {
    id: "how-it-works",
    number: "02",
    title: "How Phishing Works",
    duration: "5 min",
  },
  {
    id: "types",
    number: "03",
    title: "Types of Phishing",
    duration: "7 min",
  },
  {
    id: "warning-signs",
    number: "04",
    title: "Warning Signs",
    duration: "5 min",
  },
  {
    id: "protection",
    number: "05",
    title: "How to Stay Protected",
    duration: "5 min",
  },
];

const phishingTypes = [
  {
    icon: Mail,
    title: "Email Phishing",
    description:
      "Fraudulent emails that imitate trusted organizations to steal sensitive information.",
    example: "A fake bank email asking you to verify your account.",
  },
  {
    icon: Users,
    title: "Spear Phishing",
    description:
      "A targeted phishing attack designed for a specific person or organization.",
    example: "A personalized email pretending to be from your manager.",
  },
  {
    icon: Globe,
    title: "Website Phishing",
    description:
      "Fake websites designed to look like legitimate services and trick visitors.",
    example: "A fake login page that imitates a popular service.",
  },
  {
    icon: LockKeyhole,
    title: "Smishing",
    description:
      "Phishing attacks delivered through SMS or text messages.",
    example: "A fake delivery message containing a suspicious tracking link.",
  },
];

const warningSigns = [
  "Unexpected messages requesting personal or financial information.",
  "Urgent language that pressures you to act immediately.",
  "Unknown, unusual, or misspelled sender addresses.",
  "Suspicious links that do not match the claimed organization.",
  "Unexpected attachments or requests to download files.",
];

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-[#080D19] text-white">
      {/* Top navigation */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#080D19]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500">
              <ShieldCheck size={21} />
            </div>
            <span className="text-lg font-bold">
              Phish<span className="text-blue-400">Aware</span>
            </span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[280px_minmax(0,1fr)]">
        {/* Sidebar */}
        <aside className="border-b border-white/10 bg-[#0D1423] p-5 lg:sticky lg:top-16 lg:h-[calc(100vh-64px)] lg:overflow-y-auto lg:border-r lg:border-b-0 lg:p-7">
          <p className="text-[11px] font-bold tracking-[0.18em] text-slate-500">
            LEARNING CENTER
          </p>

          <div className="mt-5 rounded-xl border border-blue-400/20 bg-blue-500/10 p-4">
            <div className="flex items-center gap-2 text-blue-300">
              <BookOpen size={17} />
              <span className="text-sm font-semibold">Learning Path</span>
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              Learn the fundamentals of phishing awareness.
            </p>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-0 rounded-full bg-blue-400" />
            </div>
            <p className="mt-2 text-[11px] text-slate-500">
              Start your first lesson
            </p>
          </div>

          <p className="mb-4 mt-8 text-[11px] font-bold tracking-[0.18em] text-slate-500">
            COURSE CONTENT
          </p>

          <nav className="space-y-2">
            {lessons.map((lesson) => (
              <a
                key={lesson.id}
                href={`#${lesson.id}`}
                className="flex items-start gap-3 rounded-lg px-3 py-3 transition hover:bg-white/5"
              >
                <span className="mt-0.5 text-xs font-bold text-blue-400">
                  {lesson.number}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-slate-300">
                    {lesson.title}
                  </span>
                  <span className="mt-1 flex items-center gap-1 text-[11px] text-slate-500">
                    <Clock3 size={11} />
                    {lesson.duration}
                  </span>
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-8 rounded-xl border border-white/10 p-4">
            <p className="text-sm font-semibold">Learning tip</p>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              Take your time. Understanding the warning signs is more
              important than memorizing definitions.
            </p>
          </div>
        </aside>

        {/* Main learning content */}
        <div className="min-w-0 px-5 py-9 sm:px-8 lg:px-12 lg:py-12">
          <div className="mx-auto max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Link href="/" className="hover:text-blue-400">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-300">Learning Center</span>
            </div>

            {/* Course heading */}
            <section className="mt-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-blue-300">
                <ShieldCheck size={13} />
                BEGINNER LEVEL
              </div>

              <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Understanding
                <span className="text-blue-400"> Phishing</span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Learn how phishing attacks work, understand the techniques
                attackers use, and develop the skills to recognize suspicious
                messages and websites.
              </p>

              <div className="mt-7 flex flex-wrap gap-5 border-b border-white/10 pb-8 text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <BookOpen size={15} className="text-blue-400" />
                  5 lessons
                </span>
                <span className="flex items-center gap-2">
                  <Clock3 size={15} className="text-blue-400" />
                  Approximately 27 minutes
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-blue-400" />
                  Beginner friendly
                </span>
              </div>
            </section>

            {/* Lesson 1 */}
            <section id="introduction" className="scroll-mt-24 pt-12">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-blue-400">01</span>
                <span className="text-xs font-semibold tracking-wider text-slate-500">
                  FIRST LESSON
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                What is Phishing?
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-400">
                Phishing is a type of cyberattack in which an attacker
                pretends to be a trustworthy person or organization to trick
                someone into revealing sensitive information, clicking
                malicious links, or downloading harmful files.
              </p>

              <div className="mt-6 rounded-xl border border-blue-400/20 bg-blue-500/[0.07] p-5 sm:p-6">
                <div className="flex items-center gap-2 text-blue-300">
                  <ShieldCheck size={19} />
                  <h3 className="text-sm font-semibold">Remember this</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Phishing mainly exploits human trust and behavior rather
                  than relying only on technical vulnerabilities.
                </p>
              </div>
            </section>

            {/* Lesson 2 */}
            <section id="how-it-works" className="scroll-mt-24 pt-14">
              <h2 className="text-2xl font-bold">How Does Phishing Work?</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                A typical phishing attack follows a sequence of actions
                designed to manipulate a victim.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    number: "01",
                    title: "Impersonation",
                    description:
                      "The attacker pretends to be a trusted organization or person.",
                  },
                  {
                    number: "02",
                    title: "Deception",
                    description:
                      "The attacker sends a convincing email, message, or link.",
                  },
                  {
                    number: "03",
                    title: "Victim Interaction",
                    description:
                      "The victim clicks a link, opens an attachment, or shares information.",
                  },
                  {
                    number: "04",
                    title: "Information Theft",
                    description:
                      "The attacker may obtain credentials, financial details, or access.",
                  },
                ].map((step) => (
                  <div
                    key={step.number}
                    className="rounded-xl border border-white/10 bg-[#10192B] p-5"
                  >
                    <span className="text-xs font-bold text-blue-400">
                      STEP {step.number}
                    </span>
                    <h3 className="mt-3 font-semibold">{step.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lesson 3 */}
            <section id="types" className="scroll-mt-24 pt-14">
              <h2 className="text-2xl font-bold">
                Common Types of Phishing
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Attackers use different communication channels and targeting
                techniques to reach their victims.
              </p>

              <div className="mt-7 space-y-4">
                {phishingTypes.map((type) => {
                  const Icon = type.icon;

                  return (
                    <article
                      key={type.title}
                      className="rounded-xl border border-white/10 bg-[#10192B] p-5 sm:p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-blue-500/10 p-3 text-blue-400">
                          <Icon size={21} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold">{type.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-slate-400">
                            {type.description}
                          </p>
                          <div className="mt-4 rounded-lg bg-white/[0.04] p-3">
                            <p className="text-[10px] font-bold tracking-wider text-blue-300">
                              EXAMPLE
                            </p>
                            <p className="mt-1 text-xs leading-6 text-slate-300">
                              {type.example}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            {/* Lesson 4 */}
            <section id="warning-signs" className="scroll-mt-24 pt-14">
              <h2 className="text-2xl font-bold">
                Warning Signs of Phishing
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Always examine suspicious messages carefully. These warning
                signs can help you identify a potential phishing attempt.
              </p>

              <div className="mt-6 space-y-3">
                {warningSigns.map((sign) => (
                  <div
                    key={sign}
                    className="flex items-start gap-3 rounded-lg border border-white/[0.07] bg-[#10192B] p-4"
                  >
                    <AlertTriangle
                      size={17}
                      className="mt-0.5 shrink-0 text-amber-400"
                    />
                    <p className="text-sm leading-6 text-slate-300">
                      {sign}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lesson 5 */}
            <section id="protection" className="scroll-mt-24 pt-14">
              <h2 className="text-2xl font-bold">
                How to Protect Yourself
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Follow these security practices to reduce the risk of
                becoming a phishing victim.
              </p>

              <div className="mt-6 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.05] p-5 sm:p-7">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 size={20} />
                  <h3 className="font-semibold">Security checklist</h3>
                </div>

                <ul className="mt-5 space-y-4">
                  {[
                    "Verify the sender before trusting a message.",
                    "Inspect links before opening them.",
                    "Never share passwords or OTP codes through unexpected requests.",
                    "Enable multi-factor authentication (MFA).",
                    "Keep your browser and operating system updated.",
                    "Report suspicious emails to the appropriate organization.",
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className="mt-1 shrink-0 text-emerald-400"
                      />
                      <span className="text-sm leading-6 text-slate-300">
                        {tip}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Next step */}
            <section className="mt-14 rounded-2xl border border-blue-400/20 bg-blue-500/[0.07] p-6 sm:p-8">
              <p className="text-xs font-bold tracking-wider text-blue-300">
                LESSON COMPLETE
              </p>
              <h2 className="mt-3 text-2xl font-bold">
                Ready to test your knowledge?
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                You have explored the fundamentals of phishing. Next, learn
                how to investigate suspicious emails in a practical
                detection lab.
              </p>

              <Link
                href="/email-lab"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold transition hover:bg-blue-400"
              >
                Explore Email Detection Lab
                <ArrowRight size={16} />
              </Link>
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
