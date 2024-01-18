import React from "react";
import { UseSignInForm } from "../model/use-sign-in-form";
import TextField from "@/shared/ui/text-field";
import Button from "@/shared/ui/button";
import LinkUI from "@/shared/ui/link";
import { ROUTES } from "@/shared/constants/routes";

export const SignInForm = () => {
  const { register, errorMsg, handleSubmit, isLoading } = UseSignInForm();

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <TextField
        label="Email"
        inputProps={{ type: "email", ...register("email", { required: true }) }}
      />
      <TextField
        label="Password"
        inputProps={{
          type: "password",
          ...register("password", { required: true }),
        }}
      />

      <Button disabled={isLoading} variant="primary">
        Sign In
      </Button>

      <LinkUI className="text-center" href={ROUTES.SIGNUP}>
        Sign Up
      </LinkUI>

      {errorMsg && <div className="text-rose-400">{errorMsg}</div>}
    </form>
  );
};
