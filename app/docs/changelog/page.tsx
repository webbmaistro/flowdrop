import Callout from "@/components/ui/Callout";
import { ComingSoonCard } from "@/components/ui/ComingSoonCard";

export default function Changelog() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Changelog</h1>
      <p className="mb-6 text-neutral-300">Track the latest updates, features, and improvements to Flowdrop.</p>
      
      <Callout emoji="🕒" color="border-blue-500">
        This changelog is coming soon! We'll be tracking all updates and releases here.
      </Callout>
      
      <ComingSoonCard
        items={[
          "Version history and release notes",
          "New features and enhancements",
          "Bug fixes and improvements",
          "Breaking changes and migrations",
          "Deprecation notices",
        ]}
      />
    </div>
  );
} 