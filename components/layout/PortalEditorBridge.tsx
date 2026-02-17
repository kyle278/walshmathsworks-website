"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function PortalEditorBridge() {
  const searchParams = useSearchParams();
  const isEditor = searchParams.get("portal_editor") === "1";

  useEffect(() => {
    if (!isEditor) return;
    window.parent.postMessage(
      { type: "portal-content-editor-ready" },
      "*"
    );
  }, [isEditor]);

  return null;
}
