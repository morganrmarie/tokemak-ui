"use client";
import React, { useEffect, useState } from "react";

type Token = {
  symbol: string;
  logoURI: string;
};
export const TokenList = () => {
  const [tokens, setTokens] = useState<Token[]>([]);

  useEffect(() => {
    fetch("https://token-imgs.tokemaklabs.com/lists/all.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTokens(data.tokens.slice(0, 5));
      })
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div>
      <h2 className="text-sm font-medium text-[#EBEBF599] mb-2 tracking-wide uppercase">
        TOKENS
      </h2>
      <div className="flex items-center gap-2 flex-wrap">
        {tokens.map((token) => (
          <img
            src={token.logoURI}
            alt={token.symbol}
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
            }}
          />
        ))}
      </div>
    </div>
  );
};
