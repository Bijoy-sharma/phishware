import PretextingQuiz from "@/components/learn/PretextingQuiz";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeAlert,
  Building2,
  CheckCircle2,
  CircleAlert,
  ClipboardCheck,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  Mail,
  Network,
  Search,
  ShieldAlert,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";

const pretextTypes = [
  {
    title: "IT Support Impersonation",
    description:
      "An attacker pretends to be an internal IT technician or helpdesk employee and claims that the victim's account or device requires immediate attention.",
    indicator:
      "Unexpected requests for passwords, MFA codes, remote access, or account recovery.",
  },
  {
    title: "Executive Impersonation",
    description:
      "An attacker impersonates a CEO, director, or senior manager to pressure employees into performing unauthorized financial or confidential operations.",
    indicator:
      "Urgent payment requests, unusual secrecy, and bypassing approval procedures.",
  },
  {
    title: "Employee or Contractor Impersonation",
    description:
      "An attacker pretends to be a colleague, vendor, contractor, or newly recruited employee to obtain information or access.",
    indicator:
      "Unverified identities, unusual access requests, and unfamiliar communication channels.",
  },
  {
    title: "Authority Impersonation",
    description:
      "An attacker pretends to represent a government agency, regulator, law enforcement organization, or other trusted authority.",
    indicator:
      "Threats, intimidation, fabricated investigations, or demands for confidential information.",
  },
  {
    title: "Vendor and Business Partner Impersonation",
    description:
      "An attacker poses as a trusted supplier or business partner and attempts to manipulate invoice payments, banking details, or business communications.",
    indicator:
      "Unexpected bank-account changes, revised invoices, and unusual payment instructions.",
  },
];

const attackLifecycle = [
  {
    step: "01",
    title: "Research",
    description:
      "The attacker gathers publicly available information about employees, roles, departments, and organizational processes.",
  },
  {
    step: "02",
    title: "Construct a Pretext",
    description:
      "The attacker creates a believable identity, background story, and reason for contacting the target.",
  },
  {
    step: "03",
    title: "Establish Trust",
    description:
      "The attacker uses familiarity, authority, urgency, or organizational context to appear legitimate.",
  },
  {
    step: "04",
    title: "Request an Action",
    description:
      "The attacker attempts to obtain information, money, access, or an unauthorized business action.",
  },
  {
    step: "05",
    title: "Exploit the Outcome",
    description:
      "If successful, the attacker may use the acquired information or access for further malicious activity.",
  },
];

const warningSigns = [
  "A person claims to have authority but cannot be independently verified.",
  "An employee is asked to bypass normal approval procedures.",
  "A caller or sender requests passwords, MFA codes, or recovery codes.",
  "A familiar person suddenly changes their payment or banking instructions.",
  "The request involves unusual secrecy or discourages independent verification.",
  "An unexpected request asks for confidential employee or customer information.",
  "The communication uses pressure, fear, or an artificial deadline.",
  "The sender's identity, contact details, or communication context appears inconsistent.",
];

const defensiveControls = [
  {
    title: "Verify Identity Independently",
    description:
      "Use an official directory, known contact number, or previously established communication channel. Do not rely only on the contact information supplied in the suspicious message.",
  },
  {
    title: "Follow Approval Procedures",
    description:
      "Require the established authorization process for financial transactions, privileged access, and sensitive information requests.",
  },
  {
    title: "Protect Authentication Information",
    description:
      "Never disclose passwords, OTPs, MFA approval codes, or recovery codes to someone claiming to provide technical support.",
  },
  {
    title: "Apply Least Privilege",
    description:
      "Provide users and external parties only the access required for their legitimate responsibilities.",
  },
  {
    title: "Report Suspicious Requests",
    description:
      "Escalate suspected impersonation attempts to the security team or appropriate organizational reporting channel.",
  },
  {
    title: "Preserve Evidence",
    description:
      "Retain relevant emails, headers, messages, call details, timestamps, and transaction information for investigation.",
  },
];

const incidentActions = [
  "Stop the suspicious interaction and do not approve additional requests.",
  "Notify the organization's security team through the approved reporting process.",
  "If credentials were exposed, reset them and revoke affected sessions or tokens.",
  "If financial details were changed or a payment was made, contact the bank and finance team immediately.",
  "Preserve emails, headers, messages, phone numbers, timestamps, and transaction records.",
  "Review affected accounts and systems for unauthorized access or activity.",
];

const scenarioIndicators = [
  "The message creates urgency by claiming an executive deadline.",
  "The sender asks the employee to bypass normal approval procedures.",
  "The request involves confidential financial information.",
  "The sender discourages independent verification.",
];

export default function PretextingModulePage() {
  return (
    <main className="min-h-screen bg-[#080d1b] text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Top navigation */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/learn/social-engineering"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400"
          >
            <ArrowLeft size={16} />
            Social Engineering Curriculum
          </Link>

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-300">
            MODULE 05 / 10
          </span>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#17213d] via-[#101a31] to-[#0b1222] p-6 sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
              <Fingerprint size={28} />
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
              Advanced Social Engineering Awareness
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Pretexting and Impersonation
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Learn how attackers construct believable identities and
              fabricated stories to manipulate employees, exploit
              organizational trust, and obtain unauthorized information or
              access.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
                <UserRound size={15} className="text-cyan-400" />
                Identity deception
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
                <Building2 size={15} className="text-violet-400" />
                Enterprise scenarios
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
                <ShieldCheck size={15} className="text-emerald-400" />
                Defensive controls
              </span>
            </div>
          </div>
        </section>

        {/* Learning objectives */}
        <section className="mt-8 rounded-2xl border border-white/10 bg-[#10182a] p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-cyan-400/10 p-2 text-cyan-300">
              <ClipboardCheck size={21} />
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
              "Explain pretexting and distinguish it from general impersonation.",
              "Recognize common identity deception techniques.",
              "Identify warning signs in suspicious business communications.",
              "Understand how attackers exploit authority and organizational trust.",
              "Apply identity verification and approval procedures.",
              "Recognize appropriate incident reporting and response actions.",
            ].map((objective) => (
              <div
                key={objective}
                className="flex gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-4"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-cyan-400"
                />
                <p className="text-sm leading-6 text-slate-300">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 01 */}
        <section className="mt-10" id="definition">
          <SectionHeading
            number="01"
            title="What is Pretexting?"
            subtitle="Understanding fabricated identities and believable stories"
          />

          <div className="rounded-2xl border border-white/10 bg-[#10182a] p-6 sm:p-8">
            <p className="text-sm leading-8 text-slate-300 sm:text-base">
              <strong className="text-white">Pretexting</strong> is a social
              engineering technique in which an attacker creates a fabricated
              identity, situation, or explanation to gain a target's trust and
              influence their behavior.
            </p>

            <p className="mt-4 text-sm leading-8 text-slate-300 sm:text-base">
              The attacker uses this invented context to make a request appear
              legitimate. The objective may be to obtain confidential
              information, gain unauthorized access, manipulate a payment, or
              influence a business decision.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <InfoCard
                icon={<Fingerprint size={20} />}
                title="Fabricated Identity"
                description="A false or misleading claim about who the attacker represents."
              />
              <InfoCard
                icon={<Users size={20} />}
                title="Trust Exploitation"
                description="Using familiarity, authority, or organizational context."
              />
              <InfoCard
                icon={<KeyRound size={20} />}
                title="Targeted Objective"
                description="Information, credentials, money, or unauthorized access."
              />
            </div>

            <div className="mt-6 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">
              <p className="text-sm font-semibold text-cyan-300">
                SOC Analyst Perspective
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Pretexting should be evaluated through the identity claim, the
                context of the request, the requested action, and whether the
                request follows established organizational procedures.
              </p>
            </div>
          </div>
        </section>

        {/* Section 02 */}
        <section className="mt-10" id="pretexting-vs-impersonation">
          <SectionHeading
            number="02"
            title="Pretexting vs. Impersonation"
            subtitle="Related techniques with different meanings"
          />

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#10182a]">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-cyan-400/10 p-2 text-cyan-300">
                    <Fingerprint size={21} />
                  </div>
                  <h3 className="font-semibold text-white">Pretexting</h3>
                </div>

                <p className="text-sm leading-7 text-slate-400">
                  Focuses on creating a believable story, situation, or reason
                  for interacting with a target.
                </p>

                <div className="mt-5 rounded-xl border border-white/5 bg-white/[0.03] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    Example
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Someone claims they need employee information to complete
                    a fabricated internal security audit.
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-violet-400/10 p-2 text-violet-300">
                    <UserRound size={21} />
                  </div>
                  <h3 className="font-semibold text-white">Impersonation</h3>
                </div>

                <p className="text-sm leading-7 text-slate-400">
                  Focuses on falsely claiming to be another person,
                  organization, or trusted entity.
                </p>

                <div className="mt-5 rounded-xl border border-white/5 bg-white/[0.03] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-violet-300">
                    Example
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Someone falsely claims to be the company's IT administrator
                    and requests access to an employee account.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 bg-white/[0.02] p-5">
              <p className="text-sm leading-7 text-slate-300">
                <strong className="text-white">Important:</strong> These
                techniques frequently overlap. An attacker may impersonate a
                trusted employee while using a fabricated story to justify a
                request.
              </p>
            </div>
          </div>
        </section>

        {/* Section 03 */}
        <section className="mt-10" id="attack-types">
          <SectionHeading
            number="03"
            title="Common Pretexting and Impersonation Techniques"
            subtitle="Recognize how attackers exploit organizational relationships"
          />

          <div className="grid gap-4 md:grid-cols-2">
            {pretextTypes.map((method, index) => (
              <article
                key={method.title}
                className="rounded-2xl border border-white/10 bg-[#10182a] p-6 transition hover:border-cyan-400/30"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-sm font-bold text-cyan-300">
                    0{index + 1}
                  </span>
                  <h3 className="font-semibold text-white">
                    {method.title}
                  </h3>
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

        {/* Section 04 */}
        <section className="mt-10" id="attack-lifecycle">
          <SectionHeading
            number="04"
            title="How a Pretexting Attack Works"
            subtitle="A simplified attack lifecycle for security awareness"
          />

          <div className="rounded-2xl border border-white/10 bg-[#10182a] p-6 sm:p-8">
            <div className="space-y-4">
              {attackLifecycle.map((step) => (
                <div
                  key={step.step}
                  className="flex gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-sm font-bold text-cyan-300">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs leading-6 text-slate-500">
              This is a simplified awareness model. Actual attacks may involve
              multiple communication channels, repeated interactions, or
              different sequences.
            </p>
          </div>
        </section>

        {/* Section 05 */}
        <section className="mt-10" id="psychological-manipulation">
          <SectionHeading
            number="05"
            title="Psychological Manipulation Techniques"
            subtitle="Why fabricated identities can appear convincing"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Authority Bias",
                description:
                  "People may feel pressured to comply with someone who claims to be a senior manager, administrator, or official.",
              },
              {
                title: "Familiarity and Trust",
                description:
                  "An attacker may use names, departments, job titles, or familiar organizational language to appear credible.",
              },
              {
                title: "Urgency and Fear",
                description:
                  "Artificial deadlines and threats can discourage employees from carefully verifying a request.",
              },
              {
                title: "Confidentiality Pressure",
                description:
                  "The attacker may claim that a request is sensitive and must remain secret, discouraging normal oversight.",
              },
            ].map((technique) => (
              <div
                key={technique.title}
                className="rounded-2xl border border-white/10 bg-[#10182a] p-6"
              >
                <div className="mb-3 flex items-center gap-2 text-violet-300">
                  <Network size={19} />
                  <h3 className="font-semibold text-white">
                    {technique.title}
                  </h3>
                </div>
                <p className="text-sm leading-7 text-slate-400">
                  {technique.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 06 */}
        <section className="mt-10" id="practical-scenario">
          <SectionHeading
            number="06"
            title="Practical Scenario: The Fake Executive Request"
            subtitle="Analyze a fictional business impersonation attempt"
          />

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#10182a]">
            <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-6 py-4">
              <div className="rounded-lg bg-amber-400/10 p-2 text-amber-300">
                <Mail size={20} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Simulated Business Email
                </p>
                <p className="text-xs text-slate-500">
                  Fictional training example — no real person or organization
                </p>
              </div>
            </div>

            <div className="space-y-5 p-6 sm:p-8">
              <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
                <div className="grid gap-3 text-sm sm:grid-cols-[100px_1fr]">
                  <span className="text-slate-500">From</span>
                  <span className="break-all text-slate-300">
                    Executive Office — Unverified Sender
                  </span>

                  <span className="text-slate-500">Subject</span>
                  <span className="font-semibold text-white">
                    Urgent: Confidential Vendor Payment
                  </span>

                  <span className="text-slate-500">Message</span>
                  <p className="leading-7 text-slate-300 sm:col-span-2">
                    &quot;I am handling a confidential business matter. A
                    vendor payment must be completed immediately. Please use
                    the revised banking details attached to this request. Do
                    not delay the transaction or discuss it with other
                    departments.&quot;
                  </p>
                </div>
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
                  <p className="text-sm font-semibold">
                    Correct Defensive Action
                  </p>
                </div>

                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Do not process the payment based on the email alone. Verify
                  the sender and payment change through a known independent
                  communication channel. Follow the organization's financial
                  approval and dual-control procedures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 07 */}
        <section className="mt-10" id="detection">
          <SectionHeading
            number="07"
            title="Detection Indicators"
            subtitle="Signals that require investigation and independent verification"
          />

          <div className="rounded-2xl border border-red-400/15 bg-[#10182a] p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <ShieldAlert size={23} className="text-red-400" />
              <p className="text-sm font-semibold text-red-300">
                Suspicious Communication Indicators
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
              Individual indicators do not independently prove malicious
              activity. Evaluate the communication context and verify identity
              before taking action.
            </p>
          </div>
        </section>

        {/* Section 08 */}
        <section className="mt-10" id="defense">
          <SectionHeading
            number="08"
            title="Prevention and Defensive Controls"
            subtitle="How individuals and organizations can reduce impersonation risk"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {defensiveControls.map((control, index) => (
              <div
                key={control.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-[#10182a] p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-sm font-bold text-emerald-300">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {control.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {control.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 09 */}
        <section className="mt-10" id="incident-response">
          <SectionHeading
            number="09"
            title="Incident Response"
            subtitle="What to do when an impersonation attempt succeeds"
          />

          <div className="rounded-2xl border border-amber-400/20 bg-[#10182a] p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <BadgeAlert size={23} className="text-amber-300" />
              <h3 className="font-semibold text-white">
                Immediate Response Priorities
              </h3>
            </div>

            <ol className="space-y-4">
              {incidentActions.map((action, index) => (
                <li key={action} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/10 text-xs font-bold text-amber-300">
                    {index + 1}
                  </span>

                  <p className="text-sm leading-7 text-slate-300">
                    {action}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-xl border border-amber-400/10 bg-amber-400/5 p-4">
              <p className="text-sm leading-7 text-slate-300">
                <strong className="text-amber-300">Remember:</strong> Report
                suspected impersonation promptly. Do not delete relevant
                evidence or independently confront the suspected attacker.
              </p>
            </div>
          </div>
        </section>

        {/* SOC analyst perspective */}
        <section className="mt-10" id="soc-perspective">
          <SectionHeading
            number="10"
            title="SOC Analyst Perspective"
            subtitle="What security teams should investigate"
          />

          <div className="rounded-2xl border border-violet-400/20 bg-violet-400/5 p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <Search size={22} className="text-violet-300" />
              <h3 className="font-semibold text-white">
                Investigation Focus Areas
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Email Authentication",
                  description:
                    "Review available email authentication results, sender identity, and message headers when investigating suspicious email.",
                },
                {
                  title: "Identity and Access",
                  description:
                    "Review unusual login activity, privilege changes, account recovery events, and unexpected access requests.",
                },
                {
                  title: "Financial Activity",
                  description:
                    "Coordinate with finance to identify unauthorized payment requests, changed banking details, or suspicious transactions.",
                },
                {
                  title: "Communication Timeline",
                  description:
                    "Correlate reported messages, calls, account events, and user actions to reconstruct the incident timeline.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-[#10182a] p-5"
                >
                  <h4 className="text-sm font-semibold text-violet-300">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs leading-6 text-slate-400">
              SOC investigation should be evidence-driven. A suspicious
              communication is an alert to investigate, not proof of a
              successful compromise.
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
              <h2 className="text-xl font-bold text-white">
                Key Takeaways
              </h2>
            </div>

            <div className="space-y-3">
              {[
                "Pretexting uses fabricated stories or situations to influence a target.",
                "Impersonation involves falsely claiming another identity or authority.",
                "Attackers may target employees, executives, IT support, vendors, and contractors.",
                "Urgency, authority, familiarity, and secrecy can be used to manipulate decisions.",
                "Verify identities through independently trusted communication channels.",
                "Follow established financial, access, and information approval procedures.",
                "Report incidents quickly and preserve evidence for investigation.",
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

        {/* Assessment placeholder */}
        <section className="mt-10 rounded-2xl border border-cyan-400/20 bg-[#10182a] p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Knowledge Assessment
              </p>

              <h2 className="mt-2 text-xl font-bold text-white">
                Test Your Pretexting Awareness
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Evaluate your ability to identify impersonation attempts,
                recognize suspicious business requests, and apply defensive
                verification procedures.
              </p>
            </div>

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
              <ClipboardCheck size={27} />
            </div>
          </div>

        {/* Interactive Knowledge Assessment */}
<PretextingQuiz />
        </section>

        {/* Navigation */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/learn/social-engineering/vishing"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400"
          >
            <ArrowLeft size={17} />
            Previous: Vishing
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

      <p className="mt-2 text-sm leading-6 text-slate-400">
        {subtitle}
      </p>
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

      <p className="mt-2 text-xs leading-6 text-slate-400">
        {description}
      </p>
    </div>
  );
}
