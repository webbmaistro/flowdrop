"use client";
import React from 'react';
import { cn } from '@/lib/utils';
import { typography } from '@/lib/styles';
import { Button } from '@/components/ui';
import Head from "next/head";

const toc = [
  { id: 'comparison-table', label: 'At-a-Glance Comparison' },
  { id: 'deep-dive', label: 'Deep-dive: strengths, quirks, & best-fit use cases' },
  { id: 'key-takeaways', label: 'Key takeaways for 2025 SEO shoppers' },
];

export default function WorkflowEditorComparison() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "AI Workflow Builder Comparison 2025 | Flowdrop",
              "headline": "AI Workflow Builders in 2025: Zapier vs Make vs n8n vs Gumloop vs Flowise vs Lindy vs Relevance AI — and where Flowdrop fits",
              "description": "If you're Googling best AI workflow builder, Zapier alternative, or low-code automation tool for startups, you want a side-by-side snapshot that's current, metric-driven, and actually helps you choose. Below you'll find hard numbers on pricing, integration depth, AI-native features, and the strategic whitespace Flowdrop is built to own.",
              "url": "https://flowdrop.xyz/docs/workflow-editor-comparison",
              "inLanguage": "en",
              "datePublished": "2024-06-01",
              "dateModified": "2024-06-01",
              "publisher": {
                "@type": "Organization",
                "name": "Flowdrop",
                "url": "https://flowdrop.xyz",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://flowdrop.xyz/website-preview.png"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer support",
                  "email": "support@flowdrop.xyz",
                  "url": "https://flowdrop.xyz/contact"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "US",
                  "addressRegion": "MD",
                  "addressLocality": "Washington, DC"
                },
                "sameAs": [
                  "https://twitter.com/flowdrop_app",
                  "https://www.reddit.com/r/Flowdrop/",
                  "https://www.linkedin.com/company/flowdrop-labs/"
                ]
              },
              "mainEntity": [
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is an AI workflow builder?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An AI workflow builder lets you automate tasks and connect apps using artificial intelligence, without writing code. You can visually design workflows that trigger actions, analyze data, and integrate with hundreds of services."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How does Flowdrop compare to Zapier, Make, and n8n?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Flowdrop is built AI-first, with a visual builder, smart connectors, and a flat pricing model. Unlike Zapier or Make, Flowdrop focuses on AI-native features and rapid deployment, while n8n and Flowise are more developer-oriented."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is Flowdrop available worldwide?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Flowdrop is available globally. Our infrastructure is based in the United States, but users from any country can sign up and use the platform."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What are the main benefits of using Flowdrop?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Flowdrop offers no-code AI workflow automation, fast deployment, a growing library of integrations, and a predictable flat-rate pricing model. It's designed for startups, agencies, and teams who want to automate without complexity."
                      }
                    }
                  ]
                }
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 37.7749,
                "longitude": -122.4194
              }
            })
          }}
        />
      </Head>
      <div className="space-y-12">
        <div>
          <h1 className={cn(typography.h1, 'mb-8')}>AI Workflow Builders in 2025 Zapier vs Make vs n8n vs Gumloop vs Flowise vs Lindy vs Relevance AI — and where Flowdrop fits</h1>
          {/* Table of Contents */}
          <nav aria-label="Table of Contents" className="mb-8 bg-neutral-900/60 border border-neutral-800 rounded-xl p-4">
            <span className="block font-semibold text-neutral-300 mb-2">Jump to:</span>
            <ul className="flex flex-wrap gap-4">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-primary-main hover:underline focus:underline transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className={cn(typography.bodyLarge, 'text-text-secondary mb-12')}>
            <strong>Why this guide matters:</strong> If you're Googling <em>best AI workflow builder</em>, <em>Zapier alternative</em>, or <em>low-code automation tool for startups</em>, you want a side-by-side snapshot that's current, metric-driven, and actually helps you choose. Below you'll find hard numbers on pricing, integration depth, AI-native features, and the strategic whitespace Flowdrop is built to own.
          </p>
        </div>

        <div>
          <h2 id="comparison-table" className={cn(typography.h2, 'mb-6')}>At-a-Glance Comparison (starter tiers)</h2>
          <div className="overflow-x-auto mb-12">
            <table className="min-w-full text-sm border-separate border-spacing-y-3">
              <thead>
                <tr className="text-left text-neutral-400">
                  <th className="pr-6 py-3">Platform</th>
                  <th className="pr-6 py-3">AI-Native?</th>
                  <th className="pr-6 py-3">Integrations</th>
                  <th className="pr-6 py-3">OSS?</th>
                  <th className="pr-6 py-3">Starter price (USD)*</th>
                  <th className="pr-6 py-3">Killer Strength</th>
                </tr>
              </thead>
              <tbody className="text-white">
                <tr className="bg-neutral-900/60 rounded-lg">
                  <td className="pr-6 py-4 font-semibold">Zapier</td>
                  <td>Hybrid add-on AI</td>
                  <td>7,000+ apps</td>
                  <td>No</td>
                  <td>$19.99/mo (2K tasks)</td>
                  <td>Biggest app library</td>
                </tr>
                <tr className="bg-neutral-900/60 rounded-lg">
                  <td className="pr-6 py-4 font-semibold">Make</td>
                  <td>Hybrid + 350 AI modules</td>
                  <td>2,000+ apps</td>
                  <td>No</td>
                  <td>$9/mo (10K ops)</td>
                  <td>Cheapest entry price</td>
                </tr>
                <tr className="bg-neutral-900/60 rounded-lg">
                  <td className="pr-6 py-4 font-semibold">n8n</td>
                  <td>AI steps built-in</td>
                  <td>500+ integrations</td>
                  <td>Yes</td>
                  <td>$24/mo (2.5K execs)</td>
                  <td>Self-host & JS/Python nodes</td>
                </tr>
                <tr className="bg-neutral-900/60 rounded-lg">
                  <td className="pr-6 py-4 font-semibold">Gumloop</td>
                  <td>AI-first</td>
                  <td>~25-50 native connectors</td>
                  <td>No</td>
                  <td>$97/mo (30K credits)</td>
                  <td>AI Automation Framework, web-scrape + doc-AI</td>
                </tr>
                <tr className="bg-neutral-900/60 rounded-lg">
                  <td className="pr-6 py-4 font-semibold">Flowise</td>
                  <td>AI-first (LangChain)</td>
                  <td>100+ LLM/vector plugs</td>
                  <td>Yes</td>
                  <td>$35/mo (10K preds)</td>
                  <td>Dev-friendly agent canvas</td>
                </tr>
                <tr className="bg-neutral-900/60 rounded-lg">
                  <td className="pr-6 py-4 font-semibold">Lindy</td>
                  <td>AI-agent native</td>
                  <td>1,600+ apps (via Pipedream)</td>
                  <td>No</td>
                  <td>$49/mo (5K tasks)</td>
                  <td>Inbox/CRM + phone agents</td>
                </tr>
                <tr className="bg-neutral-900/60 rounded-lg">
                  <td className="pr-6 py-4 font-semibold">Relevance AI</td>
                  <td>Multi-agent workforce</td>
                  <td>2,000+ apps</td>
                  <td>No</td>
                  <td>$19/mo Pro (10K credits)</td>
                  <td>Visual agent teams + RAG</td>
                </tr>
                <tr className="bg-primary-main/10 rounded-lg">
                  <td className="pr-6 py-4 font-semibold">Flowdrop</td>
                  <td>AI-first</td>
                  <td>AI-guided “build-your-own” webhooks + weekly new log-in connectors</td>
                  <td>No</td>
                  <td><strong>$19/mo</strong></td>
                  <td>Best in class ai chat to build workflows</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 id="deep-dive" className={cn(typography.h2, 'mb-6')}>Deep-dive: strengths, quirks, & best-fit use cases</h2>
          <div className="space-y-4 mb-12">
            <div className="bg-neutral-900/60 rounded-xl p-6">
              <strong>Zapier:</strong> Still the king of breadth: 7,000+ apps and familiar two-step Zap UX. AI Chatbots and Agents are in beta, but heavy usage gets pricey once you outgrow the 2K-task tier.
            </div>
            <div className="bg-neutral-900/60 rounded-xl p-6">
              <strong>Make (formerly Integromat):</strong> Drag-and-drop canvas, routers, filters, and a rock-bottom $9 Core plan make Make perfect for visual tinkerers. 2,000+ apps and 350 AI modules cover most needs, yet “operations” can spike if you loop large data sets.
            </div>
            <div className="bg-neutral-900/60 rounded-xl p-6">
              <strong>n8n:</strong> Open-source power-users’ favorite. Host it yourself or pay $24/mo for 2.5K executions in the cloud. 500+ integrations plus JS/Python “Function” nodes and GPT Assistant steps for inline AI logic.
            </div>
            <div className="bg-neutral-900/60 rounded-xl p-6">
              <strong>Gumloop:</strong> Purpose-built for growth hackers: built-in browser scraping, Ask-AI, Summarizer, and Categorizer nodes. Starter is $97/mo (30K credits) and only one seat; native connectors lag mainstream tools, but you can roll custom nodes quickly.
            </div>
            <div className="bg-neutral-900/60 rounded-xl p-6">
              <strong>Flowise:</strong> Open-source LangChain canvas for building chatbots, RAG flows, or agent swarms. Hosted Starter is $35/mo; great for devs, less so for pure no-code SMBs.
            </div>
            <div className="bg-neutral-900/60 rounded-xl p-6">
              <strong>Lindy:</strong> “Spin up an AI agent in minutes” — perfect for automating inbox triage, outbound calls, or CRM chores. 1,600+ connectors (via Pipedream) and phone-automation nodes make Lindy a standout, but credits meter every task.
            </div>
            <div className="bg-neutral-900/60 rounded-xl p-6">
              <strong>Relevance AI:</strong> Marketed as an AI workforce: design multi-agent teams that share a knowledge base, then trigger them across 2,000+ apps. Pro tier is just $19/mo—but team pricing jumps to $199. Great for content & research pipelines that need RAG baked in.
            </div>
            <div className="bg-primary-main/10 rounded-xl p-6 border border-primary-main">
              <strong>Flowdrop — the lean AI-builder for small teams:</strong> Flowdrop’s first-of-its-kind lovable/cursor style chat UX dominates the workflow space by giving you the fastest time to deployment and upgrading possible.<br />
              <strong>Flat $9/mo:</strong> No per-task gotchas—scale experiments without surprise overages.<br />
              <strong>AI-guided connector builder:</strong> Missing an integration? Describe the endpoint in plain English and Flowdrop’s assistant scaffolds the webhook/HTTP call for you. Weekly log-ins unlock fresh “plug-and-play” connectors.
            </div>
          </div>
        </div>

        <div>
          <h2 id="key-takeaways" className={cn(typography.h2, 'mb-6')}>Key takeaways for 2025 AI automation and workflow shoppers</h2>
          <ul className="list-disc pl-6 mb-12 text-neutral-200 space-y-3">
            <li>Need maximum app coverage? Zapier still rules—but watch your task bill.</li>
            <li>Want cheap visual freedom? Make’s $9 Core plan is hard to beat if you can manage ops math.</li>
            <li>Love open source? n8n or Flowise offer full code-level control.</li>
            <li>Crave AI-native agents? Lindy and Relevance AI are hot, but both meter credits/tasks.</li>
            <li>Running a lean startup? Flowdrop gives you AI-smart workflows, predictable $19 pricing, and a best in class ai assistant—covering the ux gaps others missed. Only be limited by your imagination, their credits only apply to llm usage in chat and nodes.</li>
          </ul>
        </div>

        <div className="flex justify-center pt-8">
          <Button
            variant="primary"
            className="h-[52px] w-full max-w-[400px] px-8 btn-liquid text-white font-semibold rounded-full shadow-lg shadow-primary-main/25 ring-2 ring-primary-main/20 group relative overflow-hidden"
            onClick={() => window.location.href = '/signin'}
            whileHover="hover"
            initial="default"
            animate="default"
          >
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
} 