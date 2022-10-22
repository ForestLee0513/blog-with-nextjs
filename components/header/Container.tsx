import { HTMLAttributes } from "react";

const Container = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`container mx-auto prose ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Container;
