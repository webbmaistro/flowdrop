import Callout from "@/components/ui/Callout";

export default function AIBlocksNodes() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">AI Blocks & Nodes</h1>
      <p className="mb-6 text-neutral-300">Explore the AI-powered building blocks that make your workflows intelligent.</p>
      
      <Callout emoji="🚧" color="border-yellow-500">
        This documentation is coming soon! We're building out our AI node library and integration guides.
      </Callout>
      
      <div className="bg-neutral-800 rounded-xl p-8 text-center">
        <h2 className="text-xl font-semibold mb-4">What's Coming?</h2>
        <ul className="text-neutral-300 space-y-2 text-left max-w-2xl mx-auto">
          <li>• Text generation and analysis nodes</li>
          <li>• Image processing and generation</li>
          <li>• Data extraction and transformation</li>
          <li>• Decision-making and logic flows</li>
          <li>• Custom AI model integration</li>
        </ul>
      </div>
    </div>
  );
} 