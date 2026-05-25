import React from 'react';

export const FormInput = ({ label, name, type, value, onChange, placeholder, isCurrency = false, isInvalid = false, ...props }) => (
  <div className="w-full">
    <label htmlFor={name} className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
      {label}
    </label>
    <div className="relative rounded-md shadow-sm">
      {isCurrency && (
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500 sm:text-sm">
          €
        </span>
      )}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`block w-full rounded-md shadow-sm sm:text-sm dark:bg-zinc-700 dark:text-white transition duration-200 ease-in-out ${isCurrency ? 'pl-7' : 'pl-3'} ${
          isInvalid
            ? 'border-red-500 ring-red-500'
            : 'border-zinc-300 dark:border-zinc-600 focus:border-blue-500 focus:ring-blue-500 focus:ring-1'
        }`}
        {...props}
      />
    </div>
  </div>
);
