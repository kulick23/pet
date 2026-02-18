import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { I18nProvider } from './i18n/I18nProvider';

const container = document.getElementById('root');

if (container) {
  createRoot(container).render(
    <I18nProvider>
      <App />
    </I18nProvider>
  );
}
