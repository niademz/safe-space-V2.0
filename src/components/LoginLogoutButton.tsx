"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { supabaseClient } from "../../utils/supabase/client";
//import { signout } from "@/lib/auth-actions";

const LoginButton = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const supabase = supabaseClient();
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, [supabase.auth]);
  if (user) {
    return (
      <form action="/auth/signout" method="post">
          <Button variant="outline" type="submit">
            Logout
          </Button>
        </form>
    );
  }
  return (
    <Button
      variant="outline"
      onClick={() => {
        router.push("/login");
      }}
    >
      Login
    </Button>
  );
};

export default LoginButton;
