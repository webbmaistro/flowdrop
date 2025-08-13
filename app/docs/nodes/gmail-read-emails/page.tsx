"use client"

import React from 'react';
import { Mail, Clock } from 'lucide-react';
import Callout from "@/components/ui/Callout";

export default function GmailReadEmailsNode() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Mail className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Gmail Read Emails</h1>
            <p className="text-neutral-400">Read and analyze Gmail messages programmatically</p>
          </div>
        </div>
      </div>

      <Callout emoji="🚧" color="border-yellow-500">
        <strong>Coming Soon!</strong> This node documentation is currently being developed. 
        The Gmail Read Emails node allows you to read, search, and analyze emails from your Gmail account.
      </Callout>

      <div className="mt-8 bg-neutral-800 rounded-xl p-6 border border-neutral-700">
        <h2 className="text-xl font-semibold mb-4">What This Node Will Do</h2>
        <ul className="text-neutral-300 space-y-2">
          <li>• Read emails from specific labels or search queries</li>
          <li>• Extract email metadata (sender, subject, date, etc.)</li>
          <li>• Analyze email content for automation triggers</li>
          <li>• Filter emails based on various criteria</li>
          <li>• Process emails in batches for workflow automation</li>
        </ul>
      </div>

      <div className="mt-6 text-center text-neutral-400">
        <Clock className="w-5 h-5 inline mr-2" />
        Documentation will be available soon
      </div>
    </div>
  );
}
