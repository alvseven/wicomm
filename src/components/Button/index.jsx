import { DefaultButton } from "./styles";

export const Button = ({
  children,
  fontSize = "16px",
  letterSpacing = "0.08em",
  width = "6rem",
  height = "3rem",
  borderColor = "transparent",
  borderRadius = "4px",
}) => {
  return (
    <DefaultButton
      fontSize={fontSize}
      letterSpacing={letterSpacing}
      width={width}
      height={height}
      borderColor={borderColor}
      borderRadius={borderRadius}
    >
      {children}
    </DefaultButton>
  );
};
