import { useCallback } from 'react';

import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';

import { getMintAddress } from '../../spl-token-helpers/getMintAddress';
import {
  getAssociatedTokenAccount,
  getOrCreateAssociatedTokenAccount,
} from '../../spl-token-helpers/getOrCreateAssociatedTokenAccount';
import { transferTokens } from '../../spl-token-helpers/transferTokens';
import idl from '../../../idl.json';

const programId = new PublicKey(idl.metadata.address);

export const useStartInvesting = () => {
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();

  const checkTokenValidity = useCallback(
    async ({ token, token_amount }, setErrors) => {
      const mintAddress = getMintAddress(token);

      if (mintAddress && publicKey && signTransaction) {
        const account = await getAssociatedTokenAccount(
          connection,
          new PublicKey(mintAddress),
          publicKey,
        );

        if (account) {
          // check wallet balance
          let { value } = await connection.getTokenAccountBalance(
            account.address,
          );

          const hasSufficientFund = (value.uiAmount || 0) >= token_amount;

          if (hasSufficientFund) {
            return account;
          } else {
            setErrors({
              ['token_amount']: 'Insufficient token balance',
            });
          }
        }
        setErrors({
          ['token_amount']: 'Insufficient token balance',
        });
        // show notification
      }
    },
    [connection, publicKey, signTransaction],
  );

  const getOrCreateTokenAccount = useCallback(
    async (token) => {
      const mintAddress = getMintAddress(token);

      if (mintAddress && publicKey && signTransaction) {
        const account = await getOrCreateAssociatedTokenAccount(
          connection,
          publicKey,
          new PublicKey(mintAddress),
          programId,
          signTransaction,
        );

        return account;
      }
    },
    [connection, publicKey, signTransaction],
  );

  const executeTokenTransfer = useCallback(
    async (fromTokenAccount, toTokenAccount, amount) => {
      if (publicKey && signTransaction) {
        await transferTokens(
          connection,
          fromTokenAccount.address,
          toTokenAccount.address,
          publicKey,
          BigInt(amount * 1e6),
          signTransaction,
        );
      }
    },
    [connection, publicKey, signTransaction],
  );

  return {
    checkTokenValidity,
    getOrCreateTokenAccount,
    executeTokenTransfer,
  };
};
