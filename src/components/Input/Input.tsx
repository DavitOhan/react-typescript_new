import { InputProps } from "./types";

import {
  InputContainer,
  InputLabel,
  InputComponent,
  ErrorContainer,
} from "./styles";

function Input({
  disabled,
  name,
  placeholder,
  labelName,
  value,
  onChange,
  type,
  error = undefined,
}: InputProps) {
  const inputId = `${name}-${Math.random()}`;

  return (
    <InputContainer>
      <InputLabel htmlFor={inputId}>{labelName}</InputLabel>
      <InputComponent
        $error={error}
        type={type}
        value={value}
        onChange={onChange}
        id={inputId}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
      />
      <ErrorContainer>{error}</ErrorContainer>
    </InputContainer>
  );
}

export default Input;
