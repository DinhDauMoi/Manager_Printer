import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fvcdxosctfotcrstkphk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2Y2R4b3NjdGZvdGNyc3RrcGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1NDQxNjgsImV4cCI6MjA1MTEyMDE2OH0.owOSQnm3o8qsDRqHr9nzkXMbmQr-jsg3honcMcGqiso";
export const supabase = createClient(supabaseUrl, supabaseKey);