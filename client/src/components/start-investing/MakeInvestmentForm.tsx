import { useWallet } from '@solana/wallet-adapter-react';
import { Form } from 'formik';
import { AmountAndLotsInput } from '../ui/amount-and-lots-input';
import { InvestmentPlan } from '../ui/investment-plan';
import { Loader } from '../ui/loader';

import { WalletMultiButton } from '../ui/multi-wallet-button';
import { TokenInput } from '../ui/token-input';

export const MakeDepositForm = ({ values, isSubmitting, errors }) => {
  const { connected } = useWallet();

  return (
    <div className="mb-5 sm:px-2 sm:mb-10 md:px-3 lg:row-start-1 lg:col-start-1">
      {isSubmitting ? <Loader /> : null}

      <Form className="">
        <div className="max-w-lg mx-auto lg:max-w-none">
          <section aria-labelledby="payment-heading" className="mt-5">
            <div className="mt-6 grid grid-cols-1 gap-y-2">
              <div className="col-span-1">
                <TokenInput />
              </div>
              <div className="col-span-1">
                <AmountAndLotsInput values={values} />
              </div>
            </div>
          </section>

          <InvestmentPlan values={values} />

          <div className="my-5 sm:mb-7 md:mb-7 mt-10 w-full">
            {connected ? (
              <button
                type="submit"
                disabled={isSubmitting}
                className="block w-full py-3 px-4 rounded-md shadow hover:shadow-xl bg-gradient-to-r from-[#ff4293] to-[#ff9e48] text-white font-medium hover:from-[#ff4293] hover:to-[#ff9e48] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent focus:ring-offset-transparent disabled:cursor-not-allowed"
              >
                Invest
              </button>
            ) : null}
          </div>
        </div>
      </Form>

      {!connected ? (
        <div className="my-5 sm:mb-7 md:mb-7 mt-10 w-full">
          <WalletMultiButton />
        </div>
      ) : null}
    </div>
  );
};
