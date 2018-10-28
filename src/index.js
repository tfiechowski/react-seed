import 'regenerator-runtime/runtime';

import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Page from 'page';

import { ColorsProvider } from 'contexts';

render(
  <BrowserRouter>
    <ColorsProvider>
      <Page />
    </ColorsProvider>
  </BrowserRouter>,
  window.document.getElementById('root'),
);
