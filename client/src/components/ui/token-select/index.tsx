import { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useField, useFormikContext } from 'formik';

export const tokenMaps = {
  usdc: {
    title: 'USDC',
    token: 'usdc',
    iconUrl:
      'https://res.cloudinary.com/daa9zjpg5/image/upload/v1660282221/merado/crypto-icons/usdc_dmxj7n.png',
  },
  usdt: {
    title: 'USDT',
    token: 'usdt',
    iconUrl:
      'https://res.cloudinary.com/daa9zjpg5/image/upload/v1660384336/merado/crypto-icons/usdt_wfrxak.png',
  },
};

export const tokenOpions = Object.values(tokenMaps);

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const TokenSelect = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  const [selected, setSelected] = useState(tokenOpions[0]);

  const onChange = (selectedOption) => {
    setSelected(selectedOption);
    setFieldValue(field.name, selectedOption.token);
  };

  useEffect(() => {
    onChange(tokenOpions[0]);
  }, []);

  return (
    <Listbox value={selected} onChange={onChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="sr-only">
            Change published status
          </Listbox.Label>
          <div className="relative">
            <div className="inline-flex shadow-sm rounded-md divide-x divide-[#25153a]">
              <div className="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-[#25153a]">
                <div className="relative w-24 inline-flex items-center bg-[#25153a] py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
                  <img
                    className="inline-block h-6 w-6 rounded-full"
                    src={selected.iconUrl}
                    alt=""
                  />
                  <p className="ml-2.5 text-sm font-medium">{selected.title}</p>
                </div>
                <Listbox.Button className="relative inline-flex items-center bg-[#25153a] p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-[#27183b] focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-[transparent] focus:ring-[transparent]">
                  <span className="sr-only">Change published status</span>
                  <ChevronDownIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </Listbox.Button>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="origin-top-right absolute z-10 right-[85px] sm:right-[170px] mt-2 w-32 rounded-md shadow-xl overflow-hidden bg-[#391e53] divide-y divide-[#391e53] ring-1 ring-black ring-opacity-5 focus:outline-none">
                {tokenOpions.map((option) => (
                  <Listbox.Option
                    key={option.title}
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'text-white bg-[#25153a] '
                          : 'text-white bg-[#391e53]',
                        'select-none relative px-4 py-2 text-sm hover:bg-[#25153a] cursor-pointer',
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <img
                            className="inline-block h-6 w-6 rounded-full"
                            src={option.iconUrl}
                            alt=""
                          />
                          <p className="font-semibold">{option.title}</p>
                        </div>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};
