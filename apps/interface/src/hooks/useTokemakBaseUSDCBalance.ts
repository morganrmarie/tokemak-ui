"use client";

import { BASE_USDC_ABI } from "../ABIs/BASE_USDC_ABI";
import { useAccount, useReadContract } from "wagmi";
import { formatUnits } from "viem";

const TOKEMAK_USDC_ADDRESS = "0x9c6864105AEC23388C89600046213a44C384c831";

export const useTokemakBaseUSDCBalance = () => {
  const { address, isConnected } = useAccount();
  const { data, error, isPending } = useReadContract({
    address: TOKEMAK_USDC_ADDRESS,
    abi: BASE_USDC_ABI,
    functionName: "balanceOf",
    args: [address],
  });

  console.log(data);
  const formatted = data ? formatUnits(data as bigint, 18) : "0.00";

  return {
    balance: formatted,
    isConnected,
    isLoading: isPending,
    isError: !!error,
  };
};
