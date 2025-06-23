"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mainnet } from "viem/chains";
import "@rainbow-me/rainbowkit/styles.css";
import { darkTheme } from "@rainbow-me/rainbowkit";
import { base } from "wagmi/chains"; //

const config = getDefaultConfig({
  appName: "evm-ui",
  projectId: `518acf19860597383b699856fefb51f2`, // To get a project ID, go to https://cloud.reown.com/
  chains: [base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            theme={darkTheme({
              accentColor: "#B5FF00",
              accentColorForeground: "black",
              borderRadius: "none",
              overlayBlur: "small",
              fontStack: "system",
            })}
          >
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </NextThemesProvider>
  );
}
