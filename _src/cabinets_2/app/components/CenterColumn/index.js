/**
*
* CenterColumn
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import StarDropdown from 'components/StarDropdown';

const Wrapper = styled.div`
padding: 10px;

div#pricing {
  display: flex;
  flex-direction: row;

  ul#pricing-labels {
    text-align:right;
    margin-right: 0.5em;
  }
}

h1 { 
  margin: 0;
  font-size: 21px;
  font-weight: normal;
}

hr {
  border-top: #e7e7e7;
}

ul {
  padding: 0;
  list-style: none;
}

.brand {
  color: #0066c0
}
`;


class CenterColumn extends React.Component {
  render() {
    return (
      <Wrapper>
        <p className="brand">{this.props.data.brand}</p>
        <h1>{this.props.member}</h1>
        <StarDropdown />
        <hr />
        <div id="pricing">
          <ul id="pricing-labels">
            <li>List Price:</li>
            <li>Price:</li>
            <li>You Lose:</li>
          </ul>
          <ul id="pricing-values">
            <li>List Price {this.props.data.price}</li>
            <li>Price: Freedom or something</li>
            <li>You Lose: respect of other nations or something</li>
          </ul>
        </div>
      </Wrapper>
    );
  }
}

CenterColumn.propTypes = {
  member: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default CenterColumn;
