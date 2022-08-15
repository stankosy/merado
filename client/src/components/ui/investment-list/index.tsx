import { useWallet } from '@solana/wallet-adapter-react';
import { useInvestment } from '../../../context/investment-context';
import { WalletMultiButton } from '../multi-wallet-button';
import { InvestmentFields } from './InvestmentFields';
import { InvestmentRecords } from './InvestmentRecords';
import { mock } from './mock';

export const InvestmentList = () => {
  const { connected } = useWallet();
  const { onOpen, investments } = useInvestment();

  return (
    <div className="w-full max-w-5xl px-6 lg:px-8 mb-28 mt-14">
      <div className="mt-8 flex flex-col ">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 rounded-lg">
              <table className="min-w-full ">
                <thead className="bg-[#25153a] text-[#ff9e48]">
                  <InvestmentFields />
                </thead>
                <tbody className=" bg-[#49266a] font-semibold text-gray-400">
                  {investments.length ? (
                    investments.map((investment) => (
                      <InvestmentRecords
                        key={investment.id}
                        investment={investment}
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6}>
                        <div className="text-center pb-10 pt-20 px-15 text-[#ff9e48]">
                          <h3 className="mt-2 text-sm font-medium ">
                            No current investments.
                          </h3>
                          <p className="mt-1 text-sm ">
                            Get started by creating a new investment plan.
                          </p>
                          <div className="mt-6 max-w-md mx-auto px-6">
                            {connected ? (
                              <button
                                onClick={onOpen}
                                className="block w-full py-3 px-4 rounded-md shadow hover:shadow-xl bg-gradient-to-r from-[#ff4293] to-[#ff9e48] text-white font-medium hover:from-[#ff4293] hover:to-[#ff9e48] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent focus:ring-offset-transparent"
                              >
                                Create Investment
                              </button>
                            ) : (
                              <WalletMultiButton />
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
