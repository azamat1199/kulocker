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
  flex-wrap: wrap;
  margin-bottom: 40px;
`;
export const SearchInputGroup = styled.div`
  width: 372px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  height: 45px;
  font-size: 14px;
  border-radius: 10px;
  line-height: 19px;
  color: #1d1d1d;
  width: 372px;
  @media (max-width: 767px){
    height: 36px;
}
`;

export const SearchInput = styled.input<{ isMobile: boolean }>`
  max-height: 45px;
  width: 328px;
  color: #1d1d1d;
  border-radius: 10px;
  font-size: 14px;
  line-height: 19px;
  outline: none;
  border: 0px;
  padding-left: 15px;
  margin-right: -1px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin: 0;
  ::placeholder {
    color: #999999;
    border-radius: 10px;
  }
  @media (max-width: 767px){
    max-height: 36px;
}
`;

export const SearchLogo = styled.a`
  background-color: #18d09a;
  border-radius: 10px !important;
  height: 45px;
  width: 45px;
  border: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px){
    height: 36px;
    width: 36px;
}
  img {
    height: 18px;
    width: 17px;
  }
`;
