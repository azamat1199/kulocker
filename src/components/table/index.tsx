import React from "react";
import Props from "./types";
import { Container, FlexContainer, StyledTable, TableContainer, StyledTr, StyledTableBody, StyledLinkTh, StyledBodyTr, FixedContainer } from './styles';

const Table: React.FC<Props> = ({ isMobile }) => {
  return (
    <Container isMobile={isMobile}>
      <FlexContainer isMobile={isMobile}>
        <FixedContainer>
        <TableContainer>
          <StyledTable>
            <thead>
              <StyledTr>
                <th>Token</th>
                <th>Contract Address</th>
                <th>Total Locked Value</th>
                <th>Tokens Locked</th>
                <th>Next Unlock</th>
              </StyledTr>
            </thead>
            <StyledTableBody id="myTable">
              <StyledBodyTr>
                <StyledLinkTh scope="row">
                  <a href="./Token_Overview.html">Test (TEST)</a>
                </StyledLinkTh>
                <td>0x00000000000</td>
                <td>$0,000,000.00</td>
                <td>$0,000,000.00</td>
                <td>0 day left</td>
              </StyledBodyTr>
              <StyledBodyTr>
                <StyledLinkTh scope="row">Test (TEST)</StyledLinkTh>
                <td>0x00000000000</td>
                <td>$0,000,000.00</td>
                <td>$0,000,000.00</td>
                <td>0 day left</td>
              </StyledBodyTr>
              <StyledBodyTr>
                <StyledLinkTh scope="row">Test (TEST)</StyledLinkTh>
                <td>0x00000000000</td>
                <td>$0,000,000.00</td>
                <td>$0,000,000.00</td>
                <td>0 day left</td>
              </StyledBodyTr>
              <StyledBodyTr>
                <StyledLinkTh scope="row">Test (TEST)</StyledLinkTh>
                <td>0x00000000000</td>
                <td>$0,000,000.00</td>
                <td>$0,000,000.00</td>
                <td>0 day left</td>
              </StyledBodyTr>
              <StyledBodyTr>
                <StyledLinkTh scope="row">Test (TEST)</StyledLinkTh>
                <td>0x00000000000</td>
                <td>$0,000,000.00</td>
                <td>$0,000,000.00</td>
                <td>0 day left</td>
              </StyledBodyTr>
              <StyledBodyTr>
                <StyledLinkTh scope="row">Test (TEST)</StyledLinkTh>
                <td>0x00000000000</td>
                <td>$0,000,000.00</td>
                <td>$0,000,000.00</td>
                <td>0 day left</td>
              </StyledBodyTr>
              <StyledBodyTr>
                <StyledLinkTh scope="row">Test (TEST)</StyledLinkTh>
                <td>0x00000000000</td>
                <td>$0,000,000.00</td>
                <td>$0,000,000.00</td>
                <td>0 day left</td>
              </StyledBodyTr>
              <StyledBodyTr>
                <StyledLinkTh scope="row">Test (TEST)</StyledLinkTh>
                <td>0x00000000000</td>
                <td>$0,000,000.00</td>
                <td>$0,000,000.00</td>
                <td>0 day left</td>
              </StyledBodyTr>
            </StyledTableBody>
          </StyledTable>
        </TableContainer>
        </FixedContainer>
      </FlexContainer>
    </Container>
  );
};

export default Table;
