import { generateDocsMetadata } from '@/lib/metadata';
import { docsMetadata } from '@/lib/docs-metadata-config';

export const metadata = generateDocsMetadata(docsMetadata.workflowBuilderBasics);

export default function WorkflowBuilderBasicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

