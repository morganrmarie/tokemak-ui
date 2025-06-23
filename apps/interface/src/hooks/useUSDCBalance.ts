"use client";

import { BASE_USDC_ABI } from "../ABIs/BASE_USDC_ABI";
import { useAccount, useReadContract } from "wagmi";
import { formatUnits } from "viem";

const USDC_ADDRESS = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
const USDC_DECIMALS = 6;

export const useUSDCBalance = () => {
  const { address, isConnected } = useAccount();
  const { data, error, isPending } = useReadContract({
    address: USDC_ADDRESS,
    abi: BASE_USDC_ABI,
    functionName: "balanceOf",
    args: [address],
  });

  console.log(data);
  const formatted = data ? formatUnits(data as bigint, USDC_DECIMALS) : "0.00";

  return {
    balance: formatted,
    isConnected,
    isLoading: isPending,
    isError: !!error,
  };
};
