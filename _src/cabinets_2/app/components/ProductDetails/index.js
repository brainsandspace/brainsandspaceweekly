/**
*
* ProductDetails
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
margin: 0 18px;

h2 {
  color: #CC6600;
  font-size: medium;
  font-weight: 700;
  margin-bottom: 5px;
}

table.info-table {
  margin-left: 15px;

  td {
    min-width: 200px;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
    padding: 10px;
  }

  td.heading {
    background-color: #f3f3f3
    color: #555;
  }

  td.spec {
    color: #333;
  }
  
}


`;



function ProductDetails({ deets }) {
  return (
    <Wrapper>
      <h2>Product Information</h2>
      <table className="info-table">
        {deets.headings.map((heading, ind) => (
          <tr>
            <td className="heading">{heading}</td>
            <td className="spec">{deets.data[ind]}</td>
          </tr>
        ))}
      </table>
    </Wrapper>
  );
}

ProductDetails.propTypes = {

};

export default ProductDetails;
