import React, { InputHTMLAttributes, ReactNode } from 'react';
import { useField, useFormikContext } from 'formik';

import { StyledInput } from '../form-control';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  placeholder?: string;
  textarea?: boolean;
  autoComplete?: 'on' | 'off';
  isRequired?: boolean;
  formatter?(value: string): string;
  validate?: (value: any) => string | undefined;
  leftIcon?: ReactNode | null;
  rightIcon?: ReactNode | null;
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
  rightIcon,
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

  /* const isInvalid = touched ? Boolean(error) : false; */

  return (
    <StyledInput
      {...field}
      {...props}
      id={name}
      onBlur={onBlur}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className="w-full font-semibold rounded-md shadow-sm bg-transparent text-base sm:text-lg text-left px-4 text-gray-400"
    />
  );
};
