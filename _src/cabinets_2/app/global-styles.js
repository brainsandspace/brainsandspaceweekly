import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
}

  html,body {
    font-family: Arial, sans-serif;
    font-size: 13px;
  }

  body.fontLoaded {
    font-family: 'Open Sans', Arial, sans-serif;
  }

  footer {
    margin: 0;
    padding: 0;
  }

  #app {
    // background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p {
    margin: 0;
  }

.orange-hover:hover {
  color: #e47911;
}

.bold-hover:hover {
  font-weight: bold;
}
`
;
