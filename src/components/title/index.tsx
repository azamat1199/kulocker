import React from "react";
import Props from "./types";
import { Container, StyledTitle, FlexContainer } from "./styles";

const Title: React.FC<Props> = ({ isMobile }) => {
  return (
    <Container isMobile={isMobile}>
      <FlexContainer isMobile={isMobile}>
        <StyledTitle isMobile={isMobile}>Kulocker</StyledTitle>
      </FlexContainer>
    </Container>
  );
};

export default Title;
