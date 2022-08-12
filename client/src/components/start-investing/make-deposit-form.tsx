import { useWallet } from '@solana/wallet-adapter-react';
import { Form } from 'formik';

import { InputField } from '../ui/input';
import { WalletMultiButton } from '../ui/multi-wallet-button';
import { tokenMaps, TokenSelect } from '../ui/token-select';

const SelectedToken = ({ token }) => {
  return (
    <img
      className="inline-block h-6 w-6 rounded-full"
      src={tokenMaps[token].iconUrl}
      alt={token}
    />
  );
};

export const MakeDepositForm = ({ values }) => {
  const { connected } = useWallet();

  return (
    <div className="px-2 md:px-3 lg:row-start-1 lg:col-start-1">
      <Form className="">
        <div className="max-w-lg mx-auto lg:max-w-none">
          <section aria-labelledby="payment-heading" className="mt-5">
            <h2
              id="payment-heading"
              className="text-2xl sm:text-3xl font-medium text-[#ff9e48]"
            >
              Make your deposit
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-y-2">
              <div className="col-span-1">
                <TokenSelect name="token" />
                <InputField
                  name="token_amount"
                  type="number"
                  placeholder="0.00"
                  leftIcon={
                    values.token ? <SelectedToken token={values.token} /> : null
                  }
                />
              </div>

              <div className="col-span-1">
                <InputField
                  name="slots"
                  type="number"
                  label="Slots"
                  isRequired
                  placeholder="0"
                />
              </div>
            </div>
          </section>

          <div className="my-4 md:my-7 lg:mt-8 w-full">
            {connected ? (
              <button
                type="submit"
                className="block w-full py-3 px-4 rounded-md shadow hover:shadow-xl bg-gradient-to-r from-[#ff4293] to-[#ff9e48] text-white font-medium hover:from-[#ff4293] hover:to-[#ff9e48] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent focus:ring-offset-transparent"
              >
                Deposit
              </button>
            ) : null}
          </div>
        </div>
      </Form>

      {!connected ? (
        <div className="my-4 md:my-7 lg:mt-8 w-full">
          <WalletMultiButton />
        </div>
      ) : null}
    </div>
  );
};
