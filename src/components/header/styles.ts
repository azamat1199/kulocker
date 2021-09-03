import styled from "styled-components";

export const Container = styled.div<{ isMobile: boolean }>`
  background-color: #232323;
  height: ${({ isMobile }) => (isMobile ? "56px" : "80px")};
  border-bottom: 1px solid #232323;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 65px;
`;
export const FlexContainer = styled.div<{ isMobile: boolean }>`
  padding-left: 15px;
  padding-right: 15px;
  margin-right: 27.5px;
  margin-left: 27.5px;
  height: 100%;
  width: ${({ isMobile }) => (isMobile ? "540px" : "1140px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const MenuWrapper = styled.div<{ isMobile: boolean }>`
  height: ${({ isMobile }) => (isMobile ? "56px" : "80px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: ${({ isMobile }) => (isMobile ? "2rem" : "1.5rem")};
`;
export const ConnectWalletWrapper = styled.div<{ isMobile: boolean }>`
  height: ${({ isMobile }) => (isMobile ? "30px" : "45px")};
`;
export const ConnectWallet = styled.button<{ isMobile: boolean }>`
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  height: ${({ isMobile }) => (isMobile ? "30px" : "45px")};
  display: block;
  background-color: rgba(24, 208, 154, 0.2);
  color: #18d09a;
  padding: ${({ isMobile }) => (isMobile ? "6px 10px" : "12px 17px")};
  font-size: ${({ isMobile }) => (isMobile ? "12px" : "14px")};
  line-height: ${({ isMobile }) => (isMobile ? "20px" : "19px")};
  font-weight: 600;
  border-radius: 10px;
  border: 0px;
  margin: auto;
  box-shadow: none !important;
`;
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.img<{ isMobile: boolean; src: string; alt: string }>`
  margin: 0 auto;
  width: ${({ isMobile }) => (isMobile ? "108px" : "100%")};
  height: ${({ isMobile }) => (isMobile ? "20.64px" : "100%")};
  cursor: pointer;
`;

export const MenuLogoWrapper = styled.div`
  position: relative;
`;

export const MenuLogo = styled.img<{
  isMobile: boolean;
  src: string;
  alt: string;
}>`
  display: block;
  cursor: pointer;
  width: ${({ isMobile }) => (isMobile ? "25px" : "45px")};
  height: ${({ isMobile }) => (isMobile ? "25px" : "45px")};
`;

export const FixedContainer = styled.div`
  position: absolute;
  top: 100%;
  left: auto;
  right: 0;
  margin: .125rem 0 0;
  z-index: 1000;
  width: 160px;
  font-size: 1rem;
  color: #212529;
  list-style: none;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-color: #1d1d1d;
  border-radius: 20px;
`;

export const DropdownRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const DropdownCol = styled.div`
padding-right: 15px;
padding-left: 15px
  flex: 0 0 100%;
  max-width: 100%;
`;

export const DropdownList = styled.ul`
  margin-left: 5px;
  flex-direction: column !important;
  padding-left: 0;
  display: flex;
  width: 128px;
  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    text-align: -webkit-match-parent;
    padding: 8px 0px;

    a {
      padding-left: 5px;
      display: block !important;
      width: 100%;
      color: #999 !important;
      text-decoration: none;
      background-color: transparent;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      line-height: 22px;
      font-size: 14px;

      img {
        width: 22px;
        height: 22px;
        margin-right: 0.5rem !important;
        vertical-align: middle;
        border-style: none;
        box-sizing: border-box;
      }
    }
  }
  li:last-child {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      margin-left: 5px;
      display: block !important;
      width: 128px;
      cursor: pointer;
      height: 36px;
      color: #fff;
      background-color: #18d09a;
      border-color: #18d09a;
      border-radius: 8px;
      border: none;
    }
  }
`;
