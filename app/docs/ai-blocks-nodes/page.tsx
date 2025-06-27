import Callout from "@/components/ui/Callout";
import { ComingSoonCard } from "@/components/ui/ComingSoonCard";

export default function AIBlocksNodes() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">AI Blocks & Nodes</h1>
      <p className="mb-6 text-neutral-300">Explore the AI-powered building blocks that make your workflows intelligent.</p>
      
      <Callout emoji="🚧" color="border-yellow-500">
        This documentation is coming soon! We're building out our AI node library and integration guides.
      </Callout>
      
      <ComingSoonCard
        items={[
          "Text generation and analysis nodes",
          "Image processing and generation",
          "Data extraction and transformation",
          "Decision-making and logic flows",
          "Custom AI model integration",
        ]}
      />
    </div>
  );
} 