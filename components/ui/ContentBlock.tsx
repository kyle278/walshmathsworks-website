"use client";

import { useEffect, useState } from "react";
import { getBlockContent } from "@/lib/portal-content";

type ContentBlockProps = {
  pageKey: string;
  sectionKey: string;
  blockKey: string;
  fallback: string;
  as?: keyof HTMLElementTagNameMap;
  className?: string;
};

export default function ContentBlock({
  pageKey,
  sectionKey,
  blockKey,
  fallback,
  as: Tag = "span",
  className,
}: ContentBlockProps) {
  const [content, setContent] = useState(fallback);

  useEffect(() => {
    let cancelled = false;
    getBlockContent(pageKey, sectionKey, blockKey, fallback).then((text) => {
      if (!cancelled) setContent(text);
    });
    return () => {
      cancelled = true;
    };
  }, [pageKey, sectionKey, blockKey, fallback]);

  const isEditorMode =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("portal_editor") === "1";

  const handleClick = () => {
    if (!isEditorMode) return;
    window.parent.postMessage(
      {
        type: "portal-content-block-selected",
        blockKey,
        pageKey,
        sectionKey,
      },
      "*"
    );
  };

  const Component = Tag as React.ElementType;

  return (
    <Component
      className={className}
      data-content-block-key={blockKey}
      data-page-key={pageKey}
      data-section-key={sectionKey}
      onClick={isEditorMode ? handleClick : undefined}
      style={isEditorMode ? { cursor: "pointer", outline: "1px dashed #00843D" } : undefined}
    >
      {content}
    </Component>
  );
}
