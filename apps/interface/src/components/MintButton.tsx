'use client'

import { useWriteWagmiMintExampleMint } from "@workspace/contracts";
import { Button } from "@workspace/ui/components/button";

export const MintButton = () => {
  const { writeContract: mint } = useWriteWagmiMintExampleMint();
  return <Button onClick={() => mint({address: "0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2"})}>Mint</Button>;
};
