import { generateDocsMetadata } from '@/lib/metadata';
import { docsMetadata } from '@/lib/docs-metadata-config';

export const metadata = generateDocsMetadata(docsMetadata.nodes);

export default function NodesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

