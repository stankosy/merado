import { ReactNode, ReactNodeArray } from 'react';
import styled from '@emotion/styled';

const StyledLabel = styled.div`
  margin: 0.5em 0;
  color: #ff9e48;
`;

const StyledError = styled.div`
  color: #ff4293;
  font-size: 0.9em;
  height: 2.2em;
  padding: 0.2em;
  display: flex;
  align-items: center;
`;

interface FormControlProps {
  isInvalid: boolean;
  children: ReactNode | ReactNode[];
}

export const StyledInput = styled.input`
    border-width:0px;
    border-color: transparent;
    outline: none;

    &:focus {
        outline: none;
        box-shadow: none;
    }
}
`;

export const StyledField = styled.div`
  border-width: ${({ isInvalid }: FormControlProps) =>
    isInvalid ? '2px' : '0px'};
  border-color: ${({ isInvalid }: FormControlProps) =>
    isInvalid ? '#ff9e48' : 'transparent'};

  background-color: #25153a;
`;

interface FieldLabelProps {
  children: string | undefined;
  htmlFor: string;
}

export const FieldLabel: React.FC<FieldLabelProps> = ({
  children,
  htmlFor,
}) => {
  return (
    <StyledLabel className="text-base sm:text-lg">
      <label htmlFor={htmlFor}>{children}</label>
    </StyledLabel>
  );
};

interface FieldErrorProps {
  children: string | undefined;
}

export const FieldError: React.FC<FieldErrorProps> = ({ children }) => {
  return <StyledError>{children}</StyledError>;
};
