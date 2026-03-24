import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react';

type StepProps = {
  children: ReactNode;
  number?: number;
  isLast?: boolean;
};

export function Steps({ children }: { children: ReactNode }) {
  const items = Children.toArray(children);
  const total = items.length;

  return (
    <div className="my-6">
      {items.map((child, index) => {
        if (!isValidElement(child)) return child;

        return cloneElement(child as ReactElement<StepProps>, {
          number: index + 1,
          isLast: index === total - 1,
        });
      })}
    </div>
  );
}

export function Step({ children, number, isLast }: StepProps) {
  return (
    <div className={isLast ? 'relative grid grid-cols-[3rem_1fr] gap-4 pb-2' : 'relative grid grid-cols-[3rem_1fr] gap-4 pb-6'}>
      <div className="relative flex justify-center">
        <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-sm font-medium text-foreground">
          {number}
        </div>
        {!isLast ? <div className="absolute -bottom-6 top-9 w-px bg-border" /> : null}
      </div>
      <div className="min-w-0 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">{children}</div>
    </div>
  );
}
