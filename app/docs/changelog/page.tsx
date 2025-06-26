import Callout from "@/components/ui/Callout";

export default function Changelog() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Changelog</h1>
      <p className="mb-6 text-neutral-300">Track the latest updates, features, and improvements to Flowdrop.</p>
      
      <Callout emoji="🕒" color="border-blue-500">
        This changelog is coming soon! We'll be tracking all updates and releases here.
      </Callout>
      
      <div className="bg-neutral-800 rounded-xl p-8 text-center">
        <h2 className="text-xl font-semibold mb-4">What's Coming?</h2>
        <ul className="text-neutral-300 space-y-2 text-left max-w-2xl mx-auto">
          <li>• Version history and release notes</li>
          <li>• New features and enhancements</li>
          <li>• Bug fixes and improvements</li>
          <li>• Breaking changes and migrations</li>
          <li>• Deprecation notices</li>
        </ul>
      </div>
    </div>
  );
} 