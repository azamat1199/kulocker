import styled from "styled-components";

export const Container = styled.div<{ isMobile: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const FlexContainer = styled.div<{ isMobile: boolean }>`
  @media (min-width: 1200px) {
    width: 1140px;
  }
  @media (max-width: 1199px) {
    width: 960px;
  }
  @media (max-width: 992px) {
    width: 720px;
  }
  @media (max-width: 767px) {
    width: 540px;
    overflow: auto;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FixedContainer = styled.div`
  background-color: #232323;
  flex-wrap: wrap;
  border-radius: 10px;
  position: relative;
  webkit-border-radius: 10px;
  margin-bottom: 30px;
  border-radius: 10px;
  position: relative;
  webkit-border-radius: 10px;
  background-color: #232323;
  @media (max-width: 767px) {
    width: 510px;
    overflow-x: auto;
  }
`;

export const TableContainer = styled.div`
  padding: 36px 30px 0 30px;
  @media (max-width: 767px) {
    padding: 15px 15px 0px 24px;
    width: 100%;
  }
`;

export const StyledTable = styled.table`
  margin-bottom: 1rem;
  @media (min-width: 1200px) {
    width: 1050px;
  }
  @media (max-width: 1199px) {
    width: 870px;
    height: 512.69px;
  }
  @media (max-width: 992px) {
    width: 630px;
    height: 512.69px;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 331px;
  }
  border-collapse: collapse;
  display: table;
  overflow: hidden;
  box-sizing: border-box;
  text-indent: initial;
  border-spacing: 2px;
  border-color: grey;
  color: white;
  th {
    padding: 1.1rem 0.75rem;
    border-top: 1px solid rgba(143, 128, 186, 0.1);
    white-space: nowrap;
    @media (max-width: 767px) {
      white-space: nowrap;
      font-size: 12px;
      line-height: 16px;
      padding: 10px;
    }
  }
  td {
    padding: 1.1rem 0.75rem;
    border-top: 1px solid rgba(143, 128, 186, 0.1);
    @media (max-width: 767px) {
      white-space: nowrap;
      padding: 10px 10px;
      font-size: 12px;
      line-height: 16px;
    }
  }
  tr:nth-child(1) td,
  tr:nth-child(1) th {
    border-top: 0;
  }
`;

export const StyledTr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  color: #18d09a;
  th {
    background-color: rgba(24, 208, 154, 0.07);
    color: #18d09a;
    overflow: hidden;
    text-align: -webkit-match-parent;
    border: 0 !important;
    font-size: 14px;
    @media (max-width: 767px) {
      white-space: nowrap;
      font-size: 12px;
      line-height: 16px;
    }
  }
  th:first-child {
    font-size: 14px;
    border-radius: 10px 0 0 10px !important;
    padding: 17.6px 12px 17.6px 24px;

    @media (max-width: 767px) {
      white-space: nowrap;
      font-size: 12px;
      line-height: 16px;
      padding-left: 24px;
    }
  }
  th:last-child {
    border-radius: 0 10px 10px 0 !important;
  }
`;

export const StyledBodyTr = styled.tr`
  th {
    text-align: -webkit-match-parent;
    padding-left: 24px;
  }
  th:first-child {
    a {
      text-decoration: none;
      color: #fff !important;
    }
    @media (max-width: 767px) {
      white-space: nowrap;
      font-size: 12px;
      line-height: 16px;
      padding-left: 24px;
    }
  }
`;

export const StyledTableBody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
  font-size: 14px;
`;

export const StyledLinkTh = styled.th`
  font-size: 14px;

  @media (max-width: 767px) {
    white-space: nowrap;
    font-size: 12px;
    line-height: 16px;
    padding-left: 24px;
  }
`;
