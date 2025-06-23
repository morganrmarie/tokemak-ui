"use client";
import { useState } from "react";
import { useUSDCBalance } from "@/hooks/useUSDCBalance";
import { useApproveUSDC } from "@/hooks/useApproveUSDC";
import { useDepositUSDC } from "@/hooks/useDepositUSDC";

export const DepositCard = () => {
  const { balance, isLoading, isConnected } = useUSDCBalance();
  const { approve } = useApproveUSDC();
  const [approveBalance, setApproveBalance] = useState("0");
  const { deposit, error } = useDepositUSDC();

  const handleApprove = async () => {
    try {
      await approve(approveBalance.toString());
      console.log("Approved!");
    } catch (err) {
      console.error("Approval failed:", err);
    }
  };

  const handleDeposit = async () => {
    try {
      await deposit(approveBalance);
      console.log("Deposit successful!");
    } catch (err) {
      console.error("Deposit failed", err);
    }
  };

  return (
    <div className="border border-[#2e2e2e] p-4 w-full bg-black text-white space-y-4">
      <p className="text-sm text-white">You’re depositing into autoUSDC</p>
      <input
        type="number"
        inputMode="decimal"
        placeholder="0.00"
        onChange={(e) => setApproveBalance(e.target.value)}
        className="bg-[#2e2e2e] text-2xl font-medium text-white px-4 py-2  tracking-widest w-full placeholder-[#EBEBF599] focus:outline-none"
      />
      <div className="flex items-center gap-3">
        <img
          src="/logos/usdc.svg"
          alt="USDC"
          className="w-8 h-8 rounded-full"
        />
        <div>
          <p className="text-sm font-bold text-white">USDC</p>
          {!isConnected ? (
            <p className="text-sm text-gray-400">
              Connect wallet to view balance
            </p>
          ) : isLoading ? (
            <p className="text-sm text-gray-400">Loading...</p>
          ) : (
            <p className="text-sm text-gray-400">
              Balance: {Number(balance).toFixed(2)}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          className="bg-[#B5FF00] text-black font-semibold text-sm tracking-[0.5px] py-2 cursor-pointer"
          onClick={handleApprove}
        >
          APPROVE
        </button>
        <button
          className="bg-[#B5FF00] text-black font-semibold text-sm tracking-[0.5px] py-2 cursor-pointer"
          onClick={handleDeposit}
        >
          DEPOSIT
        </button>
      </div>

      <div className="flex justify-between text-sm text-gray-400">
        <span>Your autoUSDC balance</span>
        <span className="text-white">0.00</span>
      </div>
    </div>
  );
};
