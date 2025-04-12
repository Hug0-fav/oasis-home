import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://urblmkyayxtkxcuzylxr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyYmxta3lheXh0a3hjdXp5bHhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczODM4NzQsImV4cCI6MjA1Mjk1OTg3NH0.Ss_geXSFfwY8lci5fpzMvPeun75RCksh7bw-3cIySBk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
