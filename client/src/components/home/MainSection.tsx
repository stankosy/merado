import { LockClosedIcon, KeyIcon, RefreshIcon } from '@heroicons/react/outline';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router';
import { useHeaderAnimation } from '../../hooks/useHeaderAnimation';
import { ROUTES } from '../../routes';

import { WalletMultiButton } from '../ui/multi-wallet-button';
import { Header } from './Header';
import { PhoneInvestmentSvg } from './PhoneInvestmentSvg';

const className =
  'shadow bg-gradient-to-r from-[#ff4293] to-[#ff9e48] text-white font-medium hover:from-[#ff4293] hover:to-[#ff9e48] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff9e48] focus:ring-offset-gray-900';

/**
 * use this list to render the Why merado cards
 */
const features = [
  {
    name: 'Trustless',
    description:
      'Only you have access to your funds. Deposit or withdraw any time.',
    icon: KeyIcon,
  },
  {
    name: 'SSL Certificates',
    description:
      'Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple Queues',
    description:
      'Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.',
    icon: RefreshIcon,
  },
];

export const MainSection = () => {
  const [containerRef, headerClass] = useHeaderAnimation();

  const { push } = useRouter();
  const { connected } = useWallet();

  const navigateToStartInvesting = () => push(ROUTES.START_INVESTING);

  const walletButtonClass = connected ? 'hidden' : 'inline-flex';

  return (
    <>
      <Header bgColor={headerClass} />
      <main>
        <div
          ref={containerRef}
          className="pt-14 bg-gradient-radial-at-br from-[#572d7f] to-[#100919] sm:pt-12 lg:pt-12 lg:pb-14 lg:overflow-hidden"
        >
          {/** Header component */}
          {/* <Header /> */}

          {/* 1st section with image */}
          <div className="mx-auto max-w-7xl lg:px-8 mt-10 pt-14">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  {/* <div className="">
                  <span className="sr-only">Merado</span>
                  <img
                    className="h-16 w-auto sm:h-20"
                    src="https://res.cloudinary.com/daa9zjpg5/image/upload/v1660241361/merado/merado_title_wmh0xg.png"
                    alt=""
                  />
                </div> */}
                  {/* <h1 className="mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-4xl lg:mt-6 xl:text-5xl text-left">
                  <span className="block text-[#fa9e45]">Merado</span>
                </h1> */}
                  <h1 className="mt-2 text-2xl xl:text-3xl tracking-tight font-extrabold text-[#866e9e] sm:mt-3 lg:mt-4  text-left">
                    <span className="block text-white">
                      Automating Your Crypto Investments
                    </span>
                    <span className="pb-3 block bg-clip-text text-[#ff9f42]">
                      While You Asleep
                    </span>
                  </h1>
                  <p className="text-left text-gray-300 text-md sm:text-lg ">
                    Merado is the first DeFi protocol that autonomously detects
                    and buys in the dips on Solana blockchain!
                  </p>
                  <p className="text-left text-[#ff9f42] text-md sm:text-lg ">
                    Even up to 6.5% better average price than regular daily
                    DCA-ing strategies.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <div className="sm:flex sm:max-w-xl lg:mx-0">
                      <div className="mt-3 sm:mt-0">
                        {/* <WalletButton /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <div className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none">
                    <PhoneInvestmentSvg />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why merado */}
        <div className="relative bg-white py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Why Merado?
            </p>
            {/* <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Phasellus lorem quam molestie id quisque diam aenean nulla in.
            Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
            condimentum id viverra nulla.
          </p> */}
            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-[#ff4293] to-[#ff9e48] rounded-md shadow-lg">
                            <feature.icon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                          {feature.name}
                        </h3>
                        <p className="mt-5 text-base text-gray-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="relative bg-gray-900">
          <div className="bg-white relative h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
            <img
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/daa9zjpg5/image/upload/v1660239580/merado/candles_soqf6c.png"
              // src="https://res.cloudinary.com/daa9zjpg5/image/upload/v1660383762/merado/6256458_ibfcnx.jpg"
              // src="https://res.cloudinary.com/daa9zjpg5/image/upload/v1660143480/merado/how_it_works_np3zch.png"
              alt=""
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-[#ff4293] to-[#ff9e48] mix-blend-multiply"
            />
          </div>
          <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
            <div className="md:ml-auto md:w-1/2 md:pl-10">
              {/* <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                How it works?
              </h2> */}
              <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                How it works?
              </p>
              <p className="mt-3 text-lg text-gray-300">
                Instead of trying to time the market for the best possible
                price, Merado takes a systematic aproach autonomously detect and
                buys in the dips on Solana blockchain. Comparing to Dollar Cost
                Averaging (DCA) approach, Merado provides even up to 6.5% better
                average price.
              </p>
              <div className="mt-8">
                <div className={`rounded-md shadow ${walletButtonClass} `}>
                  <WalletMultiButton />
                  {/* <button className="bg-gradient-to-r from-[#ff4293] to-[#ff9e48] inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                  Connect wallet
                </button> */}
                </div>
                {connected ? (
                  <div className="inline-flex rounded-md shadow w-full">
                    <button
                      onClick={navigateToStartInvesting}
                      className={`${className} py-3 px-4 rounded-md`}
                    >
                      Start investing
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
