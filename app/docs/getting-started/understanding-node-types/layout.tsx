import { generateDocsMetadata } from '@/lib/metadata';
import { docsMetadata } from '@/lib/docs-metadata-config';

export const metadata = generateDocsMetadata(docsMetadata.understandingNodeTypes);

export default function UnderstandingNodeTypesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

