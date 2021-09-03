import styled from "styled-components";

export const Container = styled.div<{ isMobile: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const FlexContainer = styled.div<{ isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? "540px" : "1140px")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 48px;
  margin-bottom: 8px;
  margin-top: 0px;
`;
export const StyledTitle = styled.h1<{ isMobile: boolean }>`
  color: #18d09a;
  font-size: ${({ isMobile }) => (isMobile ? "24px" : "40px")};;
  font-weight: 900;
  line-height: 1.2;
  margin: 0;
  height: 100%;
`;
