import { useResetSession } from "@/entities/session";
import { authControllerSignOut } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const UseSignOut = () => {
  const resetSession = useResetSession();
  const router = useRouter();

  const signOutMutation = useMutation({
    mutationFn: authControllerSignOut,
    async onSuccess() {
      router.push(ROUTES.HOME);
      resetSession();
    },
  });

  return {
    signOut: signOutMutation.mutate,
    isLoading: signOutMutation.isPending,
  };
};
