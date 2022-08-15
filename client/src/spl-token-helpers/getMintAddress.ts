import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { NATIVE_MINT } from '@solana/spl-token';

const { Mainnet } = WalletAdapterNetwork;

const DEVNET_MINT_ADDRESS = {
  usdc: 'Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr',
  usdt: 'EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS', // synthetic btc
  eth: 'Ff5JqsAYUD4vAfQUtfRprT4nXu9e28tTBZTDFMnJNdvd',
  ftt: '86opZkLhi6V7B5oVgBT1yGvXdKzi6MfTs65M3gHeha4p',
  btc: 'BwhbNiZRwTKB7rz6n95SUQcMwkFYbb9cx2h6FPDHstwU',
  chainlink: 'Bwxtq3dx3PiH9t5wKuDPwVNpYoUXSiZyEGkbD7iNGMe',
  sol: NATIVE_MINT.toBase58(),
};

const MAINNET_MINT_ADDRESS = {
  usdc: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
  usdt: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB', // wrapped btc sollet
};

export const getMintAddress = (token) => {
  const MINT_ADDRESS_MAP =
    process.env.NEXT_PUBLIC_ENV === Mainnet
      ? MAINNET_MINT_ADDRESS
      : DEVNET_MINT_ADDRESS;

  const mintAddress = MINT_ADDRESS_MAP[token];

  return mintAddress;
};
