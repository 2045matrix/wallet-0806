'use client'

import { wagmiConfig, queryClient } from "../lib/wagmi";
import { WagmiProvider } from 'wagmi'
import { QueryClientProvider } from '@tanstack/react-query'

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
