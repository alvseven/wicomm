import { SectionContainer } from "./styles";

export const Section = ({
  children,
  width = "100%",
  height = "548px",
  padding = "0",
  backgroundColor = "#F1F1F1",
}) => {
  return (
    <SectionContainer
      width={width}
      height={height}
      padding={padding}
      backgroundColor={backgroundColor}
    >
      {children}
    </SectionContainer>
  );
};
