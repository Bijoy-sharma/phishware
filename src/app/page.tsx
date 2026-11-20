
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Globe,
  Mail,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Target,
  TrendingUp,
  TriangleAlert,
  Users,
  Zap,
} from "lucide-react";

import DashboardLayout from "@/components/layout/DashboardLayout";

const learningModules = [
  {
    number: "01",
    title: "Understand Phishing",
    description:
      "Learn how phishing works, why attackers use it, and the different types of phishing attacks.",
    duration: "10 min",
    level: "Beginner",
    icon: BookOpen,
    href: "/learn",
    status: "Available",
  },
  {
    number: "02",
    title: "Email Inspection Lab",
    description:
      "Analyze suspicious emails and identify sender inconsistencies, malicious links, and social engineering signs.",
    duration: "15 min",
    level: "Practical Lab",
    icon: Mail,
    href: "/email-lab",
    status: "Coming soon",
  },
  {
    number: "03",
    title: "Fake Website Detection",
    description:
      "Learn to inspect URLs, recognize domain impersonation, and identify suspicious login pages.",
    duration: "12 min",
    level: "Practical Lab",
    icon: Globe,
    href: "/web-lab",
    status: "Coming soon",
  },
  {
    number: "04",
    title: "Social Engineering",
    description:
      "Understand how attackers manipulate people through urgency, authority, fear, and trust.",
    duration: "10 min",
    level: "Awareness",
    icon: Users,
    href: "/cases",
    status: "Coming soon",
  },
];

const securityTips = [
  "Verify the sender's complete email address.",
  "Never trust unexpected urgent requests.",
  "Inspect links before opening them.",
  "Avoid sharing passwords or verification codes.",
  "Enable multi-factor authentication.",
];

const recentActivities = [
  {
    title: "Phishing Fundamentals",
    description: "Introduction to phishing attacks",
    time: "10 min",
    status: "Start learning",
  },
  {
    title: "Email Inspection Lab",
    description: "Practice identifying suspicious emails",
    time: "15 min",
    status: "Coming soon",
  },
  {
    title: "Website Detection",
    description: "Understand suspicious URLs and domains",
    time: "12 min",
    status: "Coming soon",
  },
];

export default function Home() {
  return (
    <DashboardLayout
      title="Overview"
      description="Your cybersecurity awareness training workspace"
    >
      <div className="space-y-8">
        {/* Welcome Section */}
        <section className="relative overflow-hidden rounded-2xl bg-[#101d32] p-7 text-white shadow-sm sm:p-9">
          <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />

          <div className="relative z-10 max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1.5 text-xs font-semibold text-teal-300">
              <ShieldCheck size={14} />
              CYBERSECURITY AWARENESS PLATFORM
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Think Before You Click.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Build practical skills to recognize phishing attacks, inspect
              suspicious emails, identify fake websites, and make safer
              decisions online.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-400 px-5 py-3 text-sm font-semibold text-[#102235] transition hover:bg-teal-300"
              >
                Start Learning
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Take Knowledge Check
              </Link>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 right-10 hidden opacity-10 lg:block">
            <Shield size={210} strokeWidth={0.8} />
          </div>
        </section>

        {/* Statistics */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Learning Modules"
            value="04"
            description="Training modules planned"
            icon={BookOpen}
          />
          <StatCard
            title="Training Progress"
            value="0%"
            description="Start your first lesson"
            icon={TrendingUp}
          />
          <StatCard
            title="Knowledge Check"
            value="10"
            description="Quiz questions planned"
            icon={Target}
          />
          <StatCard
            title="Learning Time"
            value="47 min"
            description="Estimated total duration"
            icon={Clock3}
          />
        </section>

        {/* Learning Path */}
        <section>
          <SectionHeading
            eyebrow="YOUR LEARNING JOURNEY"
            title="Explore Training Modules"
            description="Follow the learning path and develop practical phishing awareness skills."
            action={
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
              >
                View learning path
                <ArrowRight size={16} />
              </Link>
            }
          />

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {learningModules.map((module) => {
              const Icon = module.icon;
              const available = module.status === "Available";

              return (
                <article
                  key={module.number}
                  className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-teal-300 hover:shadow-md sm:p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                      <Icon size={21} />
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                        available
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {module.status}
                    </span>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs font-semibold tracking-wider text-slate-400">
                      MODULE {module.number} · {module.level.toUpperCase()}
                    </p>

                    <h3 className="mt-2 text-lg font-bold text-[#17263b]">
                      {module.title}
                    </h3>

                    <p className="mt-2 min-h-[52px] text-sm leading-6 text-slate-500">
                      {module.description}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Clock3 size={14} />
                      {module.duration}
                    </span>

                    {available ? (
                      <Link
                        href={module.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:gap-3"
                      >
                        Start module
                        <ArrowRight size={15} />
                      </Link>
                    ) : (
                      <span className="text-xs font-medium text-slate-400">
                        Coming soon
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Bottom Grid */}
        <section className="grid gap-6 xl:grid-cols-5">
          {/* Security Checklist */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 xl:col-span-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                <ShieldAlert size={21} />
              </div>

              <div>
                <h3 className="font-bold text-[#17263b]">
                  Security Awareness Checklist
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Essential habits for staying safe online
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {securityTips.map((tip, index) => (
                <div key={tip} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-teal-600"
                  />
                  <p className="text-sm leading-6 text-slate-600">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Important Reminder */}
          <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-6 xl:col-span-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
              <TriangleAlert size={21} />
            </div>

            <h3 className="mt-5 font-bold text-[#17263b]">
              Remember: Think Before You Click
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Attackers often create urgency to make people act without
              thinking. Pause, verify the source, and report suspicious
              messages through the appropriate channel.
            </p>

            <div className="mt-5 rounded-lg border border-amber-200 bg-white/70 p-3">
              <p className="text-xs font-semibold text-amber-800">
                SECURITY TIP
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                HTTPS encrypts the connection, but it does not guarantee that
                a website is legitimate.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Activity */}
        <section className="rounded-xl border border-slate-200 bg-white p-6">
          <SectionHeading
            eyebrow="CONTINUE YOUR JOURNEY"
            title="Learning Activities"
            description="Your planned learning activities and their current availability."
          />

          <div className="mt-5 divide-y divide-slate-100">
            {recentActivities.map((activity, index) => (
              <div
                key={activity.title}
                className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-500">
                    0{index + 1}
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#17263b]">
                      {activity.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">
                      {activity.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pl-12 sm:pl-0">
                  <span className="text-xs text-slate-500">
                    {activity.time}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-500">
                    {activity.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Note */}
        <footer className="flex flex-col gap-2 border-t border-slate-200 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>PhishAware — Cybersecurity Awareness &amp; Phishing Education</p>
          <p className="flex items-center gap-1.5">
            <ShieldCheck size={14} />
            Educational simulation environment
          </p>
        </footer>
      </div>
    </DashboardLayout>
  );
}

function StatCard({
  title,
  value,
  description,
  icon: Icon,
}: {
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
          <Icon size={19} />
        </div>
      </div>

      <p className="mt-4 text-2xl font-bold tracking-tight text-[#17263b]">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-400">{description}</p>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
      <div>
        <p className="text-[11px] font-bold tracking-[0.18em] text-teal-700">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-xl font-bold tracking-tight text-[#17263b] sm:text-2xl">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
      </div>

      {action}
    </div>
  );
}
