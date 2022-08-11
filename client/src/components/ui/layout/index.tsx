import { Footer } from '../../home/Footer';
import { Header } from '../../home/Header';

export const Layout = ({ children }) => {
  return (
    <div className="bg-[#391e53] min-h-[100vh]">
      <div className="relative overflow-hidden">
        <main>
          <div className="pt-10 sm:pt-10 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <Header />

            {/* <div className="h-[90vh] overflow-auto pt-40"></div> */}
            {/* <div className="mx-auto px-2 md:px-8 mt-28 flex flex-col items-center justify-center "> */}
            <div className="mx-auto px-2 md:px-8 pt-28 min-h-[100vh] flex flex-col items-center justify-center">
              {children}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
