import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline';

import { WalletMultiButton } from '../ui/multi-wallet-button';
import { Header } from './Header';
import { PhoneInvestmentSvg } from './PhoneInvestmentSvg';

/**
 * use this list to render the Why merado cards
 */
const features = [
  {
    name: 'Push to Deploy',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.',
    icon: CloudUploadIcon,
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
  {
    name: 'Advanced Security',
    description:
      'Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Powerful API',
    description:
      'Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.',
    icon: CogIcon,
  },
  {
    name: 'Database Backups',
    description:
      'Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.',
    icon: ServerIcon,
  },
];

export const MainSection = () => {
  return (
    <main>
      <div className="pt-10 bg-gradient-radial-at-br from-[#572d7f] to-[#100919] sm:pt-10 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        {/** Header component */}
        <Header />

        {/* 1st section with image */}
        <div className="mx-auto max-w-7xl lg:px-8 mt-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">
                <div className="">
                  <span className="sr-only">Merado</span>
                  <img
                    className="h-16 w-auto sm:h-20"
                    src="https://res.cloudinary.com/daa9zjpg5/image/upload/v1660241361/merado/merado_title_wmh0xg.png"
                    alt=""
                  />
                </div>
                {/* <h1 className="mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-4xl lg:mt-6 xl:text-5xl text-left">
                  <span className="block text-[#fa9e45]">Merado</span>
                </h1> */}
                <h1 className="mt-2 text-2xl tracking-tight font-extrabold text-[#866e9e] sm:mt-3 sm:text-3xl lg:mt-4 xl:text-4xl text-left">
                  <span className="block">Systematic Crypto Investing</span>
                  <span className="pb-3 block bg-clip-text">Made Easy</span>
                </h1>
                <p className="text-left text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat.
                </p>
                <div className="mt-10 sm:mt-12">
                  <div className="sm:flex sm:max-w-xl lg:mx-0">
                    <div className="mt-3 sm:mt-0">{/* <WalletButton /> */}</div>
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
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Phasellus lorem quam molestie id quisque diam aenean nulla in.
            Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
            condimentum id viverra nulla.
          </p>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <WalletMultiButton />
                {/* <button className="bg-gradient-to-r from-[#ff4293] to-[#ff9e48] inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                  Connect wallet
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
