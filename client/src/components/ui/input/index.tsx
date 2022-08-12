import React, { InputHTMLAttributes, ReactElement, ReactNode } from 'react';
import { useField, useFormikContext } from 'formik';

import { FieldError, FieldLabel, FormControl } from '../form-control';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  placeholder?: string;
  textarea?: boolean;
  autoComplete?: 'on' | 'off';
  isRequired?: boolean;
  formatter?(value: string): string;
  validate?: (value: any) => string | undefined;
  leftIcon?: ReactElement | null;
  formatOptions?: {
    on: 'blur' | 'change';
  };
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  textarea,
  autoComplete = 'off',
  formatter,
  isRequired = false,
  formatOptions = { on: 'change' },
  leftIcon,
  ...props
}) => {
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [field, { error, touched }] = useField(props);
  const name = field.name;

  const { on } = formatOptions;
  const formatOnBlur = on === 'blur' && formatter;

  const onBlur = (): void => {
    // touching the field explicitly
    if (!touched) {
      setFieldTouched(name, true);
    }

    const fieldValue =
      typeof field.value === 'string' ? field.value?.trim() : field.value;
    // removing trailing and leading spaces
    setFieldValue(
      field.name,
      formatOnBlur ? formatter(fieldValue) : fieldValue,
    );
  };

  const isInvalid = touched ? Boolean(error) : false;

  return (
    <FormControl isInvalid={isInvalid} isRequired={isRequired}>
      <FieldLabel htmlFor={field.name}>{label}</FieldLabel>

      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {leftIcon || null}
        </div>
        <input
          {...field}
          {...props}
          id={name}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={`${
            leftIcon ? 'pl-11' : ''
          } block w-full rounded-md shadow-sm h-11 sm:h-12 text-base sm:text-lg`}
        />
        {/* <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <QuestionMarkCircleIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div> */}
      </div>
      <FieldError>{isInvalid ? error : ''}</FieldError>
    </FormControl>
  );
};
