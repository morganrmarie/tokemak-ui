export const PoolStats = () => {
  return (
    <div className="border border-[#2e2e2e] p-4 space-y-6">
      <div>
        <h3 className="text-sm text-white mb-1">APR</h3>
        <p className="text-4xl font-bold text-white">14.35%</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm text-[#EBEBF599] font-semibold tracking-[0.5px] uppercase mb-1">
            TVL
          </h4>
          <p className="text-lg text-white">$102.30M</p>
          <p className="text-sm text-[#636366]">4563.00 ETH</p>
        </div>
        <div>
          <h4 className="text-sm text-[#EBEBF599] font-semibold tracking-[0.5px] uppercase mb-1">
            Daily Earnings
          </h4>
          <p className="text-lg text-white">$102.30M</p>
          <p className="text-sm text-[#636366]">4563.00 ETH</p>
        </div>
      </div>
    </div>
  );
};
