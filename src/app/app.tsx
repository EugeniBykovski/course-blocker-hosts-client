import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import { AppProvider } from "./app-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Course Blocker Host",
  description: "Course Blocker Host",
  icons: "/logo.svg",
};

export function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </AppProvider>
  );
}
