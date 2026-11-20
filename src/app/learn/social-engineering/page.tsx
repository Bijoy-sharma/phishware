
import Link from "next/link";
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
  MessageSquareWarning,
  ShieldAlert,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const objectives = [
  "Define social engineering and explain its purpose.",
  "Understand why attackers target human behavior.",
  "Recognize common psychological manipulation techniques.",
  "Explain the typical social engineering attack lifecycle.",
  "Identify defensive actions before trusting an unexpected request.",
];

const lifecycle = [
  {
    number: "01",
    title: "Information Gathering",
    description:
      "An attacker may collect publicly available information about a person, organization, role or business relationship.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Establishing Trust",
    description:
      "The attacker creates a believable identity or situation to appear familiar, credible or authoritative.",
    icon: Users,
  },
  {
    number: "03",
    title: "Psychological Manipulation",
    description:
      "The attacker may exploit urgency, fear, curiosity or authority to influence the target's decision.",
    icon: Brain,
  },
  {
    number: "04",
    title: "Target Interaction",
    description:
      "The target may disclose information, approve a request, open a suspicious link or provide unauthorized access.",
    icon: MessageSquareWarning,
  },
  {
    number: "05",
    title: "Exploitation and Impact",
    description:
      "If successful, the attacker may gain access, steal information, commit fraud or disrupt operations.",
    icon: ShieldAlert,
  },
];

const manipulationTechniques = [
  {
    title: "Authority",
    description:
      "The request appears to come from a manager, executive, bank or other trusted authority.",
    example:
      "A message claims to be from the company's director and demands an immediate action.",
  },
  {
    title: "Urgency",
    description:
      "Artificial time pressure discourages careful thinking and independent verification.",
    example:
      "An unexpected message claims that an account will be suspended within ten minutes.",
  },
  {
    title: "Fear",
    description:
      "A threat or negative consequence is used to make someone act without checking the facts.",
    example:
      "A fake security alert threatens account closure unless the recipient responds.",
  },
  {
    title: "Curiosity",
    description:
      "Interesting or unexpected information encourages someone to investigate an unknown source.",
    example:
      "An unexpected document notification encourages a recipient to open an unfamiliar link.",
  },
  {
    title: "Trust and Familiarity",
    description:
      "The attacker imitates a known person, organization or routine communication.",
    example:
      "A fraudulent message appears to come from a familiar colleague.",
  },
  {
    title: "Reciprocity",
    description:
      "An apparent favor, gift or benefit creates pressure to return something in exchange.",
    example:
      "Someone offers an unexpected reward in exchange for personal information.",
  },
];

const warningSigns = [
  "An unexpected request for passwords, OTPs or confidential information.",
  "Pressure to bypass normal approval or verification procedures.",
  "A request that must be completed immediately.",
  "A sender who refuses independent identity verification.",
  "An unusual payment, access or data-sharing request.",
  "A message that creates fear, excitement or emotional pressure.",
];

const defenses = [
  {
    title: "Verify independently",
    description:
      "Contact the person or organization through a trusted, previously known communication channel.",
  },
  {
    title: "Never share authentication secrets",
    description:
      "Do not disclose passwords, MFA codes, recovery codes or sensitive credentials in response to unexpected requests.",
  },
  {
    title: "Follow established procedures",
    description:
      "Do not bypass organizational approval, payment verification or access-control policies.",
  },
  {
    title: "Pause before acting",
    description:
      "Take time to assess unexpected requests, especially those involving urgency or fear.",
  },
  {
    title: "Report suspicious activity",
    description:
      "Notify the appropriate security team or responsible organization when something appears suspicious.",
  },
];

export default function SocialEngineeringLessonPage() {
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
            href="/learn"
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-white sm:text-sm"
          >
            <ArrowLeft size={15} />
            Learning Center
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
              Deep Security Training
            </h2>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              Understand how attackers exploit human trust and behavior.
            </p>
          </div>

          <p className="mb-3 mt-8 text-[10px] font-bold tracking-[0.16em] text-slate-500">
            COURSE MODULES
          </p>

          <nav className="space-y-2">
            {[
              "Introduction to Social Engineering",
              "Psychology of Human Manipulation",
              "Phishing and Spear Phishing",
              "Vishing, Smishing and QR Phishing",
              "Pretexting and Impersonation",
              "Baiting and Quid Pro Quo",
              "Workplace and Physical Attacks",
              "Real-World Case Studies",
              "Detection and Prevention",
              "Incident Response and Recovery",
            ].map((module, index) => (
              <a
                key={module}
                href="#lesson-content"
                className={`flex items-start gap-3 rounded-lg px-3 py-3 text-xs leading-5 transition ${
                  index === 0
                    ? "border border-violet-400/20 bg-violet-500/10 text-violet-300"
                    : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <span className="font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{module}</span>
              </a>
            ))}
          </nav>

          <div className="mt-8 rounded-xl border border-white/[0.08] p-4">
            <Lightbulb size={19} className="text-amber-400" />
            <h3 className="mt-3 text-xs font-semibold">Learning tip</h3>
            <p className="mt-2 text-[11px] leading-5 text-slate-500">
              Do not focus only on suspicious technology. Learn to recognize
              unusual requests and manipulation of human behavior.
            </p>
          </div>
        </aside>

        {/* Main lesson */}
        <div className="min-w-0 px-5 py-9 sm:px-8 lg:px-12 lg:py-12">
          <div className="mx-auto max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <Link href="/" className="hover:text-blue-400">
                Home
              </Link>
              <ChevronRight size={13} />
              <Link href="/learn" className="hover:text-blue-400">
                Learning Center
              </Link>
              <ChevronRight size={13} />
              <span className="text-slate-300">Social Engineering</span>
            </div>

            {/* Hero */}
            <section className="mt-9">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[10px] font-bold tracking-wider text-violet-300">
                <Brain size={13} />
                MODULE 01 · FOUNDATION
              </div>

              <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Introduction to
                <span className="block text-violet-400">
                  Social Engineering
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
                Discover how attackers manipulate human trust, emotions and
                everyday behavior to achieve their objectives. Learn why
                people become targets and how to recognize suspicious
                interactions before they become security incidents.
              </p>

              <div className="mt-7 flex flex-wrap gap-5 border-b border-white/10 pb-8 text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <Clock3 size={15} className="text-violet-400" />
                  Approximately 15 minutes
                </span>
                <span className="flex items-center gap-2">
                  <BookOpenIcon />
                  Beginner level
                </span>
                <span className="flex items-center gap-2">
                  <Target size={15} className="text-violet-400" />
                  5 learning objectives
                </span>
              </div>
            </section>

            {/* Objectives */}
            <section id="lesson-content" className="scroll-mt-24 pt-12">
              <div className="flex items-center gap-2 text-violet-400">
                <Target size={19} />
                <span className="text-xs font-bold tracking-wider">
                  LEARNING OBJECTIVES
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                What will you learn?
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                By the end of this module, you should be able to:
              </p>

              <div className="mt-6 space-y-3">
                {objectives.map((objective, index) => (
                  <div
                    key={objective}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-[#10192B] p-4"
                  >
                    <span className="text-xs font-bold text-violet-400">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-6 text-slate-300">
                      {objective}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Definition */}
            <section className="scroll-mt-24 pt-14">
              <div className="text-xs font-bold tracking-wider text-violet-400">
                01 · CORE CONCEPT
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                What is Social Engineering?
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-400">
                Social engineering is a form of manipulation in which an
                attacker influences a person into revealing sensitive
                information, performing an unsafe action or providing
                unauthorized access.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-400">
                Instead of relying only on software vulnerabilities, these
                attacks exploit human characteristics such as trust,
                helpfulness, curiosity, fear and respect for authority.
              </p>

              <div className="mt-6 rounded-xl border border-violet-400/20 bg-violet-500/[0.07] p-5 sm:p-6">
                <div className="flex items-center gap-2 text-violet-300">
                  <Lightbulb size={19} />
                  <h3 className="text-sm font-semibold">Remember this</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  A technically secure system can still be compromised if
                  someone is manipulated into sharing credentials, approving
                  an unauthorized request or providing access.
                </p>
              </div>
            </section>

            {/* Why humans */}
            <section className="pt-14">
              <div className="text-xs font-bold tracking-wider text-violet-400">
                02 · THE HUMAN FACTOR
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                Why Do Attackers Target Humans?
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-400">
                People interact with digital systems every day. They read
                messages, answer calls, approve requests and communicate
                with colleagues. Attackers may attempt to exploit these
                normal activities.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Users,
                    title: "Trust and helpfulness",
                    description:
                      "People naturally want to help colleagues, customers and individuals who appear to need assistance.",
                  },
                  {
                    icon: Clock3,
                    title: "Time pressure",
                    description:
                      "Urgent situations can reduce the time available for careful verification and decision-making.",
                  },
                  {
                    icon: LockKeyhole,
                    title: "Access and authority",
                    description:
                      "Employees may have access to valuable systems, information or business processes.",
                  },
                  {
                    icon: Brain,
                    title: "Human emotions",
                    description:
                      "Fear, curiosity, excitement and familiarity can influence how people respond to unexpected requests.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-xl border border-white/10 bg-[#10192B] p-5"
                    >
                      <div className="inline-flex rounded-lg bg-violet-500/10 p-3 text-violet-400">
                        <Icon size={21} />
                      </div>
                      <h3 className="mt-4 font-semibold">{item.title}</h3>
                      <p className="mt-2 text-xs leading-6 text-slate-400">
                        {item.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </section>

            {/* Technical vs social */}
            <section className="pt-14">
              <div className="text-xs font-bold tracking-wider text-violet-400">
                03 · SECURITY COMPARISON
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                Technical Attacks vs. Social Engineering
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                These are different approaches to compromising security.
                In real incidents, attackers may combine both.
              </p>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-blue-400/20 bg-blue-500/[0.05] p-5">
                  <div className="flex items-center gap-2 text-blue-400">
                    <LockKeyhole size={20} />
                    <h3 className="font-semibold">Technical Attack</h3>
                  </div>
                  <p className="mt-3 text-xs leading-6 text-slate-400">
                    Targets software, systems, configurations or technical
                    weaknesses.
                  </p>
                  <ul className="mt-4 space-y-3 text-xs text-slate-300">
                    <li>• Exploiting vulnerable software</li>
                    <li>• Abusing insecure configurations</li>
                    <li>• Malware and ransomware</li>
                    <li>• Exploiting authentication weaknesses</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-violet-400/20 bg-violet-500/[0.05] p-5">
                  <div className="flex items-center gap-2 text-violet-400">
                    <Users size={20} />
                    <h3 className="font-semibold">Social Engineering</h3>
                  </div>
                  <p className="mt-3 text-xs leading-6 text-slate-400">
                    Targets people through deception, impersonation and
                    psychological manipulation.
                  </p>
                  <ul className="mt-4 space-y-3 text-xs text-slate-300">
                    <li>• Fake IT support requests</li>
                    <li>• Executive impersonation</li>
                    <li>• Phishing and vishing</li>
                    <li>• Unauthorized access through deception</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Psychology */}
            <section className="pt-14">
              <div className="text-xs font-bold tracking-wider text-violet-400">
                04 · PSYCHOLOGICAL TECHNIQUES
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                Common Manipulation Techniques
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Understanding these psychological triggers helps you
                recognize suspicious requests before responding.
              </p>

              <div className="mt-7 space-y-3">
                {manipulationTechniques.map((technique, index) => (
                  <article
                    key={technique.title}
                    className="rounded-xl border border-white/[0.08] bg-[#10192B] p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-violet-400">
                        0{index + 1}
                      </span>
                      <h3 className="font-semibold">{technique.title}</h3>
                    </div>

                    <p className="mt-3 text-xs leading-6 text-slate-400">
                      {technique.description}
                    </p>

                    <div className="mt-4 rounded-lg border border-white/[0.06] bg-black/20 p-3">
                      <p className="text-[9px] font-bold tracking-wider text-violet-300">
                        EXAMPLE
                      </p>
                      <p className="mt-2 text-xs leading-6 text-slate-300">
                        {technique.example}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Attack lifecycle */}
            <section className="pt-14">
              <div className="text-xs font-bold tracking-wider text-violet-400">
                05 · ATTACK LIFECYCLE
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                How Does Social Engineering Work?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                A social engineering incident may involve several stages.
                The exact sequence can vary depending on the attack.
              </p>

              <div className="mt-7 space-y-3">
                {lifecycle.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.number}
                      className="relative rounded-xl border border-white/[0.08] bg-[#10192B] p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                          <Icon size={21} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-violet-400">
                              STEP {step.number}
                            </span>
                          </div>
                          <h3 className="mt-2 font-semibold">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-xs leading-6 text-slate-400">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {index !== lifecycle.length - 1 && (
                        <div className="absolute -bottom-3 left-[42px] z-10 h-3 w-px bg-violet-400/30" />
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Practical scenario */}
            <section className="pt-14">
              <div className="text-xs font-bold tracking-wider text-violet-400">
                06 · PRACTICAL WORKPLACE SCENARIO
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                Can You Recognize the Manipulation?
              </h2>

              <div className="mt-6 overflow-hidden rounded-2xl border border-amber-400/20 bg-[#111827]">
                <div className="flex items-center gap-2 border-b border-white/10 bg-amber-400/[0.06] px-5 py-3">
                  <MessageSquareWarning
                    size={17}
                    className="text-amber-400"
                  />
                  <span className="text-xs font-semibold text-amber-300">
                    FICTIONAL TRAINING SCENARIO
                  </span>
                </div>

                <div className="p-5 sm:p-7">
                  <div className="rounded-xl border border-white/10 bg-[#0D1423] p-5">
                    <p className="text-[10px] font-bold tracking-wider text-slate-500">
                      MESSAGE FROM AN UNKNOWN NUMBER
                    </p>
                    <p className="mt-4 text-sm leading-7 text-slate-200">
                      &quot;Hello, I am from your company&apos;s IT support
                      department. We are experiencing an urgent account
                      security issue. Please send your verification code
                      immediately so we can prevent your account from being
                      disabled.&quot;
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-semibold">
                      What warning signs can you identify?
                    </h3>

                    <div className="mt-4 space-y-3">
                      {[
                        "Unexpected request for an authentication code.",
                        "Claim of authority without independent verification.",
                        "Urgent threat of account deactivation.",
                        "Request to bypass normal security procedures.",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-lg border border-white/[0.07] bg-white/[0.02] p-3"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-emerald-400"
                          />
                          <p className="text-xs leading-6 text-slate-300">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.05] p-5">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <ShieldCheck size={19} />
                      <h4 className="text-sm font-semibold">
                        Recommended response
                      </h4>
                    </div>
                    <p className="mt-3 text-xs leading-7 text-slate-300">
                      Do not share the verification code. Do not use
                      contact details supplied in the suspicious message.
                      Contact your official IT support channel independently
                      and report the request.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Warning signs */}
            <section className="pt-14">
              <div className="text-xs font-bold tracking-wider text-violet-400">
                07 · RECOGNITION
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                Warning Signs to Remember
              </h2>

              <div className="mt-6 space-y-3">
                {warningSigns.map((sign) => (
                  <div
                    key={sign}
                    className="flex items-start gap-3 rounded-lg border border-white/[0.07] bg-[#10192B] p-4"
                  >
                    <ShieldAlert
                      size={17}
                      className="mt-0.5 shrink-0 text-amber-400"
                    />
                    <p className="text-xs leading-6 text-slate-300">
                      {sign}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Defenses */}
            <section className="pt-14">
              <div className="text-xs font-bold tracking-wider text-violet-400">
                08 · DEFENSIVE STRATEGIES
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                How to Defend Against Social Engineering
              </h2>

              <div className="mt-7 space-y-3">
                {defenses.map((defense, index) => (
                  <div
                    key={defense.title}
                    className="flex items-start gap-3 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.03] p-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-emerald-400"
                    />
                    <div>
                      <h3 className="text-sm font-semibold">
                        {index + 1}. {defense.title}
                      </h3>
                      <p className="mt-2 text-xs leading-6 text-slate-400">
                        {defense.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key takeaways */}
            <section className="mt-14 rounded-2xl border border-blue-400/20 bg-blue-500/[0.07] p-6 sm:p-8">
              <div className="flex items-center gap-2 text-blue-300">
                <Lightbulb size={20} />
                <span className="text-xs font-bold tracking-wider">
                  KEY TAKEAWAYS
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                What should you remember?
              </h2>

              <ul className="mt-6 space-y-4">
                {[
                  "Social engineering exploits human trust and behavior.",
                  "Attackers may use authority, urgency, fear and curiosity.",
                  "Unexpected requests should always be independently verified.",
                  "Passwords and authentication codes must remain confidential.",
                  "Reporting suspicious activity helps protect individuals and organizations.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-blue-400"
                    />
                    <span className="text-sm leading-6 text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Navigation */}
            <section className="mt-12 grid gap-3 sm:grid-cols-2">
              <Link
                href="/learn"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.07] hover:text-white"
              >
                <ArrowLeft size={16} />
                Back to Learning Center
              </Link>

              <div className="rounded-xl border border-violet-400/20 bg-violet-500/[0.07] px-5 py-4">
                <div className="flex items-center justify-center gap-2 text-sm font-semibold text-violet-300">
                  Next: Psychology of Human Manipulation
                  <ArrowRight size={16} />
                </div>
                <p className="mt-2 text-center text-[10px] text-slate-500">
                  Module 02 · Coming in the next development phase
                </p>
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

function BookOpenIcon() {
  return <CheckCircle2 size={15} className="text-violet-400" />;
}
