"use client";

import { useWriteContract } from "wagmi";
import { parseUnits } from "viem";
import { BASE_USDC_CONTRACT_ABI } from "../ABIs/BASE_USDC_CONTRACT_ABI";
import { useAccount } from "wagmi";

const BASE_USD_ADDRESS = "0x9c6864105AEC23388C89600046213a44C384c831";
const USDC_DECIMALS = 6;

type UseDepositReturn = {
  deposit: (amount: string) => Promise<`0x${string}` | undefined>;
  isPending: boolean;
  error: Error | null;
};

export const useDepositUSDC = (): UseDepositReturn => {
  const { address } = useAccount();
  const { writeContractAsync, isPending, error } = useWriteContract();

  const deposit = async (
    amount: string
  ): Promise<`0x${string}` | undefined> => {
    if (!address) throw new Error("Wallet not connected");

    const parsedAmount = parseUnits(amount, USDC_DECIMALS);

    return await writeContractAsync({
      address: BASE_USD_ADDRESS,
      abi: BASE_USDC_CONTRACT_ABI,
      functionName: "deposit",
      args: [parsedAmount, address],
    });
  };

  return {
    deposit,
    isPending,
    error: error as Error | null,
  };
};
