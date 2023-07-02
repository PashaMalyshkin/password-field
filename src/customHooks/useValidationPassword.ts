import { useState } from 'react';

export const useValidationPassword = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPassword ? 'text' : 'password';
  const hasValidLength = password.length >= 8;
  const numberPattern = /\d+/g;
  const letterPattern = /[a-zA-Z]+/;
  const symbolPattern = /[^a-zA-Z0-9\s]+/;
  const hasNumbers = numberPattern.test(password);
  const hasLetters = letterPattern.test(password);
  const hasSymbols = symbolPattern.test(password);
  const isPasswordStrong = hasValidLength && hasNumbers && hasSymbols && hasLetters;
  const isPasswordMedium = hasValidLength && !isPasswordStrong && ((hasLetters && hasSymbols)
        || (hasLetters && hasNumbers) || (hasNumbers && hasSymbols));
  const isPasswordWeak = !isPasswordStrong
        && !isPasswordMedium
        && hasValidLength;

  return {
    password,
    setPassword,
    showPassword,
    setShowPassword,
    inputType,
    isPasswordWeak,
    isPasswordMedium,
    isPasswordStrong,
    hasValidLength,
  };
};
