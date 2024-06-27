"use client";
import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/lib/auth-actions";
import React from "react";
import Image from "next/image";

const SignInWithGoogleButton = () => {
  return (
    <Button
      type="button"
      variant="outline"
      className="w-full"
      onClick={() => {
        signInWithGoogle();
      }}
    >
      <Image 
      src= "https://authjs.dev/img/providers/google.svg"
      alt="google_logo"
      height={24}
      width={24}
      />
      Login with Google
    </Button>
  );
};

export default SignInWithGoogleButton;
