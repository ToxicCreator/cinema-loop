import { useState } from 'react';
import { TextInput, TextInputProps } from '@mantine/core';
import classes from './FloatingLabelInput.module.css';

export function FloatingLabelInput(props: TextInputProps & {
  value: string,
  label: string,
  placeholder?: string
}) {
  const {label, placeholder} = props;
  const [focused, setFocused] = useState(false);
  const floating = props.value.trim().length !== 0 || focused || undefined;

  return (
    <TextInput
      {...props}
      label={label}
      placeholder={placeholder}
      required
      classNames={classes}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      autoComplete="nope"
      data-floating={floating}
      labelProps={{ 'data-floating': floating }}
    />
  );
}
