import { getSupabase } from "./supabase";
import { portalConnect } from "./portalconnect";
import type { FormSubmissionPayload } from "./types";

export async function getFormBySlug(slug: string) {
  const supabase = getSupabase();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("website_forms")
    .select("*")
    .eq("site_id", portalConnect.site_id)
    .eq("is_active", true)
    .eq("slug", slug)
    .limit(1)
    .single();

  if (error) {
    console.warn(`[portal-forms] Failed to fetch form "${slug}":`, error.message);
    return null;
  }

  return data;
}

function getUTMParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ]) {
    const val = params.get(key);
    if (val) utm[key] = val;
  }
  return utm;
}

export async function submitForm(
  formId: string,
  formSlug: string,
  data: Record<string, string>
): Promise<{ success: boolean; error?: string }> {
  const supabase = getSupabase();
  if (!supabase) {
    return { success: false, error: "Portal not configured" };
  }

  const utmParams = getUTMParams();

  const payload: FormSubmissionPayload = {
    account_id: portalConnect.account_id,
    site_id: portalConnect.site_id,
    form_id: formId,
    data,
    source_url: typeof window !== "undefined" ? window.location.href : "",
    metadata: {
      ...utmParams,
      referrer:
        typeof document !== "undefined" ? document.referrer : "",
      landing_url:
        typeof window !== "undefined" ? window.location.href : "",
      form_slug: formSlug,
      submitted_at: new Date().toISOString(),
      user_agent:
        typeof navigator !== "undefined" ? navigator.userAgent : "",
    },
  };

  const { error } = await supabase
    .from("website_form_submissions")
    .insert(payload);

  if (error) {
    console.error("[portal-forms] Submission failed:", error.message);
    return { success: false, error: error.message };
  }

  return { success: true };
}
