import { Form, Formik } from 'formik';
import * as yup from 'yup';

import { InputField } from '../ui/input';

const initialValues = {
  usdc: '',
  slots: '',
};

const REQUIRED_FIELD = 'Required field';

const schema = yup.object({
  usdc: yup
    .number()
    .integer('Please enter a whole number')
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
    .required(REQUIRED_FIELD),
});

export const StartInvesting = () => {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);

    resetForm();
  };

  /* height: 3rem;
  font-size: 1.2rem; */
  return (
    <div className="w-full mb-28 max-w-md bg-[#49266a] rounded-3xl px-2 pt-7 pb-4 overflow-hidden group-hover:opacity-75">
      {/*  <div className="bg-[#49266a] rounded-3xl p-2 w-[450px] sm:p-2 max-w-2xl shadow-xl"> */}
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        {() => {
          return (
            <Form className="px-2 md:px-3 lg:row-start-1 lg:col-start-1">
              <div className="max-w-lg mx-auto lg:max-w-none">
                <section aria-labelledby="payment-heading" className="mt-5">
                  <h2
                    id="payment-heading"
                    className="text-2xl sm:text-3xl font-medium text-[#ff9e48]"
                  >
                    Make your deposit
                  </h2>

                  <div className="mt-6 grid grid-cols-1 gap-y-2">
                    <div className="col-span-1">
                      {/* <TokenSelect /> */}
                      <InputField
                        name="usdc"
                        type="number"
                        label="USDC"
                        placeholder="0.00"
                        isRequired
                      />
                    </div>

                    <div className="col-span-1">
                      <InputField
                        name="slots"
                        type="number"
                        label="Slots"
                        isRequired
                        placeholder="0"
                      />
                    </div>
                  </div>
                </section>

                <div className="my-4 md:my-7 lg:mt-8 w-full">
                  <button
                    type="submit"
                    className="block w-full py-3 px-4 rounded-md shadow hover:shadow-xl bg-gradient-to-r from-[#ff4293] to-[#ff9e48] text-white font-medium hover:from-[#ff4293] hover:to-[#ff9e48] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent focus:ring-offset-transparent"
                  >
                    Deposit
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
