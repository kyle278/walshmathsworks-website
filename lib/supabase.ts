import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { portalConnect } from "./portalconnect";

let _client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (_client) return _client;

  const url = portalConnect.supabaseUrl;
  const key = portalConnect.supabaseAnonKey;

  if (!url || !key || url === "undefined" || key === "undefined") {
    return null;
  }

  _client = createClient(url, key);
  return _client;
}
