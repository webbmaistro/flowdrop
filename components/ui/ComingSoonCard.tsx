export function ComingSoonCard({
  title = "What's Coming?",
  items,
}: {
  title?: string;
  items: string[];
}) {
  return (
    <div className="w-full rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur">
      {/* header */}
      <h2 className="mb-6 text-xl font-semibold tracking-tight">
        {title}
      </h2>

      {/* bullet list */}
      <ul className="list-disc space-y-2 pl-5 text-sm text-white/80">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
} 