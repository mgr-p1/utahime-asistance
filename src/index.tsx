import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Main from '@/components/main';

const app = document.querySelector('.app') as HTMLDivElement;

const root = createRoot(app);
root.render(<Main />);
