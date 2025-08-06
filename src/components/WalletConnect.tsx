'use client'

import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useBalance } from 'wagmi'

export default function WalletConnect() {
  const { open } = useWeb3Modal()
  const { address, isConnected } = useAccount()
  const { data: balance } = useBalance({
    address: address,
  })

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-2xl font-bold mb-4">Wallet Connection Demo</h1>
      
      {!isConnected ? (
        <div className="text-center">
          <p className="mb-4 text-gray-600">Connect your wallet to get started</p>
          <button
            onClick={() => open()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Connect Wallet
          </button>
        </div>
      ) : (
        <div className="text-center">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            <p className="font-bold">✅ Wallet Connected!</p>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-600 mb-2">Address:</p>
            <p className="font-mono text-sm break-all">{address}</p>
          </div>
          
          {balance && (
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-2">Balance:</p>
              <p className="font-bold text-lg">
                {parseFloat(balance.formatted).toFixed(4)} {balance.symbol}
              </p>
            </div>
          )}
          
          <button
            onClick={() => open()}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Manage Wallet
          </button>
        </div>
      )}
    </div>
  )
}
