// InputText.tsx
import React from "react";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputText({ value, onChangeInput, ...props }: InputTextProps) {
  return (
    <input
      value={value}
      onChange={onChangeInput} // important!
      className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      {...props}
    />
  );
}
