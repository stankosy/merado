import { WalletMultiButton } from '../ui/multi-wallet-button';
import { ROUTES } from '../../routes';
import { useRouter } from 'next/router';

export const Header = (props) => {
  const { push } = useRouter();

  const navigateToHome = () => push(ROUTES.HOME);

  return (
    <header className="relative">
      <div className={`${props.bgColor} py-3 fixed w-full z-10`}>
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <div className="cursor-pointer" onClick={navigateToHome}>
                <span className="sr-only">Merado</span>
                <img
                  className="h-12 w-auto sm:h-14"
                  src="https://res.cloudinary.com/daa9zjpg5/image/upload/v1660241361/merado/merado_title_wmh0xg.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex md:items-center md:space-x-6">
            <WalletMultiButton />
          </div>
        </nav>
      </div>
    </header>
  );
};
