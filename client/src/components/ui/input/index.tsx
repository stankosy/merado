import React, { InputHTMLAttributes, ReactNode } from 'react';
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
  suffix?: ReactNode | string | null;
  validate?: (value: any) => string | undefined;
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
  suffix = null,
  formatOptions = { on: 'change' },
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

      <input
        {...field}
        {...props}
        id={name}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="block w-full rounded-md shadow-sm h-11 sm:h-12 text-base sm:text-lg"
      />

      <FieldError>{isInvalid ? error : ''}</FieldError>
    </FormControl>
  );
};
