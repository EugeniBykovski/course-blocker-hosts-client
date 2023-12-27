import { SignInForm } from "@/features/auth";
import Header from "@/shared/ui/header";
import UiFormPageLayout from "@/shared/ui/layouts/ui-form-page-layout";
import React from "react";

const SignInPage = () => {
  return (
    <UiFormPageLayout
      title="Sign In"
      header={<Header />}
      form={<SignInForm />}
    />
  );
};

export default SignInPage;
