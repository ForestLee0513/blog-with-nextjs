import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return <div className="container mx-auto prose">{children}</div>;
};

export default Container;
