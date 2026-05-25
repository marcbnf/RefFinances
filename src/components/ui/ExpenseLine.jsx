import React from 'react';
import { FormInput } from './FormInput';

export const ExpenseLine = ({ label, name, nameRecu, value, valueRecu, onChange }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg">
    <div />
    <FormInput
      label={`${label} (Dû)`}
      name={name}
      type="number"
      step="0.01"
      min="0"
      value={value}
      onChange={onChange}
      placeholder="0.00"
      isCurrency
    />
    <FormInput
      label={`Montant perçu (${label})`}
      name={nameRecu}
      type="number"
      step="0.01"
      min="0"
      value={valueRecu}
      onChange={onChange}
      placeholder="0.00"
      isCurrency
    />
  </div>
);

export const ExpenseLineSimple = ({ label, name, value, onChange }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg">
    <div />
    <FormInput
      label={`${label} (Dû)`}
      name={name}
      type="number"
      step="0.01"
      min="0"
      value={value}
      onChange={onChange}
      placeholder="0.00"
      isCurrency
    />
    <div />
  </div>
);
