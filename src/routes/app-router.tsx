import { Navigate, Route, Routes } from 'react-router-dom';

import ServicesPage from '@/components/pages/services-page';
import { AppLayout } from '@/components/templates/app-layout';
import { ROUTE_PATHS } from '@/routes/paths';

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={ROUTE_PATHS.home} element={<Navigate to={ROUTE_PATHS.services} replace />} />
        <Route path={ROUTE_PATHS.services} element={<ServicesPage />} />
        <Route path="*" element={<Navigate to={ROUTE_PATHS.services} replace />} />
      </Route>
    </Routes>
  );
}
