import { Popover } from '@headlessui/react';

import { WalletMultiButton } from '../ui/multi-wallet-button';
import { ROUTES } from '../../routes';
import { useRouter } from 'next/router';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export const Header = () => {
  const { push } = useRouter();

  const navigateToHome = () => push(ROUTES.HOME);

  return (
    <Popover as="header" className="relative">
      <div className="bg-transparent ">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <div className="cursor-pointer" onClick={navigateToHome}>
                <span className="sr-only">Merado</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://res.cloudinary.com/daa9zjpg5/image/upload/v1660239801/merado/merado_icon_xuix07.png"
                  alt=""
                />
              </div>
              <div className="-mr-2 flex items-center md:hidden">
                {/* <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"> */}
                <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-white focus:outline-none ">
                  <span className="sr-only">Open main menu</span>
                  {/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-8 md:flex md:ml-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-white hover:text-gray-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex md:items-center md:space-x-6">
            <WalletMultiButton />
          </div>
        </nav>
      </div>
    </Popover>
  );
};
