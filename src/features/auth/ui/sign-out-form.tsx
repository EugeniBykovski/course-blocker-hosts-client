import Button from "@/shared/ui/button";
import React from "react";
import { UseSignOut } from "../model/use-sign-out";

export const SignOutButton = () => {
  const { isLoading, signOut } = UseSignOut();

  return (
    <Button variant="outline" disabled={isLoading} onClick={() => signOut({})}>
      Sign Out
    </Button>
  );
};
