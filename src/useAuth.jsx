import { useState, useEffect } from "react";
import { supabase } from "./api";

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession();

    setUser(session?.user);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return { user };
};

export default useAuth;
