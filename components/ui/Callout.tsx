import React from "react";

export default function Callout({
  emoji = "🚧",
  children,
  color = "border-yellow-500"
}: {
  emoji?: string;
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div className={`flex items-center border-l-4 ${color} bg-neutral-800/60 px-4 py-3 rounded mb-6`}>
      <span className="mr-3 text-xl">{emoji}</span>
      <div className="text-sm">{children}</div>
    </div>
  );
} 