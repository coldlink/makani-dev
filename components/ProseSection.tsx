import type { ComponentChildren } from "preact";

interface ProseSectionProps {
    children: ComponentChildren;
    className?: string;
}

export const ProseSection = (
    { children, className }: ProseSectionProps,
) => (
    <div
        class={`prose prose-stone dark:prose-invert max-w-[80ch] ${className}`}
    >
        {children}
    </div>
);
