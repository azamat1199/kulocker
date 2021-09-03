import React from "react";
import Props from "./types";
import {
  Container,
  FlexContainer,
  LockedBox,
  LockedCircle,
  LockedContent,
  LockedContainer,
  StyledLockImg,
  StyledWorkImg
} from "./styles";
import LockImg from "../../images/lock.png";
import WorkImg from '../../images/Work.png';

const TotalData: React.FC<Props> = ({ isMobile }) => {
  return (
    <Container isMobile={isMobile}>
      <FlexContainer isMobile={isMobile}>
        <LockedContainer isMobile={isMobile}>
          <LockedBox>
            <LockedCircle>
              <StyledLockImg src={LockImg} alt="lock" />
            </LockedCircle>
            <LockedContent>
              <h3>$ 0,000,000.00</h3>
              <p>Total Locked</p>
            </LockedContent>
          </LockedBox>

          <LockedBox>
            <LockedCircle>
              <StyledWorkImg src={WorkImg} alt="work" />
            </LockedCircle>
            <LockedContent>
              <h3>000</h3>
              <p>Total Projects</p>
            </LockedContent>
          </LockedBox>
        </LockedContainer>
      </FlexContainer>
    </Container>
  );
};

export default TotalData;
