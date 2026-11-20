
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShieldCheck,
  LayoutDashboard,
  BookOpen,
  MailSearch,
  Globe,
  FileText,
  ClipboardCheck,
  LifeBuoy,
  ChevronRight,
} from "lucide-react";

const navigation = [
  {
    label: "TRAINING",
    items: [
      { title: "Overview", href: "/", icon: LayoutDashboard },
      { title: "Learn the Threat", href: "/learn", icon: BookOpen },
      { title: "Email Inspection Lab", href: "/email-lab", icon: MailSearch },
      { title: "Fake Website Lab", href: "/web-lab", icon: Globe },
      { title: "Real-world Cases", href: "/cases", icon: FileText },
      { title: "Knowledge Check", href: "/quiz", icon: ClipboardCheck },
    ],
  },
  {
    label: "RESPONSE",
    items: [
      { title: "If You Clicked", href: "/playbook", icon: LifeBuoy },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full flex-col border-r border-[#223350] bg-[#0f1b2d] text-[#c9d6e6]">
      {/* Brand */}
      <Link href="/" className="flex items-center gap-3 px-5 py-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b7f86] text-white">
          <ShieldCheck size={23} />
        </div>

        <div>
          <h1 className="text-lg font-bold tracking-tight text-white">
            PhishAware
          </h1>
          <p className="text-[10px] uppercase tracking-[0.14em] text-slate-400">
            Security Training
          </p>
        </div>
      </Link>

      <div className="mx-4 border-t border-[#223350]" />

      {/* Navigation */}
      <nav className="flex-1 space-y-7 overflow-y-auto px-3 py-6">
        {navigation.map((group) => (
          <div key={group.label}>
            <p className="mb-3 px-3 text-[10px] font-bold tracking-[0.18em] text-[#6f86a3]">
              {group.label}
            </p>

            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href ||
                      pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`group flex items-center gap-3 rounded-lg px-3 py-3 text-[13px] font-medium transition ${
                      active
                        ? "bg-[#0b7f86] text-white shadow-sm"
                        : "text-[#9fb1c6] hover:bg-[#223350] hover:text-white"
                    }`}
                  >
                    <Icon size={17} />
                    <span className="flex-1">{item.title}</span>
                    {active && <ChevronRight size={15} />}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Sidebar footer */}
      <div className="border-t border-[#223350] px-5 py-5">
        <p className="text-xs font-semibold text-white">
          Security Awareness
        </p>
        <p className="mt-2 text-[11px] leading-5 text-[#9fb1c6]">
          Learn to recognize threats. Think before you click.
        </p>
        <p className="mt-4 text-[10px] text-[#6f86a3]">
          PhishAware · Educational Platform
        </p>
      </div>
    </aside>
  );
}
