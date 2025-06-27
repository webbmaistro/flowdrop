import Callout from "@/components/ui/Callout";
import { ComingSoonCard } from "@/components/ui/ComingSoonCard";

export default function WorkflowBuilderBasics() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Workflow Builder Basics</h1>
      <p className="mb-6 text-neutral-300">Learn how to build your first AI workflow with Flowdrop's visual builder.</p>
      
      <Callout emoji="🚧" color="border-yellow-500">
        This documentation is coming soon! We're working hard to bring you comprehensive guides on building AI workflows.
      </Callout>
      
      <ComingSoonCard
        items={[
          "Visual workflow builder walkthrough",
          "Understanding nodes and connections",
          "Setting up triggers and actions",
          "Testing and debugging workflows",
          "Best practices and tips",
        ]}
      />
    </div>
  );
} 