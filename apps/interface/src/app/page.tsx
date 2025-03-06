import { MintButton } from "@/components/MintButton"
import { ConnectButton } from "@rainbow-me/rainbowkit"

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <ConnectButton />
        <MintButton />
      </div>
    </div>
  )
}
