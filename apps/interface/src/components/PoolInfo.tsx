"use client";
import React from "react";

export const PoolInfo = () => {
  return (
    <div className="flex flex-col space-y-2 bg-black rounded-lg max-w-md">
      <div className="flex items-center gap-3">
        <img
          src="/logos/usdc.svg"
          alt="baseUSD"
          className="w-[32px] h-[32px] rounded-full"
        />
        <h2 className="text-white text-xl font-bold">baseUSD</h2>
      </div>
      <p className="text-[#757575] text-sm leading-snug">
        ETH LSTs on Ethereum deployed across integrated DEXs.
      </p>
    </div>
  );
};
