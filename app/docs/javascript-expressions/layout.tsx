import { generateDocsMetadata } from '@/lib/metadata';
import { docsMetadata } from '@/lib/docs-metadata-config';

export const metadata = generateDocsMetadata(docsMetadata.javascriptExpressions);

export default function JavaScriptExpressionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

