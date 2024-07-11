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

  const handleLogout = async () => {
    try {
      const response = await fetch('/auth/signout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        window.location.href = '/login'; // Redirect to the home page or any other page
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  if (user) {
    return (
      
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        
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
