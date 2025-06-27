import Callout from "@/components/ui/Callout";
import { ComingSoonCard } from "@/components/ui/ComingSoonCard";

export default function CLIAPIReference() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">CLI & API Reference</h1>
      <p className="mb-6 text-neutral-300">Complete reference for the Flowdrop CLI and REST API.</p>
      
      <Callout emoji="🕒" color="border-blue-500">
        This documentation is coming soon! We're developing our CLI tools and API endpoints.
      </Callout>
      
      <ComingSoonCard
        items={[
          "Command-line interface reference",
          "REST API endpoints and authentication",
          "SDK libraries for popular languages",
          "Webhook integration guides",
          "Rate limiting and best practices",
        ]}
      />
    </div>
  );
} 