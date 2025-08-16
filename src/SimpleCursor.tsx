import React, { useEffect } from "react";

const SimpleCursor: React.FC = () => {
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      const cursor = document.querySelector("body::before") as any;
      document.documentElement.style.setProperty(
        "--cursor-x",
        `${e.clientX}px`,
      );
      document.documentElement.style.setProperty(
        "--cursor-y",
        `${e.clientY}px`,
      );
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const inputTarget = target as HTMLInputElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.getAttribute("role") === "button" ||
        (target.tagName === "INPUT" &&
          (inputTarget.type === "submit" || inputTarget.type === "button")) ||
        target.classList.contains("clickable")
      ) {
        document.body.classList.add("cursor-hover");
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      const inputTarget = target as HTMLInputElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.getAttribute("role") === "button" ||
        (target.tagName === "INPUT" &&
          (inputTarget.type === "submit" || inputTarget.type === "button")) ||
        target.classList.contains("clickable")
      ) {
        document.body.classList.remove("cursor-hover");
      }
    };

    const handleMouseDown = () => {
      document.body.classList.add("cursor-click");
    };

    const handleMouseUp = () => {
      document.body.classList.remove("cursor-click");
    };

    // Add event listeners
    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input[type="submit"], input[type="button"], .clickable',
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    // Observer for dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            const inputElement = element as HTMLInputElement;
            if (
              element.tagName === "A" ||
              element.tagName === "BUTTON" ||
              element.getAttribute("role") === "button" ||
              (element.tagName === "INPUT" &&
                (inputElement.type === "submit" ||
                  inputElement.type === "button")) ||
              element.classList.contains("clickable")
            ) {
              element.addEventListener("mouseenter", handleMouseEnter);
              element.addEventListener("mouseleave", handleMouseLeave);
            }

            // Check for nested interactive elements
            const nestedInteractive = element.querySelectorAll(
              'a, button, [role="button"], input[type="submit"], input[type="button"], .clickable',
            );
            nestedInteractive.forEach((nested) => {
              nested.addEventListener("mouseenter", handleMouseEnter);
              nested.addEventListener("mouseleave", handleMouseLeave);
            });
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });

      observer.disconnect();
      document.body.classList.remove("cursor-hover", "cursor-click");
    };
  }, []);

  return null;
};

export default SimpleCursor;
