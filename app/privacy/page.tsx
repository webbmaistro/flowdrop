"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';

export default function PrivacyPolicy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Back Button */}
          <motion.div variants={itemVariants} className="mb-8">
            <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-text-secondary hover:text-text-primary"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </motion.div>

          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <h1 className={cn(typography.h1, "mb-4")}>Flowdrop Privacy Policy</h1>
            <p className={cn(typography.bodyLarge, "text-text-secondary")}>
              Effective Date: December 19, 2024
            </p>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <section>
              <h2 className={cn(typography.h2, "mb-4")}>1. Who We Are</h2>
              <p className={cn(typography.body, "mb-4")}>
                Flowdrop, Inc. ("Flowdrop," "we," "our," or "us") provides an AI‑powered visual workflow builder available at{' '}
                <a href="https://flowdrop.xyz" className="text-primary-main hover:text-primary-light transition-colors">
                  https://flowdrop.xyz
                </a>{' '}
                (the "Service").
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>2. Scope</h2>
              <p className={cn(typography.body)}>
                This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use the Service, including when you sign in with Google OAuth.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>3. Information We Collect</h2>
              
              <h3 className={cn(typography.h3, "mb-3")}>3.1 Google Account Information (OAuth)</h3>
              <ul className={cn(typography.body, "list-disc list-inside mb-4 space-y-1")}>
                <li>Google user ID</li>
                <li>Name</li>
                <li>Email address</li>
                <li>Profile picture URL</li>
              </ul>
              <p className={cn(typography.body, "mb-4")}>
                Scopes requested: baseline <strong>"email"</strong> and <strong>"profile"</strong> for sign‑in. Optional Google Workspace scopes are requested <strong>only</strong> when you connect an integration or enable a node that needs them (see §3.4).
              </p>

              <h3 className={cn(typography.h3, "mb-3")}>3.2 Other Information You Provide</h3>
              <ul className={cn(typography.body, "list-disc list-inside mb-4 space-y-1")}>
                <li>Account credentials you set (e.g., password if you create one)</li>
                <li>Content created in the Flowdrop builder (workflow metadata)</li>
                <li>Support requests, feedback, or survey responses</li>
              </ul>

              <h3 className={cn(typography.h3, "mb-3")}>3.3 Automatically Collected Information</h3>
              <ul className={cn(typography.body, "list-disc list-inside mb-4 space-y-1")}>
                <li>Usage data (pages visited, nodes created, interactions)</li>
                <li>Device and log data (IP address, browser type, date/time)</li>
              </ul>

              <h3 className={cn(typography.h3, "mb-3")}>3.4 Google Workspace Scopes (Optional Integrations)</h3>
              <p className={cn(typography.body, "mb-3")}>
                If you connect Google integrations or enable nodes that operate on your Google content, Flowdrop may request additional scopes. We request the <strong>minimum</strong> scope needed and prefer per‑file access whenever possible.
              </p>
              
              <div className="mb-4">
                <h4 className={cn(typography.h4, "mb-2 font-semibold")}>Gmail (Restricted)</h4>
                <ul className={cn(typography.body, "list-disc list-inside mb-2 space-y-1")}>
                  <li>Scopes: <code className="bg-gray-100 px-1 rounded">https://www.googleapis.com/auth/gmail.readonly</code>, <code className="bg-gray-100 px-1 rounded">.../gmail.modify</code>, <code className="bg-gray-100 px-1 rounded">.../gmail.compose</code>, <code className="bg-gray-100 px-1 rounded">.../gmail.send</code>, and related label/settings scopes (no IMAP/SMTP unless explicitly configured).</li>
                  <li>Use: Read message metadata/bodies as required by a node you create; draft and send messages; manage labels; process replies.</li>
                  <li>Storage: By default we <strong>do not store email bodies</strong>. We may store message IDs, thread IDs, label names, timestamps, and delivery status for workflow logs. If you configure a node to persist content (e.g., save an email to a database), we store only what your node instructs.</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className={cn(typography.h4, "mb-2 font-semibold")}>Drive (Sensitive)</h4>
                <ul className={cn(typography.body, "list-disc list-inside mb-2 space-y-1")}>
                  <li>Scopes: Prefer <code className="bg-gray-100 px-1 rounded">drive.file</code> (per‑file access to files created/opened with Flowdrop). We may request <code className="bg-gray-100 px-1 rounded">drive.readonly</code> or broader access <strong>only</strong> if your workflow requires cross‑Drive operations you explicitly enable.</li>
                  <li>Use: Read/write files referenced by your workflows; manage file metadata necessary for automation (e.g., IDs, revisions).</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className={cn(typography.h4, "mb-2 font-semibold")}>Docs (Sensitive)</h4>
                <ul className={cn(typography.body, "list-disc list-inside mb-2 space-y-1")}>
                  <li>Scopes: <code className="bg-gray-100 px-1 rounded">https://www.googleapis.com/auth/documents.readonly</code>, <code className="bg-gray-100 px-1 rounded">https://www.googleapis.com/auth/documents</code>.</li>
                  <li>Use: Read and update Google Docs specified by your workflows (e.g., generate a report, replace placeholders).</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className={cn(typography.h4, "mb-2 font-semibold")}>Sheets (Sensitive)</h4>
                <ul className={cn(typography.body, "list-disc list-inside mb-2 space-y-1")}>
                  <li>Scopes: <code className="bg-gray-100 px-1 rounded">https://www.googleapis.com/auth/spreadsheets.readonly</code>, <code className="bg-gray-100 px-1 rounded">https://www.googleapis.com/auth/spreadsheets</code>.</li>
                  <li>Use: Read ranges and write updates in spreadsheets selected in your nodes (e.g., append a row, update cells).</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className={cn(typography.h4, "mb-2 font-semibold")}>Calendar (Sensitive)</h4>
                <ul className={cn(typography.body, "list-disc list-inside mb-2 space-y-1")}>
                  <li>Scopes: <code className="bg-gray-100 px-1 rounded">https://www.googleapis.com/auth/calendar.events.readonly</code>, <code className="bg-gray-100 px-1 rounded">https://www.googleapis.com/auth/calendar.events</code>.</li>
                  <li>Use: Read, create, update, and delete events in calendars you select in a node.</li>
                </ul>
              </div>

              <h3 className={cn(typography.h3, "mb-3")}>3.5 Offline Access & Tokens</h3>
              <p className={cn(typography.body, "mb-4")}>
                Some automations need to run when you are offline. If you opt in, we request offline access (refresh tokens) and store tokens <strong>encrypted at rest</strong>. You can revoke access at any time from in‑app settings or at{' '}
                <a href="https://myaccount.google.com/permissions" className="text-primary-main hover:text-primary-light transition-colors">
                  https://myaccount.google.com/permissions
                </a>.
              </p>

              <h3 className={cn(typography.h3, "mb-3")}>3.6 Data Minimization & Retention for Google Data</h3>
              <p className={cn(typography.body, "mb-4")}>
                We minimize collection and storage: we process content <strong>in memory</strong> where feasible; we store IDs, file paths, ranges, and metadata needed for reliability and auditing. We retain logs for the shortest period necessary and purge or anonymize them per §8.
              </p>

              <h3 className={cn(typography.h3, "mb-3")}>3.7 Human Access</h3>
              <p className={cn(typography.body, "mb-4")}>
                Humans do <strong>not</strong> read your Google content except (i) with your explicit consent for support, (ii) for security/abuse review, or (iii) where required by law. Access is limited to authorized personnel under confidentiality and logging.
              </p>

              <h3 className={cn(typography.h3, "mb-3")}>3.8 Third‑Party Transfers</h3>
              <p className={cn(typography.body)}>
                We <strong>do not</strong> sell Google user data. We do not transfer Google user data except to sub‑processors necessary to provide the Service (e.g., hosting) under data‑processing agreements, or as required by law.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>4. How We Use Information</h2>
              <p className={cn(typography.body, "mb-3")}>We use your information to:</p>
              <ul className={cn(typography.body, "list-disc list-inside space-y-1")}>
                <li>Authenticate and secure your account</li>
                <li>Save and synchronize your workflows</li>
                <li>Personalize your experience</li>
                <li>Provide customer support</li>
                <li>Monitor, analyze, and improve the Service</li>
                <li>Communicate product updates and marketing (with your opt‑out consent)</li>
              </ul>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>5. Google User Data – Limited Use Compliance</h2>
              <p className={cn(typography.body, "mb-3")}>
                We handle Google user data in accordance with Google's Limited Use requirements:
              </p>
              <ul className={cn(typography.body, "list-disc list-inside space-y-1")}>
                <li>We only use Google user data to provide user‑facing features that are prominent in Flowdrop (e.g., signing in and displaying your name and avatar).</li>
                <li>We do not transfer or sell Google user data to third parties, except as necessary to operate the Service with your consent, for security, or to comply with the law.</li>
                <li>Humans do not read Google user data unless (i) you give us explicit permission; (ii) it is required for security or legal compliance; or (iii) the data is aggregated and anonymized for internal operations.</li>
                <li>We do not use Google user data for advertising, creditworthiness, or lending decisions.</li>
              </ul>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>6. Legal Bases (EEA/UK)</h2>
              <p className={cn(typography.body)}>
                We rely on contract (Art. 6(1)(b) GDPR) to process Google OAuth data needed to provide the Service, and on legitimate interests (Art. 6(1)(f)) or consent (Art. 6(1)(a)) for analytics and marketing.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>7. Sharing of Information</h2>
              <p className={cn(typography.body, "mb-3")}>We share information only with:</p>
              <ul className={cn(typography.body, "list-disc list-inside space-y-1")}>
                <li>Service providers who process data under strict data‑processing agreements (e.g., hosting on Vercel and Supabase, analytics, payment processors).</li>
                <li>Authorities if required by law or to protect rights and safety.</li>
                <li>In connection with a merger, acquisition, or sale of assets, with notice to you.</li>
              </ul>
              <p className={cn(typography.body, "mt-3")}>We do not sell personal information.</p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>8. Data Retention & Deletion</h2>
              <p className={cn(typography.body, "mb-3")}>
                We retain account data while your account is active. You may delete your account at any time from your profile settings; this permanently deletes your workflows and Google user data within 30 days unless longer retention is required by law.
              </p>
              <p className={cn(typography.body)}>
                You may revoke Flowdrop's access to your Google account at{' '}
                <a href="https://myaccount.google.com/permissions" className="text-primary-main hover:text-primary-light transition-colors">
                  https://myaccount.google.com/permissions
                </a>.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>9. Security</h2>
              <p className={cn(typography.body)}>
                We use TLS encryption in transit, AES‑256 encryption at rest, least‑privilege access controls, periodic security reviews, and continuous monitoring. No method of transmission or storage is completely secure, but we strive to protect your data.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>10. Your Rights</h2>
              <p className={cn(typography.body)}>
                Depending on where you live, you may have rights to access, correct, delete, or restrict your personal information, object to processing, opt out of marketing, or export your data. Email{' '}
                <a href="mailto:webb@flowdrop.xyz" className="text-primary-main hover:text-primary-light transition-colors">
                  webb@flowdrop.xyz
                </a>{' '}
                to exercise these rights. California residents may exercise CCPA rights; we do not sell personal information.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>11. Children</h2>
              <p className={cn(typography.body)}>
                Flowdrop is not directed to children under 13, and we do not knowingly collect their data.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>12. International Transfers</h2>
              <p className={cn(typography.body)}>
                We store data in the United States. When transferring data internationally, we rely on Standard Contractual Clauses or other lawful mechanisms.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>13. Changes to This Policy</h2>
              <p className={cn(typography.body)}>
                We may update this Policy periodically. We will post the new version on our site and, if material, notify you by email or in‑product notice. The "Effective Date" above will reflect the latest revision.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>14. Contact</h2>
              <p className={cn(typography.body)}>
                Flowdrop, Inc.<br />
                Attn: Flowdrop Team<br />
                7905 Hope Valley Ct, Adamstown, MD, 21710, USA<br />
                Email:{' '}
                <a href="mailto:webb@flowdrop.xyz" className="text-primary-main hover:text-primary-light transition-colors">
                  webb@flowdrop.xyz
                </a>
              </p>
            </section>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 