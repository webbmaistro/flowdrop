"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';

export default function TermsOfService() {
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
            <h1 className={cn(typography.h1, "mb-4")}>Flowdrop Terms of Service</h1>
            <p className={cn(typography.bodyLarge, "text-text-secondary")}>
              Effective Date: August 11, 2025
            </p>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <section>
              <h2 className={cn(typography.h2, "mb-4")}>1. Eligibility & Accounts</h2>
              <h3 className={cn(typography.h3, "mb-3")}>1.1 Eligibility.</h3>
              <p className={cn(typography.body, "mb-4")}>
                You must be at least 13 years old to use the Service. If you are under the age of majority in your jurisdiction, you may use the Service only with the consent of a parent or legal guardian.
              </p>
              <h3 className={cn(typography.h3, "mb-3")}>1.2 Account Registration.</h3>
              <p className={cn(typography.body, "mb-4")}>
                You may create an account via email/password or by using a third‑party sign‑in provider such as Google. You are responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account.
              </p>
              <h3 className={cn(typography.h3, "mb-3")}>1.3 Accuracy.</h3>
              <p className={cn(typography.body, "mb-4")}>
                You agree to provide accurate, current, and complete information and to keep it updated.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>2. Google OAuth Scopes & Use of Google User Data</h2>
              <h3 className={cn(typography.h3, "mb-3")}>2.1 Baseline sign‑in scopes.</h3>
              <p className={cn(typography.body, "mb-4")}>
                For authentication we request <strong><em>email</em></strong> and <strong><em>profile</em></strong>.
              </p>
              <h3 className={cn(typography.h3, "mb-3")}>2.2 Optional Google Workspace scopes.</h3>
              <p className={cn(typography.body, "mb-4")}>
                When you connect Google integrations or enable nodes that operate on Google content, we request additional scopes <strong>only as needed</strong> for the specific node. We prefer the <strong>least‑privilege</strong> scope (for example, <strong><em>drive.file</em></strong> per‑file access) and ask for broader scopes only when you explicitly select workflows that require them.
              </p>
              <div className="mb-4">
                <h4 className={cn(typography.h4, "mb-2 font-semibold")}>Gmail (Restricted)</h4>
                <ul className={cn(typography.body, "list-disc list-inside mb-2 space-y-1")}>
                  <li><strong><em>https://www.googleapis.com/auth/gmail.readonly</em></strong> (read mail, including bodies)</li>
                  <li><strong><em>https://www.googleapis.com/auth/gmail.metadata</em></strong> (read metadata such as headers and labels)</li>
                  <li><strong><em>https://www.googleapis.com/auth/gmail.modify</em></strong> (read and modify, including labels)</li>
                  <li><strong><em>https://www.googleapis.com/auth/gmail.compose</em></strong> (create/draft)</li>
                  <li><strong><em>https://www.googleapis.com/auth/gmail.send</em></strong> (send)</li>
                  <li><strong><em>https://www.googleapis.com/auth/gmail.settings.basic</em></strong> and <strong><em>https://www.googleapis.com/auth/gmail.settings.sharing</em></strong> (manage labels/filters/forwarding as configured by your node)</li>
                </ul>
                <p className={cn(typography.body, "mb-4")}>
                  We do <strong>not</strong> use Gmail data for advertising. If we use restricted Gmail scopes in production and store or transmit restricted data server‑side, we will complete Google’s <strong>app verification</strong> and any required <strong>annual security assessment</strong>.
                </p>
              </div>
              <div className="mb-4">
                <h4 className={cn(typography.h4, "mb-2 font-semibold")}>Drive (Sensitive)</h4>
                <ul className={cn(typography.body, "list-disc list-inside mb-2 space-y-1")}>
                  <li>Prefer: <strong><em>https://www.googleapis.com/auth/drive.file</em></strong> (create/open and per‑file access)</li>
                  <li>If you opt‑in to broader read access: <strong><em>.../drive.readonly</em></strong></li>
                  <li>If you opt‑in to broad read/write: <strong><em>.../drive</em></strong></li>
                  <li>Metadata scopes as needed: <strong><em>.../drive.metadata.readonly</em></strong>, <strong><em>.../drive.metadata</em></strong></li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className={cn(typography.h4, "mb-2 font-semibold")}>Docs (Sensitive)</h4>
                <ul className={cn(typography.body, "list-disc list-inside mb-2 space-y-1")}>
                  <li><strong><em>https://www.googleapis.com/auth/documents.readonly</em></strong></li>
                  <li><strong><em>https://www.googleapis.com/auth/documents</em></strong></li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className={cn(typography.h4, "mb-2 font-semibold")}>Sheets (Sensitive)</h4>
                <ul className={cn(typography.body, "list-disc list-inside mb-2 space-y-1")}>
                  <li><strong><em>https://www.googleapis.com/auth/spreadsheets.readonly</em></strong></li>
                  <li><strong><em>https://www.googleapis.com/auth/spreadsheets</em></strong></li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className={cn(typography.h4, "mb-2 font-semibold")}>Calendar (Sensitive)</h4>
                <ul className={cn(typography.body, "list-disc list-inside mb-2 space-y-1")}>
                  <li><strong><em>https://www.googleapis.com/auth/calendar.events.readonly</em></strong></li>
                  <li><strong><em>https://www.googleapis.com/auth/calendar.events</em></strong></li>
                  <li>(If you enable full calendar management) <strong><em>https://www.googleapis.com/auth/calendar.readonly</em></strong> and <strong><em>https://www.googleapis.com/auth/calendar</em></strong></li>
                </ul>
              </div>
              <h3 className={cn(typography.h3, "mb-3")}>2.3 Purpose limitation & Limited‑Use.</h3>
              <p className={cn(typography.body, "mb-4")}>
                We access Google user data <strong>only</strong> to provide or improve user‑facing features that are prominent in Flowdrop. We <strong>do not</strong> sell Google user data and we do not transfer it except to sub‑processors necessary to provide the Service under written data‑processing terms, or as required by law.
              </p>
              <h3 className={cn(typography.h3, "mb-3")}>2.4 Human access.</h3>
              <p className={cn(typography.body, "mb-4")}>
                Human access to Google user data is <strong>prohibited</strong> except (i) with your explicit consent for support, (ii) for security/abuse review, or (iii) to comply with law. Such access is limited to authorized personnel and is logged.
              </p>
              <h3 className={cn(typography.h3, "mb-3")}>2.5 Offline access & tokens.</h3>
              <p className={cn(typography.body, "mb-4")}>
                If you opt in to run automations while away, we request offline access and store refresh tokens <strong>encrypted at rest</strong>. You can revoke tokens in‑app or at{' '}
                <a href="https://myaccount.google.com/permissions" className="text-primary-main hover:text-primary-light transition-colors">
                  https://myaccount.google.com/permissions
                </a>.
              </p>
              <h3 className={cn(typography.h3, "mb-3")}>2.6 Data handling & retention.</h3>
              <p className={cn(typography.body, "mb-4")}>
                By default, we process content <strong>in memory</strong> and store only identifiers and minimal metadata necessary for reliability (file IDs, ranges, message or thread IDs, timestamps, delivery status). If you configure a node to persist content (e.g., write an email body into a database or a Doc into storage), we store what your node instructs. Logs are retained for the shortest period necessary to operate and secure the Service.
              </p>
              <h3 className={cn(typography.h3, "mb-3")}>2.7 Revocation.</h3>
              <p className={cn(typography.body, "mb-4")}>
                You can revoke Flowdrop’s Google access at any time at{' '}
                <a href="https://myaccount.google.com/permissions" className="text-primary-main hover:text-primary-light transition-colors">
                  https://myaccount.google.com/permissions
                </a>. Revocation may disable affected nodes until reconnected.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>3. Your Content & License</h2>
              <h3 className={cn(typography.h3, "mb-3")}>3.1 Your Content.</h3>
              <p className={cn(typography.body, "mb-4")}>
                "Content" means workflows, prompts, node configurations, metadata, files, text, images, or other material you submit to or generate with the Service. <strong>You retain ownership</strong> of Your Content.
              </p>
              <h3 className={cn(typography.h3, "mb-3")}>3.2 License to Flowdrop.</h3>
              <p className={cn(typography.body, "mb-4")}>
                You grant Flowdrop a worldwide, non‑exclusive, royalty‑free license to host, store, reproduce, modify, and display Your Content solely to operate, maintain, and improve the Service and to provide support to you.
              </p>
              <h3 className={cn(typography.h3, "mb-3")}>3.3 Responsibility.</h3>
              <p className={cn(typography.body, "mb-4")}>
                You are responsible for Your Content and for ensuring you have all rights needed to grant the license above, including rights to any third‑party inputs you use in your workflows (e.g., APIs, webhooks, data sources).
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>4. AI Features; Accuracy & Use Restrictions</h2>
              <h3 className={cn(typography.h3, "mb-3")}>4.1 AI Outputs.</h3>
              <p className={cn(typography.body, "mb-4")}>
                Some features produce AI‑generated text, code, or other outputs ("AI Output"). AI Output may be inaccurate or incomplete. You are responsible for reviewing AI Output and evaluating its fitness for your use case.
              </p>
              <h3 className={cn(typography.h3, "mb-3")}>4.2 No High‑Risk Use.</h3>
              <p className={cn(typography.body, "mb-4")}>
                The Service is not designed for use in safety‑critical systems (e.g., medical diagnosis, emergency services, nuclear facilities). You agree not to use the Service where failure could result in death, personal injury, or severe environmental or property damage.
              </p>
              <h3 className={cn(typography.h3, "mb-3")}>4.3 Evaluation Data.</h3>
              <p className={cn(typography.body, "mb-4")}>
                To improve model quality and product performance, we may use aggregated and de‑identified interaction metadata. We do not use Google user data for model training.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>5. Acceptable Use</h2>
              <p className={cn(typography.body, "mb-4")}>
                You agree not to:
                <ul className={cn(typography.body, "list-disc list-inside space-y-1")}> 
                  <li>misuse, interfere with, or disrupt the Service;</li>
                  <li>reverse engineer or attempt to access the Service’s source code, except to the extent permitted by law;</li>
                  <li>use the Service to violate any law, infringe intellectual property or privacy rights, or transmit malware, spam, or unauthorized communications;</li>
                  <li>resell, sublicense, or provide the Service to third parties as a service bureau without our prior written consent;</li>
                  <li>bypass or breach any rate limit, security, or authentication measures;</li>
                  <li>attempt to scrape or bulk‑download other users’ content.</li>
                </ul>
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>6. Third‑Party Services</h2>
              <p className={cn(typography.body, "mb-4")}>
                The Service may interoperate with third‑party products (e.g., Google Sign‑In, Stripe payments, Supabase, webhooks). Your use of third‑party services is governed by their own terms and privacy policies; Flowdrop is not responsible for third‑party services.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>7. Plans, Billing & Taxes</h2>
              <h3 className={cn(typography.h3, "mb-3")}>7.1 Subscriptions.</h3>
              <p className={cn(typography.body, "mb-4")}>
                Paid plans are billed in advance on a recurring basis until canceled. You authorize us (and our payment processor, Stripe) to charge your payment method for applicable fees and taxes.
              </p>
              <h3 className={cn(typography.h3, "mb-3")}>7.2 Changes.</h3>
              <p className={cn(typography.body, "mb-4")}>
                We may change plan features and pricing prospectively with reasonable notice. If you do not agree, you may cancel before the change takes effect.
              </p>
              <h3 className={cn(typography.h3, "mb-3")}>7.3 Trials & Refunds.</h3>
              <p className={cn(typography.body, "mb-4")}>
                Trials, promotional offers, and credits are subject to the terms presented at sign‑up. Unless required by law or explicitly stated otherwise, <strong>all fees are non‑refundable</strong>.
              </p>
              <h3 className={cn(typography.h3, "mb-3")}>7.4 Overages.</h3>
              <p className={cn(typography.body, "mb-4")}>
                If your usage exceeds plan limits (e.g., actions, storage, seats), we may charge overage fees or require an upgrade.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>8. IP Ownership</h2>
              <h3 className={cn(typography.h3, "mb-3")}>8.1 Flowdrop IP.</h3>
              <p className={cn(typography.body, "mb-4")}>
                We own the Service and all associated intellectual property, including software, visual design, and trademarks. Except for the rights expressly granted to you, we reserve all rights.
              </p>
              <h3 className={cn(typography.h3, "mb-3")}>8.2 Feedback.</h3>
              <p className={cn(typography.body, "mb-4")}>
                If you provide feedback or suggestions, you grant us a perpetual, irrevocable, royalty‑free license to use it without restriction.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>9. Confidentiality</h2>
              <p className={cn(typography.body, "mb-4")}>
                "Confidential Information" means non‑public information disclosed by one party to the other that is marked confidential or should reasonably be considered confidential. Each party will use the other’s Confidential Information only to perform under these Terms and will protect it using reasonable care.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>10. Privacy</h2>
              <p className={cn(typography.body, "mb-4")}>
                Your use of the Service is subject to our <strong>Privacy Policy</strong>, which explains how we collect and use personal information, including Google OAuth data. The Privacy Policy is incorporated by reference into these Terms.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>11. Term; Suspension; Termination</h2>
              <h3 className={cn(typography.h3, "mb-3")}>11.1 Term.</h3>
              <p className={cn(typography.body, "mb-4")}>
                These Terms remain in effect until terminated.
              </p>
              <h3 className={cn(typography.h3, "mb-3")}>11.2 Suspension.</h3>
              <p className={cn(typography.body, "mb-4")}>
                We may suspend or limit access immediately if we believe you violated these Terms, present a security risk, or to protect the Service or other users.
              </p>
              <h3 className={cn(typography.h3, "mb-3")}>11.3 Termination by You.</h3>
              <p className={cn(typography.body, "mb-4")}>
                You may cancel at any time via the billing portal or in‑app settings. Cancelation stops future charges but does not entitle you to refunds unless required by law.
              </p>
              <h3 className={cn(typography.h3, "mb-3")}>11.4 Termination by Us.</h3>
              <p className={cn(typography.body, "mb-4")}>
                We may terminate on notice if you materially breach these Terms and fail to cure within 10 days, or immediately for non‑payment or unlawful use.
              </p>
              <h3 className={cn(typography.h3, "mb-3")}>11.5 Effect.</h3>
              <p className={cn(typography.body, "mb-4")}>
                Upon termination, your right to access the Service ends. We will delete or de‑identify Your Content in accordance with our Privacy Policy and applicable law.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>12. Disclaimers</h2>
              <p className={cn(typography.body, "mb-4")}>
                THE SERVICE AND ALL MATERIALS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON‑INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR‑FREE, OR SECURE, OR THAT AI OUTPUT WILL BE ACCURATE OR RELIABLE.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>13. Limitation of Liability</h2>
              <p className={cn(typography.body, "mb-4")}>
                TO THE FULLEST EXTENT PERMITTED BY LAW: (A) FLOWDROP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, COVER, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, GOODWILL, OR DATA; AND (B) OUR TOTAL LIABILITY FOR ALL CLAIMS IN THE AGGREGATE WILL NOT EXCEED THE AMOUNTS YOU PAID TO FLOWDROP FOR THE SERVICE IN THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR US$100 IF YOU HAVE NOT PAID ANY AMOUNTS.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>14. Indemnification</h2>
              <p className={cn(typography.body, "mb-4")}>
                You will defend, indemnify, and hold harmless Flowdrop and its affiliates from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys’ fees) arising out of or related to Your Content, your use of the Service, or your violation of these Terms or applicable law.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>15. Export & Sanctions Compliance</h2>
              <p className={cn(typography.body, "mb-4")}>
                You represent that you are not located in, under the control of, or a national or resident of any country or entity subject to U.S. embargoes, sanctions, or export restrictions, and that you will comply with applicable export control and sanctions laws.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>16. Governing Law; Dispute Resolution</h2>
              <h3 className={cn(typography.h3, "mb-3")}>16.1 Governing Law.</h3>
              <p className={cn(typography.body, "mb-4")}>
                These Terms are governed by the laws of the <strong>State of Maryland</strong>, excluding its conflicts‑of‑law rules.
              </p>
              <h3 className={cn(typography.h3, "mb-3")}>16.2 Arbitration.</h3>
              <p className={cn(typography.body, "mb-4")}>
                Any dispute arising out of or relating to these Terms or the Service will be resolved by binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules, in English, with a single arbitrator, in Montgomery County, Maryland. You and Flowdrop waive any right to a jury trial.
              </p>
              <h3 className={cn(typography.h3, "mb-3")}>16.3 Class‑Action Waiver.</h3>
              <p className={cn(typography.body, "mb-4")}>
                You and Flowdrop agree that each may bring claims against the other only in your or its individual capacity and not as a plaintiff or class member in any class or representative proceeding.
              </p>
              <h3 className={cn(typography.h3, "mb-3")}>16.4 Injunctive Relief.</h3>
              <p className={cn(typography.body, "mb-4")}>
                Notwithstanding the foregoing, either party may seek injunctive or equitable relief in a court of competent jurisdiction to protect its intellectual property or Confidential Information.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>17. Changes to the Service or Terms</h2>
              <p className={cn(typography.body, "mb-4")}>
                We may modify the Service and these Terms from time to time. If we make material changes, we will provide reasonable notice (e.g., by email or in‑product notice). The updated Terms will be effective on the date stated. Your continued use of the Service after the effective date constitutes acceptance of the changes.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>18. Notices</h2>
              <p className={cn(typography.body, "mb-4")}>
                Notices to Flowdrop must be sent to <strong>Flowdrop, Inc., Attn: Legal, 7905 Hope Valley Ct, Adamstown, MD 21710, USA</strong> and to <strong><a href="mailto:legal@flowdrop.xyz" className="text-primary-main hover:text-primary-light transition-colors">legal@flowdrop.xyz</a></strong>. We may send notices to the email associated with your account or provide in‑product notices.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>19. Contact</h2>
              <p className={cn(typography.body)}>
                Questions about these Terms? Contact <strong><a href="mailto:legal@flowdrop.xyz" className="text-primary-main hover:text-primary-light transition-colors">legal@flowdrop.xyz</a></strong>.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>Exhibit A – Data Processing Addendum (Summary)</h2>
              <p className={cn(typography.body, "mb-4")}>
                If you require a GDPR/CCPA Data Processing Addendum (DPA) for paid plans, contact us at <a href="mailto:legal@flowdrop.xyz" className="text-primary-main hover:text-primary-light transition-colors">legal@flowdrop.xyz</a>. Our standard DPA includes: (i) processing instructions limited to providing the Service; (ii) confidentiality, security, and sub‑processor terms; (iii) international transfer mechanisms (e.g., SCCs); and (iv) deletion/return of personal data upon termination.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>Exhibit B – API Fair Use & Rate Limits (If Applicable)</h2>
              <p className={cn(typography.body, "mb-4")}>
                We may publish or update API usage limits (e.g., actions per minute, concurrent jobs). Exceeding limits may result in throttling or suspension until usage returns to normal or you upgrade to a suitable plan.
              </p>
            </section>

            <section>
              <h2 className={cn(typography.h2, "mb-4")}>Exhibit C – Google API Limited‑Use Disclosure</h2>
              <p className={cn(typography.body, "mb-4")}>
                Flowdrop’s use and transfer of information received from Google APIs will adhere to the <strong>Google API Services User Data Policy</strong>, including the <strong>Limited‑Use</strong> requirements. In particular: (a) we use Google user data only to provide or improve user‑facing features that are prominent in the Service; (b) we do not sell Google user data; (c) we do not transfer Google user data except as necessary to provide the Service, comply with the law, or as part of a merger/acquisition with equivalent protections; (d) human access is restricted to the cases described in §2.4; and (e) Gmail restricted scopes, if used, are subject to Google’s app verification and any required annual security assessment.
              </p>
            </section>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
