"use client"

import React from 'react';
import { Code, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import Link from 'next/link';
import CodeBlock from "@/components/ui/CodeBlock";

export default function JavaScriptExpressionsOverview() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-primary-main/20 rounded-xl">
            <Code className="w-8 h-8 text-primary-main" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-text-primary">JavaScript Expressions</h1>
            <p className="text-neutral-400 mt-1">Use JEXL templating to dynamically reference and transform data in your workflow fields</p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="mb-12">
        <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">Overview</h2>
          <p className="text-neutral-300 mb-4">
            The templating system uses <strong>JEXL (JavaScript Expression Language)</strong> and supports transforms (pipe syntax) and function calls. 
            You can use JavaScript expressions in any field throughout your workflows to dynamically reference and transform data from previous nodes.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-700">
              <h3 className="font-semibold mb-2 text-text-primary">Transform Syntax (Recommended)</h3>
              <CodeBlock
                code={`\${ value | transform1(arg1) | transform2() }`}
                lang="javascript"
              />
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-700">
              <h3 className="font-semibold mb-2 text-text-primary">Function Syntax (Alternate)</h3>
              <CodeBlock
                code={`\${ functionName(value, arg1) }`}
                lang="javascript"
              />
            </div>
          </div>

          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-700 mt-4">
            <h3 className="font-semibold mb-2 text-text-primary">Variable Reference</h3>
            <CodeBlock
              code={`\${<slug>.<outputKey>}`}
              lang="javascript"
            />
            <p className="text-neutral-400 text-sm mt-2">
              Example: <code className="text-primary-main">{"${fetchUsers.users[0].email}"}</code>
            </p>
          </div>
        </div>
      </section>

      {/* Expression Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Expression Categories</h2>
        <p className="text-neutral-300 mb-8">
          Browse the expression categories below to learn about all 27 available functions. Each category page includes detailed examples and usage for every function.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/docs/javascript-expressions/string-utilities">
            <Card className="border-neutral-700 hover:border-primary-main/50 transition-all cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-primary-main">String Utilities</CardTitle>
                  <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-main group-hover:translate-x-1 transition-all" />
                </div>
                <CardDescription>
                  11 functions for string manipulation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-neutral-400 space-y-1">
                  <li>• split, join, replace, regexReplace</li>
                  <li>• trim, lower, upper</li>
                  <li>• startsWith, endsWith, contains, slice</li>
                </ul>
              </CardContent>
            </Card>
          </Link>

          <Link href="/docs/javascript-expressions/array-utilities">
            <Card className="border-neutral-700 hover:border-primary-main/50 transition-all cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-primary-main">Array Utilities</CardTitle>
                  <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-main group-hover:translate-x-1 transition-all" />
                </div>
                <CardDescription>
                  7 functions for array operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-neutral-400 space-y-1">
                  <li>• first, last, at, length</li>
                  <li>• uniq, compact, sort</li>
                </ul>
              </CardContent>
            </Card>
          </Link>

          <Link href="/docs/javascript-expressions/object-utilities">
            <Card className="border-neutral-700 hover:border-primary-main/50 transition-all cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-primary-main">Object Utilities</CardTitle>
                  <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-main group-hover:translate-x-1 transition-all" />
                </div>
                <CardDescription>
                  4 functions for object manipulation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-neutral-400 space-y-1">
                  <li>• get, keys, values</li>
                  <li>• has</li>
                </ul>
              </CardContent>
            </Card>
          </Link>

          <Link href="/docs/javascript-expressions/type-utilities">
            <Card className="border-neutral-700 hover:border-primary-main/50 transition-all cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-primary-main">Type/Utility Helpers</CardTitle>
                  <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-main group-hover:translate-x-1 transition-all" />
                </div>
                <CardDescription>
                  5 functions for type conversion
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-neutral-400 space-y-1">
                  <li>• toString, toNumber</li>
                  <li>• default, json, date</li>
                </ul>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Important Notes */}
      <section className="mb-12">
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">Important Notes</h2>
          <ul className="space-y-3 text-neutral-300">
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span><strong>Null/Type Safety:</strong> Functions return sensible fallbacks (<code className="text-primary-main">""</code>, <code className="text-primary-main">[]</code>, or <code className="text-primary-main">null</code>) rather than throwing errors when inputs are null/undefined or of the wrong type.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span><strong>Chaining:</strong> Transforms can be chained left-to-right: <code className="text-primary-main">{"${ value | transform1() | transform2() }"}</code></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span><strong>Variable References:</strong> Always reference data via node slug and output key: <code className="text-primary-main">{"${slug.outputKey}"}</code></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span><strong>Property Access:</strong> Dot (<code className="text-primary-main">.</code>) is for property access only, not method calls. Use transforms instead.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Example Usage */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Example Usage</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Complex Example: Path Processing</CardTitle>
              <CardDescription>Get last path segment, strip extension, remove dashes</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`\${ githubReadFile1.filePath | split("/") | last() | replace(".ts", "") | replace("-", "") }`}
                lang="javascript"
              />
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>User Data Processing</CardTitle>
              <CardDescription>Pick first user's email, lowercase and trim</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`\${ fetchUsers.users[0].email | lower() | trim() }`}
                lang="javascript"
              />
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Array Joining</CardTitle>
              <CardDescription>Join tags with commas</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`\${ article.tags | join(", ") }`}
                lang="javascript"
              />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
