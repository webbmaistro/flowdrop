"use client"

import React from 'react';
import { Send, Clock } from 'lucide-react';
import Callout from "@/components/ui/Callout";

export default function SendEmailNode() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-green-500/20 rounded-lg">
            <Send className="w-6 h-6 text-green-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Send Email</h1>
            <p className="text-neutral-400">Send automated emails and notifications</p>
          </div>
        </div>
      </div>

      <Callout emoji="🚧" color="border-yellow-500">
        <strong>Coming Soon!</strong> This node documentation is currently being developed. 
        The Send Email node allows you to automate email communications in your workflows.
      </Callout>

      <div className="mt-8 bg-neutral-800 rounded-xl p-6 border border-neutral-700">
        <h2 className="text-xl font-semibold mb-4">What This Node Will Do</h2>
        <ul className="text-neutral-300 space-y-2">
          <li>• Send personalized emails to recipients</li>
          <li>• Use dynamic content from workflow data</li>
          <li>• Support HTML and plain text formats</li>
          <li>• Handle attachments and inline content</li>
          <li>• Integrate with various email providers</li>
        </ul>
      </div>

      <div className="mt-6 text-center text-neutral-400">
        <Clock className="w-5 h-5 inline mr-2" />
        Documentation will be available soon
      </div>
    </div>
  );
}
