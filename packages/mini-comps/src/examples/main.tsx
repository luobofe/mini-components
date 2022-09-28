import { h, render } from 'preact';
import { Page } from './App';

const root = document.querySelector('#app');

render(<Page />, root as HTMLElement);
