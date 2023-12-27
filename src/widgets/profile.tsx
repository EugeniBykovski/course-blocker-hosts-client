import { SignOutButton } from "@/features/auth";

export function Profile() {
  return (
    <div className="flex gap-2 items-center">
      email user
      <SignOutButton />
    </div>
  );
}
