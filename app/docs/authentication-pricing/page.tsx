import Callout from "@/components/ui/Callout";
import { ComingSoonCard } from "@/components/ui/ComingSoonCard";

export default function AuthenticationPricing() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Authentication & Pricing</h1>
      <p className="mb-6 text-neutral-300">Learn about authentication methods and understand our pricing structure.</p>
      
      <Callout emoji="🚧" color="border-yellow-500">
        This documentation is coming soon! We're finalizing our authentication options and pricing details.
      </Callout>
      
      <ComingSoonCard
        items={[
          "OAuth integration setup",
          "API key management",
          "Team collaboration features",
          "Usage-based pricing breakdown",
          "Enterprise security features",
        ]}
      />
    </div>
  );
} 