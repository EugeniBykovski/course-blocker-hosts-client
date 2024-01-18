import { authControllerSignUp } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const UseSignUpForm = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess() {
      router.push(ROUTES.HOME);
    },
  });

  const errorMsg = signUpMutation.error ? "Something went wrong!" : undefined;

  return {
    register,
    errorMsg,
    handleSubmit: handleSubmit((data) => signUpMutation.mutate(data)),
    isLoading: signUpMutation.isPending,
  };
};
