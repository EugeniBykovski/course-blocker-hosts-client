import Header from "@/shared/ui/header";
import { Profile } from "@/widgets/profile";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header right={<Profile />} />

      <div className="grid grid-cols-[200px_1fr]">
        <aside className="px-5">aside</aside>
        <main>block list</main>
      </div>
    </div>
  );
}
