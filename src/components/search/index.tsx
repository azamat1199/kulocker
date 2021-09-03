import React from "react";
import Props from "./types";
import SearchImg from "../../images/Search.png";
import {
  Container,
  SearchInput,
  FlexContainer,
  SearchLogo,
  SearchInputGroup,
} from "./styles";

const Search: React.FC<Props> = ({ isMobile }) => {
  return (
    <Container isMobile={isMobile}>
      <FlexContainer isMobile={isMobile}>
        <SearchInputGroup>
          <SearchInput
            isMobile={isMobile} 
            placeholder="dress or Token name"
          />
          <SearchLogo>
            <img src={SearchImg} alt="search" />
          </SearchLogo>
        </SearchInputGroup>
      </FlexContainer>
    </Container>
  );
};

export default Search;
