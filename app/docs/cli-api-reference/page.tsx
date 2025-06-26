import Callout from "@/components/ui/Callout";

export default function CLIAPIReference() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">CLI & API Reference</h1>
      <p className="mb-6 text-neutral-300">Complete reference for the Flowdrop CLI and REST API.</p>
      
      <Callout emoji="🕒" color="border-blue-500">
        This documentation is coming soon! We're developing our CLI tools and API endpoints.
      </Callout>
      
      <div className="bg-neutral-800 rounded-xl p-8 text-center">
        <h2 className="text-xl font-semibold mb-4">What's Coming?</h2>
        <ul className="text-neutral-300 space-y-2 text-left max-w-2xl mx-auto">
          <li>• Command-line interface reference</li>
          <li>• REST API endpoints and authentication</li>
          <li>• SDK libraries for popular languages</li>
          <li>• Webhook integration guides</li>
          <li>• Rate limiting and best practices</li>
        </ul>
      </div>
    </div>
  );
} 