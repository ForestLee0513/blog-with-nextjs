import { HTMLAttributes } from "react";

interface IOption extends HTMLAttributes<HTMLOptionElement> {
  value?: string | number;
}

const Option = ({ children, value, ...props }: IOption) => {
  return (
    <option value={value} {...props}>
      {children}
    </option>
  );
};

export default Option;
