import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { XIcon } from '@heroicons/react/solid';

export const MakeInvestmentModal = ({ children, open = false, onClose }) => {
  const { connected } = useWallet();

  return connected ? (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-[1000]" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-[#947bad] bg-opacity-70 transition-opacity pointer-events-none"
              onClick={() => {}}
            />
          </Transition.Child>

          <div className="fixed z-[1000] inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative max-w-md bg-[#49266a] rounded-3xl px-2 pt-7 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8">
                  <div className="block absolute top-0 right-0 pt-5 pr-4">
                    <button
                      type="button"
                      className="bg-transparent rounded-full text-[#ff9e48] hover:text-[#ff4293] transition-colors focus:outline-none "
                      onClick={onClose}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  ) : null;
};
