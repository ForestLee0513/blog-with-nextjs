import { HTMLAttributes } from "react";

interface ISelect extends HTMLAttributes<HTMLSelectElement> {
  value?: string | number;
}

const Select = ({ children, value, ...props }: ISelect) => {
  return (
    <select
      value={value}
      {...props}
      className="my-0 h-8 px-1 bg-blue-100 rounded-lg dark:bg-slate-800 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
    >
      {children}
    </select>
  );
};

export default Select;
