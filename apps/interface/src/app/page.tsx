import { Metadata } from "next";

import { PoolInfo } from "@/components/PoolInfo";
import { PoolStats } from "@/components/PoolStats";
import { TokenList } from "@/components/TokenList";
import { DepositCard } from "@/components/DepositCard";

export const metadata: Metadata = {
  title: "evm-ui",
  description: "evm-ui",
};

export default function Page() {
  return (
    <div className="flex justify-center mt-6">
      <div className="w-full max-w-md px-4 space-y-4">
        <div className="p-2 max-w-md space-y-4">
          <PoolInfo />
          <TokenList />
          <PoolStats />
          <DepositCard />
        </div>
      </div>
    </div>
  );
}
