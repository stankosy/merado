import {
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { SignerWalletAdapterProps } from '@solana/wallet-adapter-base';
import {
  Connection,
  PublicKey,
  Commitment,
  Transaction,
} from '@solana/web3.js';
import { createAssociatedTokenAccountInstruction } from './createAssociatedTokenAccountInstruction';
import { getAccountInfo } from './getAccountInfo';
import { getAssociatedTokenAddress } from './getAssociatedTokenAddress';

export const getAssociatedTokenAccount = async (
  connection: Connection,
  mint: PublicKey,
  owner: PublicKey,
  allowOwnerOffCurve = false,
  commitment?: Commitment,
  programId = TOKEN_PROGRAM_ID,
  associatedTokenProgramId = ASSOCIATED_TOKEN_PROGRAM_ID,
) => {
  const associatedToken = await getAssociatedTokenAddress(
    mint,
    owner,
    allowOwnerOffCurve,
    programId,
    associatedTokenProgramId,
  );

  // This is the optimal logic, considering TX fee, client-side computation, RPC roundtrips and guaranteed idempotent.
  // Sadly we can't do this atomically.
  let account;
  try {
    account = await getAccountInfo(
      connection,
      associatedToken,
      commitment,
      programId,
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: unknown) {
    console.log('Failed to get associated token account');

    throw new Error('Failed to get associated token account');
  }

  return account;
};

export const createAssociatedTokenAccount = async (
  connection: Connection,
  payer: PublicKey,
  mint: PublicKey,
  owner: PublicKey,
  signTransaction: SignerWalletAdapterProps['signTransaction'],
  allowOwnerOffCurve = false,
  commitment?: Commitment,
  programId = TOKEN_PROGRAM_ID,
  associatedTokenProgramId = ASSOCIATED_TOKEN_PROGRAM_ID,
) => {
  let account;

  const associatedToken = await getAssociatedTokenAddress(
    mint,
    owner,
    allowOwnerOffCurve,
    programId,
    associatedTokenProgramId,
  );

  try {
    const transaction = new Transaction().add(
      createAssociatedTokenAccountInstruction(
        payer,
        associatedToken,
        owner,
        mint,
        programId,
        associatedTokenProgramId,
      ),
    );

    const blockHash = await connection.getRecentBlockhash();
    transaction.feePayer = await payer;
    transaction.recentBlockhash = await blockHash.blockhash;
    const signed = await signTransaction(transaction);

    const signature = await connection.sendRawTransaction(signed.serialize());

    await connection.confirmTransaction(signature);

    account = await getAccountInfo(
      connection,
      associatedToken,
      commitment,
      programId,
    );
  } catch (error: unknown) {
    console.log('Failed to create associated token account');

    throw new Error('Failed to create associated token account');
    // Ignore all errors; for now there is no API-compatible way to selectively ignore the expected
    // instruction error if the associated account exists already.
  }

  return account;
};

export async function getOrCreateAssociatedTokenAccount(
  connection: Connection,
  payer: PublicKey,
  mint: PublicKey,
  owner: PublicKey,
  signTransaction: SignerWalletAdapterProps['signTransaction'],
  allowOwnerOffCurve = false,
  commitment?: Commitment,
  programId = TOKEN_PROGRAM_ID,
  associatedTokenProgramId = ASSOCIATED_TOKEN_PROGRAM_ID,
) {
  let account = await getAssociatedTokenAccount(
    connection,
    mint,
    owner,
    allowOwnerOffCurve,
    commitment,
    programId,
    associatedTokenProgramId,
  );

  if (!account) {
    account = createAssociatedTokenAccount(
      connection,
      payer,
      mint,
      owner,
      signTransaction,
      allowOwnerOffCurve,
      commitment,
      programId,
      associatedTokenProgramId,
    );
  }

  return account;
}
