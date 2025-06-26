import Callout from "@/components/ui/Callout";

export default function Roadmap() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Roadmap</h1>
      <p className="mb-6 text-neutral-300">See what's coming next and help shape the future of Flowdrop.</p>
      
      <Callout emoji="🕒" color="border-blue-500">
        Our roadmap is coming soon! We're planning exciting features and would love your input.
      </Callout>
      
      <div className="bg-neutral-800 rounded-xl p-8 text-center">
        <h2 className="text-xl font-semibold mb-4">What's Coming?</h2>
        <ul className="text-neutral-300 space-y-2 text-left max-w-2xl mx-auto">
          <li>• Upcoming feature releases</li>
          <li>• Integration partnerships</li>
          <li>• Platform improvements</li>
          <li>• Community feedback integration</li>
          <li>• Long-term vision and goals</li>
        </ul>
      </div>
    </div>
  );
} 