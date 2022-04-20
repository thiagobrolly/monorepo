import React from 'react';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button type="button">{props.label}IconA</button>;
};

export default Button;
