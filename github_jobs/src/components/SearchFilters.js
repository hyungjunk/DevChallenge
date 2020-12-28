import React from "react";
import styled from "styled-components";
import { Checkbox, InputLabel, Input, InputAdornment } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import LanguageIcon from "@material-ui/icons/Language";

const SearchFilterStyle = styled.div`
  grid-column: 1 / 3;
  grid-row: 1;
`;

const SearchFilters = () => {
  return (
    <SearchFilterStyle>
      <Checkbox
        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
        checkedIcon={<CheckBoxOutlineBlankIcon fontSize="small" />}
        name="checkedI"
      />
      <label htmlFor="full-time-checkbox">Full time</label>
      <InputLabel htmlFor="input-with-icon-adornment">Location</InputLabel>
      <Input
        id="input-with-icon-adornment"
        placeholder={"City, zip, state or country"}
        startAdornment={
          <InputAdornment position="start">
            <LanguageIcon />
          </InputAdornment>
        }
      />
      <br />
      <input id="location" type="radio" name="location" />
      <label htmlFor="location">New York</label>
      <br />
      <input id="location" type="radio" name="location" />
      <label htmlFor="location">New York</label>
    </SearchFilterStyle>
  );
};

export default SearchFilters;
