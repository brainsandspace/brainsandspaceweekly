import React from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
  background:red;
`;

const App = (props) => {
  return (
    <AppWrapper>
      <div>
        <p>BOOM</p>
      </div>
    </AppWrapper>
  );
}

export default App;
