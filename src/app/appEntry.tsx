import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import 'antd/dist/reset.css';
import './index.css';
import { MainPage } from '@/pages/main';

createRoot(document.getElementById('root')!).render(<StrictMode><MainPage/></StrictMode>);
