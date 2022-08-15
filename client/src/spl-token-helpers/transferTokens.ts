import { createTransferInstruction, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { Connection, PublicKey, Transaction } from '@solana/web3.js';

export const transferTokens = async (
  connection: Connection,
  fromTokenAccount: PublicKey,
  toTokenAccount: PublicKey,
  publicKey: PublicKey, // user wallet public key
  amount: number | bigint,
  signTransaction: (transaction: Transaction) => Promise<Transaction>,
) => {
  try {
    const transaction = new Transaction().add(
      createTransferInstruction(
        fromTokenAccount,
        toTokenAccount,
        publicKey, // owner of the source account, user wallet
        amount,
        [],
        TOKEN_PROGRAM_ID,
      ),
    );

    const blockHash = await connection.getRecentBlockhash();

    transaction.feePayer = await publicKey;
    transaction.recentBlockhash = await blockHash.blockhash;

    const signed = await signTransaction(transaction);

    console.log(`Transferring ${amount} USDC to ${toTokenAccount.toBase58()}`);

    const response = await connection.sendRawTransaction(signed.serialize());

    console.log({ response });

    return response;
  } catch (e) {
    console.error('Error transferring tokens: ', e);
    throw new Error('Error transferring tokens');
  }
};
