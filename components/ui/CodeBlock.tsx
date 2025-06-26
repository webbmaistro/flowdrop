"use client";
import { useState } from "react";
import { Copy } from "lucide-react";

export default function CodeBlock({ code, lang = "bash" }: { code: string; lang?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative bg-neutral-900 border border-neutral-800 rounded-lg p-4 mb-6">
      <button
        className="absolute top-2 right-2 text-xs text-purple-300 hover:text-white"
        onClick={() => {
          navigator.clipboard.writeText(code);
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        }}
        aria-label="Copy code"
        type="button"
      >
        <Copy className="inline w-4 h-4 mr-1" />
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className="overflow-x-auto text-sm text-purple-200">
        <code>{code}</code>
      </pre>
    </div>
  );
} 