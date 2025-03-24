"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "@/lib/utils";

/**
 * ScrollArea envuelve contenido con una barra de desplazamiento estilizada.
 */
const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = "ScrollArea";

/**
 * ScrollBar estilizada para uso vertical u horizontal.
 */
const ScrollBar = React.forwardRef(
  ({ className, orientation = "vertical", ...props }, ref) => {
    const baseClasses = "flex touch-none select-none transition-colors";

    const orientationClasses =
      orientation === "vertical"
        ? "h-full w-2.5 border-l border-transparent p-[1px]"
        : "h-2.5 w-full flex-col border-t border-transparent p-[1px]";

    return (
      <ScrollAreaPrimitive.ScrollAreaScrollbar
        ref={ref}
        orientation={orientation}
        className={cn(baseClasses, orientationClasses, className)}
        {...props}
      >
        <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-accent hover:bg-accent/80 transition" />
      </ScrollAreaPrimitive.ScrollAreaScrollbar>
    );
  }
);
ScrollBar.displayName = "ScrollBar";

export { ScrollArea, ScrollBar };
