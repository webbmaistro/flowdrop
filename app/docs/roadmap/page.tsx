import Callout from "@/components/ui/Callout";
import { ComingSoonCard } from "@/components/ui/ComingSoonCard";

export default function Roadmap() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Roadmap</h1>
      <p className="mb-6 text-neutral-300">See what's coming next and help shape the future of Flowdrop.</p>
      
      <Callout emoji="🕒" color="border-blue-500">
        Our roadmap is coming soon! We're planning exciting features and would love your input.
      </Callout>
      
      <ComingSoonCard
        items={[
          "Upcoming feature releases",
          "Integration partnerships",
          "Platform improvements",
          "Community feedback integration",
          "Long-term vision and goals",
        ]}
      />
    </div>
  );
} 