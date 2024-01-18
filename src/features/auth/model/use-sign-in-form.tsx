import { authControllerSignIn } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const UseSignInForm = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const signInMutation = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess() {
      router.push(ROUTES.HOME);
    },
  });

  const errorMsg = signInMutation.error ? "Something went wrong!" : undefined;

  return {
    register,
    errorMsg,
    handleSubmit: handleSubmit((data) => signInMutation.mutate(data)),
    isLoading: signInMutation.isPending,
  };
};
