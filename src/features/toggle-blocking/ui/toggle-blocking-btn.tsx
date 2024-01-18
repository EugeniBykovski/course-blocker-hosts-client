import Button from "@/shared/ui/button";
import { useToggleBlocking } from "../model/use-toggle-blocking";

export const ToggleBlockingButton = () => {
  const { isBlockingEnabled, isLoading, isReady, toggleBlocking } =
    useToggleBlocking();
  if (!isReady) return null;

  return (
    <Button
      variant={!isBlockingEnabled ? "primary" : "secondary"}
      disabled={isLoading}
      onClick={toggleBlocking}
    >
      {isBlockingEnabled ? "Disable" : "Enable"}
    </Button>
  );
};
