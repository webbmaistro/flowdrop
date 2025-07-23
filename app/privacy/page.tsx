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
              Effective Date: July 22, 2025
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
                Scopes requested: "email" and "profile" only.
              </p>

              <h3 className={cn(typography.h3, "mb-3")}>3.2 Other Information You Provide</h3>
              <ul className={cn(typography.body, "list-disc list-inside mb-4 space-y-1")}>
                <li>Account credentials you set (e.g., password if you create one)</li>
                <li>Content created in the Flowdrop builder (workflow metadata)</li>
                <li>Support requests, feedback, or survey responses</li>
              </ul>

              <h3 className={cn(typography.h3, "mb-3")}>3.3 Automatically Collected Information</h3>
              <ul className={cn(typography.body, "list-disc list-inside space-y-1")}>
                <li>Usage data (pages visited, nodes created, interactions)</li>
                <li>Device and log data (IP address, browser type, date/time)</li>
              </ul>
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
                </a>
                .
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