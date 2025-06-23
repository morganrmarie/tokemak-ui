"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const WalletButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openConnectModal,
        openChainModal,
        openAccountModal,
        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div className={`${!ready ? "opacity-0 pointer-events-auto" : ""}`}>
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    className="px-4 py-2 text-sm font-sans w-[118px] h-[32px]s bg-[#B5FF00] font-bold text-black"
                  >
                    Connect
                  </button>
                );
              }

              return (
                <button
                  onClick={openAccountModal}
                  className="px-4 py-2 text-sm font-sans w-[118px] h-[32px]s bg-[#B5FF00] font-bold text-black"
                >
                  {account.displayName}
                </button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
