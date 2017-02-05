/**
*
* NavCategory
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
ul {
  width: 100%; height: 33px;
  display: flex;
  flex-direction: row;
  min-width: 1450px;
  padding: 0;
  border-bottom: 1px solid #e7e7e7;
  background: #FAFAFA;
  font-size: 12px;

  li {
    height: 31px;
    line-height: 33px;
    padding: 0 11px;
    border-bottom: 2px solid #f900; // probably lacking browser support
    
    p {
      margin: 0;
    }
  }

  li:hover {
    color: #e47911;
    border-bottom: 2px solid #f90;
  }
}
`;

function NavCategory() {
  return (
    <Wrapper>
      <ul>
        <li className="selected"><p>Home & Kitchen</p></li>
        <li><p>Best Sellers</p></li>
        <li><p>Shop by Room</p></li>
        <li><p>Bedding & Bath</p></li>
        <li><p>Home Décor</p></li>
        <li><p>Artwork</p></li>
        <li><p>Storage</p></li>
        <li><p>Vacuums & Floor Care</p></li>
        <li><p>Heating & Cooling</p></li>
        <li><p>Furniture</p></li>
        <li><p>Kitchen & Dining</p></li>
        <li><p>Patio & Garden</p></li>
        <li><p>Appliances</p></li>
        <li><p>Wedding Registry</p></li>
      </ul>
    </Wrapper>
  );
}

NavCategory.propTypes = {

};

export default NavCategory;
