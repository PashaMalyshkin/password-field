import React from 'react';
import './index.scss';
import { PasswordField } from './components/password-field';

export const App: React.FC = () => {
  return (
    <div className="app">
      <PasswordField />
    </div>
  );
};
