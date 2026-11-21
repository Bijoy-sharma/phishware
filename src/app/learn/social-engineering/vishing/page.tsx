
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  AudioLines,
  BadgeAlert,
  CheckCircle2,
  CircleAlert,
  ClipboardCheck,
  Headphones,
  LockKeyhole,
  Phone,
  ShieldCheck,
  ShieldX,
  Siren,
  UserRoundCheck,
  Volume2,
} from "lucide-react";

const attackMethods = [
  {
    title: "Bank and Financial Impersonation",
    description:
      "An attacker pretends to represent a bank or mobile financial service and claims that an account has a security problem.",
    indicator: "Requests for PINs, OTPs, passwords, or remote access.",
  },
  {
    title: "Customer Support Impersonation",
    description:
      "A caller claims to be from a company's support team and asks the victim to follow instructions to resolve a fabricated issue.",
    indicator: "Unexpected support calls and requests to install software.",
  },
  {
    title: "Government or Authority Impersonation",
    description:
      "An attacker impersonates an official or law-enforcement representative to create fear and pressure.",
    indicator: "Threats, intimidation, and demands for immediate payment.",
  },
  {
    title: "Technical Support Scams",
    description:
      "A caller claims that the victim's device or account has been compromised and offers a fake technical solution.",
    indicator: "Requests for remote desktop access or unusual commands.",
  },
  {
    title: "AI Voice Impersonation",
    description:
      "An attacker may use AI-generated or cloned voices to imitate someone familiar, such as a colleague, manager, or family member.",
    indicator: "Unexpected urgent requests involving money or confidential information.",
  },
];

const warningSigns = [
  "The caller creates an emergency and demands immediate action.",
  "The caller asks for an OTP, PIN, password, or recovery code.",
  "The caller discourages you from contacting the organization independently.",
  "The caller requests money transfers or unusual payment methods.",
  "The caller asks you to install remote-access software.",
  "The caller becomes aggressive when you ask verification questions.",
  "The caller's identity or story cannot be independently verified.",
];

const responseSteps = [
  {
    title: "Pause the conversation",
    description:
      "Do not allow urgency or emotional pressure to control your decision.",
  },
  {
    title: "Never disclose sensitive information",
    description:
      "Do not share passwords, OTPs, PINs, recovery codes, or confidential organizational information.",
  },
  {
    title: "End the suspicious call",
    description:
      "You are not required to remain on a call that feels suspicious or coercive.",
  },
  {
    title: "Verify independently",
    description:
      "Contact the organization using a trusted phone number from its official website, app, or documents.",
  },
  {
    title: "Report the incident",
    description:
      "Notify your bank, service provider, IT/security team, or the appropriate authority.",
  },
  {
    title: "Preserve available evidence",
    description:
      "Record the phone number, call time, messages, and other relevant details. Do not engage further with the caller.",
  },
];

const scenarioIndicators = [
  "Unexpected call from an unknown number.",
  "A claim that the account will be blocked within minutes.",
  "A request to share an OTP over the phone.",
  "Pressure not to disconnect or contact the bank.",
];

export default function VishingModulePage() {
  return (
    <main className="min-h-screen bg-[#080d1b] text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb and navigation */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/learn/social-engineering"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400"
          >
            <ArrowLeft size={16} />
            Social Engineering Curriculum
          </Link>

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-300">
            MODULE 04 / 10
          </span>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#14213d] via-[#101a31] to-[#0b1222] p-6 sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
              <Phone size={28} />
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
              Social Engineering Awareness
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Vishing: Voice Phishing
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Understand how attackers manipulate people through phone calls,
              impersonation, and voice-based deception. Learn to recognize
              suspicious call patterns and protect sensitive information.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
                <Headphones size={15} className="text-cyan-400" />
                Voice-based attacks
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
                <ShieldCheck size={15} className="text-emerald-400" />
                Defensive learning
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
                <ClipboardCheck size={15} className="text-violet-400" />
                Practical assessment
              </span>
            </div>
          </div>
        </section>

        {/* Learning objectives */}
        <section className="mt-8 rounded-2xl border border-white/10 bg-[#10182a] p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-cyan-400/10 p-2 text-cyan-300">
              <UserRoundCheck size={21} />
            </div>
            <h2 className="text-xl font-bold text-white">
              Learning Objectives
            </h2>
          </div>

          <p className="mb-5 text-sm leading-6 text-slate-400">
            After completing this module, you should be able to:
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Define vishing and explain how it differs from other phishing attacks.",
              "Identify common voice-based social engineering techniques.",
              "Recognize manipulation tactics and suspicious call indicators.",
              "Apply safe verification and incident-reporting procedures.",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-4"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-cyan-400"
                />
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Definition */}
        <section className="mt-10" id="definition">
          <SectionHeading
            number="01"
            title="What is Vishing?"
            subtitle="Understanding voice-based social engineering"
          />

          <div className="rounded-2xl border border-white/10 bg-[#10182a] p-6 sm:p-8">
            <p className="text-sm leading-8 text-slate-300 sm:text-base">
              <strong className="text-white">Vishing</strong>, short for{" "}
              <strong className="text-cyan-300">voice phishing</strong>, is a
              type of social engineering attack in which an attacker uses
              telephone calls or voice communication to manipulate a person
              into revealing sensitive information, transferring money, or
              performing an unsafe action.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <InfoCard
                icon={<Phone size={20} />}
                title="Communication"
                description="Phone calls and voice-based interactions."
              />
              <InfoCard
                icon={<AudioLines size={20} />}
                title="Manipulation"
                description="Impersonation, urgency, fear, and trust."
              />
              <InfoCard
                icon={<LockKeyhole size={20} />}
                title="Target"
                description="Credentials, money, access, or confidential data."
              />
            </div>

            <div className="mt-6 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">
              <p className="text-sm font-semibold text-cyan-300">
                SOC Analyst Perspective
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Vishing is a human-focused attack. The attacker attempts to
                influence a person's decisions through voice communication
                rather than relying only on technical vulnerabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Attack methods */}
        <section className="mt-10" id="attack-methods">
          <SectionHeading
            number="02"
            title="Common Vishing Techniques"
            subtitle="How attackers establish trust and manipulate victims"
          />

          <div className="grid gap-4 md:grid-cols-2">
            {attackMethods.map((method, index) => (
              <article
                key={method.title}
                className="rounded-2xl border border-white/10 bg-[#10182a] p-6 transition hover:border-cyan-400/30"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-sm font-bold text-cyan-300">
                    0{index + 1}
                  </span>
                  <h3 className="font-semibold text-white">{method.title}</h3>
                </div>

                <p className="text-sm leading-7 text-slate-400">
                  {method.description}
                </p>

                <div className="mt-5 rounded-xl border border-amber-400/10 bg-amber-400/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                    Detection Indicator
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {method.indicator}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Attack flow */}
        <section className="mt-10" id="attack-flow">
          <SectionHeading
            number="03"
            title="How a Vishing Attack Works"
            subtitle="A simplified attack lifecycle for awareness and detection"
          />

          <div className="rounded-2xl border border-white/10 bg-[#10182a] p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Preparation",
                  detail:
                    "The attacker selects a target and prepares an impersonation story.",
                },
                {
                  step: "02",
                  title: "Initial Contact",
                  detail:
                    "The attacker contacts the target through a phone call.",
                },
                {
                  step: "03",
                  title: "Manipulation",
                  detail:
                    "The attacker uses authority, urgency, fear, or familiarity.",
                },
                {
                  step: "04",
                  title: "Desired Action",
                  detail:
                    "The attacker attempts to obtain information, money, or access.",
                },
              ].map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-xs font-bold tracking-widest text-cyan-400">
                      STEP {step.step}
                    </p>
                    <h3 className="mt-3 font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {step.detail}
                    </p>
                  </div>

                  {index !== 3 && (
                    <ArrowRight
                      size={17}
                      className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-cyan-400 lg:block"
                    />
                  )}
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs leading-6 text-slate-500">
              This is a simplified awareness model. Real incidents may follow
              different sequences or involve multiple communication channels.
            </p>
          </div>
        </section>

        {/* AI voice */}
        <section className="mt-10" id="ai-voice">
          <SectionHeading
            number="04"
            title="AI Voice Cloning and Impersonation"
            subtitle="An emerging challenge in voice-based fraud"
          />

          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-white/10 bg-[#10182a] p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Volume2 className="text-violet-300" size={23} />
                <h3 className="font-semibold text-white">
                  Why AI-generated voices matter
                </h3>
              </div>

              <p className="text-sm leading-7 text-slate-400">
                Voice cloning tools can generate speech that resembles a real
                person's voice. Criminals may misuse this capability to make
                fraudulent requests appear to come from a trusted individual.
              </p>

              <ul className="mt-5 space-y-3">
                {[
                  "A caller may sound like a familiar person.",
                  "A familiar voice does not prove the caller's identity.",
                  "Urgent financial or confidential requests require independent verification.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <CircleAlert
                      size={17}
                      className="mt-1 shrink-0 text-violet-300"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-violet-400/20 bg-violet-400/5 p-6">
              <BadgeAlert size={25} className="text-violet-300" />
              <h3 className="mt-4 font-semibold text-white">
                Important Security Rule
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Never approve a sensitive request based only on voice
                recognition. Use a previously agreed verification method or
                contact the person through a trusted, independent channel.
              </p>
            </div>
          </div>
        </section>

        {/* Warning signs */}
        <section className="mt-10" id="warning-signs">
          <SectionHeading
            number="05"
            title="Warning Signs of a Vishing Call"
            subtitle="Indicators that should trigger caution and verification"
          />

          <div className="rounded-2xl border border-red-400/15 bg-[#10182a] p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <ShieldX size={23} className="text-red-400" />
              <p className="text-sm font-semibold text-red-300">
                Suspicious Call Indicators
              </p>
            </div>

            <div className="space-y-3">
              {warningSigns.map((sign) => (
                <div
                  key={sign}
                  className="flex gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-4"
                >
                  <CircleAlert
                    size={18}
                    className="mt-0.5 shrink-0 text-red-400"
                  />
                  <p className="text-sm leading-6 text-slate-300">{sign}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs leading-6 text-slate-500">
              These indicators are warning signs, not proof that a call is
              malicious. Verify the caller independently before taking action.
            </p>
          </div>
        </section>

        {/* Scenario */}
        <section className="mt-10" id="scenario">
          <SectionHeading
            number="06"
            title="Practical Scenario: The Fake Bank Call"
            subtitle="Analyze a fictional voice phishing attempt"
          />

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#10182a]">
            <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-6 py-4">
              <div className="rounded-lg bg-amber-400/10 p-2 text-amber-300">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Simulated Phone Conversation
                </p>
                <p className="text-xs text-slate-500">
                  Fictional training example — no real organization involved
                </p>
              </div>
            </div>

            <div className="space-y-5 p-6 sm:p-8">
              <div className="max-w-[90%] rounded-2xl rounded-tl-sm border border-red-400/20 bg-red-400/5 p-4 sm:max-w-[75%]">
                <p className="mb-2 text-xs font-semibold text-red-300">
                  UNKNOWN CALLER
                </p>
                <p className="text-sm leading-7 text-slate-300">
                  &quot;Hello, I am calling from your bank&apos;s security
                  department. We detected suspicious activity on your account.
                  Your account may be blocked shortly. Please share the OTP
                  sent to your phone so we can secure it.&quot;
                </p>
              </div>

              <div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-sm border border-cyan-400/20 bg-cyan-400/5 p-4 sm:max-w-[75%]">
                <p className="mb-2 text-xs font-semibold text-cyan-300">
                  CUSTOMER — SAFE RESPONSE
                </p>
                <p className="text-sm leading-7 text-slate-300">
                  &quot;I will not share any OTP or security code. I will
                  disconnect and contact my bank using its official number to
                  verify this issue.&quot;
                </p>
              </div>

              <div className="rounded-xl border border-amber-400/15 bg-amber-400/5 p-5">
                <p className="text-sm font-semibold text-amber-300">
                  What should you detect?
                </p>
                <ul className="mt-4 space-y-3">
                  {scenarioIndicators.map((indicator) => (
                    <li
                      key={indicator}
                      className="flex gap-3 text-sm leading-6 text-slate-300"
                    >
                      <CircleAlert
                        size={17}
                        className="mt-1 shrink-0 text-amber-300"
                      />
                      {indicator}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-5">
                <div className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 size={19} />
                  <p className="text-sm font-semibold">Correct Security Action</p>
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Disconnect the call, never disclose the OTP, and independently
                  contact the bank through a verified channel. A legitimate
                  security process should not require you to disclose your
                  confidential authentication code to a caller.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Response */}
        <section className="mt-10" id="response">
          <SectionHeading
            number="07"
            title="How to Respond to Vishing"
            subtitle="A practical defensive response checklist"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {responseSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-[#10182a] p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-sm font-bold text-emerald-300">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Incident response */}
        <section className="mt-10" id="incident-response">
          <SectionHeading
            number="08"
            title="What If You Already Shared Information?"
            subtitle="Immediate actions after a suspected vishing incident"
          />

          <div className="rounded-2xl border border-amber-400/20 bg-[#10182a] p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <Siren size={23} className="text-amber-300" />
              <h3 className="font-semibold text-white">
                Incident Response Priorities
              </h3>
            </div>

            <ol className="space-y-4">
              {[
                "Contact your bank or relevant service provider immediately using its official contact channel.",
                "Ask the provider to secure affected accounts, block unauthorized transactions, or revoke exposed access where appropriate.",
                "Change compromised passwords and revoke active sessions. Enable or reset multi-factor authentication where necessary.",
                "If remote access was granted, disconnect the affected device from the network and contact trusted IT/security support.",
                "Preserve call records, transaction details, messages, and other evidence.",
                "Report the incident to your organization's security team or the appropriate local authority.",
              ].map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/10 text-xs font-bold text-amber-300">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-slate-300">{item}</p>
                </li>
              ))}
            </ol>

            <p className="mt-6 rounded-xl border border-amber-400/10 bg-amber-400/5 p-4 text-sm leading-7 text-slate-300">
              <strong className="text-amber-300">Remember:</strong> Report
              suspected fraud quickly. Do not delete relevant evidence or
              continue interacting with the suspected attacker.
            </p>
          </div>
        </section>

        {/* Key takeaways */}
        <section className="mt-10" id="takeaways">
          <div className="rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 to-transparent p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-emerald-400/10 p-2 text-emerald-300">
                <ShieldCheck size={22} />
              </div>
              <h2 className="text-xl font-bold text-white">Key Takeaways</h2>
            </div>

            <div className="space-y-3">
              {[
                "Vishing uses voice communication to manipulate people.",
                "Caller identity and familiar voices must not be trusted without verification.",
                "Never share OTPs, PINs, passwords, or recovery codes with callers.",
                "Urgency, fear, authority, and familiarity are common manipulation tactics.",
                "End suspicious calls and verify independently through trusted channels.",
                "Report incidents quickly and preserve relevant evidence.",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-emerald-300"
                  />
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quiz placeholder */}
        <section className="mt-10 rounded-2xl border border-cyan-400/20 bg-[#10182a] p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Knowledge Assessment
              </p>
              <h2 className="mt-2 text-xl font-bold text-white">
                Test Your Vishing Awareness
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Complete the five-question assessment to evaluate your
                understanding of voice phishing and defensive responses.
              </p>
            </div>
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
              <ClipboardCheck size={27} />
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-white/5 bg-white/[0.03] p-4">
            <p className="text-sm text-slate-400">
              The interactive assessment will be added in the next step.
            </p>
          </div>
        </section>

        {/* Module navigation */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/learn/social-engineering/phishing"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400"
          >
            <ArrowLeft size={17} />
            Previous: Phishing
          </Link>

          <Link
            href="/learn/social-engineering"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Back to Curriculum
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </main>
  );
}

function SectionHeading({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-5">
      <p className="mb-2 text-xs font-bold tracking-[0.2em] text-cyan-400">
        SECTION {number}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-400">{subtitle}</p>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="mb-3 text-cyan-300">{icon}</div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <p className="mt-2 text-xs leading-6 text-slate-400">{description}</p>
    </div>
  );
}
