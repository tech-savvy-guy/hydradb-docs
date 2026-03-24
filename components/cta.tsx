import { cn } from '@/lib/cn';
import type { ComponentProps } from 'react';
import { ArrowUpRightIcon  } from 'lucide-react';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';

type CallToActionProps = Omit<ComponentProps<'a'>, 'children'>;

export function CallToAction({ className, href, ...props }: CallToActionProps) {
  return (
    <a
      target="_blank"
      href={href}
      className={cn(
        buttonVariants({
          variant: 'secondary',
          className:
            'group fixed bottom-4 right-4 z-50 h-9 border border-fd-border/70 bg-fd-background/90 px-4 text-xs font-medium tracking-tight text-fd-muted-foreground shadow-sm backdrop-blur transition-all duration-200 hover:border-fd-border hover:bg-fd-background hover:text-fd-primary hover:shadow-md',
        }),
        className,
      )}
      {...props}
    >
      Get your API key
      <ArrowUpRightIcon className="ml-1.5 size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
