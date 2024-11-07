import type { ComponentChildren } from "preact";

interface ProseSectionProps {
    children?: ComponentChildren;
    className?: string;
    dangerouslySetInnerHTML?: {
        __html: string;
    };
}

export const ProseSection = (
    { children, className, dangerouslySetInnerHTML }: ProseSectionProps,
) => (
    <section
        class={`prose prose-stone dark:prose-invert max-w-[80ch] ${className}`}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
        {children}
    </section>
);
