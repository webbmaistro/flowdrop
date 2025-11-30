import { generateDocsMetadata } from '@/lib/metadata';
import { docsMetadata } from '@/lib/docs-metadata-config';

export const metadata = generateDocsMetadata(docsMetadata.aiWorkflowsExplained);

export default function AIWorkflowsExplainedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

