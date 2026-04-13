import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import SecurityPage from '../pages/SecurityPage';
import CommunicationPage from '../pages/CommunicationPage';
import CommonAreasPage from '../pages/CommonAreasPage';
import RequestsPage from '../pages/RequestsPage';
import MailPage from '../pages/MailPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/communication" element={<CommunicationPage />} />
        <Route path="/common-areas" element={<CommonAreasPage />} />
        <Route path="/requests" element={<RequestsPage />} />
        <Route path="/mail" element={<MailPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
