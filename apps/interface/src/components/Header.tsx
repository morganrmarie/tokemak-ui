import React from "react";
import { WalletButton } from "./CustomConnectButton";
// import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Header = () => {
  return (
    <header className="relative z-10">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img
            src="/logos/tokemak.svg"
            alt="Tokemak Logo"
            className="w-[23px]"
          />
        </div>
        <WalletButton />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#B5FF00] to-[#75757580]" />
    </header>
  );
};
