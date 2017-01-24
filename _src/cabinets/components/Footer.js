import React, { PropTypes } from 'react';
import FilterLink from '../containers/FilterLink.js';

const Footer = () => (
  <p>
    Show: 
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
);

export default Footer;