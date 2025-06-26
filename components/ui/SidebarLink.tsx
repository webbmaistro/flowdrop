import Link from "next/link";
import { cn } from "@/lib/utils";

export default function SidebarLink({
  href, children, active, wip, soon
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  wip?: boolean;
  soon?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center px-4 py-2 rounded-lg transition group",
        active && "bg-neutral-900 border-l-4 border-[#8B5CF6] font-bold",
        !active && "hover:bg-neutral-800"
      )}
      aria-current={active ? "page" : undefined}
    >
      <span>{children}</span>
      {wip && <span className="ml-2 text-yellow-400 text-xs">🚧</span>}
      {soon && <span className="ml-2 text-blue-400 text-xs">🕒</span>}
    </Link>
  );
} 