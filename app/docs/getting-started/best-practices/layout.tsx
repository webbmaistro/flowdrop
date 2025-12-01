import { generateDocsMetadata } from '@/lib/metadata';
import { docsMetadata } from '@/lib/docs-metadata-config';

export const metadata = generateDocsMetadata(docsMetadata.bestPractices);

export default function BestPracticesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

