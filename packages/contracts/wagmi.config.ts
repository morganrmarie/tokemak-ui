import { defineConfig, Config } from "@wagmi/cli";
import { Abi } from "viem";
import { react } from '@wagmi/cli/plugins'
import WAGMI_MINT_EXAMPLE_ABI from "./abis/WagmiMintExample.json";

const config: Config = {
  out: "index.ts",
  contracts: [
    {
      name: "WagmiMintExample",
      abi: WAGMI_MINT_EXAMPLE_ABI as Abi,
    },
  ],
  plugins: [
    // use this plugin to generate react hooks for the abis
    react(),
  ],
};

export default defineConfig(config) as ReturnType<typeof defineConfig>;
