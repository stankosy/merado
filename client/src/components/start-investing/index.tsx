import { Formik } from 'formik';
import * as yup from 'yup';

import { MakeDepositForm } from './make-deposit-form';

const initialValues = {
  token_amount: '',
  slots: '',
  token: '',
};

const REQUIRED_FIELD = 'Required field';

const schema = yup.object({
  token_amount: yup
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
  slots: yup
    .number()
    .integer('Please enter a whole number')
    .min(1, 'Minimum slots is 1')
    .required(REQUIRED_FIELD),
  token: yup
    .string()
    .oneOf(['usdc', 'btc', 'sol'], 'Invalid token')
    .required(REQUIRED_FIELD),
});

export const StartInvesting = () => {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);

    resetForm();
  };

  return (
    <div className="w-full mb-28 max-w-md bg-[#49266a] rounded-3xl px-2 pt-7 pb-4 overflow-hidden group-hover:opacity-75">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        {({ values }) => {
          return <MakeDepositForm values={values} />;
        }}
      </Formik>
    </div>
  );
};
