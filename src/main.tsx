import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import ReactDOM from 'react-dom/client'
import './index.css'

import Router from './routes/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router/>,
)
