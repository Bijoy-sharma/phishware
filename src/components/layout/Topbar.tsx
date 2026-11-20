
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface TopbarProps {
  title: string;
  description?: string;
}

export default function Topbar({ title, description }: TopbarProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-[#d5deea] bg-white/95 backdrop-blur">
      <div className="flex min-h-[76px] items-center justify-between gap-4 px-5 sm:px-8">
        <div>
          <div className="flex items-center gap-2 text-[11px] text-[#718096]">
            <Link href="/" className="flex items-center gap-1 hover:text-[#0b7f86]">
              <Home size={12} />
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="font-medium text-[#0b7f86]">{title}</span>
          </div>

          {description && (
            <p className="mt-1 hidden text-xs text-[#718096] sm:block">
              {description}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2 rounded-full border border-[#d5deea] bg-[#f3f6fa] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#1c7a4c]" />
          <span className="text-[11px] font-semibold text-[#44566b]">
            Training Mode
          </span>
        </div>
      </div>
    </header>
  );
}
