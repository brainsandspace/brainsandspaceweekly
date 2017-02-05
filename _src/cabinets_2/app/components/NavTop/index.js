/**
*
* NavTop
*
*/

import React from 'react';
import styled from 'styled-components';

import DepartmentsDropdown from 'components/DepartmentsDropdown';
import NavTools from 'components/NavTools';

const Wrapper = styled.nav`
background: #232F3E;
width: 100%;
display: flex;
flex-direction: row;
`;

class NavTop extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <DepartmentsDropdown />
        <NavTools />
      </Wrapper>
    );
  }
}

NavTop.propTypes = {

};

export default NavTop;
