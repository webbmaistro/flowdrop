import Callout from "@/components/ui/Callout";

export default function WorkflowBuilderBasics() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Workflow Builder Basics</h1>
      <p className="mb-6 text-neutral-300">Learn how to build your first AI workflow with Flowdrop's visual builder.</p>
      
      <Callout emoji="🚧" color="border-yellow-500">
        This documentation is coming soon! We're working hard to bring you comprehensive guides on building AI workflows.
      </Callout>
      
      <div className="bg-neutral-800 rounded-xl p-8 text-center">
        <h2 className="text-xl font-semibold mb-4">What's Coming?</h2>
        <ul className="text-neutral-300 space-y-2 text-left max-w-2xl mx-auto">
          <li>• Visual workflow builder walkthrough</li>
          <li>• Understanding nodes and connections</li>
          <li>• Setting up triggers and actions</li>
          <li>• Testing and debugging workflows</li>
          <li>• Best practices and tips</li>
        </ul>
      </div>
    </div>
  );
} 