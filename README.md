# evm-ui monorepo template

> **Note:** This template is a fork of the [shadcn/ui monorepo template](https://github.com/shadcn-ui/ui/tree/main/templates/monorepo-next).

This is a solid template to build a modern Ethereum/EVM UI that interacts with the blockchain. It provides a robust foundation for developing dApps with cutting-edge UI components, streamlined wallet integrations, and efficient blockchain communication. Whether you're building a DeFi app, NFT project, or any blockchain-powered application, this template gives you the essential building blocks to get started quickly.

## Usage

```bash
pnpm dlx evm-ui@latest init
```

## Adding components

To add components to your app, run the following command at the root of your `interface` app:

```bash
pnpm dlx shadcn@latest add button
```

This will place the UI components in the `packages/ui/src/components` directory.

## Included Packages

- **wagmi**  
  A React Hooks library for Ethereum, wagmi simplifies wallet connections and blockchain interactions.

- **rainbowkit**  
  RainbowKit is a React library that provides a streamlined and customizable way to connect crypto wallets to your dApp, ensuring a smooth user experience.

- **viem**  
  Viem offers low-level, stateless TypeScript primitives for interacting with the Ethereum blockchain, enabling efficient contract interactions and data fetching.

- **@tanstack/react-query**  
  TanStack Query is an async state manager that handles server state, caching, and background updates, improving data fetching and synchronization across your app.

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button"
```

## Adding new ABIs

When adding a new ABI, follow these steps:
1. Drop the new ABI JSON file into the `packages/contracts/abis` folder.
2. Within the `packages/contracts` directory, run:
   
   ```bash
   pnpm generate
   ```
   
   (Use your package manager's equivalent command if not using pnpm.)

---

This template packs in everything you need for building a robust and scalable Ethereum interface, from integrated wallet connection libraries to efficient blockchain communication tools. It’s built to help you focus on developing unique features for your dApp, while handling the heavy lifting of blockchain interactions and state management for you.