import './styles.css';
import { renderApp } from './app';

const root = document.querySelector<HTMLDivElement>('#app');

if (!root) {
  throw new Error('找不到應用程式掛載點。');
}

renderApp(root);

