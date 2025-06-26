import Callout from "@/components/ui/Callout";

export default function AuthenticationPricing() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Authentication & Pricing</h1>
      <p className="mb-6 text-neutral-300">Learn about authentication methods and understand our pricing structure.</p>
      
      <Callout emoji="🚧" color="border-yellow-500">
        This documentation is coming soon! We're finalizing our authentication options and pricing details.
      </Callout>
      
      <div className="bg-neutral-800 rounded-xl p-8 text-center">
        <h2 className="text-xl font-semibold mb-4">What's Coming?</h2>
        <ul className="text-neutral-300 space-y-2 text-left max-w-2xl mx-auto">
          <li>• OAuth integration setup</li>
          <li>• API key management</li>
          <li>• Team collaboration features</li>
          <li>• Usage-based pricing breakdown</li>
          <li>• Enterprise security features</li>
        </ul>
      </div>
    </div>
  );
} 