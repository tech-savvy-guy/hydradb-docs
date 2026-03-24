import { source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

import { CallToAction } from '@/components/cta';

// import { cn } from '@/lib/cn';
// import { MessageCircleIcon } from 'lucide-react';
// import { buttonVariants } from 'fumadocs-ui/components/ui/button';
// import { AISearch, AISearchPanel, AISearchTrigger } from '@/components/ai/search';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
      {/* <AISearch>
        <AISearchPanel />
        <AISearchTrigger
          position="float"
          className={cn(
            buttonVariants({
              variant: 'secondary',
              className: 'text-fd-muted-foreground',
            }),
          )}
        >
          <MessageCircleIcon className="size-4.5" />
          Ask AI
        </AISearchTrigger>
      </AISearch> */}

      <CallToAction href="https://app.hydradb.com/keys" />
      {children}
    </DocsLayout>
  );
}
