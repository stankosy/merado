import { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useInvestment } from '../../context/investment-context';

import { MakeDepositForm } from './MakeInvestmentForm';
import { MakeInvestmentModal } from './MakeInvestmentModal';

import { useStartInvesting } from './useStartInvesting';
import { ACTIVE } from '../../constants/investmentStatus';

const initialValues = {
  token_to: '',
  token_from: '',
  lots: '',
  amount: '',
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const REQUIRED_FIELD = 'Required field';

const schema = yup.object({
  amount: yup
    .number()
    .integer('Please enter a whole number')
    .min(1, 'Minimum investment amount is 1')
    .required(REQUIRED_FIELD)
    .test(
      'should_be_multiple of slots',
      'Amount should be in multiple of slots',
      (value, { parent }: any) => {
        const { slots } = parent;

        if (!slots) {
          return true;
        } else if (value && slots) {
          return !Boolean(value % slots);
        } else {
          return true;
        }
      },
    ),
  lots: yup
    .number()
    .integer('Please enter a whole number')
    .min(1, 'Minimum slots is 1')
    .required(REQUIRED_FIELD),
  token_from: yup
    .string()
    .oneOf(['usdc', 'usdt'], 'Invalid token')
    .required(REQUIRED_FIELD),
  token_to: yup
    .string()
    .oneOf(['btc', 'eth', 'sol', 'ftt', 'chainlink'], 'Invalid token')
    .required(REQUIRED_FIELD),
});

export const StartInvesting = () => {
  const [loading, setLoading] = useState(false);
  const { open, onClose, investments, addInvestment } = useInvestment();

  const { checkTokenValidity, getOrCreateTokenAccount, executeTokenTransfer } =
    useStartInvesting();

  const onSubmit = async (values, { setErrors }) => {
    setLoading(true);

    schema
      .validate(values)
      .then(async () => {
        const validWalletTokenAccount = await checkTokenValidity(
          values,
          setErrors,
        );

        if (validWalletTokenAccount) {
          const meradoTokenAccount = await getOrCreateTokenAccount(
            values.token_from,
          );

          if (validWalletTokenAccount && meradoTokenAccount) {
            const tx = await executeTokenTransfer(
              validWalletTokenAccount,
              meradoTokenAccount,
              values.amount,
            );

            if (tx) {
              await sleep(3000);

              addInvestment({
                ...values,
                createdAt: new Date().toLocaleDateString(),
                id: investments.length + 1,
                status: ACTIVE,
                progress: 0,
              });

              onClose();
            }
          }

          // onClose();
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <MakeInvestmentModal open={open} onClose={onClose}>
      <div className="w-full bg-[#49266a] mt-6 overflow-hidden group-hover:opacity-75">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, errors }) => {
            return (
              <MakeDepositForm
                values={values}
                errors={errors}
                isSubmitting={loading}
              />
            );
          }}
        </Formik>
      </div>
    </MakeInvestmentModal>
  );
};
