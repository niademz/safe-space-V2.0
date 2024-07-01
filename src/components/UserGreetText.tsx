"use client";
import { supabaseClient } from "../../utils/supabase/client";
import React, { useEffect, useState } from "react";

const UserGreetText = () => {
  const [user, setUser] = useState<any>(null);
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
    if (user !== null) {
      return (
        <>
        </>
      );
    }
  return (
    <>
    </>
  );
};

export default UserGreetText;