import { generateDocsMetadata } from '@/lib/metadata';
import { docsMetadata } from '@/lib/docs-metadata-config';

export const metadata = generateDocsMetadata(docsMetadata.quickStart);

export default function QuickStartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

