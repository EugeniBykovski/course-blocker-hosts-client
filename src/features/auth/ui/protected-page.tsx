import { useSessionQuery } from "@/entities/session";
import { ROUTES } from "@/shared/constants/routes";
import PageSpinner from "@/shared/ui/page-spinner";
import { useRouter } from "next/router";
import { PropsWithChildren, ReactElement } from "react";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter();
    const { isError, isLoading } = useSessionQuery();

    if (isLoading) return <PageSpinner />;
    if (isError) router.replace(ROUTES.SIGNIN);

    return <Component {...props} />;
  };
}
