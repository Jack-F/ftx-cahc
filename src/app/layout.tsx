import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { Footer } from "@/app/_components/footer";

import { ClerkProvider } from "@clerk/nextjs";
import { Clerk } from "@clerk/nextjs/server";
import { dark } from "@clerk/themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "FTX Customer Ad-Hoc Committee",
  description:
    "Ad-hoc committee fighting for better recovery for FTX customers",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={`font-sans ${inter.variable}`}>
          <TRPCReactProvider>{children}</TRPCReactProvider>
          <div>
            <Footer />
          </div>
          <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  );
}
