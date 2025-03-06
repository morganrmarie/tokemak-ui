import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WagmiMintExample
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const wagmiMintExampleAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wagmiMintExampleAbi}__
 */
export const useReadWagmiMintExample = /*#__PURE__*/ createUseReadContract({
  abi: wagmiMintExampleAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wagmiMintExampleAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadWagmiMintExampleBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: wagmiMintExampleAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wagmiMintExampleAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadWagmiMintExampleGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: wagmiMintExampleAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wagmiMintExampleAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadWagmiMintExampleIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: wagmiMintExampleAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wagmiMintExampleAbi}__ and `functionName` set to `"name"`
 */
export const useReadWagmiMintExampleName = /*#__PURE__*/ createUseReadContract({
  abi: wagmiMintExampleAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wagmiMintExampleAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadWagmiMintExampleOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: wagmiMintExampleAbi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wagmiMintExampleAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadWagmiMintExampleSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: wagmiMintExampleAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wagmiMintExampleAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadWagmiMintExampleSymbol =
  /*#__PURE__*/ createUseReadContract({
    abi: wagmiMintExampleAbi,
    functionName: 'symbol',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wagmiMintExampleAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadWagmiMintExampleTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: wagmiMintExampleAbi,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wagmiMintExampleAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadWagmiMintExampleTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: wagmiMintExampleAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wagmiMintExampleAbi}__
 */
export const useWriteWagmiMintExample = /*#__PURE__*/ createUseWriteContract({
  abi: wagmiMintExampleAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wagmiMintExampleAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteWagmiMintExampleApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: wagmiMintExampleAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wagmiMintExampleAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteWagmiMintExampleMint =
  /*#__PURE__*/ createUseWriteContract({
    abi: wagmiMintExampleAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wagmiMintExampleAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteWagmiMintExampleSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: wagmiMintExampleAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wagmiMintExampleAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteWagmiMintExampleSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: wagmiMintExampleAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wagmiMintExampleAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteWagmiMintExampleTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: wagmiMintExampleAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wagmiMintExampleAbi}__
 */
export const useSimulateWagmiMintExample =
  /*#__PURE__*/ createUseSimulateContract({ abi: wagmiMintExampleAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wagmiMintExampleAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateWagmiMintExampleApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wagmiMintExampleAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wagmiMintExampleAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateWagmiMintExampleMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wagmiMintExampleAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wagmiMintExampleAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateWagmiMintExampleSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wagmiMintExampleAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wagmiMintExampleAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateWagmiMintExampleSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wagmiMintExampleAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wagmiMintExampleAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateWagmiMintExampleTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wagmiMintExampleAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wagmiMintExampleAbi}__
 */
export const useWatchWagmiMintExampleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: wagmiMintExampleAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wagmiMintExampleAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchWagmiMintExampleApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wagmiMintExampleAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wagmiMintExampleAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchWagmiMintExampleApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wagmiMintExampleAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wagmiMintExampleAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchWagmiMintExampleTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wagmiMintExampleAbi,
    eventName: 'Transfer',
  })
