import { getSupabase } from "./supabase";
import { portalConnect } from "./portalconnect";
import type { ContentBlock } from "./types";

function normalizeKey(key: string): string {
  return key
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");
}

function parseLegacySection(section: string): {
  page_key: string;
  section_key: string;
} {
  const delimiters = ["::", ">", "/", "|"];
  for (const d of delimiters) {
    if (section.includes(d)) {
      const parts = section.split(d).map((s) => normalizeKey(s.trim()));
      return {
        page_key: parts[0] || "home",
        section_key: parts[1] || "general",
      };
    }
  }
  return { page_key: normalizeKey(section) || "home", section_key: "general" };
}

export async function getPublishedBlocks(): Promise<ContentBlock[]> {
  const supabase = getSupabase();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("website_content_blocks")
    .select("*")
    .eq("site_id", portalConnect.site_id)
    .eq("is_published", true)
    .order("page_key")
    .order("section_key")
    .order("sort_order")
    .order("created_at");

  if (error) {
    console.warn("[portal-content] Failed to fetch blocks:", error.message);
    return [];
  }

  return (data ?? []).map((row) => {
    let pageKey = row.page_key;
    let sectionKey = row.section_key;

    if (!pageKey || !sectionKey) {
      const parsed = parseLegacySection(row.section ?? "");
      pageKey = pageKey || parsed.page_key;
      sectionKey = sectionKey || parsed.section_key;
    }

    return {
      id: row.id,
      block_key: row.block_key,
      block_type: row.block_type,
      content: row.content ?? "",
      content_json: row.content_json,
      page_key: normalizeKey(pageKey),
      section_key: normalizeKey(sectionKey),
      sort_order: row.sort_order ?? 0,
    };
  });
}

export async function getBlockContent(
  pageKey: string,
  sectionKey: string,
  blockKey: string,
  fallback = ""
): Promise<string> {
  const supabase = getSupabase();
  if (!supabase) return fallback;

  const { data, error } = await supabase
    .from("website_content_blocks")
    .select("content")
    .eq("site_id", portalConnect.site_id)
    .eq("is_published", true)
    .eq("page_key", pageKey)
    .eq("section_key", sectionKey)
    .eq("block_key", blockKey)
    .limit(1)
    .single();

  if (error || !data?.content) {
    if (fallback === "") {
      console.warn(
        `[portal-content] Missing block: ${pageKey}/${sectionKey}/${blockKey}`
      );
    }
    return fallback;
  }

  return data.content;
}

export async function getSectionBlocks(
  pageKey: string,
  sectionKey: string
): Promise<ContentBlock[]> {
  const supabase = getSupabase();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("website_content_blocks")
    .select("*")
    .eq("site_id", portalConnect.site_id)
    .eq("is_published", true)
    .eq("page_key", pageKey)
    .eq("section_key", sectionKey)
    .order("sort_order")
    .order("created_at");

  if (error) {
    console.warn(
      `[portal-content] Failed to fetch section ${pageKey}/${sectionKey}:`,
      error.message
    );
    return [];
  }

  return (data ?? []).map((row) => ({
    id: row.id,
    block_key: row.block_key,
    block_type: row.block_type,
    content: row.content ?? "",
    content_json: row.content_json,
    page_key: pageKey,
    section_key: sectionKey,
    sort_order: row.sort_order ?? 0,
  }));
}
