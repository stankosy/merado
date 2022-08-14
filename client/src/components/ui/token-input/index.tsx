import { StyledField, FieldLabel } from '../form-control';

import { TokenSelect } from '../token-select';

export const TokenInput = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center px-2 font-semibold">
        <FieldLabel htmlFor="token_from">From</FieldLabel>
        <FieldLabel htmlFor="token_to">To</FieldLabel>
      </div>
      <StyledField
        isInvalid={false}
        className="flex justify-between items-center py-1 sm:py-2 relative rounded-md shadow-sm pr-2"
      >
        <TokenSelect name="token_from" userToken />
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
        <TokenSelect name="token_to" />
      </StyledField>
    </>
  );
};
1;
