"use client"

import React from 'react';
import { Brain, Clock } from 'lucide-react';
import Callout from "@/components/ui/Callout";

export default function LLMPromptNode() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <Brain className="w-6 h-6 text-purple-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">LLM Prompt</h1>
            <p className="text-neutral-400">Generate AI-powered responses and content</p>
          </div>
        </div>
      </div>

      <Callout emoji="🚧" color="border-yellow-500">
        <strong>Coming Soon!</strong> This node documentation is currently being developed. 
        The LLM Prompt node is the core AI component that powers intelligent workflows.
      </Callout>

      <div className="mt-8 bg-neutral-800 rounded-xl p-6 border border-neutral-700">
        <h2 className="text-xl font-semibold mb-4">What This Node Will Do</h2>
        <ul className="text-neutral-300 space-y-2">
          <li>• Generate human-like text responses</li>
          <li>• Analyze and summarize content</li>
          <li>• Create structured data from unstructured text</li>
          <li>• Answer questions and provide explanations</li>
          <li>• Generate creative content and ideas</li>
        </ul>
      </div>

      <div className="mt-6 text-center text-neutral-400">
        <Clock className="w-5 h-5 inline mr-2" />
        Documentation will be available soon
      </div>
    </div>
  );
}
