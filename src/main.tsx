import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';

import { AppRouter } from '@/routes/app-router';
import { queryClient } from '@/lib/query-client';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRouter />
        <Toaster richColors position="top-center" closeButton />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
