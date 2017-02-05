/**
*
* DepartmentsDropdown
*
*/

import React from 'react';
import styled from 'styled-components';

import DepartmentList from 'components/DepartmentList';

const Wrapper = styled.div`
#button {
  margin: 5px;
  padding: 0 10px;
  border: 1px solid #4440;
  cursor: pointer;
}

#button:hover {
  border: 1px solid #444;
}

h2 {
  color: white;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  margin: 0;
}

#nav-arrow {
  background-image: url(https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/global-sprite_bluebeacon-32-v1._CB295592523_.png);
  background-position: 0 1000px;
  background-position-x: 0px;
  background-position-y: 1000px;
  background-repeat: repeat-x;
  display: inline-block;
  border-style: solid;
  _border-style: dashed;
  border-width: 4px;
  border-color: transparent;
  border-top: 4px solid #606060;
  border-bottom-width: 0;
  width: 0;
  height: 0;
  font-size: 0;
  line-height: 0;
  margin: 0 0 2px 5px;
  border-top-color: #a7acb2;
}
`;

function DepartmentsDropdown() {
  return (
    <Wrapper>
      <div id="button">
        <h2>Departments</h2><div id="nav-arrow"></div>
        <DepartmentList />
      </div>
    </Wrapper>
  );
}

DepartmentsDropdown.propTypes = {

};

export default DepartmentsDropdown;
