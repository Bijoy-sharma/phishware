
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Brain,
  Bug,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Code2,
  Eye,
  Fingerprint,
  Globe,
  GraduationCap,
  KeyRound,
  LockKeyhole,
  Mail,
  MessageSquareWarning,
  Network,
  PlayCircle,
  Search,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Target,
  Users,
  Video,
  Zap,
} from "lucide-react";

const courses = [
  {
    id: "fundamentals",
    number: "01",
    title: "Cybersecurity Fundamentals",
    category: "FOUNDATION",
    level: "Beginner",
    duration: "45 min",
    lessons: 7,
    description:
      "Understand the essential concepts, terminology and security principles behind modern cybersecurity.",
    icon: Shield,
    color: "blue",
    topics: [
      "Introduction to cybersecurity",
      "CIA Triad: Confidentiality, Integrity and Availability",
      "Threats, vulnerabilities and risks",
      "Malware, ransomware and spyware",
      "Attack surfaces and security principles",
      "Authentication and authorization",
      "Basic security hygiene",
    ],
  },
  {
    id: "social-engineering",
    number: "02",
    title: "Social Engineering",
    category: "CORE TRAINING",
    level: "Beginner to Advanced",
    duration: "90 min",
    lessons: 10,
    description:
      "Understand how attackers manipulate human psychology, exploit trust and influence people into making unsafe decisions.",
    icon: Users,
    color: "violet",
    featured: true,
    topics: [
      "Social engineering fundamentals",
      "Psychology of human manipulation",
      "Phishing and spear phishing",
      "Whaling and Business Email Compromise",
      "Vishing and smishing",
      "Pretexting and impersonation",
      "Baiting and quid pro quo",
      "Tailgating and physical attacks",
      "MFA fatigue and help-desk impersonation",
      "Defensive strategies and incident response",
    ],
  },
  {
    id: "phishing",
    number: "03",
    title: "Phishing & Email Security",
    category: "EMAIL SECURITY",
    level: "Beginner to Intermediate",
    duration: "60 min",
    lessons: 8,
    description:
      "Learn how to investigate suspicious emails, identify spoofed senders and recognize malicious messages.",
    icon: Mail,
    color: "cyan",
    topics: [
      "Email structure and headers",
      "Sender spoofing and domain impersonation",
      "SPF, DKIM and DMARC",
      "Malicious links and attachments",
      "Business Email Compromise",
      "Email authentication results",
      "Email investigation techniques",
      "Reporting suspicious messages",
    ],
  },
  {
    id: "web-security",
    number: "04",
    title: "Web & URL Security",
    category: "WEB SECURITY",
    level: "Beginner to Intermediate",
    duration: "55 min",
    lessons: 7,
    description:
      "Understand suspicious URLs, fake websites, domain impersonation and the risks of unsafe browsing.",
    icon: Globe,
    color: "emerald",
    topics: [
      "HTTP vs HTTPS",
      "Domain and subdomain analysis",
      "Lookalike and homograph domains",
      "URL redirection and shortened links",
      "Fake login pages",
      "Threat intelligence and URL reputation",
      "Safe browsing practices",
    ],
  },
  {
    id: "personal-security",
    number: "05",
    title: "Personal & Organizational Security",
    category: "SECURITY PRACTICES",
    level: "Beginner to Intermediate",
    duration: "50 min",
    lessons: 7,
    description:
      "Build secure digital habits and understand how individuals and organizations protect sensitive information.",
    icon: LockKeyhole,
    color: "amber",
    topics: [
      "Password security and password managers",
      "Multi-factor authentication",
      "Account and device protection",
      "Data privacy and confidentiality",
      "Secure communication",
      "Organizational security policies",
      "Security awareness culture",
    ],
  },
  {
    id: "incident-response",
    number: "06",
    title: "Incident Response & Recovery",
    category: "RESPONSE",
    level: "Intermediate",
    duration: "60 min",
    lessons: 7,
    description:
      "Learn how to recognize security incidents, report suspicious activity and respond safely after a potential compromise.",
    icon: ShieldAlert,
    color: "rose",
    topics: [
      "Recognizing security incidents",
      "Reporting suspicious activity",
      "What to do after clicking a phishing link",
      "Compromised account response",
      "Evidence preservation",
      "Recovery and containment",
      "Lessons learned and prevention",
    ],
  },
];

const socialEngineeringModules = [
  {
    number: "01",
    title: "Introduction to Social Engineering",
    duration: "8 min",
    description:
      "Understand social engineering as a security threat and why human behavior is frequently targeted.",
    details: [
      "Definition and objectives of social engineering",
      "Human trust as an attack surface",
      "Technical attacks vs human-centered attacks",
      "The social engineering attack lifecycle",
    ],
    icon: Brain,
  },
  {
    number: "02",
    title: "Psychology of Human Manipulation",
    duration: "10 min",
    description:
      "Understand the psychological triggers attackers exploit to influence decisions.",
    details: [
      "Authority and perceived credibility",
      "Urgency, fear and scarcity",
      "Curiosity and reward",
      "Reciprocity and social proof",
      "Trust, familiarity and emotional pressure",
    ],
    icon: Fingerprint,
  },
  {
    number: "03",
    title: "Phishing and Spear Phishing",
    duration: "10 min",
    description:
      "Explore broad phishing campaigns and highly targeted messages designed for specific individuals.",
    details: [
      "Mass phishing campaigns",
      "Spear phishing and personalization",
      "Whaling and executive targeting",
      "Business Email Compromise",
      "Recognizing targeted manipulation",
    ],
    icon: Mail,
  },
  {
    number: "04",
    title: "Vishing, Smishing and QR Phishing",
    duration: "9 min",
    description:
      "Identify social engineering delivered through phone calls, text messages and QR codes.",
    details: [
      "Voice phishing and caller impersonation",
      "SMS-based phishing",
      "Malicious QR codes",
      "Fake delivery and banking notifications",
      "Safe verification practices",
    ],
    icon: Smartphone,
  },
  {
    number: "05",
    title: "Pretexting and Impersonation",
    duration: "9 min",
    description:
      "Learn how fabricated identities and believable stories are used to gain trust.",
    details: [
      "Fake identity and fabricated situations",
      "Executive and employee impersonation",
      "Help-desk impersonation",
      "Third-party and vendor impersonation",
      "Independent identity verification",
    ],
    icon: Users,
  },
  {
    number: "06",
    title: "Baiting and Quid Pro Quo",
    duration: "8 min",
    description:
      "Understand deceptive offers, rewards and promised services used to manipulate victims.",
    details: [
      "Malicious downloads and fake rewards",
      "USB baiting concepts",
      "Quid pro quo manipulation",
      "Unexpected offers and free services",
      "Safe handling of unknown devices",
    ],
    icon: Zap,
  },
  {
    number: "07",
    title: "Workplace and Physical Attacks",
    duration: "9 min",
    description:
      "Recognize attacks that exploit workplace routines, physical access and organizational trust.",
    details: [
      "Tailgating and unauthorized entry",
      "Shoulder surfing",
      "Fake IT support",
      "MFA fatigue attacks",
      "Workplace verification procedures",
    ],
    icon: Network,
  },
  {
    number: "08",
    title: "Real-World Attack Case Studies",
    duration: "12 min",
    description:
      "Examine documented social engineering incidents and understand the lessons they teach.",
    details: [
      "2011 RSA security breach",
      "2020 Twitter social engineering incident",
      "Business Email Compromise patterns",
      "Attacker techniques and organizational impact",
      "Lessons learned from incidents",
    ],
    icon: Bug,
  },
  {
    number: "09",
    title: "Detection and Prevention",
    duration: "10 min",
    description:
      "Build a practical defense strategy for recognizing manipulation before taking action.",
    details: [
      "Independent verification",
      "Recognizing suspicious requests",
      "Protecting passwords and MFA codes",
      "Security awareness and reporting",
      "Organizational prevention controls",
    ],
    icon: Eye,
  },
  {
    number: "10",
    title: "Incident Response and Recovery",
    duration: "10 min",
    description:
      "Learn what to do when someone interacts with a suspicious message or discloses sensitive information.",
    details: [
      "Stop further interaction",
      "Report the incident immediately",
      "Secure potentially compromised accounts",
      "Preserve relevant evidence",
      "Recovery and follow-up procedures",
    ],
    icon: ShieldCheck,
  },
];

const quickTopics = [
  {
    icon: MessageSquareWarning,
    title: "Realistic scenarios",
    description:
      "Practice identifying suspicious workplace requests and deceptive messages.",
  },
  {
    icon: Target,
    title: "Learning objectives",
    description:
      "Know exactly what you should understand after completing each lesson.",
  },
  {
    icon: Video,
    title: "Visual explanations",
    description:
      "Use diagrams, examples and guided explanations to understand complex topics.",
  },
  {
    icon: Award,
    title: "Knowledge assessments",
    description:
      "Test your understanding with scenario-based questions and explanations.",
  },
];

const colorStyles: Record<
  string,
  { icon: string; badge: string; border: string; glow: string }
> = {
  blue: {
    icon: "bg-blue-500/10 text-blue-400",
    badge: "bg-blue-500/10 text-blue-300",
    border: "border-blue-400/20",
    glow: "from-blue-500/15",
  },
  violet: {
    icon: "bg-violet-500/10 text-violet-400",
    badge: "bg-violet-500/10 text-violet-300",
    border: "border-violet-400/20",
    glow: "from-violet-500/15",
  },
  cyan: {
    icon: "bg-cyan-500/10 text-cyan-400",
    badge: "bg-cyan-500/10 text-cyan-300",
    border: "border-cyan-400/20",
    glow: "from-cyan-500/15",
  },
  emerald: {
    icon: "bg-emerald-500/10 text-emerald-400",
    badge: "bg-emerald-500/10 text-emerald-300",
    border: "border-emerald-400/20",
    glow: "from-emerald-500/15",
  },
  amber: {
    icon: "bg-amber-500/10 text-amber-400",
    badge: "bg-amber-500/10 text-amber-300",
    border: "border-amber-400/20",
    glow: "from-amber-500/15",
  },
  rose: {
    icon: "bg-rose-500/10 text-rose-400",
    badge: "bg-rose-500/10 text-rose-300",
    border: "border-rose-400/20",
    glow: "from-rose-500/15",
  },
};

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-[#080D19] text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#080D19]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-[1500px] items-center justify-between px-5 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 shadow-lg shadow-blue-500/20">
              <ShieldCheck size={22} />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight">
                Phish<span className="text-blue-400">Aware</span>
              </span>
              <p className="text-[9px] font-semibold tracking-[0.2em] text-slate-500">
                SECURITY AWARENESS
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
            <a href="#courses" className="transition hover:text-white">
              Learning Paths
            </a>
            <a href="#social-engineering" className="transition hover:text-white">
              Social Engineering
            </a>
            <a href="#practical-learning" className="transition hover:text-white">
              Practical Labs
            </a>
          </nav>

          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-slate-300 transition hover:border-blue-400/40 hover:text-white sm:px-4 sm:text-sm"
          >
            <ArrowRight size={15} className="rotate-180" />
            Back to Dashboard
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-[1500px]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/[0.07] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/[0.09] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-violet-500/[0.07] blur-3xl" />

          <div className="relative mx-auto max-w-5xl">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Link href="/" className="transition hover:text-blue-400">
                Dashboard
              </Link>
              <ChevronRight size={13} />
              <span className="text-slate-300">Learning Center</span>
            </div>

            <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-[10px] font-bold tracking-wider text-blue-300">
              <GraduationCap size={14} />
              CYBERSECURITY EDUCATION PLATFORM
            </div>

            <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_290px] lg:items-center">
              <div>
                <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                  Learn to recognize.
                  <span className="block text-blue-400">
                    Build to defend.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
                  Develop practical cybersecurity awareness through
                  structured learning paths, realistic security scenarios
                  and knowledge-based training. Learn how attacks work and
                  how to protect yourself and your organization.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#courses"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
                  >
                    Explore Learning Paths
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="#social-engineering"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-white/20 hover:text-white"
                  >
                    <Brain size={16} />
                    Explore Social Engineering
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.13] to-[#10192B] p-6 shadow-2xl shadow-black/20">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-blue-500/15 p-3 text-blue-400">
                    <ShieldCheck size={25} />
                  </div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[9px] font-bold tracking-wider text-emerald-300">
                    LEARNING HUB
                  </span>
                </div>

                <h2 className="mt-6 text-xl font-bold">
                  Knowledge is your first line of defense.
                </h2>
                <p className="mt-3 text-xs leading-6 text-slate-400">
                  Learn the techniques behind cyber threats, recognize
                  suspicious behavior and make safer security decisions.
                </p>

                <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Learning paths</span>
                    <span className="font-bold text-white">06</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Social engineering modules</span>
                    <span className="font-bold text-white">10</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Learning approach</span>
                    <span className="font-bold text-blue-300">Practical</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning overview */}
        <section className="border-b border-white/[0.07] px-5 py-8 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: BookOpen,
                value: "06",
                label: "Learning paths",
                color: "text-blue-400",
              },
              {
                icon: Brain,
                value: "10",
                label: "Social engineering modules",
                color: "text-violet-400",
              },
              {
                icon: Target,
                value: "Practical",
                label: "Scenario-based learning",
                color: "text-emerald-400",
              },
              {
                icon: Award,
                value: "Knowledge",
                label: "Assessment focused",
                color: "text-amber-400",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl border border-white/[0.07] bg-[#0D1423] p-4"
                >
                  <div className={`rounded-lg bg-white/[0.04] p-3 ${item.color}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-lg font-bold">{item.value}</p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Learning paths */}
        <section
          id="courses"
          className="scroll-mt-24 px-5 py-14 sm:px-8 lg:px-12 lg:py-20"
        >
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-blue-400">
                  STRUCTURED EDUCATION
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Explore Learning Paths
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                  Follow structured courses designed to build your
                  understanding of cybersecurity from foundational concepts
                  to practical defense.
                </p>
              </div>
              <span className="text-xs text-slate-500">
                6 courses available
              </span>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-2">
              {courses.map((course) => {
                const Icon = course.icon;
                const styles = colorStyles[course.color];

                return (
                  <article
                    key={course.id}
                    id={`course-${course.id}`}
                    className={`group relative overflow-hidden rounded-2xl border ${
                      course.featured
                        ? "border-violet-400/30 bg-[#11172B]"
                        : "border-white/[0.08] bg-[#0D1423]"
                    } p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#111B2D]`}
                  >
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${styles.glow} to-transparent opacity-60`}
                    />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-3">
                        <div className={`rounded-xl p-3 ${styles.icon}`}>
                          <Icon size={23} />
                        </div>

                        {course.featured ? (
                          <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[9px] font-bold tracking-wider text-violet-300">
                            RECOMMENDED PATH
                          </span>
                        ) : (
                          <span className="text-xs font-bold text-slate-600">
                            {course.number}
                          </span>
                        )}
                      </div>

                      <p className={`mt-6 text-[9px] font-bold tracking-[0.16em] ${styles.badge} inline-flex rounded-full px-2.5 py-1`}>
                        {course.category}
                      </p>

                      <h3 className="mt-3 text-xl font-bold tracking-tight">
                        {course.title}
                      </h3>

                      <p className="mt-3 min-h-[60px] text-xs leading-6 text-slate-400">
                        {course.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/[0.08] pt-4 text-[10px] text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <BookOpen size={13} />
                          {course.lessons} lessons
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock3 size={13} />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <GraduationCap size={13} />
                          {course.level}
                        </span>
                      </div>

                      <a
                        href={`#${course.id}`}
                        className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-blue-400 transition group-hover:gap-3 group-hover:text-blue-300"
                      >
                        Explore curriculum
                        <ArrowRight size={15} />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Social engineering deep training */}
        <section
          id="social-engineering"
          className="scroll-mt-24 border-y border-violet-400/10 bg-[#0B1020] px-5 py-14 sm:px-8 lg:px-12 lg:py-20"
        >
          <div className="mx-auto max-w-5xl">
            <div className="rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.12] via-[#11172B] to-[#0D1423] p-6 sm:p-9">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[10px] font-bold tracking-wider text-violet-300">
                  <Brain size={14} />
                  DEEP SECURITY TRAINING
                </span>
                <span className="rounded-full bg-white/[0.05] px-3 py-1.5 text-[10px] text-slate-400">
                  COURSE 02 / 06
                </span>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_240px] lg:items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Social Engineering
                    <span className="block text-violet-400">
                      Understand the human factor.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-400">
                    Social engineering is not just about suspicious emails.
                    It involves manipulating trust, emotions, authority and
                    everyday human behavior. Learn how these attacks happen
                    and how to recognize them before they cause harm.
                  </p>
                </div>

                <div className="rounded-xl border border-violet-400/20 bg-black/20 p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Course content</span>
                    <Users size={18} className="text-violet-400" />
                  </div>
                  <p className="mt-3 text-4xl font-bold">10</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Detailed learning modules
                  </p>
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-xs text-slate-400">
                      Estimated duration
                    </p>
                    <p className="mt-1 text-lg font-semibold">95 minutes</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    icon: Brain,
                    title: "Psychology",
                    description: "Understand manipulation techniques.",
                  },
                  {
                    icon: Eye,
                    title: "Recognition",
                    description: "Identify suspicious behavior.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Defense",
                    description: "Learn practical protection methods.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-xl border border-white/[0.08] bg-black/15 p-4"
                    >
                      <Icon size={20} className="text-violet-400" />
                      <h3 className="mt-3 text-sm font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-violet-400">
                  COURSE CURRICULUM
                </p>
                <h3 className="mt-3 text-2xl font-bold">
                  Explore all 10 modules
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Each module includes concepts, examples and defensive
                  recommendations.
                </p>
              </div>
              <span className="text-xs text-slate-500">
                Beginner to advanced
              </span>
            </div>

            <div className="mt-7 space-y-3">
              {socialEngineeringModules.map((module) => {
                const Icon = module.icon;

                return (
                  <Link
href={
  module.number === "01"
    ? "/learn/social-engineering"
    : module.number === "02"
      ? "/learn/social-engineering/psychology"
      : module.number === "03"
        ? "/learn/social-engineering/phishing"
        : module.number === "04"
          ? "/learn/social-engineering/vishing"
          : "#social-engineering"
}
  key={module.number}
  className="group block rounded-xl border border-white/[0.08] bg-[#101728] p-5 transition hover:border-violet-400/30 hover:bg-[#131D32] sm:p-6"
>
                    <div className="flex items-start gap-4">
                      <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400 sm:flex">
                        <Icon size={21} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-bold text-violet-400">
                            MODULE {module.number}
                          </span>
                          <span className="text-slate-700">/</span>
                          <span className="flex items-center gap-1 text-[10px] text-slate-500">
                            <Clock3 size={11} />
                            {module.duration}
                          </span>
                        </div>

                        <h4 className="mt-2 text-base font-semibold transition group-hover:text-violet-300">
                          {module.title}
                        </h4>

                        <p className="mt-2 text-xs leading-6 text-slate-400">
                          {module.description}
                        </p>

                        <div className="mt-4 grid gap-2 sm:grid-cols-2">
                          {module.details.map((detail) => (
                            <div
                              key={detail}
                              className="flex items-start gap-2 text-[11px] leading-5 text-slate-500"
                            >
                              <CheckCircle2
                                size={13}
                                className="mt-0.5 shrink-0 text-violet-400/70"
                              />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>

                      <ChevronRight
                        size={18}
                        className="mt-1 shrink-0 text-slate-600 transition group-hover:translate-x-1 group-hover:text-violet-400"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 rounded-xl border border-amber-400/15 bg-amber-400/[0.04] p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle
                  size={19}
                  className="mt-0.5 shrink-0 text-amber-400"
                />
                <div>
                  <h4 className="text-sm font-semibold text-amber-300">
                    Important security principle
                  </h4>
                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    These lessons are for defensive education. Practice
                    verification and reporting using fictional scenarios.
                    Never test social engineering techniques on people
                    without explicit authorization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other course curriculum */}
        {courses
          .filter((course) => course.id !== "social-engineering")
          .map((course) => {
            const Icon = course.icon;
            const styles = colorStyles[course.color];

            return (
              <section
                key={course.id}
                id={course.id}
                className="scroll-mt-24 border-b border-white/[0.07] px-5 py-12 sm:px-8 lg:px-12 lg:py-16"
              >
                <div className="mx-auto max-w-5xl">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`rounded-xl p-3 ${styles.icon}`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <p className={`text-[9px] font-bold tracking-[0.18em] ${styles.badge}`}>
                          COURSE {course.number} / {course.category}
                        </p>
                        <h2 className="mt-2 text-2xl font-bold">
                          {course.title}
                        </h2>
                        <p className="mt-2 max-w-2xl text-xs leading-6 text-slate-400">
                          {course.description}
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-slate-400">
                      {course.level}
                    </span>
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {course.topics.map((topic, index) => (
                      <div
                        key={topic}
                        className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-[#0D1423] p-4"
                      >
                        <span className={`text-xs font-bold ${styles.badge} rounded-md px-2 py-1`}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-xs leading-6 text-slate-300">
                          {topic}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}

        {/* Practical learning */}
        <section
          id="practical-learning"
          className="scroll-mt-24 px-5 py-14 sm:px-8 lg:px-12 lg:py-20"
        >
          <div className="mx-auto max-w-5xl">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-emerald-400">
                LEARN BY DOING
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Turn knowledge into practice.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                Cybersecurity awareness improves when you apply concepts to
                realistic situations. Use the practical labs to build your
                investigation and decision-making skills.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {quickTopics.map((topic) => {
                const Icon = topic.icon;
                return (
                  <div
                    key={topic.title}
                    className="rounded-xl border border-white/[0.08] bg-[#0D1423] p-5"
                  >
                    <div className="inline-flex rounded-lg bg-emerald-500/10 p-3 text-emerald-400">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold">
                      {topic.title}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-slate-400">
                      {topic.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-blue-400/20 bg-gradient-to-r from-blue-500/[0.12] to-[#10192B] p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <div className="flex items-center gap-2 text-blue-300">
                    <Mail size={18} />
                    <span className="text-[10px] font-bold tracking-wider">
                      PRACTICAL EMAIL INVESTIGATION
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold">
                    Ready to inspect a suspicious email?
                  </h3>
                  <p className="mt-3 max-w-xl text-xs leading-6 text-slate-400">
                    Apply what you have learned in the Email Inspection Lab.
                    Examine suspicious indicators and understand how to
                    investigate potentially malicious messages.
                  </p>
                </div>

                <Link
                  href="/email-lab"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold transition hover:bg-blue-400"
                >
                  Open Email Lab
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/[0.08] px-5 py-8 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <Link href="/" className="flex items-center gap-2">
              <ShieldCheck size={19} className="text-blue-400" />
              <span className="text-sm font-bold">
                Phish<span className="text-blue-400">Aware</span>
              </span>
            </Link>

            <p className="text-[11px] text-slate-500">
              Cybersecurity Awareness, Education &amp; Practical Training
            </p>

            <Link
              href="/"
              className="text-xs text-slate-400 transition hover:text-blue-400"
            >
              Back to Dashboard
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
