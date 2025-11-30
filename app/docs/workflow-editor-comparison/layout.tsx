import { generateDocsMetadata } from '@/lib/metadata';
import { docsMetadata } from '@/lib/docs-metadata-config';

export const metadata = generateDocsMetadata(docsMetadata.workflowEditorComparison);

export default function WorkflowEditorComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

