import { ALL_TOKENS } from '../../../constants/tokenList';
import { StyledField, FieldLabel } from '../form-control';
import { InputField } from '../input';

export const AmountAndLotsInput = ({ values }) => {
  return (
    <>
      <div className="w-full flex justify-between items-center px-2 font-semibold">
        <FieldLabel htmlFor="amount">Amount</FieldLabel>
        <FieldLabel htmlFor="lots">Lots</FieldLabel>
      </div>
      <StyledField
        isInvalid={false}
        className="flex justify-between items-center py-1 sm:py-2 relative rounded-md shadow-sm pr-2"
      >
        <InputField
          name="amount"
          type="number"
          placeholder={
            values.token_from
              ? `0.00 ${ALL_TOKENS[values.token_from].title}`
              : '0.00'
          }
        />
        <div className="font-semibold text-white mx-2">/</div>
        <InputField
          name="lots"
          type="number"
          style={{ textAlign: 'right' }}
          placeholder="0"
        />
      </StyledField>
    </>
  );
};
1;
