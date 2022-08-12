import type {
  CSSProperties,
  FC,
  MouseEvent,
  PropsWithChildren,
  ReactElement,
} from 'react';
import React from 'react';

export type ButtonProps = PropsWithChildren<{
  className?: string;
  disabled?: boolean;
  endIcon?: ReactElement;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  startIcon?: ReactElement;
  style?: CSSProperties;
  tabIndex?: number;
  defaultStyle?: boolean;
}>;

export const Button: FC<ButtonProps> = ({ defaultStyle = true, ...props }) => {
  const defaultClassName = defaultStyle
    ? `${props.className || ''} wallet-adapter-button`
    : `${props.className || ''}`;

  return (
    <button
      className={defaultClassName}
      disabled={props.disabled}
      onClick={props.onClick}
      tabIndex={props.tabIndex || 0}
      type="button"
    >
      {props.startIcon && (
        <i
          className="wallet-adapter-button-start-icon"
          style={!defaultStyle ? { marginRight: 0 } : {}}
        >
          {props.startIcon}
        </i>
      )}
      {props.children}
      {props.endIcon && (
        <i className="wallet-adapter-button-end-icon">{props.endIcon}</i>
      )}
    </button>
  );
};
