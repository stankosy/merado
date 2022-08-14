import { Transition } from '@headlessui/react';
import { ALL_TOKENS } from '../../../constants/tokenList';

export const InvestmentPlan = ({ values }) => {
  const roundOf = (number) =>
    !Number.isNaN(number) && Number.isFinite(number)
      ? Math.round((number + Number.EPSILON) * 100) / 100
      : 0;

  const hasAllValues = Boolean(values.amount && values.lots);

  return (
    <Transition
      show={hasAllValues}
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-50"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="flex items-center rounded-md mt-4 sm:mt-8 bg-[#25153a] border-2 border-[#ff9e48] font-medium sm:font-semibold">
        <div className="flex">
          <div className="text-xs sm:text-sm text-[#ff9e48] py-2 px-3 sm:px-3">
            <span>{`Swap ${values.amount}`}</span>
            <span className="mx-2">
              <img
                className="inline-block h-4 w-4 sm:h-6 sm:w-6 rounded-full"
                src={ALL_TOKENS[values.token_from]?.iconUrl}
                alt=""
              />
            </span>
            with
            <span className="mx-2">
              <img
                className="inline-block h-4 w-4 sm:h-6 sm:w-6 rounded-full"
                src={ALL_TOKENS[values.token_to]?.iconUrl}
                alt=""
              />
            </span>{' '}
            <span>{`in lots of ${roundOf(values.amount / values.lots)}`}</span>
          </div>
        </div>
      </div>
    </Transition>
  );
};
