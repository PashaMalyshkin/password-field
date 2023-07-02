import React, { FC } from 'react';
import { PiEyeLight, PiEyeSlashLight } from 'react-icons/pi';
import cn from 'classnames';
import { useValidationPassword } from '../../customHooks/useValidationPassword';

export const PasswordField: FC = () => {
  const {
    setShowPassword,
    showPassword,
    password,
    isPasswordWeak,
    isPasswordMedium,
    isPasswordStrong,
    inputType,
    setPassword,
    hasValidLength,
  } = useValidationPassword();

  return (
    <div className="container">
      <div className="password-field">
        <div className="password-field__container">
          <form className="password-field__form">

            <input
              type={inputType}
              name="password"
              className="password-field__input"
              value={password}
              placeholder="Type a password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="password-field__button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <PiEyeLight size={24} />
              ) : (
                <PiEyeSlashLight size={24} />
              )}
            </button>
          </form>
          <div className="password-field__info">
            {`${password.length} characters containing`}
          </div>
        </div>

        <div className="password-strength">
          <div className={cn(
            'password-strength__item',
            { red: isPasswordWeak || (!hasValidLength && password) },
            { yellow: isPasswordMedium },
            { green: isPasswordStrong },
          )}
          >
          </div>
          <div className={cn(
            'password-strength__item',
            { yellow: isPasswordMedium },
            { red: !hasValidLength && password },
            { green: isPasswordStrong },
          )}
          >
          </div>
          <div className={cn(
            'password-strength__item',
            { green: isPasswordStrong },
            { red: !hasValidLength && password },
            { green: isPasswordStrong },
          )}
          >
          </div>
        </div>
      </div>
    </div>
  );
};
