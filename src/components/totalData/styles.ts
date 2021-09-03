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
`;

export const LockedContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  @media (min-width: 1200px) {
    width: 950px;
  }
  @media (max-width: 1199px) {
    width: 800px;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const LockedBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 38px;
  flex: 0 0 50%;
  max-width: 50%;
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
}
`;

export const LockedCircle = styled.div`
  height: 118px;
  width: 118px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  background-color: #1d1d1d;
  @media (max-width: 767px) {
    height: 80px;
    width: 80px;
  }
`;
export const StyledLockImg = styled.img`
  @media (max-width: 767px) {
    height: 36.3px;
    width: 25px;
  }
`;
export const StyledWorkImg = styled.img`
  @media (max-width: 767px) {
    height: 25px;
    width: 25px;
  }
`;

export const LockedContent = styled.div`
  background-color: #1d1d1d;
  padding: 11px 30px 11px 40px;
  margin-left: -10px;
  width: 210px;
  height: 64px;
  border-radius: 0 32px 32px 0;
  box-sizing: border-box;
  h3 {
    font-size: 16px;
    line-height: 22px;
    color: white;
    font-weight: 800;
    margin-top: 0;
    margin-bottom: 5px;
    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 16px;
    }
  }
  p {
    font-size: 11px;
    line-height: 15px;
    color: white;
    margin-bottom: 0px;
    margin: 0;
    @media (max-width: 767px) {
      font-size: 10px;
      line-height: 10px;
    }
  }
  @media (max-width: 767px) {
    height: 53px;
    width: 180px;
  }
`;
