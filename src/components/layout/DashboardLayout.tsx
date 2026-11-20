
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function DashboardLayout({
  children,
  title,
  description,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f3f6fa] lg:grid lg:grid-cols-[260px_minmax(0,1fr)]">
      {/* Sidebar */}
      <div className="relative z-30 lg:sticky lg:top-0 lg:h-screen">
        <Sidebar />
      </div>

      {/* Main workspace */}
      <div className="min-w-0">
        <Topbar title={title} description={description} />

        <main className="min-h-[calc(100vh-76px)] px-4 py-6 sm:px-7 sm:py-8 lg:px-10">
          <div className="mx-auto w-full max-w-[1200px]">
            {children}
          </div>
        </main>

        <footer className="border-t border-[#d5deea] px-5 py-5 text-center text-[11px] text-[#718096]">
          PhishAware · Cybersecurity Awareness &amp; Education
        </footer>
      </div>
    </div>
  );
}
