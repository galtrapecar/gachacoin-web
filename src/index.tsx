import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './root.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { MetaMaskProvider } from '@metamask/sdk-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <MetaMaskProvider
        sdkOptions={{
          extensionOnly: true,
          dappMetadata: {
            name: 'GachaCoin',
            url: window.location.href,
          },
        }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MetaMaskProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
