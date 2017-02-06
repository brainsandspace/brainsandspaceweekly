import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
position: absolute;
background: white;
padding: 10px;
`;

export default function StyledList({ departmentsArr }) {
  return (
    <Wrapper>
      {
        departmentsArr.map((dep) => {
          return (
            <li key={dep.name}>{dep.name}</li>
          );
        })
      }
    </Wrapper>
  );
}
