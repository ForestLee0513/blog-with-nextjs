import { HTMLAttributes } from "react";

const HeaderList = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul
      className={`flex flex-1 flex-wrap items-center list-none p-0 w-full ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </ul>
  );
};

export default HeaderList;
