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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  padding: 0.5rem 1rem;
`;

export const Copyright = styled.div`
  p {
    font-size: 16px;
    margin-bottom: 15px;
    line-height: 22px;
    color: #fff;
    font-weight: 400;
    text-align: center;
    margin-top: 0;
    @media (max-width: 767px) {
      font-size: 12px !important;
      line-height: 14px !important;
      margin-bottom: 5px !important;
    }
  }
`;

export const Social = styled.nav`
  height: 80px;
  width: 252.42px;
  display: flex;
  flex-direction: row;
  align-items: center;

  ul {
    width: 252.42px;
    height: 56px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 0;
    list-style: none;
    margin-top: 0px;
    margin-bottom: 0 !important;
    li {
      margin-right: 1rem !important;
    }
    li:last-child {
      margin-right: 5px !important;
      margin-left: 0px;
    }
  }
`;

export const Disclaimer = styled.div`
  width: 100%;
  p {
    font-size: 14px;
    line-height: 22px;
    color: #fff;
    font-weight: 400;
    margin-bottom: 5px;
    text-align: center;
    margin-top: 0;
    @media (max-width: 767px) {
      font-size: 10px !important;
      line-height: 14px !important;
      margin-bottom: 5px !important;
    }
  }
`;
