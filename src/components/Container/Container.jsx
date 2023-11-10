import { ContainerBox } from "./ContainerStyled";

export const BoxContainer = ({ children, flex }) => {
  return <ContainerBox flex={flex}>{children}</ContainerBox>;
};
