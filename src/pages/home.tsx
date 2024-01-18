import React from "react";
import Header from "@/shared/ui/header";
import { Profile } from "@/widgets/profile";
import { ToggleBlockingButton } from "@/features/toggle-blocking";
import { AddBlockItemForm, BlockList } from "@/features/block-list";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header right={<Profile />} />

      <div className="grid grid-cols-[200px_1fr]">
        <aside className="px-5">
          <ToggleBlockingButton />
        </aside>

        <main className="pt-10 px-5">
          <h1>Block Lists:</h1>
          <AddBlockItemForm />
          <BlockList className="mt-3" />
        </main>
      </div>
    </div>
  );
}
