import { createClient } from "@supabase/supabase-js";

// Claves directamente incluidas (No recomendado para producción)
const supabaseUrl = "https://nbfzjvvcojaartnvermn.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5iZnpqdnZjb2phYXJ0bnZlcm1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4MTA2ODksImV4cCI6MjA0ODM4NjY4OX0.nU3gcvqgKz04LBsWuEiDDpGKVrdK8pvpJ_617ZMH7ks";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
