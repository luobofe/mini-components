import { h, render } from 'preact';
import { ConfigProvider } from '@src/components';
import { Page } from './App';

const root = document.querySelector('#app');

render(
  <ConfigProvider>
    <Page />
  </ConfigProvider>,
  root as HTMLElement
);
