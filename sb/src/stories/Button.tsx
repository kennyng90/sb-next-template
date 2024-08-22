import React from "react";

export interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button className='rounded py-2 px-3 bg-blue-600 text-white' {...props}>
      {label}
    </button>
  );
};
