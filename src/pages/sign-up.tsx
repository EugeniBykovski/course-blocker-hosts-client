import { SignUpForm } from "@/features/auth";
import Header from "@/shared/ui/header";
import UiFormPageLayout from "@/shared/ui/layouts/ui-form-page-layout";
import React from "react";

const SignUpPage = () => {
  return (
    <UiFormPageLayout
      title="Sign Up"
      header={<Header />}
      form={<SignUpForm />}
    />
  );
};

export default SignUpPage;
