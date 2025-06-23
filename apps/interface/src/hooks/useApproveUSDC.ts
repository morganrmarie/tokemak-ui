import { useWriteContract } from "wagmi";
import { parseUnits } from "viem";

import { BASE_USDC_ABI } from "../ABIs/BASE_USDC_ABI";

const USDC_ADDRESS = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"; // USDC on Base
const BASE_USD_ADDRESS = "0x9c6864105AEC23388C89600046213a44C384c831"; // <-- replace with real address

export function useApproveUSDC() {
  const { writeContractAsync, isPending } = useWriteContract();

  const approve = async (amount: string) => {
    const value = parseUnits(amount, 6);

    await writeContractAsync({
      address: USDC_ADDRESS,
      abi: BASE_USDC_ABI,
      functionName: "approve",
      args: [BASE_USD_ADDRESS, value],
    });
  };

  return { approve, isPending };
}
