import App from "./app/App";
import {createRoot} from 'react-dom/client';

const blocks = document.querySelectorAll('.wp-block-tk-staff-finder');

blocks.forEach(block => createRoot(block).render(<App />))
// same as app.mount('#app') in vue
