import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://uihixprgqxqpqovzuzpc.supabase.co";
const supabasePublicKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpaGl4cHJncXhxcHFvdnp1enBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwNzYzMzgsImV4cCI6MjAwMzY1MjMzOH0.LqanYqjwFDdQMSndjOSPOsfBHs2_FpqsoQE26kdxy58"

const supabase = createClient(supabaseUrl, supabasePublicKey);

export { supabase };