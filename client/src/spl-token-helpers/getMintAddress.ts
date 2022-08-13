import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

const { Devnet, Mainnet } = WalletAdapterNetwork;

const DEVNET_MINT_ADDRESS = {
  usdc: '4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU',
  usdt: 'EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS', // synthetic btc
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
