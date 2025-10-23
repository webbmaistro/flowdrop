"use client"

import React from 'react';
import { FileText, Shield, Upload, Settings } from 'lucide-react';
import {
  NodeLayout,
  NodeHeader,
  OverviewSection,
  PrerequisitesSection,
  NodeConfigurationSection,
  BestPracticesSection,
  TroubleshootingSection,
  RelatedResourcesSection,
} from '@/components/docs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import CodeBlock from "@/components/ui/CodeBlock";

export default function PDFReadNode() {
  const prerequisites = [
    {
      icon: Upload,
      title: "File Upload Requirements",
      description: "Must have a valid PDF file to process",
      requirements: [
        "PDF file must be uploaded through the file upload interface",
        "File must be a valid PDF format (.pdf)",
        "File size must not exceed 5MB limit",
        "File must be accessible and not corrupted"
      ]
    },
    {
      icon: FileText,
      title: "PDF Document Requirements",
      description: "Understanding of PDF processing capabilities",
      requirements: [
        "PDF must be readable and not password-protected",
        "Document should contain extractable text content",
        "Complex layouts may require additional processing",
        "Scanned PDFs may need OCR processing for text extraction"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "System capabilities needed for PDF processing",
      requirements: [
        "Blob service access for file storage and retrieval",
        "File size validation and processing capabilities",
        "Base64 encoding/decoding support",
        "Error handling for file processing failures"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={FileText}
        title="PDF Read"
        description="Read and process a PDF file provided as base64 encoded string. Validates file size and outputs the base64 content for use in other workflow nodes."
        nodeType="Action"
        category="File Upload"
        iconName="FileText"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>PDF Read</strong> node is an action node that accepts a base64 encoded PDF file, validates its size against configured limits, and outputs the base64 content for further processing in the workflow. This powerful integration enables you to programmatically process PDF documents, perfect for document analysis, content extraction, and workflow-based document management."
        keyFeatures={[
          "<strong>File Validation:</strong> Validates PDF file size against 5MB limit",
          "<strong>Base64 Processing:</strong> Handles base64 encoded PDF files efficiently",
          "<strong>Blob Management:</strong> Integrates with blob service for file storage",
          "<strong>Error Handling:</strong> Comprehensive error handling for file processing failures",
          "<strong>Metadata Extraction:</strong> Extracts filename and blob ID for reference",
          "<strong>Workflow Integration:</strong> Seamless integration with other workflow nodes"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "PDF File",
              type: "file_upload_pdf",
              required: true,
              valueType: "number (blob ID)",
              description: "The PDF file to be processed. Upload a PDF file through the file upload interface. The file will be validated for size and format before processing."
            }
          ]
        }}
        outputFields={[
          {
            name: "PDF Blob ID",
            type: "number",
            required: true,
            valueType: "Blob ID for file reference",
            description: "The blob ID of the PDF file. Used to reference the file in other workflow nodes for further processing."
          },
          {
            name: "File Name",
            type: "string",
            required: true,
            valueType: "Original filename",
            description: "The original filename of the uploaded PDF file."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Document Analysis Workflow</CardTitle>
              <CardDescription>
                Extract and analyze PDF content with AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📄 PDF Read → 🤖 LLM Analysis → 📊 Generate Summary → 📧 Email Report</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Read PDF document, analyze content with AI for key insights, generate a summary, and email to stakeholders.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Document Processing Pipeline</CardTitle>
              <CardDescription>
                Process PDFs for content extraction and storage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📄 PDF Read → 🔍 Extract Text → 📝 Store in Database → ✅ Confirm Processing</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Read PDF content, extract text data, store in database or knowledge base, and confirm successful processing.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Automated Document Review</CardTitle>
              <CardDescription>
                Automatically review and categorize PDF documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📄 PDF Read → 🤖 AI Classification → 📁 Move to Folder → 📧 Notify Team</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Read PDF, use AI to classify document type, automatically organize into appropriate folders, and notify relevant team members.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Validate file size before processing to avoid errors",
          "Use the blob ID for referencing files in subsequent nodes",
          "Handle file processing errors gracefully",
          "Store original filename for reference and organization",
          "Consider file size limits when designing workflows",
          "Use appropriate error handling for file access issues"
        ]}
        donts={[
          "Don't process files larger than 5MB without splitting",
          "Avoid processing password-protected PDFs",
          "Don't forget to handle blob service connection errors",
          "Avoid hardcoding file paths or blob IDs",
          "Don't process sensitive files without proper security measures",
          "Avoid exceeding system memory limits with large files"
        ]}
        proTip="The PDF Read node is perfect for document processing workflows. Use the blob ID output to reference the file in other nodes like LLM analysis or document conversion. For large documents, consider implementing file size checks before processing."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "File Size Exceeded",
            symptoms: "Node fails with file size exceeded error",
            solution: "Ensure the PDF file is under 5MB. For larger files, consider splitting the document or using a different processing approach."
          },
          {
            title: "Invalid PDF Format",
            symptoms: "Node fails with invalid file format error",
            solution: "Verify the uploaded file is a valid PDF format. Check that the file is not corrupted and can be opened in a PDF viewer."
          },
          {
            title: "Blob Service Connection Error",
            symptoms: "Node fails with blob service connection error",
            solution: "Check that the blob service is properly configured and accessible. Verify network connectivity and service credentials."
          },
          {
            title: "File Not Found",
            symptoms: "Node fails with file not found error",
            solution: "Ensure the PDF file was properly uploaded and the blob ID is valid. Check that the file hasn't been deleted or moved."
          },
          {
            title: "Memory Issues with Large Files",
            symptoms: "Node times out or fails with memory errors",
            solution: "Large PDF files may cause memory issues. Consider processing smaller files or implementing chunked processing for very large documents."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Analyze PDF content with AI"
          },
          {
            href: "/docs/nodes/llm-structured-output",
            title: "LLM Structured Output Node",
            description: "Extract structured data from PDFs"
          },
          {
            href: "/docs/nodes/word-write-contents",
            title: "Word Write Content Node",
            description: "Convert PDF content to Word documents"
          },
          {
            href: "/docs/nodes",
            title: "Node Library",
            description: "Explore all available nodes"
          }
        ]}
      />
    </NodeLayout>
  );
}
