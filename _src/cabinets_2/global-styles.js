import { injectGlobal } from 'styled-components';

/** global styles, as the name suggests */
// btw this is a tagged template literal in case you are not familiar. I was not the first time I saw it. How could you be.
injectGlobal`
  html,
  body {
    width: 100%; height: 100%;
  }
`;