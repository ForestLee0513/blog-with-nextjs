import { HTMLAttributes } from "react";
import Container from "../Container";

const HeaderContainer = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLElement>) => {
  return (
    <header className={`py-4 border-b ${className}`} {...rest}>
      <Container className="flex items-center">{children}</Container>
    </header>
  );
};

export default HeaderContainer;
