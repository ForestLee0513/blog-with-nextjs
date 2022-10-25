import { HTMLAttributes } from "react";

const HeaderItem = ({
  children,
  className = "",
  ...rest
}: HTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={`flex justify-end m-0 last:pr-0 ${className}`} {...rest}>
      {children}
    </li>
  );
};

const HeaderItemFull = ({
  children,
  className = "",
  ...rest
}: HTMLAttributes<HTMLLIElement>) => {
  return (
    <li
      className={`flex justify-end m-0 flex-1 last:pr-0 ${className}`}
      {...rest}
    >
      {children}
    </li>
  );
};

export { HeaderItem, HeaderItemFull };
