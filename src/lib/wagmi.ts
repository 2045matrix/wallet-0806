import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { mainnet, arbitrum, polygon } from 'wagmi/chains'
import { QueryClient } from '@tanstack/react-query'

// 1. Get projectId from https://cloud.reown.com
const projectId = '1745f8e2af1c1de2bde07e0e1e7a4278'

// 2. Create wagmiConfig
const metadata = {
  name: 'Wallet Connect Demo',
  description: 'Simple wallet connection demo',
  url: 'http://localhost:3000',
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

const chains = [mainnet, arbitrum, polygon] as const

export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})

// 3. Set up React Query
export const queryClient = new QueryClient()

// 4. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  enableAnalytics: true,
})
