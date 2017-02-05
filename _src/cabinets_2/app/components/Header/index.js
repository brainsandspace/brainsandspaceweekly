/**
*
* Header
*
*/

import React from 'react';
import styled from 'styled-components';

import NavCategory from 'components/NavCategory';
import NavTop from 'components/NavTop';

const Wrapper = styled.header`
display: flex;
flex-direction: column;
width:100%;
overflow: hidden;
`;

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <div className="header">
          <NavTop />
          <div className="top"></div>
          <NavCategory />
        </div>
      </Wrapper>
    );
  }
}

Header.propTypes = {

};

export default Header;
